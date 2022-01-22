import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Keyboard,
} from 'react-native';

function AddTodo({onInsert}) {
  const [text, setText] = useState('');
  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };
  return (
    <>
      <View style={styles.block}>
        <TextInput
          placeholder="할일을 입력하세요."
          style={styles.input}
          value={text}
          onChangeText={setText}
          onSubmitEditing={onPress}
          returnKeyType="done"
        />
        <Button onPress={onPress} />
      </View>
    </>
  );
}

function Button({onPress}) {
  const buttonIcon = (
    <View style={styles.button}>
      <Image source={require('../../assets/icons/add_white/add_white.png')} />
    </View>
  );
  return (
    Platform.select({
      android: (
        <TouchableNativeFeedback onPress={onPress}>
          {buttonIcon}
        </TouchableNativeFeedback>
      ),
      ios: <TouchableOpacity onPress={onPress}>{buttonIcon}</TouchableOpacity>,
    }) || <></>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    borderColor: '#bdbdbd',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    color: 'green',
    flex: 1,
    height: 48,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
    paddingVertical: 8,
  },
});

export default AddTodo;
