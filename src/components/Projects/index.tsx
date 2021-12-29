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
            content="Uma loja de tênis com um carrinho de compras 100% funcional, foi desenvolvido usando Typescript, React, styled-components e JSON Server."
            href="/"
            repositoryHref="https://github.com/kcda1102/ignite-criando-hook-de-carrinho-de-compras"
          />
          <ProjectCollapse
            imageSrc={igNews}
            imageAlt="igNews"
            content="Projeto de site de notícias"
            href="/"
            repositoryHref="https://github.com/kcda1102/ignite-ignews"
          />
          <ProjectCollapse
            imageSrc={dtmoney}
            imageAlt="DTMoney"
            content="Projeto de app de controle de finanças"
            href="/"
            repositoryHref="https://github.com/kcda1102/ignite-dtmoney"
          />
        </div>
			</div>
		</section>
	);
}
