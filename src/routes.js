import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "./pages/Welcome";
import AuthLoadingScreen from "./pages/AuthLoadingScreen";
import Home from "./pages/Home";
import AnnouncementCreation from "./pages/AnnouncementCreation";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import RegisterUser from "./pages/RegisterUser";

import { colors, strings } from "../assets/general";

//Telas acessíveis apenas após Login!
const StackNavigator = createStackNavigator(
  {
    Home,
    AnnouncementCreation,
    AnnouncementDetail,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.oceanGreen,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const StackNavigatorContainer = createAppContainer(StackNavigator);

//Telas de fluxo de Autenticação!
const AuthStack = createStackNavigator(
  {
    SignIn: Welcome,
    App: StackNavigatorContainer,
  },
  {
    initialRouteName: "SignIn",
    headerMode: "none",
    headerShown: false,
  }
);

//Telas de fluxo de Cadastro!
const SignUpStack = createStackNavigator(
  {
    RegisterUser,
    App: StackNavigatorContainer,
  },
  {
    initialRouteName: "RegisterUser",
    headerShown: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.oceanGreen,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    RegisterUser: SignUpStack,
    App: StackNavigatorContainer,
  },
  {
    initialRouteName: "AuthLoading",
  }
);
const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer;
