export default function HeroSmoke() {
  return (
    <div className="hero">
      <video autoPlay muted loop playsInline className="video">
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="content">
        <h1>Starry Nights</h1>
        <p>Luxury Shopping Experience</p>
        <a href="/shop">Enter Store</a>
      </div>
    </div>
  )
}
