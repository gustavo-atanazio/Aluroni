import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import Header from 'components/Header';

import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';

function AppRouter() {
    return (
        <Router>
            <Menu/>
            <main>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>}/>
                        <Route path='sobre' element={<Sobre/>}/>
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}

export default AppRouter;