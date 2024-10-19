import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
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
