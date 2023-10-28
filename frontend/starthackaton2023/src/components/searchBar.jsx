function SearchBar() {
  return (
    <div className="search-container">
      <form action="/search" method="get">
        <input type="text" name="q" placeholder="Search..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;