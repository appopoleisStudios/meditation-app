import { View, Text, SafeAreaView } from 'react-native';
import HomeScreen from '@/app/screens/HomeScreen'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import WelcomeScreen from './screens/WelcomeScreen';
export default function App() {
  return (
    <SafeAreaView >
      {/* <HomeScreen/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <WelcomeScreen/>
    </SafeAreaView>
  );
}
