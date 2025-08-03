const backend_url = import.meta.env.VITE_BACKEND_URL;

const updateArchive = async (archiveId, data) => {
  try {
    const token = await getToken();

    if (!token) {
      toast.error("Authentication Error");
      return false;
    }

    const payload = {
      title: data.title,
      tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
      publishedDate: data.publishedDate?.toISOString(),
    };

    const response = await fetch(backend_url + `/api/archive/${archiveId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Archive updated successfully");
      return true;
    } else {
      toast.error(result.error || "Failed to update archive");
      return false;
    }
  } catch (error) {
    console.error("Error updating archive:", error);
    toast.error("Failed to update archive");
    return false;
  }
};

export default updateArchive;
