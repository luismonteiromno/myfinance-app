import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo escurecido mais suave
  },
  modalContent: {
    width: '85%',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10, // Efeito de sombra no Android
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333', // Cor mais suave para o título
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 16,
    color: '#666', // Cor mais suave para a mensagem
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
