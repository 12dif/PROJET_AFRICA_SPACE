import React, {useState} from 'react'
import {FaRegFaceSmileWink} from "react-icons/fa6";
import {FaStar} from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function CommentaireForm({ onCommentSubmit, commentaires }) {

    const toastStyle = {
        background: 'linear-gradient(to right, #ff8a00, #da1b60)',
        color: '#ffffff',
        borderRadius: '8px',
        border: '2px solid #ffffff',
        padding: '16px',
    };

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [contenu, setContenu] = useState('');
    const [note, setNote] = useState(0);
    const [nomFieldFilled, setNomFieldFilled] = useState(false);

    const handleNomChange = (e) => {
        setNom(e.target.value);
        if (e.target.value.trim() !== '') {
            setNomFieldFilled(true);
        } else {
            setNomFieldFilled(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleContenuChange = (e) => {
        setContenu(e.target.value);
    };

    const handleNoteChange = (newNote) => {
        setNote(newNote);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nouveauCommentaire = {
            nom,
            email,
            contenu,
            note,
            date: new Date().toLocaleDateString(),
            heure: new Date().toLocaleTimeString(),
        };
        onCommentSubmit(nouveauCommentaire);
        // Réinitialiser le formulaire après soumission
        setNom('');
        setEmail('');
        setContenu('');
        setNote(0);
        setNomFieldFilled(false);

        let message = ` Merci infiniment d'avoir pris le temps de laisser votre précieux commentaire ! Votre contribution est très appréciée et nous aide à améliorer notre service.`;
        message = <span dangerouslySetInnerHTML={{ __html: message }} />;

        toast.success( <div style={toastStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', marginRight: '16px' }}>✨</span>
                <span style={{ fontSize: '24px', marginLeft: '16px' }}>🎉</span>
            </div>
            <p>{message}</p>
        </div>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


    };
    const handleFieldFocus = (fieldName) => {
        const yOffset = -100; // Ajustez selon vos besoins
        const field = formRef.current[fieldName];

        if (field) {
            const y = field.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }

    }

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className="star"
                    color={i <= note ? '#ffc107' : '#e4e5e9'}
                    onClick={() => handleNoteChange(i)}
                />
            );
        }
        return stars;
    };



    return (
        <>
            <div className="card mb-3 bg-body-secondary mt-5" style={{width:'350px'}} >
                <div className="card-body">
                    <p className="card-title fs-5 fw-bold"> Laisser un commentaire Merci <span style={{color:"red"}}><FaRegFaceSmileWink /></span> </p>
                    <form className='container-fluid mx-auto' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="name" value={nom} onChange={handleNomChange}/>
                        </div>
                        {
                            nomFieldFilled &&(
                                <>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email3" value={email} onChange={handleEmailChange}
                                               onFocus={() => handleFieldFocus("email")}
                                               placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Textarea" className="form-label">Commentaires</label>
                                        <textarea className="form-control" id="Textarea" rows="2" value={contenu} onChange={handleContenuChange}
                                                  onFocus={() => handleFieldFocus("contenu")}
                                        ></textarea>
                                    </div>
                                    <div className='mb-3'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar
                                                key={star}
                                                className="star"
                                                color={star <= note ? '#ffc107' : ''}
                                                onClick={() => handleNoteChange(star)}

                                            />
                                        ))}
                                    </div>
                                    <div className='d-grid g-3 mx-auto'>
                                        <button className='btn btn-success' type="submit">Soumettre</button>
                                    </div>

                                </>
                            )
                        }

                    </form>

                </div>
            </div>
        </>

    )
}
