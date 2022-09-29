import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16 pt-4 w-full h-auto bg-gray-700'>
      <h1 className='text-4xl font-bold border-b-4 text-white border-gray-500 p-2 inline'>My Projects</h1>
      <div className='grid md:grid-cols-3 grid-cols-1 justify-center place-items-center w-[80vw] h-auto'>
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;