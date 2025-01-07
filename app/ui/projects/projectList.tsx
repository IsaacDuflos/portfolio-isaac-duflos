import Link from 'next/link';

type Project = {
    id: number;
    name: string;
    link: string;
    image: string;
};

type ProjectListProps = {
    projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className="project-grid">
            {projects.map((project) => (
                <div key={project.id} className="project-item">
                    <Link href={`/projects/${project.id}`}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <p>{project.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;