// CSS
import styles from "./home.module.scss";
// React-icons
import { AiFillGithub } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';

export function Home() {
  return (
    <section className={styles.container} id="home">
      <div className={styles.resume}>
        <h1>Olá, eu sou o <br/><span>Kauan Carvalho</span></h1>
        <p>
          Eu sou um desenvolvedor <span>Front End </span>e uso <span>React</span> para 
          desenvolver as minhas páginas.<br />
          Esse é o meu portfólio.
        </p>
      </div>
      <hr />
      <div className={styles.buttons_container}>
        <a 
          href="https://github.com/kcda1102/kcda1102.github.io" 
          className={styles.project_button}
        >
          <RiGitRepositoryLine/>
          Repositório
        </a>
        <a 
          href="https://github.com/kcda1102" 
          className={styles.github_button}
        >
          <AiFillGithub/>
          Github
        </a>
      </div>
    </section>
  )
}