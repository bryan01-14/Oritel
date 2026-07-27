import Page from '../components/Page.jsx'

export default function Accueil() {
  return (
    <>
      <div className="accueil-slice1">
        <img
          src="/assets/accueil-1-bg.jpg"
          alt="ORITEL Côte d'Ivoire : intégrateur de solutions télécoms et informatiques depuis 2011. Domaines de compétence et réalisations."
          loading="eager"
          fetchPriority="high"
          draggable="false"
        />
        <div className="accueil-apropos-bloc">
          <div className="accueil-cadre">
            <span className="coin coin-haut-droit" aria-hidden="true" />
            <div className="accueil-apropos-texte">
              <p>
                Présente sur le marché ivoirien depuis 2011, Oritel Côte d'Ivoire est un intégrateur de solutions informatiques et télécoms, de développement des technologies innovantes à valeur ajoutée pour différents secteurs d'activités.
              </p>
              <p>
                Elle dispose d'outils flexibles pour optimiser les performances des entreprises dans le respect de leur cœur de métier pour leur offrir des opportunités de croissance.
              </p>
            </div>
            <span className="coin coin-bas-gauche" aria-hidden="true" />
            <span className="barre-orange-bas" aria-hidden="true" />
          </div>
        </div>
      </div>

      <Page slices={['accueil-2.jpg']} alt="" />
    </>
  )
}

