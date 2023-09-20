import { ReactComponent as Logo } from 'assets/logo.svg';
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

			<ul>
				{rotas.map((rota, index) => (
					<li key={index}>
						<a href={rota.to}>{rota.label}</a>
					</li>
				))}
			</ul>
		</nav>
    );
}

export default Menu;