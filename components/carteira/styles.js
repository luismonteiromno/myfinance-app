import { StyleSheet } from 'react-native';

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  spacer: {
    height: 10,
  },
  expenseContainer: {
    backgroundColor: '#3E2D5D',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  expenseLabel: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 10,
  },
  expenseValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFB6C1',
    marginBottom: 10,
  },
  expenseLimit: {
    fontSize: 16,
    color: '#FFB6C1',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  carteiraContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  saldoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saldoValor: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default styles;
