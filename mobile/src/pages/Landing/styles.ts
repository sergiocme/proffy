import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257e5',
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    marginTop: 80,
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    color: '#fff',
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;
