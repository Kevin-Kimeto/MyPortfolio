import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="flex flex-col justify-center items-center w-full h-[95vh] bg-gray-700">
            <h1 className="text-white md:text-4xl text-2xl mt-14 mb-6 font-semibold"> {project.name} </h1>
            <img src={project.image} className='md:w-[400px] w-4/5 md:h-[300px] h-[200px] rounded' />
            <div className="mt-4">
                <p className="text-3xl text-blue-500 text-center py-2">Skills:</p>
                <p className="text-2xl text-center text-white py-2">{project.skills}</p>
            </div>
            <div className="flex justify-between gap-20 mt-2 text-xl">
                <a href={project.link} className="border-b border-b-blue-600 text-blue-600 cursor-pointer">Demo</a>
                <a href="#" className="border-b border-b-blue-600 text-blue-600 cursor-pointer">Code</a>
            </div>
        </div>
    );
};

export default ProjectDisplay;