import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
         <Stack.Screen name="(tabs)" />
         <Stack.Screen name="HomeScreen" />
         <Stack.Screen name="SignUp" />
         <Stack.Screen name="SignIn" />
         <Stack.Screen name="WelcomeScreen" />
         <Stack.Screen name="TopicScreen" />
    </Stack>
  );
}