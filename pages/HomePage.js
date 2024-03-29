import React ,{useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../AppStyles';
const HomePage = ({ navigation }) => {

    const [shoppingLists, setShoppingLists] = useState([
        { id: '1', name: 'Grocery', time: Date.now()},
        { id: '2', name: 'Dress', time: Date.now(), },
        // More items can be initialized here
      ]);
    

    const handleShoppingListPress = (shoppingListId) => {
        // Navigate to the shopping list details page, passing the shopping list id
        navigation.navigate('ShoppingList', { shoppingListId });
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Your Shopping Lists</Text>
          <FlatList
            data={shoppingLists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleShoppingListPress(item.id)}>
                <View style={styles.shoppingListContainer}>
                  <Text style={styles.shoppingListTitle}>{item.name}</Text>
                  {/* Add more details of the shopping list if needed */}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
};

export default HomePage;
