import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { general } from '../../../assets/general'

import { Ionicons } from '@expo/vector-icons';

import { 
  Container, 
  Input, 
  Label, 
  Button, 
  ButtonText,
  Notice, 
  LabelContainer } from './styles'

const RegisterUser = () => {
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [submitAttempt, setSubmitAttempt] = useState(false)
  const [pressedKey, setPressedKey] = useState(false)

  // const maskPhoneNumber = (phoneNumber) =>{
  //         phoneNumber.length == 1 && !pressedKey  ? setPhoneNumber(phoneNumber="(" + phoneNumber) : //if
  //         phoneNumber.length == 3 && !pressedKey  ? setPhoneNumber(phoneNumber+=")") : //else if
  //         phoneNumber.length == 9 && !pressedKey  ? setPhoneNumber(phoneNumber+="-") : //else if 
  //         setPhoneNumber(phoneNumber)  //else
  // }

  // const maskCpfNumber = (cpf) => {
  //       cpf.length == 3  && !pressedKey ? setCpf(cpf+=".") :
  //       cpf.length == 7  && !pressedKey ? setCpf(cpf+=".") :
  //       cpf.length == 11 && !pressedKey ? setCpf(cpf+="-") :
  //       setCpf(cpf)
  // }

  return(
    <Container>
      <LabelContainer>
        <Label>
          {general.strings.FULL_NAME}
        </Label>
      </LabelContainer>
      <Input
        autoCapitalize="words"
        autoCorrect={false}
        placeholder={general.strings.PLACEHOLDER_FULL_NAME}
        value={fullName}
        onChangeText={fullName => setFullName(fullName)}
      />
      <LabelContainer>
        <Label>
          {general.strings.CPF}
        </Label>
      </LabelContainer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.PLACEHOLDER_CPF}
        keyboardType={'numeric'}
        maxLength={11}
        value={cpf}
        onChangeText={cpf => setCpf(cpf)}
      />
      <LabelContainer>
        <Label>
          {general.strings.PHONE_NUMBER}
        </Label>
      </LabelContainer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.PLACEHOLDER_PHONE}
        keyboardType={'numeric'}
        maxLength={11}
        value={phoneNumber} 
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
      />
      <LabelContainer>
        <Label>
          {general.strings.EMAIL}
        </Label>
      </LabelContainer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.PLACEHOLDER_EMAIL}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <LabelContainer>
        <Label>
          {general.strings.PASSWORD}
        </Label>
        <Notice>
          {general.strings.INVALID_PASSWORD}
        </Notice>
      </LabelContainer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.PLACEHOLDER_PASSWORD}
        value={password}
        secureTextEntry={true}
        minLength={8}
        onChangeText={password => setPassword(password)}
      />
      <Button
        onPress={() => setSubmitAttempt(true)}
      >
        <ButtonText>{general.strings.FINISH_SIGN_UP.toUpperCase()}</ButtonText>
      </Button>
    </Container>
  )
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

export default RegisterUser
