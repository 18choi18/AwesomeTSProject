import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';

function Empty() {
  const source = {
    uri: 'https://cdn.music-flo.com/image/v2/album/258/357/07/04/407357258_61e8f0b0_o.jpg?1642655921439/dims/resize/500x500/quality/90',
    width: 250,
    height: 250,
  };

  return (
    <>
      <View style={styles.block}>
        <Image
          source={require('../../assets/images/young_and_happy.png')}
          style={styles.image}
        />
        <Text style={styles.description}>야호!3할일이 없습니다.</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 250,
    height: 250,
    // backgroundColor: 'transparent',
    backgroundColor: 'red',
  },
});

export default Empty;
