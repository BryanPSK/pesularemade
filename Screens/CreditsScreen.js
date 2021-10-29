import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { Text, View, StyleSheet,TouchableOpacity,Button, Settings} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Counter from '../onChange/Counter';
import InputCredits from '../onChange/InputCredits';





export default function CreditsScreen(){
 
  
  return(
    <View>
      <InputCredits/>
    </View>
  )
}

