// CSS
import styles from './navBar.module.scss';
// Images
import perfil from '../../assets/perfil.svg';
// Components
import { ActiveLink } from '../ActiveLink';
// React-icons
import { VscThreeBars } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
// React-hooks
import { useState } from 'react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src={perfil} alt="Foto de perfil"/>
        { isOpen ? (
          <AiOutlineClose onClick={() => setIsOpen(!isOpen)} className={styles.icons}/>
        ) : (
          <VscThreeBars className={styles.icons} onClick={() => setIsOpen(!isOpen)}/>
        )}
        <nav className={isOpen ? styles.menuIsOpen : ''}>
            <ActiveLink title="Home" href="home" activeClassName={styles.active}/>
            <ActiveLink title="Sobre" href="about" activeClassName={styles.active}/>
            <ActiveLink title="Tecnologias" href="technologies"  activeClassName={styles.active}/>
            <ActiveLink title="Projetos" href="projects" activeClassName={styles.active}/>
            <ActiveLink title="Contato" href="contact" activeClassName={styles.active}/>
        </nav>
      </div>
    </header>
  )
}

