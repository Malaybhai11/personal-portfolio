const projects = [
  {
    id: 1,
    title: "Instagram Automation",
    description: "Python-based automation scripts using Selenium for Instagram engagement and analytics.",
    category: "python",
    link: "#"
  },
  {
    id: 2,
    title: "Car Learning App",
    description: "Android application focused on automotive education and specifications (In Development).",
    category: "mobile",
    link: "#"
  },
  {
    id: 3,
    title: "Video Editing Portfolio",
    description: "Collection of edited automotive content and technical demonstrations.",
    category: "media",
    link: "#"
  },
  {
    id: 4,
    title: "Graphic Design Works",
    description: "Custom designs for automotive and tech-related projects.",
    category: "design",
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="view-more-btn">
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 