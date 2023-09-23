import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';
import style from './Prato.module.scss';

function Prato() {
    const { id } = useParams();
    const navigate = useNavigate();
    const prato = cardapio.find(item => item.id === Number(id));

    if (!prato) {
        return;
    }

    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className={style.voltar}
            >
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
                        <div className={classNames({
                            [style.tags__tipo]: true,
                            [style[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
                        })}>
                            {prato.category.label}
                        </div>

                        <div className={style.tags__porcao}>
                            {prato.size}g
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