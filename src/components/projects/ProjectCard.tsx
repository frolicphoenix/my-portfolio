import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { Project } from '../../data/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ICONS = {
  github: 'https://img.icons8.com/dusk/200/github.png',
  live:   'https://img.icons8.com/dusk/64/internet--v1.png',
  steam:  'https://img.icons8.com/plasticine/400/steam.png',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const shouldReduceMotion = useReducedMotion();

  const mediaElement = shouldReduceMotion || project.mediaType === 'image' ? (
    <img
      src={project.media}
      alt={project.mediaAlt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  ) : (
    <video
      src={project.thumb}
      poster={project.media}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
      aria-label={project.thumbAlt}
    />
  );

  const links = [
    { href: project.github, icon: ICONS.github, label: 'GitHub' },
    { href: project.liveDemo, icon: ICONS.live, label: 'Live Demo' },
    { href: project.steam, icon: ICONS.steam, label: 'Steam' },
  ].filter(link => link.href);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
          e.preventDefault();
        }
      }}
      className={`
        grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-5
        bg-[#121212]/60 rounded-lg p-4
        transition duration-300 ease-in-out
        cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#88a035]
        hover:-translate-y-1 hover:bg-[#1e1e1e]/80 hover:shadow-xl
      `}
    >
      <div className="w-full sm:w-[200px] aspect-video rounded overflow-hidden">
        {mediaElement}
      </div>

      <div className="flex flex-col">
        <h3 className="text-base sm:text-lg font-medium mb-1 text-white">
          {project.title}
        </h3>

        <ul role="list" className="flex flex-wrap gap-1 mb-2">
          {project.tags.map((tag, idx) => (
            <li key={idx} aria-hidden="true">
              <span
                className={`
                  text-xs sm:text-sm px-2 py-0.5 rounded-full whitespace-nowrap
                  ${tag.isWebTag ? 'bg-[#506b2d]/20' : 'bg-[#88a035]/20'}
                  text-[#bbcf64]
                `}
              >
                {tag.label}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-sm sm:text-base opacity-80 text-gray-300">
          {project.description}
        </p>

        <div className="flex mt-2 gap-2">
          {links.map(({ href, icon, label }, idx) => (
            <a
              key={idx}
              href={href!}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#88a035] hover:bg-[#bbcf64]/20"
            >
              <img
                src={icon}
                alt={label}
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
