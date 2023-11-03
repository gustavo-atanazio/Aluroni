import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Inicio from 'pages/Inicio';
// import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import Prato from 'pages/Prato';
import NotFound from 'pages/NotFound';

const Cardapio = lazy(() => import('pages/Cardapio'));

function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Suspense fallback={<p>Carregando...</p>}>
                    <Menu/>
                    <Routes>
                        <Route path='/' element={<Header/>}>
                            <Route index element={<Inicio/>}/>
                            <Route path='cardapio' element={<Cardapio/>}/>
                            <Route path='sobre' element={<Sobre/>}/>
                        </Route>
                        <Route path='prato/:id' element={<Prato/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                    <Footer/>
                </Suspense>
            </Router>
        </main>
    );
}

export default AppRouter;