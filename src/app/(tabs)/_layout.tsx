import { colors } from '@/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function getTabIconName(routeName: string): keyof typeof Ionicons.glyphMap {
  switch (routeName) {
    case 'home':
      return 'home';
    case 'schedule':
      return 'calendar';
    case 'profile':
      return 'person';
    case 'maps':
      return 'map';
    default:
      return 'ellipse';
  }
}

const commonTabOptions = {
  tabBarActiveTintColor: colors.gold.base,
  tabBarInactiveTintColor: colors.gray.base,
  headerShown: false,
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          ...commonTabOptions,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={getTabIconName(route.name)} size={size} color={color} />
          ),
        })}
      >
        <Tabs.Screen name="home" options={{ title: 'Início' }} />
        <Tabs.Screen name="schedule" options={{ title: 'Agenda' }} />
        <Tabs.Screen name="maps" options={{ title: 'Mapa' }} />
        <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
      </Tabs>
    </GestureHandlerRootView>
  );
}
