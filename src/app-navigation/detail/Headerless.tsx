import React, {useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Headerless({route, navigation}) {
  // useEffect(() => {
  //   navigation.setOptions({title: `Detail ${route.params.id}`});
  // }, [navigation, route]);
  return (
    <SafeAreaView>
      <View style={styles.block}>
        <Text style={styles.text}>{route.params.id}</Text>
        <Text style={styles.text}>헤더가 없네?</Text>
        <Text style={styles.text}>헤더가 없네?</Text>
        <Text style={styles.text}>헤더가 없네?</Text>
        <Text style={styles.text}>헤더가 없네?</Text>
        <Text style={styles.text}>헤더가 없네?</Text>
        {/* <Button
          title="next"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="prev" onPress={() => navigation.pop()} />
        <Button title="go to home" onPress={() => navigation.popToTop()} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    color: 'black',
  },
});

export default Headerless;
