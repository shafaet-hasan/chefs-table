import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipe from "./components/OurRecipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [recipeQueue, setrecipeQueue] =useState([])
  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setrecipeQueue([...recipeQueue,recipe])
    }
    else{
      alert("Item already in Queue")
    }
    
  }
  console.log(recipeQueue)
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="flex gap-6 flex-col md:flex-row">
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        <Sidebar recipeQueue = {recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;