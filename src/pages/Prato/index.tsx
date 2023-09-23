import { useLocation } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import style from './Prato.module.scss';

function Prato() {
    const { state } = useLocation();
    const { prato } = state as { prato: typeof cardapio[0] };

    return (
        <>
            <button className={style.voltar}>
                {'< Voltar'}
            </button>

            <section className={style.container}>
                <h1 className={style.titulo}>{prato.title}</h1>

                <div className={style.imagem}>
                    <img src={prato.photo} alt={prato.photo}/>
                </div>

                <div className={style.conteudo}>
                    <p className={style.conteudo__descricao}>
                        {prato.description}
                    </p>

                    <div className={style.tags}>
                        <div className={style.tags__tipo}>
                            {}
                        </div>

                        <div className={style.tags__porcao}>
                            {prato.size}
                        </div>

                        <div className={style.tags__qtspessoas}>
                            Serve {prato.serving} {prato.serving === 1 ? 'pessoa' : 'pessoas'}
                        </div>

                        <div className={style.tags__valor}>
                            R$ {prato.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Prato;