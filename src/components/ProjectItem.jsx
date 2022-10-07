import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-center w-[300px] h-[300px] m-[32px] rounded-sm shadow-2xl hover:scale-105 duration-500"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="w-full h-[200px] bg-center bg-no-repeat bg-cover rounded-t-[8px]" />
      <h1 className='text-[25px] mt-6 text-white'> {name} </h1>
    </div>
  );
}

export default ProjectItem;