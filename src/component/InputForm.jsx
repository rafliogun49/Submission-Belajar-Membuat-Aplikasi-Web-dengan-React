import React from "react";
import CustomButton from "./CustomButton";
import InputTextArea from "./InputTextArea";
import InputTitle from "./InputTitle";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onTitleChange(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }
  onBodyChange(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (this.state.title.length > 50) {
      alert("Title jangan lebih dari 50 karakter");
    } else if (this.state.title.length === 0) {
      alert("Judul jangan dikosongkan");
    } else {
      this.props.addNotes(this.state);
      this.setState({
        title: "",
        body: "",
      });
    }
  }
  render() {
    return (
      <div className="flex center input-container">
        <div className="input-form">
          <h1 style={{textAlign: "center"}}>Buat catatan</h1>
          <form className="flex column form" onSubmit={this.onSubmitHandler}>
            <InputTitle value={this.state.title} change={this.onTitleChange} />
            <InputTextArea value={this.state.body} change={this.onBodyChange} />
            <CustomButton type="buat" />
          </form>
        </div>
      </div>
    );
  }
}

export default InputForm;
