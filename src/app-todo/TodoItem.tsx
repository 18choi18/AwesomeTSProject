import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({item, onToggle, onRemove}) {
  const remove = id => {
    Alert.alert('삭제', '정말로 삭제하시겠어요?', [
      {text: '취소', onPress: () => {}, style: 'cancel'},
      {
        text: '삭제',
        onPress: () => {
          onRemove(id);
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(item.id)}>
        <View style={[styles.circle, item.done && styles.filled]}>
          {item.done && (
            <Image
              source={require('../../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text && item.done && styles.lineThrough]}>
        {item.text}
      </Text>
      {item.done ? (
        <TouchableOpacity onPress={() => remove(item.id)}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
