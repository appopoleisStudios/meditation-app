import { View, Text, SafeAreaView } from 'react-native';
import HomeScreen from '@/app/screens/HomeScreen'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
export default function App() {
  return (
    <SafeAreaView >
      {/* <HomeScreen/> */}
      {/* <SignIn/> */}
      <SignUp/>
    </SafeAreaView>
  );
}
