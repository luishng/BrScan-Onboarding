import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'IBMPlexSans',
  },
  iconView: {
    flex: 0.05,
    marginHorizontal: 20,
  },
  buttonBack: {
    marginTop: 20,
  },
  description: {
    color: '#000',
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'IBMPlexSans',
  },
  description2: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'IBMPlexSans',
  },
  contentViewFull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  imageViewFull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: .1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewFull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
