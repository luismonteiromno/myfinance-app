import { StyleSheet } from "react-native";

const colors = {
  primary: '#2E236C',
  secondary: '#83386e',
  accent: '#2196F3',
  textPrimary: '#FFFFFF',
  textSecondary: '#FFB6C1',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  containerContent: {
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 240,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginVertical: 16,
  },
  textBox: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  description: {
    color: colors.textPrimary,
    fontSize: 16,
    textAlign: 'left',
  },
  buttonHome: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  transfer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  icon: {
    color: colors.textPrimary,
    marginHorizontal: 20,
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    padding: 10,
    backgroundColor: '#17153B',
    borderRadius: 50,
    marginTop: 10,
    gap: 15,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.34)',
    paddingTop: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    margin: 4,
    padding: 12,
    textAlign: 'center',
  },
  boxModal: {
    width: 360,
    padding: 20,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    color: colors.textSecondary,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  buttonModal: {
    width: 200,
    height: 50,
    backgroundColor: '#ac3a8c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 8,
  },
  textModal: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    textAlign: 'center', // Alinha o texto no centro como os outros
    // color: '#f4a',       // Cor do texto, se necessário
    fontSize: 30,        // Tamanho de fonte para se adequar ao estilo
  },
  inputModal: {
    width: 300,
    height: 50,
    borderColor: '#9F2B68',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  labelModal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
});

export default styles;
