import HeroReseaux from '../components/HeroReseaux.jsx'
import Page from '../components/Page.jsx'

// Le hero, les deux titres de la 1ère tranche et le bloc Infoline sont
// reconstruits en HTML (texte net, jamais coupé, quel que soit l'écran).
// Le reste de la page (techniques, garantie, satellite, rôles support)
// reste en tranches d'image.
const SLICES_MILIEU = ['reseaux-telecoms-2.jpg', 'reseaux-telecoms-3.jpg']

export default function ReseauxTelecoms() {
  return (
    <>
      <HeroReseaux />

      <div className="rt-slice1">
        <img
          src="/assets/reseaux-telecoms-1.jpg"
          alt="Réseaux Satellite et Interconnexion, Réseaux LAN et Fibre Optique"
          loading="eager"
          fetchPriority="high"
          draggable="false"
        />
        <h2 className="rt-titre-satellite">
          RÉSEAUX SATELLITE
          <br />
          ET INTERCONNEXION
        </h2>
        <p className="rt-titre-lan">RÉSEAUX LAN ET FIBRE OPTIQUE</p>
      </div>

      <Page slices={SLICES_MILIEU} alt="" />

      <div className="rt-slice4">
        <img
          src="/assets/reseaux-telecoms-4.jpg"
          alt="Rôles et fonctions clés, composantes du service de support"
          loading="lazy"
          draggable="false"
        />
        <div className="rt-infoline">
          <span className="rt-infoline__icone" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3.5 6.5L12 13L20.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="rt-infoline__texte">
            <strong>Infoline</strong>
            <a href="mailto:support@oritelgroup.com">support@oritelgroup.com</a>
          </span>
        </div>
      </div>
    </>
  )
}
