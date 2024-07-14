import '../assets/css/Characteres.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import axios from 'axios';

function Characteres() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response1 = await axios.get('https://rickandmortyapi.com/api/character');
                const response2 = await axios.get('https://rickandmortyapi.com/api/character?page=2');

                const combinedCharacters = [...response1.data.results, response2.data.results[0]]; // Toma el primer personaje de la segunda página
                setCharacters(combinedCharacters);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCharacters();
    }, []); // Se asegura de que solo se ejecute una vez al montar el componente

    const getStatusClass = (status) => {
        switch (status) {
            case 'Alive':
                return 'status-alive';
            case 'Dead':
                return 'status-dead';
            default:
                return 'status-unknown';
        }
    };

    return (
        <>
            <Header />
            <Nav />
            <div className="row row-cols-1 row-cols-md-3 g-4 all_cards">
                {characters.map(character => (
                    <div className="col cards" key={character.id}>
                        <div className="card h-100 cards_one">
                            <img src={character.image} className="card-img-top imagenes" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text pCards">Status: {character.status}
                                    <span className={`status_indicator ${getStatusClass(character.status)}`}></span>
                                </p>
                                <p className="card-text pCards">Species: {character.species}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Characteres;
