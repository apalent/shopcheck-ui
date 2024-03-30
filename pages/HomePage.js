import React ,{useState} from 'react';
import { View, Text, FlatList,Button, TouchableOpacity, Modal ,TextInput,Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import { styles } from '../AppStyles';
const HomePage = ({ navigation }) => {

    const [shoppingLists, setShoppingLists] = useState([
        { id: '1', name: 'Grocery', time: Date.now()},
        { id: '2', name: 'Dress', time: Date.now(), },
        // More items can be initialized here
      ]);
      const [newListName, setNewListName] = useState('');
      const [newListDescription, setNewListDescription] = useState('');
      const [modalVisible, setModalVisible] = useState(false);
      const handleAddNewList = () => {
        setModalVisible(true);
      };

    const handleShoppingListPress = (shoppingListId) => {
        // Navigate to the shopping list details page, passing the shopping list id
        navigation.navigate('ShoppingList', { shoppingListId });
      };
    
      const handleAddItem = () => {
        const newItem = {
          id: Date.now().toString(),
          name: newItemName,
          description: newItemDescription,
        };
        setItems(currentItems => [...currentItems, newItem]);
        setModalVisible(false);
      };
      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleAddNewList} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Your Shopping Lists</Text>
                <TouchableOpacity onPress={() => console.log('Edit item pressed')} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        
          
          <FlatList
            data={shoppingLists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleShoppingListPress(item.id)}>
                <View style={styles.shoppingListContainer} >
                  <Text style={styles.shoppingListTitle}>{item.name}</Text>
                  {/* Add more details of the shopping list if needed */}
                </View>
              </TouchableOpacity>
            )}
          />
            {/* Modal for Adding New Item */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.centeredView}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.modalView}>
              <TextInput
                placeholder="List Name"
                value={newListName}
                onChangeText={setNewListName}
                style={styles.modalTextInput}
                autoFocus={true}
              />
              <TextInput
                placeholder="Description"
                value={newListDescription}
                onChangeText={setNewListDescription}
                style={styles.modalTextInput}
              />
              <View style={styles.modalButtonContainer}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} />
                <Button title="Add" onPress={handleAddItem} />
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
        </View>
      );
};

export default HomePage;
