import React from "react";
import InputWithLabel from "./InputWithLabel";
import TextareaWithLabel from "./TextareaWithLabel";
import SelectWithLabel from "./SelectWithLabel";

const catOptions = ["Link", "Zelda", "Mipha", "Rodrigo", "Pepe"];

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Carol",
      description: "Add your description",
      cats: catOptions[2],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputWithLabel
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <TextareaWithLabel
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <SelectWithLabel
          name="cats"
          value={this.state.cats}
          onChange={this.handleChange}
          options={catOptions}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
