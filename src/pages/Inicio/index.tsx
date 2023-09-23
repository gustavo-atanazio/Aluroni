import { useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import nossaCasa from 'assets/nossa_casa.png';
import styleTema from 'styles/Tema.module.scss';
import style from './Inicio.module.scss';

function Inicio() {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
    const navigate = useNavigate();

    function redirecionarParaDetalhes(prato: typeof cardapio[0]) {
        navigate(`/prato/${prato.id}`, { state: { prato } });
    }

    return (
        <section>
            <h3 className={styleTema.titulo}>Recomendações da cozinha</h3>

            <div className={style.recomendados}>
                {pratosRecomendados.map(item => (
                    <div className={style.recomendado} key={item.id}>
                        <div className={style.recomendado__imagem}>
                            <img src={item.photo} alt={item.title}/>
                        </div>

                        <button
                            onClick={() => redirecionarParaDetalhes(item)}
                            className={style.recomendado__botao}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>

            <h3 className={styleTema.titulo}>Nossa casa</h3>
            <div className={style.nossaCasa}>
                <img src={nossaCasa} alt="Casa do Aluroni"/>
                <div className={style.nossaCasa__endereco}>
                    Rua Vergueiro, 3185 <br/> <br/> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}

export default Inicio;