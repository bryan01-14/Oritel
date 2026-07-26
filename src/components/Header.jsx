import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

// « À Propos » a été retiré : cette section se trouve sur la page d'accueil.
const LIENS = [
  { to: '/', label: 'Accueil' },
  { to: '/reseaux-telecoms', label: 'Réseaux Télécoms' },
  { to: '/transformation-digitale', label: 'Transformation Digitale' },
  { to: '/supports-agricole', label: 'Supports Agricole' },
]

export default function Header() {
  const [ouvert, setOuvert] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const fermer = () => setOuvert(false)

  const location = useLocation()
  const navRef = useRef(null)
  const linkRefs = useRef({})
  const [pastille, setPastille] = useState({ left: 0, width: 0, opacity: 0 })
  const [survole, setSurvole] = useState(null)

  // Positionne la pastille glissante sous le lien actif (ou survolé) du menu.
  const positionner = (cle) => {
    const cible = linkRefs.current[cle]
    const conteneur = navRef.current
    if (!cible || !conteneur) return
    const rC = conteneur.getBoundingClientRect()
    const rL = cible.getBoundingClientRect()
    setPastille({ left: rL.left - rC.left, width: rL.width, opacity: 1 })
  }

  useLayoutEffect(() => {
    const cle = survole || location.pathname
    positionner(cle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, survole])

  useEffect(() => {
    const onResize = () => positionner(survole || location.pathname)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [survole, location.pathname])

  // En-tête qui se compacte et gagne une ombre au défilement.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`entete ${scrolled ? 'entete--reduite' : ''}`}>
      <div className="conteneur barre">
        <div className="marque">
          <Link to="/" onClick={fermer} aria-label="ORITEL Côte d'Ivoire — accueil" className="marque-lien">
            <img className="logo" src="/assets/logo.jpg" alt="Logo ORITEL Côte d'Ivoire" />
          </Link>
          <p className="accroche">
            Organisation
            <br />
            Réseaux Informatique &amp; Télécoms
          </p>
        </div>

        <nav>
          <ul className={`liens ${ouvert ? 'ouvert' : ''}`} ref={navRef} onMouseLeave={() => setSurvole(null)}>
            <span className="pastille" style={{ left: pastille.left, width: pastille.width, opacity: pastille.opacity }} aria-hidden="true" />
            {LIENS.map(({ to, label }, i) => (
              <li
                key={to}
                style={{ '--i': i }}
                ref={(el) => { linkRefs.current[to] = el }}
                onMouseEnter={() => setSurvole(to)}
              >
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={fermer}
                  className={({ isActive }) => (isActive ? 'actif' : undefined)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="contact-mobile">
              <a href="#contact" onClick={fermer}>Contacts</a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="bouton-contact">
          <span>Contacts</span>
        </a>

        <button
          className={`burger ${ouvert ? 'ouvert' : ''}`}
          onClick={() => setOuvert((v) => !v)}
          aria-label="Menu"
          aria-expanded={ouvert}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
