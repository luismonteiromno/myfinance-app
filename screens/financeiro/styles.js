import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  result: {
    fontSize: 20,
    marginVertical: 15,
    color: '#28a745',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
});

export default styles;
