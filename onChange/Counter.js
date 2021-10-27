import * as React from 'react';
import { useState, useEffect } from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';
function Counter (){
    const[count,setCount]=useState(0)
    console.log(count)

   useEffect(() => {
       console.log('y')
       /* const checkcount = count */
      
      
       
       
   })
   function increment(){
    setCount(count+10)
    
}
function decrement(){
    
    setCount(count-10)
}


    return (
        <View style = {styles.container}>
          <Button title="+10 Credits"
          onPress={increment}></Button>
          <Button title="-10 Credits"
          onPress={decrement}></Button>
        <Text style={styles.text}>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    text:{
      flex:'row',
      
    }
    
  });

export default Counter;