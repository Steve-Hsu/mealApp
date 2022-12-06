import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data';


function CategoriesScreen({navigation}){
  function renderCategoryItem(data){
    function pressHandler(){
      navigation.navigate("MealsOverview");
    } 
    return <CategoryGridTile 
      title={data.item.title} 
      color={data.item.color}
      onPress={pressHandler}
      />
  }

  return (<FlatList 
    data={CATEGORIES} 
    keyExtractor={(item)=>item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}
    /> )
}
export default CategoriesScreen;