import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginTop: -26,
    marginBottom: 20,
  },
  input: {
    height: 52,
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    color: '#F2F2F2',
  },
  button: {
    height: 52,
    width: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
  },
  buttonText: {
    color: '#F2F2F2'
  }
});