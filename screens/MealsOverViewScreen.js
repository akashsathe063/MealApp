import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealsList";

function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryid;

  const diplayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={diplayMeals} navigation={navigation} />;
}

export default MealsOverViewScreen;
