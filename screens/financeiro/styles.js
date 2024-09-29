import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2C1A3C', // Fundo roxo escuro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFB6C1', // Rosa claro para o título
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: '#d3d3d3',
  },
  input: {
    height: 40,
    borderColor: '#9F2B68', // Bordas roxo escuro
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 10, // Bordas arredondadas
    backgroundColor: '#3E2D5D', // Fundo roxo intermediário
    color: '#fff', // Texto branco
    width: '100%',
    maxWidth: 300, // Largura máxima do campo de texto
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 10,
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    marginVertical: 15,
    color: '#28a745', // Verde para resultados positivos
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    maxWidth: 300, // Limita a largura no web
  },
  buttonCalculate: {
    backgroundColor: '#4CAF50',  // Cor de fundo verde
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '60%', // Largura mais responsiva
    alignSelf: 'center',
  },
  buttonHome: {
    backgroundColor: '#2196F3',  // Cor de fundo azul
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '60%', // Largura responsiva
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
