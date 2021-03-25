import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = (props) => {
  let smallDescription = "";
  const Textdescription = props.meal.description.split(" ");
  if (Textdescription.length > 6 && props.meal.picture) {
    smallDescription = Textdescription.splice(0, 8).join(" ") + "...";
  } else if (Textdescription.length >= 16 && !props.meal.picture) {
    smallDescription = Textdescription.splice(0, 16).join(" ") + "...";
  } else {
    smallDescription = props.meal.description;
  }
  return (
    <div
      className="container-meal"
      key={props.meal.id}
      onClick={() => {
        const newProducts = [...props.products];

        let isFound = false;
        for (let i = 0; i < props.products.length; i++) {
          if (props.products[i].id === props.meal.id) {
            newProducts[i].quantity++;
            isFound = true;
            break;
          }
        }
        if (isFound === false) {
          newProducts.push({
            title: props.meal.title,
            price: props.meal.price,
            quantity: 1,
            id: props.meal.id,
          });
        }

        props.setProducts(newProducts);
      }}
    >
      <div className="description-meal">
        <h3>{props.meal.title}</h3>
        <p>{smallDescription}</p>
        <div>
          <div className="price">{props.meal.price.replace(".", ",")} €</div>
          {props.meal.popular && (
            <div className="populaire">
              <FontAwesomeIcon icon="star" />
              Populaire
            </div>
          )}
        </div>
      </div>

      {props.meal.picture && (
        <img src={props.meal.picture} alt={props.meal.title} />
      )}
    </div>
  );
};
export default Meal;
