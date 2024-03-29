import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './pages/LoginPage'; // Assume you have this page
import ShoppingListPage from './pages/ShoppingListPage'; // Assume you have this page

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EnterId" component={LoginPage} options={{ title: 'Enter Credentials' }} />
        <Stack.Screen name="ShoppingList" component={ShoppingListPage} options={{ title: 'Shopping List' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
