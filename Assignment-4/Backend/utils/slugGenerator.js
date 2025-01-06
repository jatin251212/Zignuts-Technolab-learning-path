export const generateSlug = (title, maxWords = 7) => {
    return title
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s]/g, "") // Remove special characters
      .split(" ") // Split into words
      .slice(0, maxWords) // Take the first 'maxWords' words
      .join("-"); // Join with hyphens
  };
  