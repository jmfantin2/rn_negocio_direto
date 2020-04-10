import React, { useState } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { StatusBar, ActivityIndicator, AsyncStorage, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { general } from '../../../assets/general'

import { Ionicons } from '@expo/vector-icons';

import { Container, Title, Input, Label, Button, ButtonText } from './styles'

// TODO: header-margin and navigate
export default function RegisterUser() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  
  return(
    <Container>
      <Label>
          {general.strings.FULL_NAME}
      </Label>
      <Input
        autoCapitalize="words"
        autoCorrect={false}
        placeholder={general.strings.SET_NAME}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        value={username}
        onChangeText={username => setUsername(username)}
      />
      <Label>
          {general.strings.CPF}
      </Label>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.SET_CPF}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        keyboardType={'numeric'}
        value={cpf}
        onChangeText={cpf => setCpf(cpf)}
      />
      <Label>
          {general.strings.PHONE_NUMBER}
      </Label>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.SET_PHONE_NUMBER}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        keyboardType={'numeric'}
        format="(##) #####-####" 
        mask="_"
        value={phoneNumber}
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
      />
      <Label>
          {general.strings.EMAIL}
      </Label>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.SET_EMAIL}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Label>
          {general.strings.PASSWORD}
      </Label>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.SET_PASSWORD}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        value={password}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <Button>
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

RegisterUser.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}
