import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipe from "./components/OurRecipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


const App = () => {
  const [recipeQueue, setrecipeQueue] =useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const handleRemove = id => {
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setrecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe,deletedRecipe])
  }
  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setrecipeQueue([...recipeQueue,recipe])
    }
    else{
      alert("Item already in Queue")
    }
    
  }
  const calculate = (time, calories) =>{
    setTotalTime (totalTime + time)
    setTotalCalories(totalCalories +calories)
  }
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="flex gap-6 flex-col md:flex-row">
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        <Sidebar handleRemove = {handleRemove} recipeQueue = {recipeQueue} preparedRecipe = {preparedRecipe} calculate ={calculate} totalTime ={totalTime} totalCalories={totalCalories}></Sidebar>
      </section>
      <section className="w-full">
      <Footer></Footer>
      </section>
    </div>
    
  );
};

export default App;