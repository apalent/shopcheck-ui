import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

function EnterIdPage({ navigation }) {
  const [id, setId] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your ID"
        value={id}
        onChangeText={setId}
        placeholderTextColor="#888"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Shopping List"
          color="#007AFF" // Use your primary color here
          onPress={() => navigation.navigate('ShoppingList', { id })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9', // Light background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Dark text color for contrast
  },
  input: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white', // Pure white for input fields
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden', // Ensures the button respects the borderRadius
  },
});

export default EnterIdPage;
