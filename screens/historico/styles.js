import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    main:{
      
        backgroundColor: 'rgba(46, 35, 108, 1)', 
    },
    container: {
         
        display:'flex',
        alignItems:'center',

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
      header: {
        color:'#f1f1f1',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
      },
      transactionContainer: {
        marginBottom: 10,
        padding: 10,
        
      },
      date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#f1f1f1',
      },
      transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
      },
      description: {
        fontSize: 16,
        color: '#333',
      },
      amount: {
        fontSize: 16,
        fontWeight: 'bold',
      },
});
export default styles;