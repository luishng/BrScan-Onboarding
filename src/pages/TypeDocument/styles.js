import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA4335',
  },
  iconView: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  button: {
    marginTop: 20,
  },
  textView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'IBMPlexSans',
    justifyContent: 'flex-start',
  },
  buttonView: {
    flex: 0.65,
  },
});

export default styles;
