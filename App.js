
import { StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <>
        <StatusBar barStyle={'dark-content'}/>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MealsCategories"  component={CategoriesScreen} />
            <Stack.Screen name="MealsOverview"  component={MealsOverviewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
});
