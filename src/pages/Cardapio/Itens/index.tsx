import Item from './Item';
import itens from './itens.json';
import style from './Itens.module.scss';

function Itens() {
    return (
        <div className={style.itens}>
            {itens.map(item => (
                <Item {...item} key={item.id}/>
            ))}
        </div>
    );
}

export default Itens;