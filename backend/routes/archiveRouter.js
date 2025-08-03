import express from "express";
import { Archive } from "../models/archiveModel.js";

const archiveRouter = express.Router();

archiveRouter.get("/fetch", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      tags,
      sortBy = "archiveDate",
      sortOrder = "desc",
    } = req.query;

    // Build query object
    const query = {};

    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { searchKeywords: { $in: [new RegExp(search, "i")] } },
      ];
    }

    // Tag filtering
    if (tags) {
      const tagArray = Array.isArray(tags) ? tags : tags.split(",");
      query.tags = { $in: tagArray };
    }

    // Sort options
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    // Execute query with pagination
    const archives = await Archive.find(query)
      .sort(sortOptions)
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .lean(); // Use lean() for better performance when just reading

    // Get total count for pagination
    const totalCount = await Archive.countDocuments(query);
    const totalPages = Math.ceil(totalCount / parseInt(limit));

    res.json({
      success: true,
      message: "Successfully fetched all the files",
      data: {
        archives,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalCount,
          hasNextPage: parseInt(page) < totalPages,
          hasPrevPage: parseInt(page) > 1,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching archives:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch archives",
      message: error.message,
    });
  }
});

archiveRouter.post("/add", async (req, res) => {
  try {
    const {
      title,
      cloudStorageUrl,
      tags = [],
      publishedDate,
      searchKeywords = [],
    } = req.body;

    if (!title || !cloudStorageUrl) {
      return res.status(400).json({
        success: false,
        error: "Title and cloudStorageUrl are required",
      });
    }

    const generatedKeywords = [
      ...title.toLowerCase().split(" "),
      ...tags.map((tag) => tag.toLowerCase()),
      ...searchKeywords.map((keyword) => keyword.toLowerCase()),
    ].filter((keyword) => keyword.length > 0);

    const newArchive = new Archive({
      title: title.trim(),
      cloudStorageUrl,
      tags: tags.map((tag) => tag.toLowerCase().trim()),
      publishedDate: publishedDate ? new Date(publishedDate) : undefined,
      searchKeywords: [...new Set(generatedKeywords)], // Remove duplicates
      viewCount: 0,
    });

    const savedArchive = await newArchive.save();

    res.status(201).json({
      success: true,
      message: "Upload successful",
      data: savedArchive,
    });
  } catch (error) {
    console.error("Error adding archive:", error);
    res.status(500).json({
      success: false,
      error: "Failed to add archive",
      message: error.message,
    });
  }
  res.send("Upload successfull");
});

archiveRouter.patch("/:id", async (req, res) => {
  try {
    const archiveId = req.params.id;

    const existingArchive = await Archive.findById(archiveId);
    if (!existingArchive) {
      return res.status(404).json({
        success: false,
        error: "Archive not found",
      });
    }

    const { title, tags, publishedDate, searchKeywords } = req.body;

    const updateData = {
      updatedAt: new Date(),
    };

    if (title) {
      updateData.title = title.trim();
    }

    if (tags) {
      updateData.tags = tags.map((tag) => tag.toLowerCase().trim());
    }

    if (publishedDate !== undefined) {
      updateData.publishedDate = publishedDate
        ? new Date(publishedDate)
        : undefined;
    }

    if (searchKeywords || title || tags) {
      const newTitle = title || existingArchive.title;
      const newTags = tags || existingArchive.tags;
      const newSearchKeywords =
        searchKeywords || existingArchive.searchKeywords;

      const generatedKeywords = [
        ...newTitle.toLowerCase().split(" "),
        ...newTags.map((tag) => tag.toLowerCase()),
        ...newSearchKeywords.map((keyword) => keyword.toLowerCase()),
      ].filter((keyword) => keyword.length > 0);

      updateData.searchKeywords = [...new Set(generatedKeywords)];
    }

    const updatedArchive = await Archive.findByIdAndUpdate(
      archiveId,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: "Archive updated successfully",
      data: updatedArchive,
    });
  } catch (error) {
    console.error("Error updating archive:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        error: "Invalid archive ID format",
      });
    }

    res.status(500).json({
      success: false,
      error: "Failed to update archive",
      message: error.message,
    });
  }
});

export default archiveRouter;
