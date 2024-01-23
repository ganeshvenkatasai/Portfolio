import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Backend Developer"  
          desc="Experienced backend developer proficient in designing and implementing robust server-side architecture"
          icon={<FaMobile />}
        />
        <Card
          title="Programmer"
          desc="Passionate competitive programmer skilled in solving algorithmic challenges and optimizing code efficiency to excel in coding"
          icon={<SiAntdesign />}
        />
        <Card
          title="Tech Enthusiast"
          desc="Dedicated tech enthusiast with a fervent curiosity for emerging technologies and a commitment to staying abreast of the latest"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
