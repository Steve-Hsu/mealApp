import { Text, View, Pressable } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the meal Detail {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
