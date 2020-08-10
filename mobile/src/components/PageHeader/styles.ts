import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    maxWidth: 160,
    marginVertical: 40,
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
  },
});

export default styles;
