import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack=createStackNavigator();

const RootStackScreen =({navigation})=>{
    return(
<RootStack.Navigator>
    <RootStack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/> 
    <RootStack.Screen name='SignInScreen' component={SignInScreen}options={{headerShown:false}}/>
    <RootStack.Screen name='SignUpScreen' component={SignUpScreen}options={{headerShown:false}}/>
   
    
</RootStack.Navigator>)
}
export default RootStackScreen;