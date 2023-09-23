import classNames from 'classnames';
import { Prato } from 'types/Prato';
import style from './Item.module.scss';

function Item(props: Prato) {
	const { title, description, category, size, serving, price, photo } = props;

	return (
		<div className={style.item}>
			<div className={style.item__imagem}>
				<img src={photo} alt={title}/>
			</div>

			<div className={style.item__descricao}>
				<div className={style.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>

				<div className={style.item__tags}>
					<div className={classNames(
						style.item__tipo,
						style[`item__tipo__${category.label.toLowerCase()}`]
					)}>
						{category.label}
					</div>
					<div className={style.item__porcao}>
						{size}g
					</div>
					<div className={style.item__qtdpessoas}>
                        Serve {serving} {serving === 1 ? 'pessoa' : 'pessoas'}
					</div>
					<div className={style.item__valor}>
                        R$ {price.toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Item;