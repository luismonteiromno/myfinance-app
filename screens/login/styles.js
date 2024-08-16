import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fundo escuro semitransparente para destacar o formulário
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 40, // Espaço entre o logo e o formulário
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: '0.85rem',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400, // Largura máxima do formulário
    backgroundColor: 'white', // Fundo branco para o formulário
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Sombra para dar destaque ao formulário
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff', // Cor do botão
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
