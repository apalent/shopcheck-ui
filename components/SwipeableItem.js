import { Swipeable } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../AppStyles';
const SwipeableItem = ({ item, onDelete }) => {
    const renderRightActions = (progress, dragX) => {
      return (
        <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      );
    };
  
    return (
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </Swipeable>
    );
  };
  

  export default SwipeableItem;