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
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className=''>
      <button className="btn btn-success mr-5">Explore Now</button>
      <button className="btn btn-outline text-white">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;