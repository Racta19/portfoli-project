//jshint esversion: 6
import CategoryItem from "../catagory-item/category-item.component";
import "./direcctory.styles.scss"
const Directory = ({ catagories }) => {
    return(
        <div className="directory-container">
      {catagories.map(( category ) => (
        <CategoryItem key={category.id} category= {category} />
      ))}
    </div>
    );
};

export default Directory;