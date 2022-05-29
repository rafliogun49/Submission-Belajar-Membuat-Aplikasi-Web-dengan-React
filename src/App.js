import React from "react";
import InputForm from "./component/InputForm";
import SearchBar from "./component/SearchBar";
import NotesCategory from "./component/NotesCategory";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: data,
      search: "",
    };

    this.onDeleteNotes = this.onDeleteNotes.bind(this);
    this.onAddNotes = this.onAddNotes.bind(this);
    this.onArchivedNotes = this.onArchivedNotes.bind(this);
    this.onSearchNotes = this.onSearchNotes.bind(this);
  }

  onDeleteNotes(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({notes});
  }

  onArchivedNotes(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? {...note, archived: !note.archived} : note
    );
    this.setState({notes});
  }

  onAddNotes({title, body}) {
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchNotes(search) {
    this.setState((prev) => {
      return {
        ...prev,
        search: search,
      };
    });
  }

  render() {
    return (
      <>
        <SearchBar searchNotes={this.onSearchNotes} />
        <InputForm addNotes={this.onAddNotes} />
        <NotesCategory
          notes={
            this.state.search
              ? this.state.notes.filter((note) =>
                  note.title.toLowerCase().includes(this.state.search.toLowerCase())
                )
              : this.state.notes
          }
          onDelete={this.onDeleteNotes}
          onArchived={this.onArchivedNotes}
        />
        <NotesCategory
          notes={
            this.state.search
              ? this.state.notes.filter((note) =>
                  note.title.toLowerCase().includes(this.state.search.toLowerCase())
                )
              : this.state.notes
          }
          onDelete={this.onDeleteNotes}
          type="archive"
          onArchived={this.onArchivedNotes}
        />
      </>
    );
  }
}

export default App;
