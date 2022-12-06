import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data';


function renderCategoryItem(data){
  return <CategoryGridTile 
    title={data.item.title} 
    color={data.item.color}
    />
}

function CategoriesScreen(){
  return (<FlatList 
    data={CATEGORIES} 
    keyExtractor={(item)=>item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}
    /> )
}
export default CategoriesScreen;