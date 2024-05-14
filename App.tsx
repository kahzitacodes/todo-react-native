import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Home />
    </>
  );
}