import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import style from './Menu.module.scss';

function Menu() {
	const rotas = [
		{
			label: 'Início',
			to: '/'
		},
		{
			label: 'Cardápio',
			to: '/cardapio'
		},
		{
			label: 'Sobre',
			to: '/sobre'
		}
	];

    return (
        <nav className={style.menu}>
            <Logo/>

			<ul className={style.menu__list}>
				{rotas.map((rota, index) => (
					<li className={style.menu__link} key={index}>
						<Link to={rota.to} className={style.menu__link}>
							{rota.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
    );
}

export default Menu;