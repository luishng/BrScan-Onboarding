import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'IBMPlexSans',
    textAlign: 'center'
  },
  contentView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    flex: .9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: .1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#EA4335',
    width: Dimensions.get('window').width,
  },
  buttonText: {
    color: '#fff',
    marginVertical: 20,
    fontSize: 13,
    letterSpacing: 2,
    fontFamily: 'IBMPlexSans',
  },
});

export default styles;
