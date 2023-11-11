export const FetchingData = async (resource) => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}`
  );
  return results.json();
};
