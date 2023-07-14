//Components
import Work from "../components/Work/Work";
import Hero2 from "../components/Hero2/Hero2";

const Project = () => {
  return (
    <>
      <Hero2 title={"PROJECTS."} desc={"Some of my most recent works"} />
      <Work showAll={true} />
    </>
  );
};

export default Project;