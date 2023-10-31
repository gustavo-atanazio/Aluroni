import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Tags from 'components/Tags';
import { Prato } from 'types/Prato';
import style from './Item.module.scss';

function Item(props: Prato) {
	const { title, description, photo, id } = props;
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`/prato/${id}`)} className={style.item}>
			<div className={style.item__imagem}>
				<img src={photo} alt={title}/>
			</div>

			<div className={style.item__descricao}>
				<div className={style.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>

				<Tags {...props}/>
			</div>
		</div>
	);
}

export default memo(Item);