import { Stack, Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}>
         <Tabs.Screen name='home'  />
         <Tabs.Screen name='sleep'  />
         <Tabs.Screen name='meditate'  />
         <Tabs.Screen name='music'  />
         <Tabs.Screen name='afsar'  />
    </Tabs>
  );
}
