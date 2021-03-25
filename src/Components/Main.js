// import Category from "./Category";
import Meal from "./Meal";
import Cart from "./Cart";

const Main = (props) => {
  return (
    <div className="container-Main">
      <Cart
        products={props.products}
        setProducts={props.setProducts}
        total={props.total}
      />
      {props.data.categories.map((category, index) => {
        if (category.meals.length === 0) {
          return null;
        } else {
          return (
            <div className="container-category" key={index}>
              <h2> {category.name} </h2>
              <div className="category">
                {category.meals.map((meal, index) => {
                  return (
                    <div key={index}>
                      <Meal
                        meal={meal}
                        category={props.category}
                        products={props.products}
                        setProducts={props.setProducts}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Main;
