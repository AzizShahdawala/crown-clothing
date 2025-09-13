import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";

import "./sign-in-form.style.scss";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGooglePopup = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
    const { user } = response;
    const userResponse = await createUserDocumentFromAuth(user);
    console.log(userResponse);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);

      resetFormFields();
    } catch (e) {
      console.log(e);
      if (e.code === "auth/invalid-credential") {
        alert("Incorrect Email or Password entered");
      } else {
        alert(e.code);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account?</h2>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          minLength={6}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type='button' buttonType="google" onClick={signInWithGooglePopup}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
