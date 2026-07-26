import Page from '../components/Page.jsx'

const SLICES = [
  'supports-agricole-1.jpg',
  'supports-agricole-2.jpg',
  'supports-agricole-3.jpg',
  'supports-agricole-4.jpg',
]

export default function SupportsAgricole() {
  return (
    <Page
      slices={SLICES}
      alt="Supports agricoles : Agri-Techn et agro-météo, digitalisation des champs agricoles et traçabilité des produits."
    />
  )
}
