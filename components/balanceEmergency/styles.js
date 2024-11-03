import { StyleSheet } from 'react-native';

styles = StyleSheet.create({
  container:{
    marginBottom: 24
  },
  containerModal:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.4)'
  },
  text: {
    fontSize: 16,
    marginLeft: -32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  boxModal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 240,
    borderRadius: 12,
    backgroundColor: '#FFF',
  },
  content: {
    color: '#FFB6C1',
    fontSize: 40,
    marginLeft: -12,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  buttonModal:{
    width: 192,
    height: 64,
    backgroundColor: '#9F2B68',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  textModal: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputModal: {
    width: 300,
    height: 40,
    borderColor: '#9F2B68',
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  labelModal: {
    color: '#000',
    fontSize: 20,

  }
});

export default styles;
