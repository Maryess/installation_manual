import styles from './Button.module.scss';

export default function Button({ onClick, text, href }) {
	return (
		<button className={styles.button}>
			<a href={href} onClick={onClick}>
				{text}
			</a>
		</button>
	);
}
