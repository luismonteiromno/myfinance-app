import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(46, 35, 108, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  safeContainer: {
    backgroundColor: 'rgba(46, 35, 108, 1)',
    height: '100%',
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
  buttonCalculateContainer: {
    marginVertical: 10,
    width: 200,
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
  icon: {
    color:'white',
    marginHorizontal:25,
    marginVertical:20,
  },
  buttonHome: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    padding: 15,
    width: '100%',
    backgroundColor:'#17153B',
    maxWidth: 300, // Limita a largura no web
    padding: 10,
    width: '100%',
    backgroundColor:'#17153B',
    gap:15,
    borderRadius:50,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
