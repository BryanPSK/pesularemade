import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import InputCreditsStack from './onChange/InputCredits';


import Extra from './extra';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph, Modal, Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';
import InputCredits from './onChange/InputCredits';

export default function Testing() {
  const LeftContent = props => <Avatar.Icon {...props} icon="credit-card" />
  
    return (
      <SafeAreaView>
      <ScrollView>
        
      <Card>
    <Card.Title title="Pesula E-Wallet" subtitle="where payment's made easy..." left={LeftContent} />
    <Card.Cover  style={{resizeMode:'cover'}} source={{ uri: 'https://img.freepik.com/free-vector/purple-background-with-e-wallet-word_52683-135.jpg?size=626&ext=jpg' }} />
    
    <Card.Content>
      
    <InputCredits/>
    
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