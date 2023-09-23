import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import NotFound from 'pages/NotFound';

import Header from 'components/Header';
import Tags from 'components/Tags';

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