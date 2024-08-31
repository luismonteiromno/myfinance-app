import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1A3C', // Fundo roxo
  },
  content: {
    padding: 20,
    alignItems: 'center', // Centraliza o conteúdo no web
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 8,
  },
  icon: {
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#d3d3d3',
    textAlign: 'center',
    marginBottom: 20,
  },
  expenseContainer: {
    backgroundColor: '#3E2D5D',
    borderRadius: 10,
    padding: 20,
    marginBottom: 4,
    width: '100%',
    maxWidth: 600, // Limita a largura no web
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
  buttonContainer: {
    marginVertical: 16,
    width: '100%',
    maxWidth: 600, // Limita a largura no web
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center', // Alinha o texto e o ícone no centro
  },
  walletButton: {
    backgroundColor: '#702963',
  },
  emergencyButton: {
    backgroundColor: '#9F2B68',
  },
  financialButton: {
    backgroundColor: '#AA336A',
  },
  calendarContainer: {
    backgroundColor: '#3E2D5D',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: '100%',
    maxWidth: 600, // Limita a largura no web
  },
  calendarHeader: {
    color: '#9F2B68',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  calendarText: {
    color: '#9F2B68',
    fontSize: 16,
  },
  reminderInput: {
    backgroundColor: '#9F2B68',
    borderRadius: 10,
    color: '#ffffff',
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  '@media (min-width: 768px)': { // Aplica estilos diferentes para telas maiores (web)
    container: {
      alignItems: 'center', // Centraliza o container no web
      justifyContent: 'center',
    },
    content: {
      padding: 40,
    },
    buttonContainer: {
      flexDirection: 'row', // Exibe os botões lado a lado no web
      justifyContent: 'space-between',
      flexWrap: 'wrap', // Permite que os botões quebrem linha se necessário
    },
    button: {
      width: '48%', // Ajusta a largura dos botões no web
      marginVertical: 10,
    },
  },
});

export default styles;
