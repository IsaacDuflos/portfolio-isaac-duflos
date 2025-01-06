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
        <ul>
            {projects.map((project, index) => (
                <li key={index} className="project-item">
                    <Link href={`/projects/${project.id}`}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <p>{project.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProjectList;