export function filterData(searchInput, restraunts) {
    return restraunts.filter((restraunt) =>
      restraunt.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }