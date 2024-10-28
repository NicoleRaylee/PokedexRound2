
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

const App = () => {
    return (
        <PokemonProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                    <Route path="/pokemon/:id" element={<PokemonDetail />} />
                </Routes>
            </Router>
        </PokemonProvider>
    );
};

export default App;