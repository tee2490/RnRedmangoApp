import { StatusBar } from 'expo-status-bar';
import { Navigators } from './src/navigates';

export default function App() {
  return (
    <>
      <Navigators/>
      <StatusBar style="dark" />
    </>
  );
}

