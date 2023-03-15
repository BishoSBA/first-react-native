import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'RubikIso-Regular',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    color: 'black',
  },
  button: {
    minWidth: 150,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  update: {
    backgroundColor: 'blue',
  },
  delete: {
    backgroundColor: 'red',
  },
  listItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});

export default styles;
