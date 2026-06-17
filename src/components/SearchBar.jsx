function SearchBar() {
  return (
    <div className="input-group mb-4">
      <input type="text" className="form-control" placeholder="Search destinations..." />
      <button className="btn btn-primary" type="button">Search</button>
    </div>
  );
}

export default SearchBar;
