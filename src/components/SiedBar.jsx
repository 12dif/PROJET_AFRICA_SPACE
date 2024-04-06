import React, {useState} from 'react'
import './css/SiedBar.css'



export default function SiedBar() {
    const [categorie, setCategorie] = useState(null);
    const [artiste, setArtiste] = useState(null);
    const [prixMin, setPrixMin] = useState(5000); // Valeur minimale de la plage de prix
    const [prixMax, setPrixMax] = useState(1000000); // Valeur maximale de la plage de prix

    const handleCategorieChange = (categorie) => {
        setCategorie(categorie);
        handleFilters({ categorie, artiste, prixMin, prixMax });
    };

    const handleArtisteChange = (artiste) => {
        setArtiste(artiste);
        handleFilters({ categorie, artiste, prixMin, prixMax });
    };

    const handlePrixChange = (e) => {
        const { name, value } = e.target;
        if (name === 'prixMin') {
            setPrixMin(parseFloat(value));
        } else if (name === 'prixMax') {
            setPrixMax(parseFloat(value));
        }
        handleFilters({ categorie, artiste, prixMin, prixMax });
    };

    const handleFilters = (filters) => {
        // Appeler la fonction handleFilters passée en tant que prop avec les filtres en paramètre

        console.log(filters);
    };



    return (
        <>

            <nav className="list-group list-group-flush">
                <p className='fs-2 fw-bold mt-3'>Filtre</p>
                <div className="btn-group-vertical">
                    <span className='fw-bold text-secondary mb-3'>Catégorie</span>
                    <div className="form-check ">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Peintures" checked={categorie === 'Peintures'} onChange={() => handleCategorieChange('Peintures')}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Peintures</label>
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Photographies" checked={categorie === 'Photographies'} onChange={() => handleCategorieChange('Photographies')}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Photographies</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Sculptures" checked={categorie === 'Sculptures'} onChange={() => handleCategorieChange('Sculptures')}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Sculptures</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="Dessins" checked={categorie === 'Dessins'} onChange={() => handleCategorieChange('Dessins')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox4">Dessins</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="Oeuvres Litteraires" checked={categorie === 'Oeuvres Litteraires'} onChange={() => handleCategorieChange('Oeuvres Litteraires')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox5">Oeuvres Litteraires</label>
                    </div>
                </div>


                <div className='btn-group-vertical'>
                    <span className='fw-bold text-secondary mb-3 mt-3'>Artiste</span>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="GAUTHIER" checked={artiste === 'Gauthier'} onChange={() => handleArtisteChange('Gauthier')}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Gauthier</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="LEO" checked={artiste === 'Leo'} onChange={() => handleArtisteChange('Leo')}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Leo</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="JESSICA" checked={artiste === 'Jessica'} onChange={() => handleArtisteChange('Jessica')}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Jessica</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="AHMED" checked={artiste === 'Ahmed'} onChange={() => handleArtisteChange('Ahmed')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Ahmed</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="DYLAN" checked={artiste === 'Dylan'} onChange={() => handleArtisteChange('Dylan')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Dylan</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="LUCY" checked={artiste === 'Lucy'} onChange={() => handleArtisteChange('Lucy')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Lucy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="FRANCK" checked={artiste === 'Franck'} onChange={() => handleArtisteChange('Franck')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Franck</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="FRED" checked={artiste === 'Fred'} onChange={() => handleArtisteChange('Fred')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Fred</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="GREC" checked={artiste === 'Grec'} onChange={() =>handleArtisteChange('Grec')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Grec</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="DONALD" checked={artiste === 'Donald'} onChange={() => handleArtisteChange('Donald')}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Donald</label>
                    </div>
                </div>
                    <span className='fw-bold mt-3 mb-3 text-secondary'>Prix</span>
                <div className='d-flex justify-content-between '>
                    <span>{prixMin} Fcfa</span>
                    <span>{prixMax} Fcfa</span>
                </div>
                <input
                        type='range'
                        name='prixMin'
                        min='5000'
                        max='1000000'
                        value={prixMin}
                        onChange={handlePrixChange}

                    />
            </nav>
        </>

    )
}
