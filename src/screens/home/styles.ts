import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    gap: 16,
  },
  headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  'text-blue': {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700',
  },
  'text-purple': {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: '700',
  },
});