function SearchBar(props) {
  return (
<div class="form-outline">
  <input type="search" id="form1" class="form-control" placeholder={props.placeholder} aria-label="Search" />
</div>
  );
}

export default SearchBar;