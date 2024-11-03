import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(46, 35, 108, 1)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  containerContent:{
    marginBottom: 24
  },
  image: {
    width: 'auto',
    height: 240,
  },
  title: {
    fontSize: 24,
    marginLeft: -32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  textBox: {
    width: 360,
    height: 100,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  description: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'left',
  },
  buttonHome: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transfer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 56,
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
});

export default styles;
