import * as React from 'react';
import { View, Text, Animated, StyleSheet,Image,TextInput,TouchableOpacity  } from 'react-native';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from 'react-native-gesture-handler';
import { Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { SafeAreaView } from 'react-navigation';
import pesulagif from './Image/Hnet.com-image.gif'
import HomeScreen from './Screens/HomeScreen';    //import from screens folder
import BookingsScreen from './Screens/BookingsScreen'; //import from screens folder
import SettingsScreen from './Screens/SettingsScreen'; //import from screens folder
import CreditsScreen from './Screens/CreditsScreen'; //import from screens folder
import FontAwesome from "react-native-vector-icons/FontAwesome"; //for navigation bar icons
import RootStackScreen from './RootStackScreen';
import pesulaimage from './Image/PESULA.png'
const Tab = createBottomTabNavigator();   //bottom navigation bar
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={RootStackScreen}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name="AfterLogin"
        component={AfterLogin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}



function LoginScreen({ navigation }) { //FIRST LOGIN SCREEN

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[visible,setVisible] = useState(true);
  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
        
        <Image  source={pesulagif}/>
        
      
    
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={(email) => setEmail(email)} //SET EMAIL
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)} //SET PASSWORD
        />
      </View>
 
      <TouchableOpacity> 
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      <Button onPress={ loginLogic }
                mode='contained'
                compact='true'
                
                contentStyle={{backgroundColor:'#cce3de'}}
                color='white'>
                LOGIN
            </Button>
        
        
      
    </View></ScrollView>
  );


  function loginLogic()
{
  if((email)=='X')
  {
    navigation.navigate('AfterLogin')
  }

  else
  {
    alert('wrong')
  }
}

}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#a4c3b2",
    borderRadius: 20,
    width: "70%",
    height: 45,
    margin:10,
    flex:1,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontStyle:'italic',
  },
 
  forgot_button: {
    height: 30,
    
  },
 
  loginBtn: {
   
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#a4c3b2",
    color:'white'
  },
  imagestyle:{
    height:450,
    flex:1
  }
});

function AfterLogin() { //WHAT YOU SEE AFTER LOGIN
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            //Set the icon based on which route it is (name of the tab). All icons used are FontAwesome
            /*  if (route.name === 'Home') {
              iconName = 'home';
            } 
            else  */ if (route.name === 'Bookings') {
              iconName = 'th-list';
            }
            else if (route.name === 'Settings') {
              iconName = 'cog';
            }
            else if (route.name === 'Credits') {
              iconName = 'credit-card';  
            }                                //iconName = focused? 'credit-card':'credit-card-alt'; // '1':'2' icon change from 1 to 2 on click.
            
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#a4c3b2',
          inactiveTintColor: 'gray',
        }}
      >

        {/* there needs to be a constant header regardless of tabs. Yet to figure out */}
        {/* <Tab.Screen name="Home" component={HomeScreen} options = {{headerShown : false}} />  */}
        <Tab.Screen name="Bookings" component={BookingsScreen} options = {{headerShown : false}}/>
        <Tab.Screen name="Credits" component={CreditsScreen} options = {{headerShown : false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options = {{headerShown : false}}/>

      </Tab.Navigator>

  );
}


