import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { general } from '../../../assets/general'

import{
  Container,
  RequiredInfo,
  RequiredInfoHalf,
  Label,
  Input,
  ErrorText,
  Button,
  ButtonText,
  DoubleContainer
} from './styles'

import { withFormik } from 'formik';
import * as yup from 'yup';

import { Ionicons } from '@expo/vector-icons';


const RegisterUser = props => {

  const [errors, setErrors] = useState([]);

  handleSubmit = props => {
    console.log(props.values);
    setErrors(props.errors);
  }

  return(
    <Container>
      <RequiredInfo>
        <Label>{general.strings.FULL_NAME}</Label> 
        <ErrorText>{errors.fullName}</ErrorText>
        <Input 
          value={props.values.fullName}
          onChangeText={text => props.setFieldValue('fullName', text)}
          placeholder={general.strings.PLACEHOLDER.FULL_NAME}
          autoCapitalize={'words'}
        />
      </RequiredInfo>
  
      <DoubleContainer>
        <RequiredInfoHalf>
          <Label>{general.strings.CPF}</Label>
          <ErrorText>{errors.cpf}</ErrorText>
          <Input
            value={props.values.cpf}
            onChangeText={text => props.setFieldValue('cpf', text.replace(/\D/g,''))}
            placeholder={general.strings.PLACEHOLDER.CPF}
            maxLength={11}
            keyboardType={'numeric'}
          />
        </RequiredInfoHalf>
        <RequiredInfoHalf>
          <Label>{general.strings.PHONE_NUMBER}</Label>
          <ErrorText>{errors.phone}</ErrorText>
          <Input
            value={props.values.phone}
            onChangeText={text => props.setFieldValue('phone', text.replace(/\D/g,''))}
            placeholder={general.strings.PLACEHOLDER.PHONE}
            maxLength={11}
            keyboardType={'numeric'}
          />
        </RequiredInfoHalf>
      </DoubleContainer>
  
      <RequiredInfo>
        <Label>{general.strings.EMAIL}</Label>
        <ErrorText>{errors.email}</ErrorText>
        <Input 
          value={props.values.email}
          onChangeText={text => props.setFieldValue('email', text)}
          placeholder={general.strings.PLACEHOLDER.EMAIL}
          autoCapitalize={'none'}
        />
      </RequiredInfo>
  
      <DoubleContainer>
        <RequiredInfoHalf>
          <Label>{general.strings.PASSWORD}</Label>
          <ErrorText>{errors.password}</ErrorText>
          <Input
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
            placeholder={general.strings.PLACEHOLDER.PASSWORD}
            secureTextEntry
          />
        </RequiredInfoHalf>
        <RequiredInfoHalf>
          <Label>{general.strings.PASSWORD_CONFIRMATION}</Label>
          <ErrorText>{errors.passwordConfirmation}</ErrorText>
          <Input        
            value={props.values.passwordConfirmation}
            onChangeText={text => props.setFieldValue('passwordConfirmation', text)}
            placeholder={general.strings.PLACEHOLDER.PASSWORD}
            secureTextEntry
          />
        </RequiredInfoHalf>
      </DoubleContainer>
  
      <Button
        // onPress={() => {handleSubmit(props), console.warn(props.errors)}}
        onPress={() => {handleSubmit(props)}}
      >
        <ButtonText>
          {general.strings.FINISH_SIGN_UP.toUpperCase()}
        </ButtonText>
      </Button>
    </Container>
  );
}

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

  validationSchema: yup.object().shape({
    email: yup.string()
      .email(general.strings.ERRORS.EMAIL)
      .required(general.strings.ERRORS.EMAIL_REQUIRED),
    password: yup.string()
      .min(8, general.strings.ERRORS.PASSWORD_MINIMUM)
      .required(general.strings.ERRORS.PASSWORD_REQUIRED),
    passwordConfirmation: yup.string()
      .test('password-match', general.strings.ERRORS.PASSWORD_MATCH, function(value){ return this.parent.password === value})
      .required(general.strings.ERRORS.PASSWORD_MATCH),
    fullName: yup.string()
      .required(general.strings.ERRORS.FULL_NAME_REQUIRED),
    phone: yup.string()
      .min(11, general.strings.ERRORS.PHONE_MINIMUM)
      .required(general.strings.ERRORS.PHONE_REQUIRED),
    cpf: yup.string()
      .min(11, general.strings.ERRORS.CPF_MINIMUM)
      .required(general.strings.ERRORS.CPF_REQUIRED),
  }),
})(RegisterUser);