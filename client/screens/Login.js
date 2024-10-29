import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Wrapper,
  Container,
  PageLogo,
  Title,
  SubTitle,
  FormArea,
  Tekst,
  Button,
} from "../components/styles";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState({});

  // const checkEmail = async (email) => {
  //   return Promise.resolve(false);
  // };

  // const checkPassword = async (password) => {
  //   return Promise.resolve(false);
  // };

  // const validateEmail = async (email) => {
  //   if (!email) return "Email required";

  //   const emailExits = await checkEmail(email);
  //   if (emailExits) return "Email already exits";
  //   return null;
  // };

  // const validatePassword = async (password) => {
  //   if (!password) return "Password required";

  //   const passwordExits = await checkPassword(password);
  //   if (passwordExits) return "Password already Exits";
  //   return null;
  // };

  // const validate = async () => {
  //   const error = {};
  //   const emailError = await validateEmail(email);
  //   const passwordError = await validatePassword(password);

  //   if (emailError) error.email = emailError;
  //   if (passwordError) error.password = passwordError;

  //   return error;
  // };

  // const handleSubmit = async () => {
  //   const validationError = await validate();
  //   if (Object.keys(validationError).length === 0) {
  //   } else {
  //     setErrors(validationError);
  //   }
  // };

  return (
    <>
      <Wrapper>
        {/* <StatusBar style="brun" /> */}
        <Container>
          <PageLogo />
          <Title>Clarity</Title>
          <SubTitle>Login</SubTitle>
          {/* <FormArea>
            <Tekst value={email} onChangeText={setEmail} placeholder="Email" />

            <Tekst
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
            />

            <Button title="Login" onPress={handleSubmit} />
          </FormArea> */}
        </Container>
      </Wrapper>
    </>
  );
}
