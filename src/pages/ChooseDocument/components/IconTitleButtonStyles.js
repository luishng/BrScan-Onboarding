import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA4335',
  },
  button: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: '#EA4335',
    width: Dimensions.get('window').width,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    letterSpacing: 2,
    fontFamily: 'IBMPlexSans',
  },
});

export default styles;
