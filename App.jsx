import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TodolistScreen from './screens/TodolistScreen';
import AboutScreen from './screens/AboutScreen';
import { CounterProvider } from './context/CounterContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CounterProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Todolist" component={TodolistScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CounterProvider>
  );
}
