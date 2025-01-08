import { CATEGORIES } from "../data/dummy-data";
import { View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function rendercategorisItem(itemData) {
    function presshandler() {
      navigation.navigate("MealsOverView", {
        categoryid: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={presshandler}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={rendercategorisItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;