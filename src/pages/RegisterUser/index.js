import React, { useState } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { StatusBar, ActivityIndicator, AsyncStorage, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { general } from '../../../assets/general'

import { Ionicons } from '@expo/vector-icons';

import { Container, Title, Input } from './styles'

// TODO: header-margin and navigate
export default function RegisterUser() {
  return(
    <Container>
      <Title>
        {general.strings.CREATE_ACCOUNT}
      </Title>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.INSERT_USERNAME}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.INSERT_PASSWORD}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.INSERT_EMAIL}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={general.strings.INSERT_PHONE_NUMBER}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
    </Container>
  )
}

SignUp.navigationOptions = ({ navigation }) => {
  return {
    title: `${general.strings.SIGN_UP}`,

    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Auth')} >
        <Ionicons 
          name="md-arrow-back" 
          size={32} 
          color={general.styles.colors.white}
        />
      </TouchableOpacity>
    ),   
  }
}
