const backend_url = import.meta.env.VITE_BACKEND_URL;

const fetchArchives = async () => {
  try {
    const response = await fetch(backend_url + "/api/archive/fetch");
    const result = await response.json();

    if (result.success) {
      return { success: true, data: result.data.archives || [] };
    } else {
      toast.error("Failed to fetch archives");
      return { success: false, data: [] };
    }
  } catch (error) {
    console.error("Error fetching archives:", error);
    toast("Failed to fetch archives");
    return { success: false, data: [] };
  }
};

export default fetchArchives;
