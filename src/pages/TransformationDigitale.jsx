import Page from '../components/Page.jsx'

const SLICES = [
  'transformation-digitale-1.jpg',
  'transformation-digitale-2.jpg',
  'transformation-digitale-3.jpg',
  'transformation-digitale-4.jpg',
]

export default function TransformationDigitale() {
  return (
    <Page
      slices={SLICES}
      alt="Transformation digitale : innovation, solutions AOMP et AMOC, plateforme SADECOL et application Allo Labo."
    />
  )
}
