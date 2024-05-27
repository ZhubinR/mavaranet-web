export const fetchWithRetry = async (url, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Fetch failed with status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (i < retries - 1) {
                console.warn(`Retrying fetch for ${url} (${i + 1}/${retries})`);
            } else {
                console.error(`Failed to fetch ${url} after ${retries} retries:`, error);
                return null; // Return null to indicate failure
            }
        }
    }
};