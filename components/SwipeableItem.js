import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../AppStyles'; 

const SwipeableItem = ({ item, onDelete, onToggleMark }) => {
  const handleToggleMark = () => {
    onToggleMark(item.id, !item.isPurchased); // Toggle the isPurchased property
  };

  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteBox}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity style={styles.itemContainer}>
        <TouchableOpacity onPress={handleToggleMark} style={styles.checkBox}>
          <Text style={styles.checkText}>{item.isPurchased ? '✓' : '○'}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default SwipeableItem;
