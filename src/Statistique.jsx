import Tableau from './Tableau'
import { useState } from 'react'; 

function Statistique() {

    const dataEquipe = [
        { "id": 1, "nom": 'Equipe 1' },
        { "id": 2, "nom": 'Equipe 2' },
        { "id": 3, "nom": 'Equipe 3' },
        { "id": 4, "nom": 'Equipe 4' },
        { "id": 5, "nom": 'Equipe 5' },
        { "id": 6, "nom": 'Equipe 6' },
      ];

    const [equipeSelectionnee, setEquipeSelectionnee] = useState(dataEquipe[0]);

    const handleEquipeClick = (equipe) => {
        setEquipeSelectionnee(equipe);
    };

    return (
      <>
        <div className="card text-center" style={{width:'100%'}}>
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    {dataEquipe.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <a className={`nav-link ${equipeSelectionnee.id === item.id ? 'active' : ''}`} href="#" onClick={() => handleEquipeClick(item)}>
                                {item.nom}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-body">
                <Tableau equipeSelectionnee={equipeSelectionnee} />
            </div>
        </div>
      </>
    )
  }
  
  export default Statistique