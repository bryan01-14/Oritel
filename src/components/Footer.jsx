// Bandeau de contact issu de la maquette, surmonté de zones cliquables
// (téléphone, email, site et réseaux sociaux).
// Les valeurs sont exprimées en % de l'image : ajuster ici si besoin.
const ZONES = [
  { style: { left: '6%', top: '26%', width: '46%', height: '13%' }, href: 'tel:+2250708055868', label: 'Appeler ORITEL' },
  { style: { left: '6%', top: '44%', width: '36%', height: '11%' }, href: 'mailto:infos@oritelgroup.com', label: 'Écrire à ORITEL' },
  { style: { left: '6%', top: '55%', width: '36%', height: '11%' }, href: 'https://www.oritelgroup.com', label: 'Site web ORITEL', externe: true },
  { style: { left: '13.5%', top: '68%', width: '6%', height: '19%' }, href: '#', label: 'Facebook' },
  { style: { left: '19.5%', top: '68%', width: '6%', height: '19%' }, href: '#', label: 'Twitter' },
  { style: { left: '25.5%', top: '68%', width: '6%', height: '19%' }, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer id="contact" className="pied">
      <img
        src="/assets/footer.jpg"
        alt="Contactez-nous — Tél : +225 07 08 05 58 68 / 05 04 70 69 92 — infos@oritelgroup.com — www.oritelgroup.com"
        loading="lazy"
      />
      {ZONES.map(({ style, href, label, externe }) => (
        <a
          key={label}
          className="zone"
          style={style}
          href={href}
          aria-label={label}
          {...(externe ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        />
      ))}
    </footer>
  )
}
