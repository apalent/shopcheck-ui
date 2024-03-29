// SwipeableItem.js
import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../AppStyles'; // Assuming you have this file set up for your global styles
const SwipeableItem = ({ item, onDelete, onMarkAsPurchased }) => {
  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteBox}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={() => onMarkAsPurchased(item.id)} style={styles.itemContainer}>
        <View style={styles.checkBox}>
          <Text style={styles.checkText}>{item.purchased ? '✓' : '○'}</Text>
        </View>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};


export default SwipeableItem;
