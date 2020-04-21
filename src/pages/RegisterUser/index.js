import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { general } from "../../../assets/general";

import api from "../../services/api";

import {
  Container,
  RequiredInfo,
  RequiredInfoHalf,
  Label,
  Input,
  ErrorText,
  Button,
  ButtonText,
  DoubleContainer,
} from "./styles";

import { withFormik } from "formik";
import * as yup from "yup";

import { Ionicons } from "@expo/vector-icons";

const RegisterUser = (props) => {
  async function handleSubmit(props) {
    console.log("Values", props.values);
    console.log("Errors", props.errors);
    try {
      await api
        .post("/api/v1/register", JSON.stringify(props.values))
        .then(() => props.navigation.navigate("Auth"));
    } catch (e) {
      console.log("Erro:", e);
    }
  }

  return (
    <Container>
      <RequiredInfo>
        <Label>{general.strings.FULL_NAME}</Label>
        <ErrorText>{props.errors.name}</ErrorText>
        <Input
          value={props.values.name}
          onChangeText={(text) =>
            props.setFieldValue(
              "name",
              text.replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s]+/g, "")
            )
          }
          placeholder={general.strings.PLACEHOLDER.FULL_NAME}
          autoCapitalize={"words"}
        />
      </RequiredInfo>

      <DoubleContainer>
        <RequiredInfoHalf>
          <Label>{general.strings.CPF}</Label>
          <ErrorText>{props.errors.cpf}</ErrorText>
          <Input
            value={props.values.cpf}
            onChangeText={(text) =>
              props.setFieldValue("cpf", text.replace(/\D/g, ""))
            }
            placeholder={general.strings.PLACEHOLDER.CPF}
            maxLength={11}
            keyboardType={"numeric"}
          />
        </RequiredInfoHalf>
        <RequiredInfoHalf>
          <Label>{general.strings.PHONE_NUMBER}</Label>
          <ErrorText>{props.errors.phone}</ErrorText>
          <Input
            value={props.values.phone}
            onChangeText={(text) =>
              props.setFieldValue("phone", text.replace(/\D/g, ""))
            }
            placeholder={general.strings.PLACEHOLDER.PHONE}
            maxLength={11}
            keyboardType={"numeric"}
          />
        </RequiredInfoHalf>
      </DoubleContainer>

      <RequiredInfo>
        <Label>{general.strings.EMAIL}</Label>
        <ErrorText>{props.errors.email}</ErrorText>
        <Input
          value={props.values.email}
          onChangeText={(text) =>
            props.setFieldValue("email", text.replace(/\s+/g, ""))
          }
          placeholder={general.strings.PLACEHOLDER.EMAIL}
          autoCapitalize={"none"}
        />
      </RequiredInfo>

      <DoubleContainer>
        <RequiredInfoHalf>
          <Label>{general.strings.PASSWORD}</Label>
          <ErrorText>{props.errors.password}</ErrorText>
          <Input
            value={props.values.password}
            onChangeText={(text) => props.setFieldValue("password", text)}
            placeholder={general.strings.PLACEHOLDER.PASSWORD}
            secureTextEntry
          />
        </RequiredInfoHalf>
        <RequiredInfoHalf>
          <Label>{general.strings.PASSWORD_CONFIRMATION}</Label>
          <ErrorText>{props.errors.passwordConfirmation}</ErrorText>
          <Input
            value={props.values.passwordConfirmation}
            onChangeText={(text) =>
              props.setFieldValue("passwordConfirmation", text)
            }
            placeholder={general.strings.PLACEHOLDER.PASSWORD}
            secureTextEntry
          />
        </RequiredInfoHalf>
      </DoubleContainer>

      <Button
        // onPress={() => {handleSubmit(props), console.warn(props.errors)}}
        onPress={() => {
          JSON.stringify(props.errors) === "{}" && props.values.name !== ""
            ? handleSubmit(props)
            : null;
        }}
      >
        <ButtonText>
          {props.values.cpf === "" ||
          props.values.email === "" ||
          props.values.name === "" ||
          props.values.password === "" ||
          props.values.passwordConfirmation !== props.values.password ||
          props.values.phone === ""
            ? general.strings.FILL_SIGN_UP.toUpperCase()
            : general.strings.FINISH_SIGN_UP.toUpperCase()}
        </ButtonText>
      </Button>
    </Container>
  );
};

RegisterUser.navigationOptions = ({ navigation }) => {
  return {
    title: `${general.strings.CREATE_ACCOUNT}`,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Auth")}
        style={{ marginLeft: 20 }}
      >
        <Ionicons
          name="md-arrow-back"
          size={32}
          color={general.styles.colors.white}
        />
      </TouchableOpacity>
    ),
  };
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    cpf: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  }),

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email(general.strings.ERRORS.INVALID_EMAIL)
      .required(" "),
    password: yup
      .string()
      .min(8, general.strings.ERRORS.PASSWORD_MINIMUM)
      .required(" "),
    passwordConfirmation: yup
      .string()
      .test("password-match", general.strings.ERRORS.PASSWORD_MATCH, function (
        value
      ) {
        return this.parent.password === value;
      })
      .required(" "),
    name: yup.string().required(" "),
    phone: yup
      .string()
      .min(11, general.strings.ERRORS.PHONE_MINIMUM)
      .required(" "),
    cpf: yup.string().min(11, general.strings.ERRORS.CPF_MINIMUM).required(" "),
  }),
})(RegisterUser);
