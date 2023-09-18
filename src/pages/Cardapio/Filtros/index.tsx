import classNames from 'classnames';
import filtros from './filtros.json';
import style from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

interface FiltrosProps {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

function Filtros({ filtro, setFiltro }: FiltrosProps) {
	function selecionaFiltro(opcao: IOpcao) {
		if (filtro === opcao.id) return setFiltro(null);
		return setFiltro(opcao.id);
	}

	return (
		<div className={style.filtros}>
			{filtros.map(opcao => (
				<button
					onClick={() => selecionaFiltro(opcao)}
					className={classNames({
						[style.filtros__filtro]: true,
						[style['filtros__filtro--ativo']]: filtro === opcao.id
					})}
					key={opcao.id}
				>
					{opcao.label}
				</button>
			))}
		</div>
	);
}

export default Filtros;