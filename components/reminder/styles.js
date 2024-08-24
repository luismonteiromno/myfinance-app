import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  remindersContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 3,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  calendar: {
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#4caf50',
    borderRadius: 20,
    padding: 10,
  },
  remindersList: {
    maxHeight: Dimensions.get('window').height * 0.3,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  reminderText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default styles;
