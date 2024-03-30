// AppStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F3', // A light background color
        paddingHorizontal: 10,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 15,
      },
      shoppingListContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCCCCC',
      },
      shoppingListTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      addButton: {
        backgroundColor: '#007AFF', // Primary action color
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
      },
      addButtonText: {
        fontSize: 24,
        color: 'white',
        lineHeight: 30, // Ensuring the "+" is vertically centered
      },
      editButton: {
        backgroundColor: 'transparent',
      },
      editButtonText: {
        fontSize: 18,
        color: '#007AFF', // Matching the primary action color for consistency
      },
      itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      itemDescription: {
        fontSize: 16,
        color: '#666',
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
      },
      checkBox: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
      },
      checkText: {
        fontSize: 16,
      },
      deleteText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100, // Adjust width as necessary
        height: '100%',
      },
      sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
      },   
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%', // Set width to 80% of the screen width
    maxWidth: 600, // Ensure modal doesn't get too wide on large screens
  },
  modalTextInput: {
    height: 50, // Increased height
    width: '100%', // Make text input full width of the modal
    marginBottom: 15,
    paddingHorizontal: 10, // Padding inside the text input
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    fontSize: 18, // Larger font size
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%', // Ensure buttons span the full width of the modal
  },
});
