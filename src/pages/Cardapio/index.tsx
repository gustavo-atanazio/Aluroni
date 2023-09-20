import { useState } from 'react';

import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

import style from './Cardapio.module.scss';

function Cardapio() {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');

	return (
		<section className={style.cardapio}>
			<h3 className={style.cardapio__titulo}>Cardápio</h3>
			<Buscador
				busca={busca}
				setBusca={setBusca}
			/>

			<div className={style.cardapio__filtros}>
				<Filtros
					filtro={filtro}
					setFiltro={setFiltro}
				/>
				<Ordenador
					ordenador={ordenador}
					setOrdenador={setOrdenador}
				/>
			</div>

			<Itens
				busca={busca}
				filtro={filtro}
				ordenador={ordenador}
			/>
		</section>
	);
}

export default Cardapio;