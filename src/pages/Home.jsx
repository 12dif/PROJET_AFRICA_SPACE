import React from 'react'
import Carousel from "../components/Carousel.jsx";
import {dataProduitartites, dataProduitdeux, dataProduittrois, dataProduitUn} from "../dataProduit.jsx";
import CardUn from "../components/CardUn.jsx";
import CardDeux from "../components/CardDeux.jsx";
import CardTrois from "../components/CardTrois.jsx";
import CardArtistes from "../components/CardArtistes.jsx";



export default function Home() {
    return (
       <>
         <Carousel/>
           <main className="container py-5">
               <div>
                   <h1 className="text-center mt-5">AFRICA SPACE</h1>
                   <p className=" bg-danger m-auto" style={{height:'5px', width:'90px'}}></p>
                   <p className="text-center text-danger my-3 h2 fw-bold  mt-4">GALERIE D'ART AFRICAIN EN LIGNE</p>
               </div>
               <div className="row my-5 mt-5">
                   <p className=" h1 mt-4">NOUVEAUTE DU MOMENTS</p>
               </div>
               <div className="row my-5">
                   {
                       dataProduitUn.map((item ,index)=> {
                           return (
                               <div className='mb-3 col-md-6 col-lg-3   mb-2 mt-4' key={index}>

                                   <CardUn
                                       image={item.image}
                                       title={item.title}
                                       origin={item.origin}
                                       price={item.price}
                                       id={item.id}
                                       produit={item}
                                   />
                               </div>
                           )
                       })
                   }

               </div>
               <div className="row my-5">
                   <p className=" h1 mt-5">LA STAR DE LA SEMAINE JESSICA</p>
               </div>
               <div className="row my-5 mb-4">
                   {
                     dataProduitdeux.map((item, index)=>{
                         return(
                             <div className="col-md-6 col-lg-3 mt-4" key={index}>
                                 <CardDeux
                                     image={item.image}
                                     title={item.title}
                                     origin={item.origin}
                                     price={item.price}
                                     id={item.id}
                                     produit={item}

                                 />

                             </div>
                         )
                     })
                   }

               </div>
               <div className="row my-5">
                   <p className=" h1 mt-4">LES PLUS EN VUE</p>
               </div>
               <div className="row my-4 ">
                   {
                       dataProduittrois.map((item, index)=>{
                           return(
                               <div  className="col-md-6 col-lg-3 mt-4" key={index}>
                                   <CardTrois
                                       image={item.image}
                                       title={item.title}
                                       origin={item.origin}
                                       price={item.price}
                                       id={item.id}
                                       produit={item}

                                   />

                               </div>
                           )
                       })
                   }

               </div>

               <div className="row my-5">
                   <p className=" h1 mt-4">ARTISTES DU MOMENTS</p>
                   <p className="fs-4 fw-bolder mt-3 text-danger">Quelques artistes vedettes (10)</p>
               </div>

               <div className="row">
                   {
                       dataProduitartites.map((item ,index)=>{
                           return(
                               <div  className="col-lg-6 col-md-12 mt-3" key={index}>
                                   <CardArtistes
                                       image={item.image}
                                       name={item.name}
                                       bibiographie={item.bibiographie}
                                       id={item.id}

                                   />

                               </div>
                           )
                       })
                   }

               </div>

               <div className="container-fluid">
                   <div className="row my-5 mt-4">
                       <p className=" h1 mt-3">AFRICA SPACE</p>
                       <span className=" bg-danger mx-3 " style={{height:"5px", width:'250px'}}></span><br/>
                       <p className="h3 mt-5">Africa space vous propose une boutique en ligne d’œuvres uniques d’art
                           contemporain africain, livrées pour vous en Europe et dans le monde entier. Découvrez des
                           approches surprenantes, ainsi que des réflexions et révoltes au travers de créations
                           colorées.
                           <br/>C’est un regard féminin, humain et écologique posé sur les différents artistes montants.
                               Une délicieuse ode au voyage au cœur de la culture africaine.</p>
                   </div>
               </div>


           </main>

       </>
    )
}
