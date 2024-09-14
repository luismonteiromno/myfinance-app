import { StyleSheet } from 'react-native';
import Svg, { ClipPath } from 'react-native-svg';

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: 'rgba(23, 21, 59, 1)',
    borderLeftWidth:'1px',
    borderEndWidth:'1px',
    borderBottomWidth:'1px',
    borderEndEndRadius:'1rem',
    borderEndStartRadius:'1rem',
    borderColor:'rgba(200, 172, 214, 1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const SVGComponet = (prompt) =>(
  <Svg
  
  />
)
export default styles;
