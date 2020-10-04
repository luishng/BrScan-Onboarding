import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  buttonText: {
    color: 'red',
    fontSize: 13,
    letterSpacing: 2,
    fontFamily: 'IBMPlexSans',
  },
});

export default styles;
