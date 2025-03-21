import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form1 from 'screens/form1';
import Form2 from 'screens/form2';

import Overview from '../screens';

export type RootStackParamList = {
  Index: undefined;
  Form1: undefined;
  Form2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Overview} />
        <Stack.Screen
          name="Form1"
          component={Form1}
          options={{
            presentation: 'formSheet',
            sheetAllowedDetents: 'fitToContents',
          }}
        />
        <Stack.Screen
          name="Form1"
          component={Form2}
          options={{
            presentation: 'formSheet',
            sheetAllowedDetents: 'fitToContents',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
