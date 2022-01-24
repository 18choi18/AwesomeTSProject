import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

function DetailScreen({}) {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.block}>
      <Text style={styles.text}>{route.params.id}</Text>
      <Button
        title="next"
        onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
      />
      <Button title="prev" onPress={() => navigation.pop()} />
      <Button title="go to home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
    color: '#000',
  },
});

export default DetailScreen;
