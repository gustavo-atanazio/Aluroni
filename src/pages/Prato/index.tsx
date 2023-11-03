import { lazy } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
const NotFound = lazy(() => import('pages/NotFound'));

const Header = lazy(() => import('components/Header'));
const Tags = lazy(() => import('components/Tags'));

import style from './Prato.module.scss';

function Prato() {
    const { id } = useParams();
    const navigate = useNavigate();
    const prato = cardapio.find(item => item.id === Number(id));

    if (!prato) {
        return <NotFound/>;
    }

    return (
        <Header>
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

                    <Tags {...prato}/>
                </div>
            </section>
        </Header>
    );
}

export default Prato;