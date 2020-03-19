import React from "react";
import Header from "./components/Header";
import UserInfoForm from "./components/UserInfoForm";

function App() {
  return (
    <div className="App">
      <Header title={"Context Practice"}></Header>
      <div className="container center">
        <div className="card">
          <div className="card-content">
            <h5>Informacion del usuario</h5>
            <UserInfoForm></UserInfoForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
