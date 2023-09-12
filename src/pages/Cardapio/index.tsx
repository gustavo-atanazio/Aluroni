import { ReactComponent as Logo } from '../../assets/logo.svg';
import style from './Cardapio.module.scss';

function Cardapio() {
    return (
        <main>
            <nav className={style.menu}>
               <Logo/> 
            </nav>
        </main>
    );
}

export default Cardapio;