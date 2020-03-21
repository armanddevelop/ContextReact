import React, { Component } from "react";
import ThemeContext, { ThemeConsumer } from "../context/ThemaContext";

export class UserInfoForm extends Component {
  state = {
    user: {
      name: "",
      age: 0,
      premium: false,
      email: ""
    },
    editMode: false
  };
  componentDidMount() {
    const _editContext = () => {
      this.context.setNameHeader(this.state.user.name);
      this.context.setPremium(this.state.user.premium);
    };
    this.setState(
      {
        user: {
          name: "Armando Salamanca Ayon",
          age: 33,
          premium: false,
          email: "asalamanca.ayon@gmail.com"
        }
      },
      _editContext
    );
  }

  _handleChange = e => {
    let { user } = this.state;
    let { value, name } = e.target;
    if (name === "premium" && value === "on") {
      value = !user.premium;
    }
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };
  _hanlderChangeMode = e => {
    let { editMode } = this.state;
    editMode = !editMode;
    this.setState({
      editMode
    });
  };
  _handleSubmit = e => {
    e.preventDefault();
    let { user, editMode } = this.state;
    console.log(user);
    this.context.setNameHeader(user.name);
    this.context.setPremium(user.premium);
    editMode = !editMode;
    this.setState({
      editMode
    });
  };

  render() {
    let { name, age, premium, email } = this.state.user;
    let { editMode } = this.state;
    return (
      <ThemeConsumer>
        {value => {
          let { backgroundColor } = value;
          console.log("value desde UserInfoForm", value);
          return (
            <div className="row">
              {editMode ? (
                <form className="col s12" onSubmit={this._handleSubmit}>
                  <div className="row">
                    {/*email input*/}
                    <div className="input-field col s12">
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={this._handleChange}
                      />
                      <label className="active" htmlFor="email">
                        Email
                      </label>
                    </div>
                    {/*Name input*/}
                    <div className="input-field col s12">
                      <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={this._handleChange}
                      />
                      <label className="active" htmlFor="name">
                        Name
                      </label>
                    </div>
                    {/*Age input*/}
                    <div className="input-field col s6">
                      <input
                        name="age"
                        type="number"
                        value={age}
                        onChange={this._handleChange}
                      />
                      <label className="active" htmlFor="age">
                        Age
                      </label>
                    </div>
                    {/*Swicth premium*/}
                    <div className="input-field col s6 switch center">
                      <div
                        className="row"
                        style={{ backgroundColor: "transparent" }}
                      >
                        <div className="col" style={{ margin: 0 }}>
                          <label>
                            <input
                              name="premium"
                              type="checkbox"
                              checked={premium}
                              onChange={this._handleChange}
                            />
                            <span className="lever"></span>
                            {"Premium"}
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*Submit button*/}
                    <div className="input-field col s12">
                      <input
                        style={{ width: "100%", marginTop: 25 }}
                        className={backgroundColor + " btn waves-effect"}
                        type="submit"
                        value="Guardar Cambios"
                      />
                    </div>
                  </div>
                </form>
              ) : (
                <>
                  {/*email */}
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Email: </strong>
                        {email}
                      </p>
                    </div>
                  </div>
                  {/*name*/}
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Nombre: </strong>
                        {name}
                      </p>
                    </div>
                  </div>
                  {/*Age*/}
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Edad: </strong>
                        {age}
                      </p>
                    </div>
                  </div>
                  {/*Premium*/}
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Status: </strong>
                        {premium ? "PREMIUM" : "FREE"}
                      </p>
                    </div>
                  </div>
                  {/*Button*/}
                  <div className="row">
                    <div className="col">
                      <button
                        className={
                          backgroundColor + " btn btn-small waves-effect left"
                        }
                        onClick={this._hanlderChangeMode}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        }}
      </ThemeConsumer>
    );
  }
}
UserInfoForm.contextType = ThemeContext;
export default UserInfoForm;
