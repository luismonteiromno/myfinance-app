import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  formContainer: {
    width: '40%', // Ajuste a largura do formulário
    height: '30%', // Ajuste a altura do formulário
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo semi-transparente para o formulário
    padding: 20,
    borderRadius: 10,
    alignItems: 'center', // Centraliza os itens dentro do formulário
  },
  input: {
    width: '100%', // Ajuste a largura para preencher o formulário
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default styles;
