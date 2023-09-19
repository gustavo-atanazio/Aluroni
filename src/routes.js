import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/cardapio' element={<Cardapio/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;