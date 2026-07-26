// Affiche une page composée de tranches d'image.
// La première tranche est chargée en priorité, les suivantes à l'approche du scroll.
export default function Page({ slices, alt }) {
  return (
    <div className="page">
      {slices.map((src, i) => (
        <img
          key={src}
          src={`/assets/${src}`}
          alt={i === 0 ? alt : ''}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          draggable="false"
        />
      ))}
    </div>
  )
}
