import { useEffect, useState } from "react";


const Recipes = ({addRecipeToQueue}) => {
    const [recipes,setRecipes] = useState([])

    useEffect(() => {

      fetch('/public/recepies.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
          recipes.map(recipe => 
          <div key={recipe.recipe_id}className="card bg-base-100 shadow-xl shadow-xl mb-8 mr-2 border-2">
            <figure className="px-8 pt-6">
              <img className="w-full h-52 rounded-xl"
                src={recipe.recipe_image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-semibold text-xl text-gray-800">{recipe.recipe_name}</h2>
              <p className="text-base text-gray-600">{recipe.short_description}</p>
              <h3 className="font-semibold">Ingredients: {recipe.ingredients.length}</h3>
              <ul className="ml-8">{
                recipe.ingredients.map((item,idx) => (<li className="list-disc" key={idx}>{item}</li>
                ))}
                
              </ul>
              <div className="flex gap-4">
                <div className="flex gap-2 justify-center items-center">
                <i className="fa-regular fa-clock text-2xl"></i>
                <h3>{recipe.preparing_time}</h3>
                </div>
                <div className="flex gap-2 justify-center items-center">
                <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                <h3>{recipe.calories}</h3>
                </div>

              </div>
              <div className="card-actions ">
                <button onClick={() => addRecipeToQueue(recipe)} className="btn btn-success rounded-full font-medium text-lg px-8 mt-6 text-gray-800">Want to Cook</button>
              </div>
            </div>
          </div>)
        }
        </div>
        </div>
    );
};

export default Recipes;