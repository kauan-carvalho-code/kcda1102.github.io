// CSS
import styles from "./technologies.module.scss";
// React-icons
import { DiCss3, DiGit, DiReact } from "react-icons/di";
import { SiDocker, SiJavascript, SiMysql, SiTypescript } from "react-icons/si";
// Components
import { TechnologieItem } from "../TechnologieItem";


export function Technologies() {
	return (
		<section className={styles.container} id="technologies">
			<div className={styles.content}>
				<h2>Tecnologias</h2>
				<hr />
				<ul>
					<TechnologieItem
						icon={<DiCss3 />}
						className={styles.cssIcon}
						href="https://www.w3.org/Style/CSS/Overview.en.html"
					/>
					<TechnologieItem
						icon={<DiReact />}
						className={styles.reactIcon}
						href="https://pt-br.reactjs.org"
					/>
					<TechnologieItem
						icon={<SiJavascript />}
						className={styles.jsIcon}
						href="https://www.javascript.com/"
					/>
					<TechnologieItem
						icon={<SiTypescript />}
						className={styles.tsIcon}
						href="https://www.typescriptlang.org/"
					/>
					<TechnologieItem
						icon={<DiGit />}
						className={styles.gitIcon}
						href="https://git-scm.com/"
					/>
					<TechnologieItem
						icon={<SiDocker />}
						className={styles.dockerIcon}
						href="https://www.docker.com/"
					/>
					<TechnologieItem
						icon={<SiMysql />}
						className={styles.mysqlIcon}
						href="https://www.mysql.com/"
					/>
				</ul>
			</div>
		</section>
	);
}

{
	/* <li>CSS</li>
          <li>REACT</li>
          <li>NEXTJS</li>
          <li>GIT</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>DOCKER</li>
          <li>MYSQL</li> */
}
