export const getPaginatedArray = (arr = [], itemsPerPage = 10, currentPage = 1) => {
  const offset = (currentPage - 1) * itemsPerPage;
  const paginatedItems = arr.slice(offset, offset + itemsPerPage);

  return paginatedItems;
};
