import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from './pages/Welcome'
import AuthLoadingScreen from './pages/AuthLoadingScreen'
import Home from './pages/Home'
import RegisterUser from './pages/RegisterUser'

import { general } from '../assets/general'

const StackNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: general.styles.colors.oceanGreen,
        marginRight: 8
      },
      headerTintColor: general.styles.colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const StackNavigatorContainer = createAppContainer(StackNavigator);

const AuthStack = createStackNavigator(
  {
    SignIn: Welcome,
    //SignUp: RegisterUser,
    App: StackNavigatorContainer,
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    headerShown: false,
  },
);

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: StackNavigatorContainer,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer;
