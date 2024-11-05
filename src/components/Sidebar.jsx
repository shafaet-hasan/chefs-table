

const Sidebar = ({recipeQueue, handleRemove, preparedRecipe, calculate,totalTime, totalCalories}) => {
    return (
        <div className='md:w-1/3 border-2 rounded-2xl text-gray-600 bg-base-100 p-2'>
         <div className="overflow-x-auto">
            <h2 className="border-b-2 font-semibold mx-auto p-2 text-2xl text-gray-800 text-center">Want to Cook : {recipeQueue.length} </h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {recipeQueue.map((recipe,idx )=>
      <tr key={idx} className="hover">
      <th>{idx+1}</th>
      <td>{recipe.recipe_name}</td>
      <td>{recipe.preparing_time}</td>
      <td>{recipe.calories}</td>
      <td>  
        <div className="card-actions ">
                <button onClick={() => { handleRemove(recipe.recipe_id)
                     calculate(recipe.preparing_time,recipe.calories)}}  className="btn btn-success rounded-full font-medium text-lg px-4 md:px-6 mt-1 text-gray-800">Preparing</button>
              </div>
      </td>
    </tr>
    )}
      
    </tbody>
  </table>
</div>

<div className="overflow-x-auto mt-8">
            <h2 className="border-b-2 font-semibold mx-auto p-2 text-2xl text-gray-800 text-center">Currently Cooking : {preparedRecipe.length} </h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
     
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {preparedRecipe.map((recipe,idx )=>
      <tr key={idx} className="hover">
        <th>{idx+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
     
    </tr>

   
    
    )}
     <tr >
    <td></td>
    <td></td>
    <td>Total Time = <p className="text-green-800 font-semibold">{totalTime}</p> </td>
    <td> Total Calories = <p className="text-green-800 font-semibold">{totalCalories}</p> </td>

    </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Sidebar;