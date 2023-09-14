import { CgSearch } from 'react-icons/cg';
import style from './Buscador.module.scss';

interface BuscadorProps {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({ busca, setBusca }: BuscadorProps) {
    return (
        <div className={style.buscador}>
            <input
                value={busca}
                onChange={event => setBusca(event.target.value)}
                placeholder='Buscar'
            />
            <CgSearch
                size={20}
                color='#4C4D5E'
            />
        </div>
    );
}

export default Buscador;