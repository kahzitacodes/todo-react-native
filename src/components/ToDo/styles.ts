import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  radioContainer: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#333333',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  radioContent: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  radio: {
    height: 24,
    width: 24,
    padding: 2,
    borderWidth: 2,
    borderRadius: 9999,
  },
  label: {
    color: '#F2F2F2',
    fontSize: 14,
  },
  labelSelected: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  radioDefault: {
    borderColor: '#4EA8DE',
  },
  radioSelected: {
    borderColor: '#5E60CE',
    backgroundColor: '#5E60CE',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCheck: {
  },
  trashButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});