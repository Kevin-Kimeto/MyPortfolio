import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-center w-[300px] h-[300px] m-[32px] rounded-lg shadow-2xl"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="w-full h-[200px] bg-center bg-no-repeat bg-cover rounded-t-[15px]" />
      <h1 className='text-[25px]'> {name} </h1>
    </div>
  );
}

export default ProjectItem;