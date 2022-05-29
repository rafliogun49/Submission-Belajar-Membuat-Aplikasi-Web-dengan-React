import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onSearch = this.onSearch.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSearch(event) {
    this.setState({search: event.target.value});
  }
  onSubmitSearch(search) {
    this.props.searchNotes(search);
  }

  render() {
    return (
      <nav className="flex">
        <input
          type="text"
          placeholder="search catatan"
          className="search"
          value={this.state.search}
          onChange={this.onSearch}
        />
        <button
          onClick={() => this.onSubmitSearch(this.state.search)}
          style={{border: "none", background: "#fff", fontWeight: "bold", color: "#562bf7"}}
        >
          Search
        </button>
      </nav>
    );
  }
}

export default SearchBar;
