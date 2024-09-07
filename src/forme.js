import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Selectform from './forme1';
import monImage from './assets/images/monImage.png'; 
import imgeA from './image'; 
import React, { useEffect, useState } from 'react';
import './forme.css';

function FORMAsection() {
  const [taches, setTaches] = useState([]);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [referentiel, setReferentiel] = useState('');

  const ajouterNOM = () => {
    const nouveauNOM = { nom, prenom, referentiel };
    setTaches([...taches, nouveauNOM]);
    setNom('');
    setPrenom('');
    setReferentiel('');


    const tachesJSON = JSON.stringify([...taches, nouveauNOM]);
    localStorage.setItem('taches', tachesJSON);
  };

  useEffect(() => {
    const storedTaches = localStorage.getItem('taches');
    if (storedTaches) {
      setTaches(JSON.parse(storedTaches));
    }
  }, []);

  useEffect(() => {
    if (taches.length > 0) {
      const latestTache = taches[taches.length - 1];
      console.log(`Nouvelle tâche ajoutée : ${latestTache.nom} ${latestTache.prenom} - ${latestTache.referentiel}`);
    }
  }, [taches]);

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleReferentielChange = (e) => {
    setReferentiel(e.target.value);
  };

  return (
    <div className='form'>
        <img className='img1' src={monImage} alt="Mon image" />
        <h1>INSCRIVEZ MAINTENANT!</h1>
      <Form.Group className="mb-3" controlId="formBasicNom">
        <Form.Control value={nom} onChange={handleNomChange} type="text" placeholder="Entrer votre nom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrenom">
        <Form.Control value={prenom} onChange={handlePrenomChange} type="text" placeholder="Entrer votre prénom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicReferentiel">
        <Selectform value={referentiel} onChange={handleReferentielChange} />
      </Form.Group>

      <Button variant="primary" type="button" className="button" onClick={ajouterNOM}>
        Submit
      </Button>

      <ul>
        {taches.map((tache, index) => (
          <li key={index}>
            {tache.nom} {tache.prenom} - {tache.referentiel}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FORMAsection;
