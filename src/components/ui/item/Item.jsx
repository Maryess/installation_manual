import { Paper, Typography } from '@mui/material';
import { SiMinecraft } from 'react-icons/si';
import styles from './Item.module.scss';

export default function Item(props) {
	return (
		<Paper
			className={styles.images}
			sx={{
				position: 'relative',
				backgroundColor: 'grey.400',
				color: '#fff',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				justifyContent: 'center',
				alignItems: 'center',
				height: '300px',
				display: 'flex',
				flexDirection: 'column',
				borderRadius: '10px',
				p: 4,
			}}
			elevation={10}
		>
			<Typography variant='h3'>{props.items.information}</Typography>

			<Typography>
				<SiMinecraft className={styles.minecraft_logo} />
			</Typography>
		</Paper>
	);
}
