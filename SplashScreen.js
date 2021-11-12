import * as React from 'react';
import { View,Text,StyleSheet, Image} from 'react-native';
import { StatusBar } from 'react-native';
import pesulagif from './Image/Hnet.com-image.gif'
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
const SplashScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
            <Image 
            source={pesulagif}
            resizeMode="stretch"
            />
        </View>
        <View style={styles.footer}> 
            <Text style={styles.title}>Laundry at your fingertips...</Text>
            <Text style={styles.text}>Sign in to your account</Text>
            <View style={styles.button}>
                <Button onPress={() => navigation.navigate('SignUpScreen')}
                mode='contained'
                compact='true'
                contentStyle={{backgroundColor:'#cce3de'}}
                color='white'
                >Lets Go</Button>
            </View>
        </View>
        </View>
    )
}

export default SplashScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#a4c3b2'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 30
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle:'italic'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:30,
    }
})