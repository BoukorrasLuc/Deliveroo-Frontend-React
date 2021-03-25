import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  let livraison = 2.5;
  const empty = props.products.length === 0;
  console.log(props);

  return (
    <div className="container-cart">
      <button className={"btn-cart" + (empty ? " btn-cart-disabled" : "")}>
        Valider mon panier
      </button>
      {empty ? (
        <div className="cart-empty">Votre panier est vide</div>
      ) : (
        <div>
          {props.products.map((product, index) => {
            return (
              <div key={index}>
                <FontAwesomeIcon
                  className="icon"
                  icon="minus-circle"
                  onClick={() => {
                    //modifier l'état products
                    //copier le state
                    const newProducts = [...props.products];
                    //modifier le state
                    if (newProducts[index].quantity === 1) {
                      // retirer le produit quand la quantité est à 0
                      newProducts.splice(index, 1);
                    } else {
                      newProducts[index].quantity--;
                    }
                    // mettre à jour le state
                    props.setProducts(newProducts);
                  }}
                />
                <span>{product.quantity}</span>

                <FontAwesomeIcon
                  className="icon"
                  icon="plus-circle"
                  onClick={() => {
                    //copier le state
                    const newProducts = [...props.products];
                    //modifier le state
                    newProducts[index].quantity++;
                    // mettre à jour le state
                    props.setProducts(newProducts);
                  }}
                />
                <span className="product-title">{product.title}</span>
              </div>
            );
          })}
          <div className="price-cart">
            <div className="Sous-total">
              <span>Sous-total</span>
              <span>{props.total.toFixed(2).replace(".", ",")}€</span>
            </div>
            <div className="Livraison">
              <span>Frais de livraison</span> <span>2,50€</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>
                {(props.total + livraison).toFixed(2).replace(".", ",")}€
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
