import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Main from "./Components/Main";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faMinusCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlusCircle, faMinusCircle, faStar);

function App() {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + Number(products[i].price) * products[i].quantity;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-luc.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>En cours de chargement ...</p>
      ) : (
        <>
          <Header />
          <Hero data={data} />
          <Main
            data={data}
            products={products}
            setProducts={setProducts}
            total={total}
          />
        </>
      )}
    </div>
  );
}

export default App;
