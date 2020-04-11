import React from 'react'
import { TouchableOpacity } from 'react-native';
import { general } from '../../../assets/general'

import{
  Container,
  RequiredInfo,
  Label,
  Input,
  Button,
  ButtonText,
  DoubleContainer
} from './styles'

import { withFormik } from 'formik';

import { Ionicons } from '@expo/vector-icons';

  const RegisterUser = props => (
    <Container>
      <RequiredInfo>
        <Label>{general.strings.FULL_NAME}</Label>
        <Input
          value={props.values.fullName}
          onChangeText={text => props.setFieldValue('fullName', text)}
          placeholder={general.strings.PLACEHOLDER_FULL_NAME}
        />
      </RequiredInfo>

      <DoubleContainer>
        <RequiredInfo>
          <Label>{general.strings.CPF}</Label>
          <Input
            value={props.values.cpf}
            onChangeText={text => props.setFieldValue('cpf', text)}
            placeholder={general.strings.PLACEHOLDER_CPF}
          />
        </RequiredInfo>
        <RequiredInfo>
          <Label>{general.strings.PHONE_NUMBER}</Label>
          <Input
            value={props.values.phone}
            onChangeText={text => props.setFieldValue('phone', text)}
            placeholder={general.strings.PLACEHOLDER_PHONE}
          />
        </RequiredInfo>
      </DoubleContainer>

      <RequiredInfo>
        <Label>{general.strings.EMAIL}</Label>
        <Input
          value={props.values.email}
          onChangeText={text => props.setFieldValue('email', text)}
          placeholder={general.strings.PLACEHOLDER_EMAIL}
        />
      </RequiredInfo>

      <DoubleContainer>
        <RequiredInfo>
          <Label>{general.strings.PASSWORD}</Label>
          <Input
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
            placeholder={general.strings.PLACEHOLDER_PASSWORD}
            secureTextEntry
          />
        </RequiredInfo>
        <RequiredInfo>
          <Label>{general.strings.PASSWORD_CONFIRMATION}</Label>
          <Input
            value={props.values.passwordConfirmation}
            onChangeText={text => props.setFieldValue('passwordConfirmation', text)}
            placeholder={general.strings.PLACEHOLDER_PASSWORD}
            secureTextEntry
          />
        </RequiredInfo>
      </DoubleContainer>

      <Button
        onPress={props.handleSubmit}
        title="Submit"
      >
        <ButtonText>
          {general.strings.FINISH_SIGN_UP.toUpperCase()}
        </ButtonText>
      </Button>
    </Container>
  );

RegisterUser.navigationOptions = ({ navigation }) => {
  return {
    title: `${general.strings.CREATE_ACCOUNT}`,
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={{ marginRight: 20 }} >
        <Ionicons 
          name="md-arrow-back" 
          size={32} 
          color={general.styles.colors.white}
        />
      </TouchableOpacity>
    ),   
  }
}

export default withFormik({
  mapPropsToValues: () => ({ 
    fullName: '',
    cpf: '',
    phone: '',
    email: '', 
    password: '',
    passwordConfirmation: '' }),

  handleSubmit: (values) => {
    console.log(values);
  }
})(RegisterUser);