// CSS
import styles from "./about.module.scss";
// Images
import perfil from "../../assets/perfil.svg";
// React-icons
import { MdSmartphone, MdLocationCity, MdOutlineEmail } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';
import { AiFillLinkedin } from 'react-icons/ai';

export function About() {
	return (
		<section id="about" className={styles.container}>
			<div className={styles.content}>
				<div className={styles.image_container}>
					<img src={perfil} alt="Foto de perfil" />
				</div>
				<div className={styles.about_container}>
					<h2>Sobre</h2>
					<p>
						Tendo terminado o ensino médio no ano passado minha cabeça se encheu
						de dúvidas sobre o que fazer da minha vida a partir daquele momento,
						depois de muita pesquisa comecei a descobrir a programação, sempre
						buscando novos ensinamentos por meio de grandes instituições de
						ensino da área como a
						<a href="https://www.rocketseat.com.br/"> RocketSeat</a>, canais no
						youtube como o
						<a href="https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ">
							{" "}
							Curso em Vídeo
						</a>
						, hoje estou estudando na
						<a href="https://www.betrybe.com/"> Trybe</a>, onde venho aprendendo
						cada vez mais e buscando uma oportunidade no mercado.
					</p>
					<div className={styles.contact_container}>
            <div>
              <h2>Detalhes de contato</h2>
              <ul>
                <li>
                  <MdSmartphone />
                  73 98191-0468
                </li>
                <li>
                  <MdLocationCity />
                  Teixeira de Freitas, BA
                </li>
                <li>
                  <MdOutlineEmail />
                  kauancarvalho987@gmail.com
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kauancarvalhodev/">
                    <AiFillLinkedin />
                    kauancarvalhodev
                  </a>
                </li>
              </ul>
            </div>
              <a
                href="../../files/resume.pdf"
                download="kauancarvalhodev.pdf"
                className={styles.download_button}
                type="application/pdf"
              >
                <GiNotebook />
                Baixe meu currículo
              </a>
					</div>
				</div>
			</div>
		</section>
	);
}
