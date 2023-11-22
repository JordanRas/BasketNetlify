
import PropTypes from 'prop-types';

function Tableau({ equipeSelectionnee }) {

    const dataJoueur = [
        {
            "count": 14,
            "joueur": {
                "idJoueur": 1,
                "nom": "Stephen Curry",
                "equipe": {
                    "idequipe": 1,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 32.0,
            "troisPoint": 24.2,
            "total": 30.0,
            "rebond": 5.0,
            "passesDecisives": 8.0
        },
        {
            "count": 15,
            "joueur": {
              "idJoueur": 2,
              "nom": "Kevin Durant",
              "equipe": {
                "idequipe": 1,
                "nomequipe": "Golden Warriors"
              }
            },
            "minutes": 34.5,
            "troisPoint": 28.7,
            "total": 28.0,
            "rebond": 7.2,
            "passesDecisives": 5.1
          },
          {
            "count": 16,
            "joueur": {
              "idJoueur": 3,
              "nom": "Klay Thompson",
              "equipe": {
                "idequipe": 1,
                "nomequipe": "Golden Warriors"
              }
            },
            "minutes": 31.8,
            "troisPoint": 40.0,
            "total": 27.5,
            "rebond": 3.9,
            "passesDecisives": 2.3
          },
          {
            "count": 17,
            "joueur": {
              "idJoueur": 4,
              "nom": "Draymond Green",
              "equipe": {
                "idequipe": 1,
                "nomequipe": "Golden Warriors"
              }
            },
            "minutes": 28.6,
            "troisPoint": 32.4,
            "total": 9.0,
            "rebond": 6.4,
            "passesDecisives": 8.5
          },
          {
            "count": 18,
            "joueur": {
              "idJoueur": 5,
              "nom": "Andre Iguodala",
              "equipe": {
                "idequipe": 1,
                "nomequipe": "Golden Warriors"
              }
            },
            "minutes": 25.3,
            "troisPoint": 33.6,
            "total": 7.6,
            "rebond": 4.0,
            "passesDecisives": 3.9
          },
          {
            "count": 19,
            "joueur": {
              "idJoueur": 6,
              "nom": "Andrew Wiggins",
              "equipe": {
                "idequipe": 1,
                "nomequipe": "Golden Warriors"
              }
            },
            "minutes": 33.2,
            "troisPoint": 35.9,
            "total": 19.6,
            "rebond": 4.3,
            "passesDecisives": 2.3
          },
          



          
        {
            "count": 12,
            "joueur": {
                "idJoueur": 2,
                "nom": "Zach Lavine",
                "equipe": {
                    "idequipe": 2,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 24.2,
            "troisPoint": 14.0,
            "total": 21.0,
            "rebond": 7.0,
            "passesDecisives": 8.0
        },
        {
            "count": 28,
            "joueur": {
              "idJoueur": 15,
              "nom": "DeMar DeRozan",
              "equipe": {
                "idequipe": 2,
                "nomequipe": "Chicago Bulls"
              }
            },
            "minutes": 33.5,
            "troisPoint": 29.0,
            "total": 21.7,
            "rebond": 6.3,
            "passesDecisives": 5.2
          },
          {
            "count": 29,
            "joueur": {
              "idJoueur": 16,
              "nom": "Nikola Vučević",
              "equipe": {
                "idequipe": 2,
                "nomequipe": "Chicago Bulls"
              }
            },
            "minutes": 31.8,
            "troisPoint": 33.7,
            "total": 18.9,
            "rebond": 10.1,
            "passesDecisives": 3.5
          },
          {
            "count": 30,
            "joueur": {
              "idJoueur": 17,
              "nom": "Lonzo Ball",
              "equipe": {
                "idequipe": 2,
                "nomequipe": "Chicago Bulls"
              }
            },
            "minutes": 29.4,
            "troisPoint": 37.2,
            "total": 14.2,
            "rebond": 5.6,
            "passesDecisives": 6.8
          },
          {
            "count": 31,
            "joueur": {
              "idJoueur": 18,
              "nom": "Alex Caruso",
              "equipe": {
                "idequipe": 2,
                "nomequipe": "Chicago Bulls"
              }
            },
            "minutes": 23.6,
            "troisPoint": 31.5,
            "total": 9.8,
            "rebond": 3.4,
            "passesDecisives": 3.9
          },
          {
            "count": 32,
            "joueur": {
              "idJoueur": 19,
              "nom": "Patrick Williams",
              "equipe": {
                "idequipe": 2,
                "nomequipe": "Chicago Bulls"
              }
            },
            "minutes": 21.2,
            "troisPoint": 26.8,
            "total": 7.3,
            "rebond": 4.1,
            "passesDecisives": 1.7
          },
          
          
          
        



        {
            "count": 11,
            "joueur": {
                "idJoueur": 3,
                "nom": "Lebron James",
                "equipe": {
                    "idequipe": 3,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 21.0,
            "troisPoint": 10.4,
            "total": 17.2,
            "rebond": 8.0,
            "passesDecisives": 11.0
        },
        {
            "count": 22,
            "joueur": {
              "idJoueur": 9,
              "nom": "Anthony Davis",
              "equipe": {
                "idequipe": 3,
                "nomequipe": "Lakers"
              }
            },
            "minutes": 33.8,
            "troisPoint": 28.3,
            "total": 25.5,
            "rebond": 10.4,
            "passesDecisives": 3.2
        },
        {
            "count": 23,
            "joueur": {
              "idJoueur": 10,
              "nom": "Russell Westbrook",
              "equipe": {
                "idequipe": 3,
                "nomequipe": "Lakers"
              }
            },
            "minutes": 35.2,
            "troisPoint": 30.7,
            "total": 21.3,
            "rebond": 8.6,
            "passesDecisives": 10.2
          },
          {
            "count": 24,
            "joueur": {
              "idJoueur": 11,
              "nom": "Dwight Howard",
              "equipe": {
                "idequipe": 3,
                "nomequipe": "Lakers"
              }
            },
            "minutes": 18.5,
            "troisPoint": 22.0,
            "total": 8.1,
            "rebond": 7.3,
            "passesDecisives": 1.5
          },
          {
            "count": 25,
            "joueur": {
              "idJoueur": 12,
              "nom": "Carmelo Anthony",
              "equipe": {
                "idequipe": 3,
                "nomequipe": "Lakers"
              }
            },
            "minutes": 22.3,
            "troisPoint": 37.1,
            "total": 15.8,
            "rebond": 4.2,
            "passesDecisives": 1.8
          },
          {
            "count": 26,
            "joueur": {
              "idJoueur": 13,
              "nom": "Malik Monk",
              "equipe": {
                "idequipe": 3,
                "nomequipe": "Lakers"
              }
            },
            "minutes": 24.1,
            "troisPoint": 32.5,
            "total": 12.4,
            "rebond": 3.5,
            "passesDecisives": 2.7
          },
          




        {
            "count": 8,
            "joueur": {
                "idJoueur": 4,
                "nom": "Jayson Tatum",
                "equipe": {
                    "idequipe": 4,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 15.0,
            "troisPoint": 6.1,
            "total": 17.6,
            "rebond": 4.0,
            "passesDecisives": 3.2
        },
        {
            "count": 34,
            "joueur": {
              "idJoueur": 21,
              "nom": "Jaylen Brown",
              "equipe": {
                "idequipe": 4,
                "nomequipe": "Celtics"
              }
            },
            "minutes": 32.8,
            "troisPoint": 38.0,
            "total": 24.1,
            "rebond": 6.2,
            "passesDecisives": 3.5
        },
        {
            "count": 35,
            "joueur": {
              "idJoueur": 22,
              "nom": "Marcus Smart",
              "equipe": {
                "idequipe": 4,
                "nomequipe": "Celtics"
              }
            },
            "minutes": 29.5,
            "troisPoint": 33.2,
            "total": 14.5,
            "rebond": 3.9,
            "passesDecisives": 5.7
        },
        {
            "count": 36,
            "joueur": {
              "idJoueur": 23,
              "nom": "Al Horford",
              "equipe": {
                "idequipe": 4,
                "nomequipe": "Celtics"
              }
            },
            "minutes": 27.2,
            "troisPoint": 36.1,
            "total": 12.8,
            "rebond": 6.9,
            "passesDecisives": 4.1
        },
        {
            "count": 37,
            "joueur": {
              "idJoueur": 24,
              "nom": "Robert Williams III",
              "equipe": {
                "idequipe": 4,
                "nomequipe": "Celtics"
              }
            },
            "minutes": 24.8,
            "troisPoint": 27.6,
            "total": 9.2,
            "rebond": 8.1,
            "passesDecisives": 2.6
          },
          {
            "count": 38,
            "joueur": {
              "idJoueur": 25,
              "nom": "Dennis Schröder",
              "equipe": {
                "idequipe": 4,
                "nomequipe": "Celtics"
              }
            },
            "minutes": 23.4,
            "troisPoint": 31.4,
            "total": 15.3,
            "rebond": 3.8,
            "passesDecisives": 6.5
          },
            
            




        {
            "count": 7,
            "joueur": {
                "idJoueur": 5,
                "nom": "Joel Embiid",
                "equipe": {
                    "idequipe": 5,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 36.7,
            "troisPoint": 11.0,
            "total": 39.5,
            "rebond": 7.0,
            "passesDecisives": 14.5
        },
        {
            "count": 40,
            "joueur": {
              "idJoueur": 27,
              "nom": "Ben Simmons",
              "equipe": {
                "idequipe": 5,
                "nomequipe": "Philadelphie"
              }
            },
            "minutes": 31.2,
            "troisPoint": 27.0,
            "total": 16.4,
            "rebond": 7.6,
            "passesDecisives": 9.8
          },
          {
            "count": 41,
            "joueur": {
              "idJoueur": 28,
              "nom": "Tobias Harris",
              "equipe": {
                "idequipe": 5,
                "nomequipe": "Philadelphie"
              }
            },
            "minutes": 29.8,
            "troisPoint": 39.2,
            "total": 20.1,
            "rebond": 5.5,
            "passesDecisives": 3.3
          },
          {
            "count": 42,
            "joueur": {
              "idJoueur": 29,
              "nom": "Seth Curry",
              "equipe": {
                "idequipe": 5,
                "nomequipe": "Philadelphie"
              }
            },
            "minutes": 27.5,
            "troisPoint": 43.8,
            "total": 15.7,
            "rebond": 3.2,
            "passesDecisives": 4.6
          },
          {
            "count": 43,
            "joueur": {
              "idJoueur": 30,
              "nom": "Andre Drummond",
              "equipe": {
                "idequipe": 5,
                "nomequipe": "Philadelphie"
              }
            },
            "minutes": 24.3,
            "troisPoint": 13.6,
            "total": 10.5,
            "rebond": 9.8,
            "passesDecisives": 2.1
          },
          {
            "count": 44,
            "joueur": {
              "idJoueur": 31,
              "nom": "Danny Green",
              "equipe": {
                "idequipe": 5,
                "nomequipe": "Philadelphie"
              }
            },
            "minutes": 21.7,
            "troisPoint": 36.4,
            "total": 8.9,
            "rebond": 4.0,
            "passesDecisives": 2.9
          },
          
          
          
          
          



        {
            "count": 15,
            "joueur": {
                "idJoueur": 6,
                "nom": "Nikola Jokic",
                "equipe": {
                    "idequipe": 6,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 22.7,
            "troisPoint": 4.4,
            "total": 18.7,
            "rebond": 8.2,
            "passesDecisives": 8.0
        },
        {
            "count": 46,
            "joueur": {
              "idJoueur": 33,
              "nom": "Jamal Murray",
              "equipe": {
                "idequipe": 6,
                "nomequipe": "Nuggets"
              }
            },
            "minutes": 31.6,
            "troisPoint": 40.2,
            "total": 21.2,
            "rebond": 3.8,
            "passesDecisives": 5.6
          },
          {
            "count": 47,
            "joueur": {
              "idJoueur": 34,
              "nom": "Michael Porter Jr.",
              "equipe": {
                "idequipe": 6,
                "nomequipe": "Nuggets"
              }
            },
            "minutes": 28.9,
            "troisPoint": 43.7,
            "total": 19.0,
            "rebond": 6.7,
            "passesDecisives": 1.9
          },
          {
            "count": 48,
            "joueur": {
              "idJoueur": 35,
              "nom": "Aaron Gordon",
              "equipe": {
                "idequipe": 6,
                "nomequipe": "Nuggets"
              }
            },
            "minutes": 26.2,
            "troisPoint": 32.0,
            "total": 15.6,
            "rebond": 6.5,
            "passesDecisives": 2.8
          },
          {
            "count": 49,
            "joueur": {
              "idJoueur": 36,
              "nom": "Will Barton",
              "equipe": {
                "idequipe": 6,
                "nomequipe": "Nuggets"
              }
            },
            "minutes": 24.8,
            "troisPoint": 37.5,
            "total": 12.3,
            "rebond": 4.5,
            "passesDecisives": 3.2
          },
          {
            "count": 50,
            "joueur": {
              "idJoueur": 37,
              "nom": "Monte Morris",
              "equipe": {
                "idequipe": 6,
                "nomequipe": "Nuggets"
              }
            },
            "minutes": 23.5,
            "troisPoint": 35.8,
            "total": 10.5,
            "rebond": 2.7,
            "passesDecisives": 4.8
          }
          
          
          
          
          
      ];

      const joueursEquipeSelectionnee = dataJoueur.filter(
        (joueurako) => joueurako.joueur.equipe.idequipe === equipeSelectionnee.id
      );


    return (
      <>
        <table className="table table-borderless table-hover">
        <thead className="thead-dark" style={{background:'black', color:'white'}}>
            <tr>
                <th scope="col">Joueur</th>
                <th scope="col">MJ</th>
                <th scope="col">PPM</th>
                <th scope="col">RPM</th>
                <th scope="col">PDPM</th>
                <th scope="col">MPM</th>
                <th scope="col">3P%</th>
            </tr>
        </thead>
        <tbody>
            {joueursEquipeSelectionnee.map((item) => (
                <tr key={item.count}>
                 <td>{item.joueur.nom}</td>
                 <td>{item.count}</td>
                 <td>{item.total}</td>
                 <td>{item.rebond}</td>
                 <td>{item.passesDecisives}</td>
                 <td>{item.minutes}</td>
                 <td>{item.troisPoint}</td>
                </tr>       
            ))}
            
        </tbody>
        </table>
      </>
    )
  }

  Tableau.propTypes = {
    equipeSelectionnee: PropTypes.shape({
      id: PropTypes.number,
      nom: PropTypes.string,
    }).isRequired,
  };
  
  export default Tableau