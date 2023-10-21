import React from 'react'
const About = () => {
  return (
    <div
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>

      <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, esse animi cum repellat libero voluptatibus corporis ullam iure a, facere eius aspernatur quisquam aliquid. Libero aperiam molestias, cum deleniti illo error eos necessitatibus nesciunt consequatur, id voluptate! Sint ratione corrupti accusamus fuga similique, cupiditate sit tempore culpa? Voluptatibus, minus quis?</p>

      <br/>

      <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque optio rerum amet quas architecto labore qui quidem aliquam eos odio.
      </p>
    </div>
    </div>
  );
};

export default About;
