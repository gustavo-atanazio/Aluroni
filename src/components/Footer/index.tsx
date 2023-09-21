import { ReactComponent as Logo } from 'assets/logo.svg';
import style from './Footer.module.scss';

function Footer() {
    return (
        <footer className={style.footer}>
            <Logo/>
        </footer>
    );
}

export default Footer;