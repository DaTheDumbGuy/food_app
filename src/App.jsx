import { useState } from "react";
import Search from "./components/Search/Search";
import FoodList from "./components/FoodList/FoodList";
import Nav from "./components/Nav/Nav";
import "./App.css";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  );
}

export default App;
