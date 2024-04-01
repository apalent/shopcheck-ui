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
      const [editingItem, setEditingItem] = useState(null);
      const handleAddNewList = () => {
        setModalVisible(true);
      };

    const handleShoppingListPress = (shoppingListId) => {
        // Navigate to the shopping list details page, passing the shopping list id
        navigation.navigate('ShoppingList', { shoppingListId });
      };
    
      const handleAddItem = () => {
        console.log(shoppingLists?.length + 1)
        const newItem = {
          id: shoppingLists?.length + 1,
          name: newListName,
          description: newListDescription,
          time: Date.now()
        };
        setShoppingLists(currentItems => [...currentItems, newItem]);
        setModalVisible(false);
      };

      const handleEditItem = (itemId) => {
        // Find the selected item from the shopping list
        const selectedItem = shoppingLists.find(item => item.id === itemId);
        
        // Set the selected item for editing
        setEditingItem(selectedItem);
      
        // Show the modal for editing
        setModalVisible(true);
      };
      
      const handleSaveEdit = () => {
        // Update the shopping list with the edited item's details
        const updatedShoppingLists = shoppingLists.map(item => {
          if (item.id === editingItem.id) {
            return {
              ...item,
              name: editingItem.name,
              description: editingItem.description,
            };
          }
          return item;
        });
      
        // Update the shopping list state
        setShoppingLists(updatedShoppingLists);
      
        // Close the modal
        setModalVisible(false);
      };

      return (
        <View style={styles.container}>
             <View style={styles.buttonContainer}>
             <Text style={styles.header}>Your Reminder Lists</Text>
                <TouchableOpacity onPress={handleAddNewList} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
          <FlatList
            data={shoppingLists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleShoppingListPress(item.id)}>
                <View style={styles.shoppingListContainer} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.shoppingListTitle}>{item.name}</Text>
                  <TouchableOpacity onPress={() => handleEditItem(item.id)} style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
              </View>
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
                value={editingItem?.name}
                onChangeText={(text) => setEditingItem({ ...editingItem, name: text })}
                style={styles.modalTextInput}
                autoFocus={true}
              />
              <TextInput
                placeholder="Description"
                value={editingItem?.description}
                onChangeText={(text) => setEditingItem({ ...editingItem, description: text })}
                style={styles.modalTextInput}
              />
              <View style={styles.modalButtonContainer}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} />
                <Button title="Save" onPress={handleSaveEdit} />
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
        </View>
      );
};

export default HomePage;
