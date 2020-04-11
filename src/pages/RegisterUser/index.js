import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { general } from '../../../assets/general'

import{
  Container,
  RequiredInfo,
  RequiredInfoHalf,
  Label,
  Input,
  Button,
  ButtonText,
  DoubleContainer
} from './styles'

import { withFormik } from 'formik';
import * as yup from 'yup';

import { Ionicons } from '@expo/vector-icons';

const RegisterUser = props => {
  const [errors, setErrors] = useState([])

  handleSubmit = props => {
    console.log(props.values);
  }

  return(
    <Container>
      <Label>
        {}
      </Label>
      <RequiredInfo>
        <Label>{general.strings.FULL_NAME}</Label>
        <Input 
          value={props.values.fullName}
          onChangeText={text => props.setFieldValue('fullName', text)}
          placeholder={general.strings.PLACEHOLDER_FULL_NAME}
          autoCapitalize={'words'}
        />
      </RequiredInfo>
  
      <DoubleContainer>
        <RequiredInfoHalf>
          <Label>{general.strings.CPF}</Label>
          <Input
            value={props.values.cpf}
            onChangeText={text => props.setFieldValue('cpf', text.replace(/\D/g,''))}
            placeholder={general.strings.PLACEHOLDER_CPF}
            maxLength={11}
            keyboardType={'numeric'}
          />
        </RequiredInfoHalf>
        <RequiredInfoHalf>
          <Label>{general.strings.PHONE_NUMBER}</Label>
          <Input
            value={props.values.phone}
            onChangeText={text => props.setFieldValue('phone', text.replace(/\D/g,''))}
            placeholder={general.strings.PLACEHOLDER_PHONE}
            maxLength={11}
            keyboardType={'numeric'}
          />
        </RequiredInfoHalf>
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
        <RequiredInfoHalf>
          <Label>{general.strings.PASSWORD}</Label>
          <Input
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
            placeholder={general.strings.PLACEHOLDER_PASSWORD}
            secureTextEntry
          />
        </RequiredInfoHalf>
        <RequiredInfoHalf>
          <Label>{general.strings.PASSWORD_CONFIRMATION}</Label>
          <Input        
            value={props.values.passwordConfirmation}
            onChangeText={text => props.setFieldValue('passwordConfirmation', text)}
            placeholder={general.strings.PLACEHOLDER_PASSWORD}
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
      .email('JM, teu email ta invalido parceiro.')
      .required('Preencha o campo de e-mail.'),
    password: yup.string()
      .min(8)
      .required('Preencha o campo de senha.'),
    passwordConfirmation: yup.string()
      .test('password-match', 'As senhas devem ser idênticas.', function(value){ return this.parent.password === value})
      .required('Preencha o campo de confirmação de senha.'),
    fullName: yup.string()
      .required('Preencha o campo de nome completo.'),
    phone: yup.string()
      .min(11, "Seu número de telefone é invalido, digite um de 11 dígitos.")
      .required('Prencha o campo de telefone.'),
    cpf: yup.string()
      .min(11, "Seu CPF é invalido, digite um de 11 dígitos.")
      .required('Preencha o campo de CPF.'),
  }),
})(RegisterUser);