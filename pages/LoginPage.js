import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [signupModalVisible, setSignupModalVisible] = useState(false);

  const handleLogin = () => {
    // Perform login authentication logic here
    console.log('Logging in with email:', email, 'and password:', password);
    // For now, I'm just navigating to the shopping list page
    navigation.navigate('HomePage');
  };

  const handleSignup = () => {
    // Navigate to the signup page
    setSignupModalVisible(true);
  };

  const handleCancelSignup = () => {
    // Close signup modal and clear fields
    setSignupModalVisible(false);
    setEmail('');
    setPassword('');
    setVerifyPassword('');
  };

  const handleSignupSubmit = () => {
    // Perform signup logic here
    console.log('Signing up with email:', email, 'and password:', password);
    // For now, I'm just closing the modal and clearing fields
    setSignupModalVisible(false);
    setEmail('');
    setPassword('');
    setVerifyPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          color="#007AFF"
          onPress={handleLogin}
        />
        <Button
          title="Sign Up"
          color="#007AFF"
          onPress={handleSignup}
        />
      </View>
      {/* Signup Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={signupModalVisible}
        onRequestClose={() => setSignupModalVisible(false)}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Sign Up</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#888"
                secureTextEntry={true}
              />
              <TextInput
                style={styles.input}
                placeholder="Verify Password"
                value={verifyPassword}
                onChangeText={setVerifyPassword}
                placeholderTextColor="#888"
                secureTextEntry={true}
              />
              <View style={styles.modalButtonContainer}>
                <Button title="Cancel" onPress={handleCancelSignup} />
                <Button title="Submit" onPress={handleSignupSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LoginPage;
