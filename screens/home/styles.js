import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(46, 35, 108, 1)', // Fundo roxo
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
    
    padding: 20,
    marginBottom: 4,
    width: '100%',
    maxWidth: 600, // Limita a largura no web
    borderBottomWidth:'0.1rem',
    borderBottomColor:'rgba(200, 172, 214, 1)',
  },
  expenseContainerC: {
    
    padding: 20,
    marginBottom: 4,
    width: '100%',
    maxWidth: 600, // Limita a largura no web
    borderBottomWidth:'0.1rem',
    borderBottomColor:'rgba(200, 172, 214, 1)',
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

  icon: {
    color:'white',
    marginHorizontal:25,
    marginVertical:20,
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
      
    },
    buttonContainer: {
      flexDirection: 'row', // Exibe os botões lado a lado no web
      
     
    },
 
    
  },
});

export default styles;