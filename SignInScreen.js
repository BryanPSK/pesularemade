import * as React from 'react';
import { View,Text,StyleSheet, StatusBar } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';


    

    
   /* const SignUpScreen = ({navigation}) =>{
    const[signupemail,setSignupemail]=useState('')
    const[signuppassword,setSignuppassword]=useState('')
    const[confirmpassword,setConfirmpassword]=useState('')
        function Signuplogic(){

            if(signuppassword!==confirmpassword){
                alert('please double check your password')
            }
            else{
                navigation.navigate('SignInScreen')
            }
        }
        return(
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.inputView}
                     label="Enter Email"
                     mode='outlined'
                     value={signupemail}
                     secureTextEntry={false}
                     outlineColor='white'
                    onChangeText={signupemail => setSignupemail(signupemail)} />
                    </View>
                    <View>
                    <TextInput style={styles.inputView}
                    underlineColor='white'
                    mode='outlined'
                     label="Enter Password"
                     value={signuppassword}
                     secureTextEntry={true}
                     outlineColor='white'
                    onChangeText={signuppassword => setSignuppassword(signuppassword)} />
                    </View>
                    <View>
                    <TextInput style={styles.inputView}
                    underlineColor='white'
                    mode='outlined'
                     label="Confirm Password"
                     value={confirmpassword}
                     secureTextEntry={true}
                     outlineColor='white'
                    onChangeText={confirmpassword => setConfirmpassword(confirmpassword)} />
                    </View>
                    <Button onPress={Signuplogic}
                    mode='contained'
                    compact='true'
                    contentStyle={{backgroundColor:'#f6fff8'}}
                    style = {styles.buttons}
                    color='white'
                    >Sign Up</Button>
            </View>
        )
    } */

    const SignInScreen = ({navigation}) =>{
        const[email,setEmail]=useState('')
        const[password,setPassword]=useState('')
        function Forgetpassword(){
            alert('your password has been reset to: rtyqt123')
            setPassword('')
        }
       function loginLogic(props)
        {
          if(email=='x' ) //make sure pw is rtyqt123
          {
            navigation.navigate('AfterLogin') 
            setEmail('')
            setPassword('')
          }
          else
          {
            
            alert('wrong email/password. Please try again.')
            setEmail('')
            setPassword('')
          }
        }
    
        return(
            <View style={styles.container}>
                <StatusBar style='auto'/>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome to PESULA!</Text>
                </View>
                
                <View style={styles.footer}>
                    <View>
                    <TextInput style={styles.inputView}
                     label="Enter Email"
                     mode='outlined'
                     value={email}
                     secureTextEntry={false}
                     outlineColor='white'
                    onChangeText={email => setEmail(email)} />
                    </View>
                    <View>
                    <TextInput style={styles.inputView}
                    underlineColor='white'
                    mode='outlined'
                     label="Enter Password"
                     value={password}
                     secureTextEntry={true}
                     outlineColor='white'
                    onChangeText={password => setPassword(password)} />
                    </View>
                    <Button onPress={Forgetpassword}
                    mode='contained'
                    compact='true'
                    contentStyle={{backgroundColor:'white'}}
                    color='white'
                    style = {styles.buttons}
                    >Forget password?</Button>
                    <Button onPress={loginLogic}
                    mode='contained'
                    compact='true'
                    contentStyle={{backgroundColor:'#f6fff8'}}
                    style = {styles.buttons}
                    color='white'
                    >Log In</Button>
            </View>
            </View>
        )
    }
    





export default SignInScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#a4c3b2'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 30
    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        fontStyle:'italic',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontStyle:'italic',
      },
      inputView: {
        backgroundColor: "#a4c3b2",
        borderRadius: 10,
        margin: 5
        
      },
      buttons:{
          marginTop:5,
          marginLeft:5,
          marginRight:5, 
          borderRadius:10
      }
})