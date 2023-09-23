import { Outlet } from 'react-router-dom';
import styleTema from 'styles/Tema.module.scss';
import style from './Header.module.scss';

function Header({ children }: { children?: React.ReactNode }) {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>

            <div className={styleTema.container}>
                <Outlet/>
                {children}
            </div>
        </>
    );
}

export default Header;