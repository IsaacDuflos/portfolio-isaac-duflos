import Image from 'next/image';
import Link from "next/link";

type Project = {
    id: number;
    name: string;
    link: string;
    image: string;
    description?: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: 'Flatcraft',
        link: 'https://www.example.com',
        image: '/flatcraft.png',
        description: 'Développement du jeu FlatCraft en Java qui' +
            ' s\'apparente au célébre jeu Minecraft en 2D.' +
            ' Nous avons du implémenter les nouvelles fonctionnalités au fur et à mesure ' +
            'de l\'avancée du projet. Un exemple de fonctionnalité est l\'ajout de ' +
            'dimension ou encore de créature en plus du joueur par exemple.' +
            ' Un projet réalisé en équipe de 3 personnes. Dont Baptiste Toilliez et Nathan Cartegnie',
    },
    {
        id: 2,
        name: 'Bomberman',
        link: 'https://www.example.com',
        image: '/bomberman.png',
        description: 'Le très célèbre jeu Bomberman réalisé en Java. Un projet réalisé en équipe de 4 personnes.' +
            ' Dont Axel Rivère, Bylel Bourhim et Quentin Tripogniez ' +
            'Ce projet m\'a permis d\'approfondir mes connaissances en Java ainsi que de ' +
            'm\'entrainer en programmation. En plus de cela comme je suis intéressé par le développement de jeux vidéo, ce projet me plaît beaucoup !' ,
    },
    {
        id: 3,
        name: 'JO 2024',
        link: 'https://www.example.com',
        image: '/jo2024.png',
        description: 'Création d\'un site web en Laravel présentant les différents jeux des JO de 2024.' +
            ' Possibilité de créer un nouveau jeu, de le modifier ou encore de le supprimer si on a un profil admin ou que l\'on est connecté au compte qui a créé le jeu. ' +
            'Il est aussi possible de les filtrer selon différents critères. ' +
            'Un projet réalisé seul.',
    },
    {
        id: 4,
        name: 'POKEDEX',
        link: 'https://www.example.com',
        image: '/pokedex.png',
        description: 'Implémentation d’un Pokédex en Flask. ' +
            'Cela comprend la conception, l\'implémentation et le remplissage d\'une base de données appropriée. Mais aussi la récupération des données d\'une API fournie. ' +
            'Et finalement la création des fichiers HTML et CSS. Un projet réalisé en équipe de 5.' +
            'Avec l\'aide de Baptiste Toilliez, Nathan Cartegnie, Thomas Juet et Alexandre Vallet.',
    },
    {
        id: 5,
        name: 'PORTFOLIO (EN CONSTRUCTION)',
        link: 'https://www.example.com',
        image: '/logo_terminal.png',
        description: 'Le projet sur lequel vous êtes actuellement ! ' +
            'Ce projet me permet de faire une introspection sur mes compétences en développement web. ' +
            'En plus de cela, ce projet m\'a permis d\'apprendre une nouvelle technologie (Next JS). ' +
            'Le logo que vous voyez ici représente ce que j\'aime pour en savoir plus allez voir dans la section \"A propos\"' +
            ' Un projet réalisé seul.',

    },
    {
        id: 6,
        name: 'RTX',
        link: 'https://www.example.com',
        image: '/rtx.png',
        description: 'Implémentation d\'un lanceur de rayon en java permettant de générer des rendus 3D avec la gestion des ombres et des reflets. Des calculs d\'intersections entre les objets sont effectués afin d\'afficher correctement les ombres et les formes ou encore d\'autres calculs pour les couleurs. ' +
            'Un projet réalisé en groupe de avec l\'aide de Baptiste Toilliez  et Nathan Cartegnie .',
    },

];

export default function ProjectPage({ params }: { params: { id: string } }) {
    const projectId = parseInt(params.id, 10);
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={"container"}>
            <Link href={'/projects'} className={"backLink"}>Back to projects</Link>
            <h1 className={"project-title"}>{project.name}</h1>
            <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={300}
                className={"project-image-precise"}
            />
            <p className={"project-description"}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit project
            </a>
        </div>
    );
}
