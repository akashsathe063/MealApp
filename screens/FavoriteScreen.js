import MealList from "../components/MealList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

function FavoriteScreen({ navigation }) {
  // const favoriteMealsContext = useContext(FavoritesContext);

  const favoritesMealIds = useSelector((state) => state.favoritieMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsContext.ids.includes(meal.id)
    favoritesMealIds.includes(meal.id)
  );
  // if (favoriteMeals.length === 0) {
  //   return (
  //     <View style={styles.rootContainer}>
  //       <Text style={styles.title}>You have no favorite meals yet.</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.rootContainer}>
      {favoriteMeals.length === 0 ? (
        <Text style={styles.title}>You have no favorite meals yet.</Text>
      ) : (
        <MealList items={favoriteMeals} navigation={navigation} />
      )}
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f2f25",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
