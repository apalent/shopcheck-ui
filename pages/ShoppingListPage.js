import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from '../AppStyles'; // Assuming you have this file set up for your global styles
import SwipeableItem from '../components/SwipeableItem';

function ShoppingListPage({ navigation }) {
  const [items, setItems] = useState([
    { id: '1', name: 'Apples', description: 'Red apples' },
    { id: '2', name: 'Bread', description: 'Whole wheat bread' },
    // More items can be initialized here
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  const handleAddPress = () => {
    setNewItemName('');
    setNewItemDescription('');
    setModalVisible(true);
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
        <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Edit item pressed')} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SwipeableItem
            item={item}
            onDelete={(itemId) => {
              setItems(items.filter(it => it.id !== itemId));
            }}
          />
        )}
        contentContainerStyle={styles.listContentContainer}
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
                placeholder="Item Name"
                value={newItemName}
                onChangeText={setNewItemName}
                style={styles.modalTextInput}
                autoFocus={true}
              />
              <TextInput
                placeholder="Description"
                value={newItemDescription}
                onChangeText={setNewItemDescription}
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
}

export default ShoppingListPage;
