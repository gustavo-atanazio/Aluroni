import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
const Header = lazy(() => import('components/Header'));
import Footer from 'components/Footer';

const Inicio = lazy(() => import('pages/Inicio'));
const Cardapio = lazy(() => import('pages/Cardapio'));
const Sobre = lazy(() => import('pages/Sobre'));
const Prato = lazy(() => import('pages/Prato'));
const NotFound = lazy(() => import('pages/NotFound'));

function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu/>
                <Suspense fallback={<p>Carregando...</p>}>
                    <Routes>
                        <Route path='/' element={<Header/>}>
                            <Route index element={<Inicio/>}/>
                            <Route path='cardapio' element={<Cardapio/>}/>
                            <Route path='sobre' element={<Sobre/>}/>
                        </Route>
                        <Route path='prato/:id' element={<Prato/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Suspense>
                <Footer/>
            </Router>
        </main>
    );
}

export default AppRouter;