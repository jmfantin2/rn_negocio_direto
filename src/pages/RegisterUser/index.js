import React, { useState } from 'react'
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { general } from '../../../assets/general'

import{
  LabelContainer,
  Label,
  Notice,
  Input,
  Button,
  ButtonText
} from './styles'

import { withFormik } from 'formik';

import { Ionicons } from '@expo/vector-icons';

  const RegisterUser = props => (
    <View>
      <LabelContainer>
        <Label>{general.strings.FULL_NAME}</Label>
        <Notice>{general.strings.INVALID_FULL_NAME}</Notice>
      </LabelContainer>
      <Input
        value={props.values.fullName}
        onChangeText={text => props.setFieldValue('fullName', text)}
        placeholder={general.strings.PLACEHOLDER_FULL_NAME}
      />

      <LabelContainer>
        <Label>{general.strings.CPF}</Label>
        <Notice>{general.strings.INVALID_CPF}</Notice>
      </LabelContainer>
      <Input
        value={props.values.cpf}
        onChangeText={text => props.setFieldValue('cpf', text)}
        placeholder={general.strings.PLACEHOLDER_CPF}
      />
      
      <LabelContainer>
        <Label>{general.strings.PHONE_NUMBER}</Label>
        <Notice>{general.strings.INVALID_PHONE}</Notice>
      </LabelContainer>
      <Input
        value={props.values.phone}
        onChangeText={text => props.setFieldValue('phone', text)}
        placeholder={general.strings.PLACEHOLDER_PHONE}
      />

      <LabelContainer>
        <Label>{general.strings.EMAIL}</Label>
        <Notice>{general.strings.INVALID_EMAIL}</Notice>
      </LabelContainer>
      <Input
        value={props.values.email}
        onChangeText={text => props.setFieldValue('email', text)}
        placeholder={general.strings.PLACEHOLDER_EMAIL}
      />

      <LabelContainer>
        <Label>{general.strings.PASSWORD}</Label>
        <Notice>{general.strings.INVALID_PASSWORD}</Notice>
      </LabelContainer>
      <Input
        value={props.values.password}
        onChangeText={text => props.setFieldValue('password', text)}
        placeholder={general.strings.PLACEHOLDER_PASSWORD}
      />

      <Button
        onPress={props.handleSubmit}
        title="Submit"
      >
        <ButtonText>
          {general.strings.FINISH_SIGN_UP.toUpperCase()}
        </ButtonText>
      </Button>
    </View>
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
    password: '' }),

  handleSubmit: (values) => {
    console.log(values);
  }
})(RegisterUser);