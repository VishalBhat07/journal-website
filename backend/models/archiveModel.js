import mongoose from "mongoose";

const archiveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    cloudStorageUrl: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],

    archiveDate: {
      type: Date,
      default: Date.now,
    },

    publishedDate: {
      type: Date, // For published papers/documents
    },

    // Search and indexing
    searchKeywords: [
      {
        type: String,
        lowercase: true,
      },
    ],

    viewCount: {
      type: Number,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Archive = mongoose.model("Archive", archiveSchema);

export { Archive };
