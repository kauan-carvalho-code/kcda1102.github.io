// CSS 
import styles from './styles.module.scss';
// React-icons
import { IoIosArrowDown } from 'react-icons/io';
// React-hooks
import { useState } from 'react';

interface ProjectCollapseProps {
  imageSrc: string;
  imageAlt: string;
  content: string;
  href: string;
  repositoryHref: string;
}

export function ProjectCollapse({imageSrc, imageAlt, content, href, repositoryHref}: ProjectCollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.collapse_field}>
      <div className={styles.collapse_header} onClick={() => setIsOpen(!isOpen)}>
        <img src={imageSrc} alt={imageAlt} />
        <IoIosArrowDown className={isOpen ? styles.isOpen : ''} />
      </div>
      <div className={`${styles.collapse_content} ${isOpen && styles.isOpen}`}>
        <p>{content}</p>
        <a href={href}>Dê uma olhada</a>
        <a href={repositoryHref}>Repositório</a>
      </div>
    </div>

  )
}