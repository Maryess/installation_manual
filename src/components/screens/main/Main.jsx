import Carousel from 'react-material-ui-carousel';
import Item from '../../ui/item/Item';
import styles from './Main.module.scss';

export default function Main() {
	const items = [
		{
			name: 'minecraft_image-1',
			path: '../../../assets/images/minecraft.jpg',
			information: 'Скачивайте сборки',
		},
		{
			name: 'minecraft_image-3',
			path: '../../../assets/images/main.jpg',
			information: 'Играйте и наслаждайтесь',
		},
		{
			name: 'minecraft_image-2',
			path: '../../../assets/images/main.jpg',
			information: 'Приветствуем на руководстве!',
		},
	];

	return (
		<div className={styles.main}>
			<header>
				<Carousel
					animation='slide'
					indicators={true}
					timeout={500}
					navButtonsAlwaysVisible={true}
					navButtonsAlwaysInvisible={false}
					cycleNavigation={true}
					fullHeightHover={false}
					sx={{
						maxWidth: '100%',
						flexGrow: 1,
						margin: 'auto',
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
					<li>
						1.Установите TLauncher.
						<a href='https://tlauncher.org/'>Перейдите по ссылке</a>
					</li>
					<li>
						2.Затем установите желаемую версии игры, которая подходит для сборки
						модов.
						<div>
							<img
								className={styles.install}
								src='../../../assets/images/install_1.png'
								alt=''
							/>
						</div>
					</li>
					<li>
						3.Откройте папку игры. Это можно сделать либо через команндую строку
						либо в самом лаучере.
					</li>
					<li>4.Надите папку mods</li>
					<li>
						5.Затем установите сборку с нашего руководства.Ссылка на яндекс диск
					</li>
					<li>6.Скопируйте моды и вставьте в папку mods</li>
					Можете запускать игру и наслаждаться!
				</ul>
			</footer>
		</div>
	);
}
