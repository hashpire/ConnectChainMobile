import React from 'react';
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
// Background Color
import { Colors } from '../Themes';
// Tab Icons
import Icon from 'react-native-vector-icons/Ionicons';

const MeStack = createStackNavigator(
  {
    Me: MeScreen,
    Settings: SettingsScreen,
  },
  { 
    initialRouteName: 'Me',
    headerMode: 'none'
  }
);

const AppNavigator = createBottomTabNavigator(
  { 
    Home: HomeScreen, 
    Follow: FollowScreen,
    Me: MeStack 
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Follow') {
          iconName = 'ios-list';
        } else if (routeName === 'Me') {
          iconName = 'ios-person';
        }
      
        // return icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.bottomTabActiveTint,
      inactiveTintColor: Colors.bottomTabInActiveTint,
      style: {
        backgroundColor: Colors.bottomTabBackground,
      },
    }
  }
);

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