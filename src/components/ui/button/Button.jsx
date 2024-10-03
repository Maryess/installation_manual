import styles from "./Button.module.scss";

export default function Button({ onClick, text, href, download }) {
	return (
		<button className={styles.button}>
			{download === "download" ? (
				<a href={href} onClick={onClick} download>
					{text}
				</a>
			) : (
				<a href={href} onClick={onClick}>
					{text}
				</a>
			)}
		</button>
	);
}
