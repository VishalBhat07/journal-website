const backend_url = import.meta.env.VITE_BACKEND_URL;

const addArchive = async (data) => {
  try {
    const payload = {
      title: data.title,
      cloudStorageUrl: data.cloudStorageUrl,
      tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
      publishedDate: data.publishedDate?.toISOString(),
      searchKeywords: data.title.toLowerCase().split(" "),
    };

    const response = await fetch(backend_url + "/api/archive/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      toas.success("Archive added successfully");
      return true;
    } else {
      toast.error(result.error || "Failed to add archive");
      return false;
    }
  } catch (error) {
    console.error("Error adding archive:", error);
    toast.error("Failed to add archive");
    return false;
  }
};

export default addArchive;
