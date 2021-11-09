import * as React from 'react';
import { Text, View , StyleSheet, TouchableOpacity, TextInputComponent} from 'react-native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {CreditsScreen, increment  } from './CreditsScreen';
import { Component } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph, Modal, Portal } from 'react-native-paper';
import MyComponent from '../List';
import { SafeAreaView } from 'react-navigation';
import BookingTest from '../onChange/Counter';


function BookingsScreen({ navigation }) {
  const LeftContent = props => <Avatar.Icon {...props} icon="washing-machine" />
  
    return (
      <SafeAreaView>
      <ScrollView>
        
      <Card>
    <Card.Title title="Welcome!" subtitle="Please choose the washing machine you want to use!" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://www.bestslogans.com/img/pics/201711_1113_fdehf.jpg' }} />
    <Card.Content>
   <BookingTest/>
    </Card.Content>
{/*     <Card.Actions>
    <Button mode="outlined" onPress={() => navigation.navigate('SaracaHall')}>
    SaracaHall
  </Button>
  <Button mode="outlined" onPress={() => navigation.navigate('TamarindHall')}>
    TamarindHall
  </Button>
      
    </Card.Actions> */}
  </Card>
  </ScrollView>
  </SafeAreaView>
     
      
    );
  
  }

 

function SaracaHallScreen ({navigation}){
  
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Text /* style={{flex: 1, justifyContent:'center',alignItems:'center'}} */> These are the available machines at Saraca Hall </Text>
  <Button mode="outlined" onPress={() => navigation.navigate('Sophie')}> Sophie </Button> 
  <Button mode="outlined" onPress={() => navigation.navigate('Bobby')}> Bobby </Button>
  <Text>  </Text>
  </View>
  );
}
function TamarindHallScreen ({navigation}){
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> These are the available machines at Tamarind Hall </Text>
    <Button mode="outlined" onPress={() => navigation.navigate('Zoey')}> Zoey </Button> 
  <Button mode="outlined" onPress={() => navigation.navigate('Charlie')}> Charlie </Button>
  <Text> Test </Text>
  </View>
  );
}




/*const screens = {
  SaracaHallScreen:{
    screen: SaracaHallScreen,
    navigationOption:{
      headerTitle: () => <Header/>
    }
  },
    TamarindHallScreen:{
      screen: TamarindHallScreen,
      navigationOption:{
        headerTitle: () => <Header/>
    }
  },
}*/


const Stack = createStackNavigator()

  //stack shows hall --> washing machines available
  export default function BookingsStack() {

//var counter = props.route.params.data;

    return(
      
      <Stack.Navigator>
        
        <Stack.Screen name ='Bookings' component ={BookingsScreen} options={{headerShown:false}}
        /* options={{headerRight:() => <View><TextInput placeholder ='Credit Value'
        onChangeText={(count) => setCount(count)}
        /></View>
          
        }} */ />
        <Stack.Screen name ='SaracaHall' component ={SaracaHallScreen} />
        <Stack.Screen
        name ='TamarindHall'
        component ={TamarindHallScreen} />
        
      </Stack.Navigator>
    
    );
    
    }


 /* options = {{
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Credits"
        color="#00cc00"
      />
    ),
  }}
  
  options={{headerRight:()=> (<Text>{DataTransfer}</Text>)}}
  */
