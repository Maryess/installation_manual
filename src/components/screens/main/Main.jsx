import Carousel from "react-material-ui-carousel";

import install_1 from "../../../../public/images/install_1.png";
import install_2 from "../../../../public/images/install_2.png";
import install_3 from "../../../../public/images/install_3.png";
import install_4 from "../../../../public/images/install_4.png";

import minecraft from "../../../assets/icons/minecraft.svg";
import optifine from "../../../assets/icons/optifine.svg";
import Button from "../../ui/button/Button";
import Item from "../../ui/item/Item";
import styles from "./Main.module.scss";

export default function Main() {
	const items = [
		{
			name: "minecraft_image-1",
			path: "../../../assets/images/minecraft.jpg",
			information: "Скачивайте сборки",
		},
		{
			name: "minecraft_image-3",
			path: "../../../assets/images/main.jpg",
			information: "Играйте и наслаждайтесь",
		},
		{
			name: "minecraft_image-2",
			path: "../../../assets/images/main.jpg",
			information: "Добро пожаловать!",
		},
	];

	return (
		<div className={styles.main}>
			<header>
				<Carousel
					animation="slide"
					indicators={true}
					timeout={500}
					navButtonsAlwaysVisible={true}
					navButtonsAlwaysInvisible={false}
					cycleNavigation={true}
					fullHeightHover={false}
					sx={{
						maxWidth: "100%",
						flexGrow: 1,
						margin: "auto",
						mt: 5,
					}}
				>
					{items.map((item, key) => (
						<Item key={key} path={item.path} items={item} />
					))}
				</Carousel>
			</header>
			<section className={styles.main_section}>
				<h2 className={styles.section_text}>Следуйте данным этапам</h2>
			</section>
			<footer className={styles.main_footer}>
				<ul className={styles.section_lists}>
					<li>1.Установите TLauncher.</li>
					<li>
						{" "}
						<Button href={"https://tlauncher.org/"} text={"Перейти на сайт"} />
					</li>
					<li>
						2.Затем установите желаемую версии игры, которая подходит для сборки
						модов.
					</li>
					<li>
						<img className={styles.install} src={install_1} alt="" />
						<img className={styles.install} src={install_2} alt="" />
					</li>
					<li>
						3.Откройте папку игры.Это можно сделать либо через командную строку
						либо в самом лаунчере.
					</li>
					<li>
						<img className={styles.install} src={install_3} alt="" />
					</li>
					<li>4.Надите папку .minecraft, а затем mods</li>
					<li>5.Скачайте сборку.</li>
					<li>
						<Button
							href={"https://disk.yandex.ru/d/xz3e-Os3LBalRw"}
							text={"СКАЧАТЬ"}
						/>
					</li>
					<li>6.Скопируйте моды и вставьте в папку mods</li>
					<li>
						<img className={styles.install} src={install_4} alt="" />
					</li>
					<li>Можете запускать игру и играть вместе с друзьями</li>
				</ul>

				<div className={styles.logo}>
					<img src={optifine} alt="" />
					<img src={minecraft} alt="" />
				</div>
			</footer>
		</div>
	);
}
