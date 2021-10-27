import * as React from 'react';
import { Text, View , Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function BookingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* text here can be beautified */}
        <Text>Which hall?</Text>    
        {/* shows user the available halls and navigates them to the page for availability. Can beautify this as well  */}
        <Button title='SaracaHall' onPress={() => navigation.navigate('SaracaHall')}/>
        <Button title='TamarindHall' onPress={() => navigation.navigate('TamarindHall')}/>
      </View>
    );
  }

function SaracaHallScreen (){
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text> Test </Text>
  </View>
  );
}
function TamarindHallScreen (){
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text> Test </Text>
  </View>
  );
}
  const Stack = createStackNavigator();

  //stack shows hall --> washing machines available
  export default function BookingsStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name ='Bookings' component ={BookingsScreen} options = {{headerShown : false}}/>
        <Stack.Screen name ='SaracaHall' component ={SaracaHallScreen} />
        <Stack.Screen name ='TamarindHall' component ={TamarindHallScreen} />
      </Stack.Navigator>
    );
  }
