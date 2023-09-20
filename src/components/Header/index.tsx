import { Outlet } from 'react-router-dom';
import style from './Header.module.scss';

function Header() {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>

            <Outlet/>
        </>
    );
}

export default Header;