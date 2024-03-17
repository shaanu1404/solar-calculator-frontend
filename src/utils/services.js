const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || process.env.VITE_BACKEND_URL;

const baseUrl = `${BACKEND_URL}/api/v1/calculate`;

export const getCalculatedDetails = async (data) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const details = await response.json();
  if (!response.ok) {
    if ("error" in details) throw new Error(details.error);
    else throw new Error("Failed to fetch details");
  }
  return details;
};
