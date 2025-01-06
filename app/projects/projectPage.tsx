import { useRouter } from 'next/router';

type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
};

type ProjectPageProps = {
    project: Project | null;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            {/* Display other project details here */}
        </div>
    );
};

export default ProjectPage;