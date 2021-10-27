import * as React from 'react';
import { useState } from 'react';
import { View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button,Header } from 'react-native-elements';
import Counter from './Counter';

export default function InputCredits(){
  const[count,setCount]=useState(0)
  
    return(
<View > 

<Header 
  leftComponent={{ icon: 'chevron-left', color: '#191970', iconStyle: { color: '#191970',size: 50 } }} //change to a button that navigates to the prev screen?
  centerComponent={{ text: 'CREDITS', style: { color: '#191970',fontWeight:'bold',fontSize:40, fontStyle: 'italic' } }}
  containerStyle={{
    backgroundColor: '#add8e6',
  }}
  /* rightComponent={{ icon: 'home', color: '#fff' }} */
/>

<Text style={styles.text}> You have {count} credits in your wallet </Text>
<View style={styles.buttons} >
  <Button onPress={() =>setCount(count+5)}
  title="+5"
  /* icon={{
    name: "arrow-right",
    size: 15,
    color: "Navy"
  }} */
  type='outline'
  containerStyle={{flex:1}}
  
  
/>
<Button onPress={() =>setCount(count+10)} 
  title="+10"
  type='outline'
  containerStyle={{flex:1}}
/>
<Button onPress={() =>setCount(count+20)} 
  title="+20"
  containerStyle={{flex:1}}
  type='outline'
  
  
/>

<Button onPress={() =>setCount(count+50)} 
  title="+50"
  containerStyle={{flex:1}}
  type='outline'
  
  
/>
</View>

<Button onPress={() =>setCount(0)} 
  title="Reset"
  type='outline'
 
/>
<Button onPress={() =>alert('Top-up Success!')} //once press confirm, update database?
  title="Confirm"
  /* type='outline' */
  icon={{
    name: "arrow-right",
    size: 15,
    color: "Navy"
  }}
  
  
  
/>



</View>)}
 const styles = StyleSheet.create({
   buttons:{
    flexDirection: 'row',
    justifyContent:'center',

   },
 
    header:{
        fontSize: 100,
        backgroundColor:'yellow'
     },
     text:{
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 30,
      color: "dark blue",
      flex: 2,
     }
    })