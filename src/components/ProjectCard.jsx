export default function ProjectCard({ title, image, description }) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="project" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
