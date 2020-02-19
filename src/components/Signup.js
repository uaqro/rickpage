import React, { useState } from "react";
import { DisplayWrapper, StyledForm, SignUpPage } from "./styles/index";
import Swal from "sweetalert2";
const Singup = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleInput = evt => {
    const key = evt.target.name;
    setUserRegister({ ...userRegister, [key]: evt.target.value });
  };
  const shoot = e => {
    e.preventDefault();
    Swal.fire(
      `Thanks ${userRegister.name}!
    Your account was successfully registered.`,
      "",
      "success"
    );
  };
  return (
    <DisplayWrapper>
      <SignUpPage>
        <h1>SIGN UP</h1>
        <StyledForm onSubmit={e => shoot(e)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={evt => handleInput(evt)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={evt => handleInput(evt)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={evt => handleInput(evt)}
          />
          <button type="submit">Create</button>
        </StyledForm>
      </SignUpPage>
    </DisplayWrapper>
  );
};

export default Singup;
