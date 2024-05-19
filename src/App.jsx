import { useState } from "react";
import Search from "./components/Search/Search";
import FoodList from "./components/FoodList/FoodList";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import InnerContainer from "./components/InnerContainer/InnerContainer";
import "./App.css";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
