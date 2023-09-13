import { ReactComponent as Logo } from 'assets/logo.svg';
import style from './Cardapio.module.scss';

function Cardapio() {
    return (
        <main>
            <nav className={style.menu}>
               <Logo/> 
            </nav>

            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>
        </main>
    );
}

export default Cardapio;