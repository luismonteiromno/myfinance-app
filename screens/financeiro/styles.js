import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2C1A3C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFB6C1',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: '#F1E4E8',
  },
  input: {
    height: 50,
    borderColor: '#7A3E9D',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: '#44335B',
    color: '#F1E4E8',
    width: '100%',
    maxWidth: 300,
    marginBottom: 10,
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultPositive: {
    fontSize: 20,
    marginVertical: 15,
    color: '#28a745',
    textAlign: 'center',
  },
  resultNegative: {
    fontSize: 20,
    marginVertical: 15,
    color: '#ff3355',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  buttonCalculate: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonHome: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
