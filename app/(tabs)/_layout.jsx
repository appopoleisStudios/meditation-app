import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { usePathname } from 'expo-router';
import { useRoute } from '@react-navigation/native';
export default function TabLayout() {
  const TabBarStyle = {
    // padding: 25,
    height: 80,
    paddingBottom: 20,
    // backgroundColor: "red",

  }
  // const pathname = usePathname()
  // console.log(pathname.split('/')[1])
  // const route = useRoute()
  // console.log(route)
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}>
         <Tabs.Screen name='home' options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color, focused})=><MaterialCommunityIcons name="home-variant-outline" size={24} color={focused? "white" : color} />,
          tabBarActiveBackgroundColor: "#8E97FD",
          tabBarActiveTintColor: "white",
          tabBarStyle:TabBarStyle
         }}/>
         <Tabs.Screen name='sleep' options={{
          tabBarLabel: "Sleep",
          tabBarIcon: ({color, focused})=><Feather name="moon" size={24} color={focused? "white" : color} />,
          tabBarActiveBackgroundColor: "#8E97FD",
          tabBarActiveTintColor: "white",

          tabBarStyle:TabBarStyle
         }}/>
         
         <Tabs.Screen name='meditate' options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({color, focused})=><MaterialCommunityIcons name="chart-bubble" size={24} color={focused? "white" : color} />,
          tabBarActiveBackgroundColor: "#8E97FD",
          tabBarActiveTintColor: "white",

          tabBarStyle:TabBarStyle
        }}/>
         <Tabs.Screen name='music' options={{
           tabBarLabel: "Music",
           tabBarIcon: ({color, focused})=><Feather name="music" size={24} color={focused? "white" : color} />,
          tabBarActiveBackgroundColor: "#8E97FD",
          tabBarActiveTintColor: "white",

          tabBarStyle:TabBarStyle

          }}/>
         <Tabs.Screen name='afsar' options={{
           tabBarLabel: "Afsar",
           tabBarIcon: ({color, focused})=><FontAwesome5 name="user" size={24} color={focused? "white" : color} 
          //  style={[focused?{backgroundColor: "#8E97FD"}: {backgroundColor: "white"}, {padding: 5, borderRadius: 8, height: 40, width: 40}]} 
           />,
          tabBarActiveBackgroundColor: "#8E97FD",
          tabBarActiveTintColor: "white",

          tabBarStyle:TabBarStyle

         }}/>
    </Tabs>
  );
}
