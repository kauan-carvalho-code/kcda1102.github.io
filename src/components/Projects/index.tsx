// Components
import { ProjectCollapse } from "../ProjectCollapse";
// Images
import rocketShoes from "../../assets/rocketShoes.svg";
import dtmoney from "../../assets/dtmoney.svg";
import igNews from "../../assets/igNews.svg";
// CSS
import styles from "./projects.module.scss";

export function Projects() {
	return (
		<section className={styles.container} id="projects">
			<div className={styles.content}>
				<h2>Olhe alguns dos meus projetos</h2>
        <hr></hr>
        <div className={styles.collapses_container}>
          <ProjectCollapse
            imageSrc={rocketShoes}
            imageAlt="RocketShoes"
            content="Projeto de loja de tênis"
            href="/"
          />
          <ProjectCollapse
            imageSrc={igNews}
            imageAlt="igNews"
            content="Projeto de site de notícias"
            href="/"
          />
          <ProjectCollapse
            imageSrc={dtmoney}
            imageAlt="DTMoney"
            content="Projeto de app de controle de finanças"
            href="/"
          />
        </div>
			</div>
		</section>
	);
}
