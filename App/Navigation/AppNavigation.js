import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// Screens for AuthLoading
import AuthLoadingScreen from '../Containers/AuthLoadingScreen';
// Screens for AuthStack
import SignInScreen from '../Containers/SignInScreen';
// Screens for AppNavigator
import HomeScreen from '../Containers/HomeScreen';
import MeScreen from '../Containers/MeScreen';
import SettingsScreen from '../Containers/SettingsScreen';
import FollowScreen from '../Containers/FollowScreen';

const HomeStack = createStackNavigator({ Home: HomeScreen });
const FollowStack = createStackNavigator({ Follow: FollowScreen });
const MeStack = createStackNavigator(
  {
  Me: MeScreen,
  Settings: SettingsScreen,
  }
);

const AppNavigator = createBottomTabNavigator({ 
  Home: HomeStack, 
  Follow: FollowStack,
  Me: MeStack 
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));