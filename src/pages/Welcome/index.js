import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, strings } from '../../../assets/general';

import LogoSrc from '../../../assets/images/nd-horizontal-transparent.png';

import api from '../../services/api';

import {
  Container,
  Logo,
  Title,
  TextInformation,
  Error,
  Form,
  Input,
  Button,
  ButtonText,
  SignInText,
  BottomForm,
} from './styles';

export default function Welcome(props) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function saveUser(user) {
    api.defaults.headers.common = { Authorization: `bearer ${user.token}` };

    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user));
  }

  async function signIn() {
    if (email.length === 0 || password.length === 0) return;

    setLoading(true);

    try {
      const credentials = {
        email: email.replace(/\s+/g, ''),
        password: password.replace(/\s+/g, ''),
      };

      const response = await api.post('/api/v1/login', credentials);

      const user = response.data;

      await saveUser(user);

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'App' })],
      });

      setLoading(false);

      props.navigation.dispatch(resetAction);
    } catch (err) {
      console.log(err);

      setLoading(false);
      setErrorMessage(strings.USER_NOT_FOUND);
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Logo source={LogoSrc} resizeMode="contain" />
      <Title>{strings.WELCOME}</Title>
      <TextInformation>{strings.CONTINUE}</TextInformation>

      {!!errorMessage && <Error>{errorMessage}</Error>}

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={strings.INSERT.EMAIL}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={email}
          onChangeText={(email) => setUsername(email)}
        />

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={strings.INSERT.PASSWORD}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />

        <Button onPress={signIn}>
          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <ButtonText>{strings.GO_AHEAD.toUpperCase()}</ButtonText>
          )}
        </Button>
        <BottomForm>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('RegisterUser')}
          >
            <SignInText>{strings.SIGN_UP}</SignInText>
          </TouchableOpacity>
        </BottomForm>
      </Form>
    </Container>
  );
}

Welcome.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

Welcome.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
