import classNames from 'classnames';
import { Prato } from 'types/Prato';
import style from  './Tags.module.scss';

function Tags(prato: Prato) {
    const { category, size, serving, price } = prato;

    return (
        <div className={style.tags}>
            <div className={classNames({
                [style.tags__tipo]: true,
                [style[`tags__tipo__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>

            <div className={style.tags__porcao}>
                {size}g
            </div>

            <div className={style.tags__qtspessoas}>
                Serve {serving} {serving === 1 ? 'pessoa' : 'pessoas'}
            </div>

            <div className={style.tags__valor}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    );
}

export default Tags;