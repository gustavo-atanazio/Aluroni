import { useEffect, useState } from 'react';
import Item from './Item';
import itens from './itens.json';
import style from './Itens.module.scss';

interface ItensProps {
    busca: string
    filtro: number | null
    ordenador: string
}

function Itens(props: ItensProps) {
    const { busca, filtro } = props;
    const [lista, setLista] = useState(itens);

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if (filtro !== null) return filtro === id;
        return true;
    }

    useEffect(() => {
        const novaLista = itens.filter(item => testaBusca(item.title) && testaFiltro(item.id));
        setLista(novaLista);
    }, [busca, filtro]);

    return (
        <div className={style.itens}>
            {lista.map(item => (
                <Item {...item} key={item.id}/>
            ))}
        </div>
    );
}

export default Itens;