export async function getColors(matchId) {
  try {
    const response = await fetch(
      `https://cdn-eu.seatsio.net/system/public/3d443a0c-83b8-4a11-8c57-3db9d116ef76/rendering-info?event_key=${matchId}`
    );

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    const filteredCategories = data.categories.filter(
      (category) =>
        category.label === "CAT 1" ||
        category.label === "CAT 2" ||
        category.label === "CAT 3"
    );

    // Log the fetched data
    return filteredCategories;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
