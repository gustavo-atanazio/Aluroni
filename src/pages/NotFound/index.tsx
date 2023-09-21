import classNames from 'classnames';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';

import styleTema from 'styles/Tema.module.scss';
import style from './NotFound.module.scss';

function NotFound() {
    return (
        <div className={classNames({
            [style.container]: true,
            [styleTema.container]: true
        })}>
            <NotFoundImage/>
        </div>
    );
}

export default NotFound;