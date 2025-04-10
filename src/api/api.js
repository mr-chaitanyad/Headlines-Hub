const API_KEY = '1490e7fa578740dda5f0e1359e153358';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

/**
 * Fetches news articles based on category type.
 * @param {string} category - The news category (e.g., business, sports).
 */
export async function fetchArticles(category) {
  const url = `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const result = await response.json();
  return result.articles || [];
}

