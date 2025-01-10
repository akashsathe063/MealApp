import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealList({ items, navigation }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    function pressHandler() {
      return navigation.navigate("MealDetail", {
        mealId: itemData.item.id,
      });
    }
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
