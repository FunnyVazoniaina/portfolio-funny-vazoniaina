import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

const ProjectCard = ({
  title,
  description,
  technologies = [],
  link,
  githubLink,
  image,
  isDark,
  onLiveDemoClick,
}) => {
  const { t } = useTranslation();
  const projectImage = image || `/images/project-placeholder.jpg`;
  const isYoutubeLink = link && (link.includes('youtube.com') || link.includes('youtu.be'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative bg-[#181210] border border-[#4e342e]/40 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
    >
      {/* Star Icon */}
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-br from-[#4e342e] to-[#bca18d] text-white w-9 h-9 flex items-center justify-center rounded-full shadow-md group-hover:scale-110 group-hover:rotate-12 transition">
        <FaStar className="text-lg" />
      </div>
      {/* Project Image */}
      <div className="h-44 w-full overflow-hidden relative">
        <img
          src={projectImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181210] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-[#bca18d]">{title}</h3>
        <p className="text-sm text-[#e0cfc2] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-[#4e342e]/80 to-[#bca18d]/60 text-[#f3e9e1] text-xs px-3 py-1 rounded-full font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {/* Live Demo / Youtube */}
          <motion.a
            as={isYoutubeLink && onLiveDemoClick ? 'button' : 'a'}
            href={isYoutubeLink && onLiveDemoClick ? undefined : link}
            type={isYoutubeLink && onLiveDemoClick ? 'button' : undefined}
            target={isYoutubeLink ? undefined : '_blank'}
            rel={isYoutubeLink ? undefined : 'noopener noreferrer'}
            onClick={
              isYoutubeLink && onLiveDemoClick
                ? (e) => {
                    e.preventDefault();
                    onLiveDemoClick();
                  }
                : undefined
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4e342e] to-[#bca18d] text-white px-4 py-2 rounded-lg font-semibold shadow transition hover:from-[#3b241a] hover:to-[#bca18d]/80"
          >
            <FaExternalLinkAlt /> {t('viewProject')}
          </motion.a>
          {/* GitHub */}
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-[#bca18d] text-[#bca18d] px-4 py-2 rounded-lg font-semibold transition hover:bg-[#4e342e]/80 hover:text-white"
            >
              <FaGithub /> GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
