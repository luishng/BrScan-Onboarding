import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E23E2E',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'IBMPlexSans',
  },
  cpf: {
    height: 40,
    color: '#fff',
    fontSize: 15,
    fontFamily: 'IBMPlexSans',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',

  },
  contentView: {
    flex: 2,
    marginHorizontal: 20,
  },
  imageView: {
    flex: .9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: .1,
  },
  bottomTextView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
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
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  bottomText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'IBMPlexSans',
  },
  bottomTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText2: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 20,
    fontFamily: 'IBMPlexSans',
    textDecorationLine: 'underline'
  },
  buttonText: {
    color: '#EA4335',
    marginVertical: 20,
    letterSpacing: 2,
    fontSize: 13,
    fontFamily: 'IBMPlexSans',
  },
});

export default styles;
