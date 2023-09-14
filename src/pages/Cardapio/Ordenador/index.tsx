import opcoes from './opcoes.json';
import style from './Ordenador.module.scss';

function Ordenador() {
    return (
        <button className={style.ordenador}>
            <span>Ordenar por:</span>
            <div className={style.ordenador__options}>
                {opcoes.map(opcao => (
                    <div
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

export default Ordenador;