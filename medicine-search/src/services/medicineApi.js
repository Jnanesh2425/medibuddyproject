const BASE_URL = "https://api.fda.gov/drug/label.json";

export async function searchMedicines(query, signal) {
  const url = `${BASE_URL}?search=openfda.brand_name:"${encodeURIComponent(
    query
  )}"&limit=20`;

  const response = await fetch(url, { signal });

  if (response.status === 404) {
    return [];
  }

  if (!response.ok) {
    throw new Error("Failed to fetch medicines");
  }

  const data = await response.json();

  return data.results || [];
}