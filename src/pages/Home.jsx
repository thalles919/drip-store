import './Home.css';
import mainHome from '../assets/main-home.png';
import { useState } from 'react';

const produtos = [
    { id: 1, nome: "Produto 1", preco: "R$ 99,99", imagem: "https://via.placeholder.com/200x150" },
    { id: 2, nome: "Produto 2", preco: "R$ 149,99", imagem: "https://via.placeholder.com/200x150" },
    { id: 3, nome: "Produto 3", preco: "R$ 199,99", imagem: "https://via.placeholder.com/200x150" },
    { id: 4, nome: "Produto 4", preco: "R$ 249,99", imagem: "https://via.placeholder.com/200x150" }
];

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleDireita = () => {
        setScrollPosition(prev => prev + 220);
    };

    const handleEsquerda = () => {
        setScrollPosition(prev => Math.max(prev - 220, 0));
    };

    return (
        <div id='page-home'>
            <div id="slide-home">
                <img style={{ width: '400px' }} src={mainHome} alt="Main Home" />
            </div>

            <div className="carrossel-container">
                <div className="seta esquerda" onClick={handleEsquerda}>&#10094;</div>
                <div
                    className="carrossel"
                    style={{ transform: `translateX(-${scrollPosition}px)` }}
                >
                    {produtos.map(produto => (
                        <div key={produto.id} className="produto">
                            <img src={produto.imagem} alt={produto.nome} />
                            <h3>{produto.nome}</h3>
                            <p>{produto.preco}</p>
                        </div>
                    ))}
                </div>
                <div className="seta direita" onClick={handleDireita}>&#10095;</div>
            </div>
        </div>
    );
};

export default Home;

