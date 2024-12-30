import 'react-native-gesture-handler';

import StackRoutes from './src/routes/StackRoutes'
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}
