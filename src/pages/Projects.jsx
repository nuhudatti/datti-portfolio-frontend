import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Weather App",
    image: "https://via.placeholder.com/300",
    description: "A simple weather forecast app."
  },
  {
    title: "Todo List",
    image: "https://via.placeholder.com/300",
    description: "Keep track of your tasks."
  }
];

export default function Projects() {
  return (
    <div className="container my-4">
      <h2>My Projects</h2>
      <div className="d-flex flex-wrap">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
