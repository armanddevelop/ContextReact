import React, { Component } from "react";

//set the context
const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends Component {
  state = {
    backgroundColor: "blue",
    userName: "",
    premium: false
  };
  _changeBackGroundColor = color => {
    this.setState({
      backgroundColor: color
    });
  };
  _setNameHeader = name => {
    console.log("valor de name desde ThemaContext", name);
    this.setState({
      userName: name
    });
  };
  _setPremium = premium => {
    console.log("valor de premium desde ThemaContext", premium);
    this.setState({
      premium
    });
  };
  render() {
    let { backgroundColor, userName, premium } = this.state;
    let { children } = this.props;
    return (
      <ThemeContext.Provider
        value={{
          backgroundColor,
          userName,
          premium,
          changeBackGroundColor: this._changeBackGroundColor,
          setNameHeader: this._setNameHeader,
          setPremium: this._setPremium
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContext;
