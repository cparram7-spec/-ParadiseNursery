import Header from "./Header";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    {
      id: 1,
      category: "Air Purifying Plants",
      name: "Snake Plant",
      price: 25,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      category: "Air Purifying Plants",
      name: "Peace Lily",
      price: 30,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      category: "Succulents",
      name: "Aloe Vera",
      price: 15,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      category: "Succulents",
      name: "Jade Plant",
      price: 18,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      category: "Tropical Plants",
      name: "Monstera",
      price: 40,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      category: "Tropical Plants",
      name: "Pothos",
      price: 22,
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <>
      <Header />

      <h1>Indoor Plants</h1>

      {["Air Purifying Plants", "Succulents", "Tropical Plants"].map(
        (category) => (
          <div key={category}>
            <h2>{category}</h2>

            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id}>
                  {plant.image}

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        )
      )}
    </>
  );
}

export default ProductList;