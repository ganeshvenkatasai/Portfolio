import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="StartUpSync Platform"
          des="Developing a collaborative StartUp Platform, enabling users to initiate, plan, and manage startup ventures seamlessly. Implementing Real time features for project collaboration and engaging environment using Microservice architecture."
          src={projectOne}
          websitelink="https://github.com/orgs/GVSGRD/repositories"
          githublink="https://github.com/orgs/GVSGRD/repositories"
        />
        <ProjectsCard
          title="Currency Detection Application"
          des="An application was created for blind people to detect the value of currency. Utilized Teachable Machine for training the Convolutional Neural Network. Captures and recognizes currency value from images and provides audio output."
          src={projectTwo}
          websitelink="https://www.youtube.com/watch?v=qYXBnjWnfUs"
          githublink="https://www.youtube.com/watch?v=qYXBnjWnfUs"
        />
        <ProjectsCard
          title="Mobile Price Prediction Website"
          des="Designed a website for mobile price prediction with an intake of given specifications. Used Linear Regression to train the model with Kaggle data set of 10000 records. By giving the required specifications, it predicts the mobile price."
          src={projectThree}
          websitelink="https://github.com/ganeshvenkatasai/mobile_price_prediction"
          githublink="https://github.com/ganeshvenkatasai/mobile_price_prediction"
        />
      </div>
    </section>
  );
};

export default Projects;
