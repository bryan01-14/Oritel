import Page from '../components/Page.jsx'

const SLICES = ['accueil-1.jpg', 'accueil-2.jpg']

export default function Accueil() {
  return (
    <Page
      slices={SLICES}
      alt="ORITEL Côte d'Ivoire : intégrateur de solutions télécoms et informatiques depuis 2011. Domaines de compétence et réalisations."
    />
  )
}
