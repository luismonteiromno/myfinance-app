import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5F6F5', // Verde claro para fundo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007AFF', // Azul para o título
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF', // Azul para os valores
    marginTop: 5,
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
