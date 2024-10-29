import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'rgba(46, 35, 108, 1)', // Fundo roxo
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