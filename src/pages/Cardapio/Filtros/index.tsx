import filtros from './filtros.json';
import style from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

function Filtros() {
    function selecionaFiltro(opcao: IOpcao) {

    }

    return (
        <div className={style.filtros}>
            {filtros.map(opcao => (
                <button
                    onClick={() => selecionaFiltro(opcao)}
                    className={style.filtros__filtro}
                    key={opcao.id}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}

export default Filtros;