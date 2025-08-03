const backend_url = import.meta.env.VITE_BACKEND_URL;

const deleteArchive = async (archiveId, archiveTitle) => {
  if (!window.confirm(`Are you sure you want to delete "${archiveTitle}"?`)) {
    return false;
  }

  try {
    const response = await fetch(backend_url + `/api/archive/${archiveId}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Archive deleted successfully");
      return true;
    } else {
      toast.error(result.error || "Failed to delete archive");
      return false;
    }
  } catch (error) {
    console.error("Error deleting archive:", error);
    toast.error("Failed to delete archive");
    return false;
  }
};

export default deleteArchive;
