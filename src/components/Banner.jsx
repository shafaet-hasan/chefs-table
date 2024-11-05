import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
  className="grid min-h-[55vh] hero-overlay rounded-xl w-full place-items-center object-cover bg-cover "
  style={{
    backgroundImage: "url(https://www.bestchoiceschools.com/wp-content/uploads/2021/09/shutterstock_1758966962-1024x683.jpg)",
  }}>

  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
      Chef’s Table is a critically acclaimed documentary series on Netflix that offers an intimate look into the lives, philosophies, and culinary artistry of some of the world’s most renowned chefs. Each episode delves deeply into the personal stories of a different chef, exploring their journey, inspirations, and the struggles they overcame to reach the pinnacle of the culinary world.
      </p>
      <div className=''>
      <button className="btn btn-success mr-5"><a href="#target">Explore Now</a></button>
      <button className="btn btn-outline text-white"> <a href="#target-1">Our Feedback</a></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;