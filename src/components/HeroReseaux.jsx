// Hero de la page « Réseaux Télécoms » reconstruit en HTML/CSS :
// la photo sert de fond, le titre est du vrai texte (net, sans artefact,
// modifiable). Les tailles sont exprimées en cqw (% de la largeur du hero),
// donc tout reste proportionnel à toutes les tailles d'écran.
export default function HeroReseaux() {
  return (
    <section className="rt-hero" aria-label="Réseaux Télécoms et services">
      <span className="rt-hero__bar" />
      <div className="rt-hero__titres">
        <h1 className="rt-hero__t1">RÉSEAUX TÉLÉCOMS</h1>
        <p className="rt-hero__t2">ET SERVICES</p>
      </div>
      <div className="rt-hero__dots" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </div>
    </section>
  )
}
