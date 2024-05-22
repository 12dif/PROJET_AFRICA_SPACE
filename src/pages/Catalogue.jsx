import React, {useEffect, useState} from 'react'
import {dataProduitdeux, dataProduitphotographie, dataProduittrois} from "../dataProduit.jsx";
import CardTrois from "../components/CardTrois.jsx";


export default function Catalogue() {

    const divStyle = {
        backgroundImage: 'url("/images/travail-mixe-de-photographie-et-peinture.jpg")',
        height: '40vh',
    };

    const [category, setCategory]=useState('')
    const[name,setName]=useState('')
    const [minPrice, setMinPrice] = useState(5000); // Prix minimum par défaut
    const [maxPrice, setMaxPrice] = useState(3000000);
    const [produit, setProduit]=useState([])
    console.log(category)

    function getProduitByCategory() {
        let proByCat = [];

        if (category === 'Sculptures') {
            proByCat = dataProduittrois;
        } else if (category === 'Photographies') {
            proByCat = dataProduitphotographie;
        } else if (category === 'Peintures') {
            proByCat = dataProduitdeux;
        }

        setProduit(proByCat);
    }

    useEffect(() => {
        getProduitByCategory();
    }, [category])


    function getProduitByName() {
        let proByName = [...dataProduittrois, ...dataProduitdeux, ...dataProduitphotographie].filter(item=>item.name.includes(name))
        setProduit(proByName);
    }

    useEffect(() => {
        getProduitByName();
    }, [name]);

    function getProduitByPrice() {
        let proByPrice = [...dataProduittrois, ...dataProduitdeux, ...dataProduitphotographie].filter(item => item.price >= minPrice && item.price <= maxPrice)
        setProduit(proByPrice);
    }

    useEffect(() => {
        getProduitByPrice();
    }, [maxPrice, minPrice]);


    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>

            <main className='container-fluid d-flex justify-content-center'>
                <div className='container-fluid row mt-5'>
                    <div className='col-lg-2 col-md-3 mt-5 bg-body-secondary' style={{height:'680px'}}>
                        <nav className="list-group list-group-flush">
                            <p className='fs-2 fw-bold mt-3'>Filtre</p>
                            <div className="btn-group-vertical">
                                <span className='fw-bold text-secondary mb-3'>Catégorie</span>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Peintures"
                                           onChange={(e) => setCategory(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Peintures</label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Photographies"
                                           onChange={(e) => setCategory(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Photographies</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Sculptures"
                                           onChange={(e) => setCategory(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Sculptures</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="Dessins"
                                           onChange={(e) => setCategory(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox4">Dessins</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="Oeuvres Litteraires"
                                           onChange={(e) => setCategory(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox5">Oeuvres Litteraires</label>
                                </div>
                            </div>


                            <div className='btn-group-vertical'>
                                <span className='fw-bold text-secondary mb-3 mt-3'>Artiste</span>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="GAUTHIER"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Gauthier</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="LEO"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Leo</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="JESSICA"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Jessica</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="AHMED"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Ahmed</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="DYLAN"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Dylan</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="LUCY"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Lucy</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="FRANCK"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Franck</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="FRED"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Fred</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="GREC"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Grec</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="DONALD"
                                           onChange={(e) => setName(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Donald</label>
                                </div>
                            </div>
                            <span className='fw-bold mt-3 mb-3 text-secondary'>Prix</span>
                            <div className='d-flex justify-content-between '>
                                <span>{minPrice}Fcfa</span>
                                <span>{maxPrice}Fcfa</span>
                            </div>
                            <input
                                type='range'
                                name='prixMin'
                                value={maxPrice}
                                min='5000'
                                max='3000000'
                                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                            />
                        </nav>
                    </div>
                    <div className='col-lg-10 col-md-9 ps-3' >
                        <div>
                            <div>
                                <h1 className="text-center mt-5 fs-1">CATALOGUE D'ART
                                    <p className=" bg-danger m-auto" style={{height:'5px', width:'200px'}}></p>
                                </h1>
                                <p className="my-5 mt-5">Envie de savoir en quoi consiste <strong>l’art contemporain
                                    africain </strong>? Vous aimeriez découvrir <strong>des œuvres uniques</strong>,
                                    spécialement <strong>sélectionnées</strong> avec le regard <strong>féminin d’AFRICA
                                        SPACE</strong>, situé au <strong>Cameroun</strong> ? Nous avons rassemblé pour
                                    vous <strong>les artistes montants</strong> qui valent le détour.
                                </p>
                            </div>

                            <div className="row  mt-5">

                                {
                                    produit.map((item, index)=>{
                                        return(
                                            <div  className="col-md-6 col-lg-3 mt-4" key={index}>
                                                <CardTrois
                                                    image={item.image}
                                                    title={item.title}
                                                    origin={item.origin}
                                                    price={item.price}
                                                    id={item.id}
                                                    produit={item}
                                                    category={item.category}

                                                />

                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    </div>

                </div>

            </main>
        </>

    )
}
