import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-700">
            <h1 className="text-white text-4xl mb-4 font-semibold"> {project.name} </h1>
            <img src={project.image} className='md:w-[400px] w-4/5 md:h-[300px] h-[200px] rounded' />
            <div className="mt-4">
                <p className="text-3xl text-blue-500 text-center py-2">Skills:</p>
                <p className="text-2xl text-center text-white py-2">{project.skills}</p>
            </div>
            <div className="flex justify-between gap-24 mt-4 text-xl">
                <a href="#" className="border-b border-b-blue-600 text-blue-600 cursor-pointer">Demo</a>
                <a href="#" className="border-b border-b-blue-600 text-blue-600 cursor-pointer">Code</a>
            </div>
        </div>
    );
};

export default ProjectDisplay;