import React from 'react';

const Sidebar = ({recipeQueue}) => {
    return (
        <div className='md:w-1/3'>
           <h3>Want to Cook  : {recipeQueue.length}</h3>
        </div>
    );
};

export default Sidebar;