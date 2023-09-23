import { useEffect, useState } from 'react';
import Item from './Item';
import itens from 'data/cardapio.json';
import { Cardapio } from 'types/Prato';
import style from './Itens.module.scss';

interface ItensProps {
    busca: string
    filtro: number | null
    ordenador: string
}

function Itens(props: ItensProps) {
	const { busca, filtro, ordenador } = props;
	const [lista, setLista] = useState(itens);

	function testaBusca(title: string) {
		const regex = new RegExp(busca, 'i');
		return regex.test(title);
	}

	function testaFiltro(id: number) {
		if (filtro !== null) return filtro === id;
		return true;
	}

	function ordenar(novaLista: Cardapio) {
		switch (ordenador) {
		case 'porcao':
			return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);

		case 'qtd_pessoas':
			return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);

		case 'preco':
			return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);

		default:
			return novaLista;
		}
	}

	useEffect(() => {
		const novaLista = itens.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
		setLista(ordenar(novaLista));
	}, [busca, filtro, ordenador]);

	return (
		<div className={style.itens}>
			{lista.map(item => (
				<Item {...item} key={item.id}/>
			))}
		</div>
	);
}

export default Itens;