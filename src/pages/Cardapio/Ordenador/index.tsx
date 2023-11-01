import { useState, memo } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import classNames from 'classnames';
import opcoes from './opcoes.json';
import style from './Ordenador.module.scss';

interface OrdenadorProps {
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

function Ordenador({ ordenador, setOrdenador }: OrdenadorProps) {
	const [aberto, setAberto] = useState(false);
	const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

	return (
		<button
			onClick={() => setAberto(!aberto)}
			onBlur={() => setAberto(false)}
			className={classNames({
				[style.ordenador]: true,
				[style['ordenador--ativo']]: ordenador !== ''
			})}
		>
			<span>{nomeOrdenador || 'Ordenar por:'}</span>
			{aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}

			<div className={classNames({
				[style.ordenador__options]: true,
				[style['ordenador__options--ativo']]: aberto
			})}>
				{opcoes.map(opcao => (
					<div
						onClick={() => setOrdenador(opcao.value)}
						className={style.ordenador__option}
						key={opcao.value}
					>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
}

export default memo(Ordenador);