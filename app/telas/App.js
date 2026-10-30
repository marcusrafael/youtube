import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VideosScreen from './VideosScreen.js';
import CadastrarVideoScreen from './CadastrarVideoScreen.js';
import { VideosProvider } from '../contextos/VideosContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <VideosProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Videos" component={VideosScreen} />
          <Stack.Screen name="CadastrarVideo" component={CadastrarVideoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </VideosProvider>
  );
}
