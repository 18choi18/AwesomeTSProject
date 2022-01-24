import React from 'react';
import {View, Button, ScrollView} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{height: 300, backgroundColor: 'red'}} />
      <View style={{height: 300, backgroundColor: 'yellow'}} />
      <Button
        title="open detail page"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="open detail page"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="open detail page"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
      <Button
        title="headless page"
        onPress={() => navigation.navigate('Headerless', {id: 8})}
      />
      <View style={{height: 300, backgroundColor: 'green'}} />
    </ScrollView>
  );
}

export default HomeScreen;
