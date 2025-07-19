
const CaseSection = ({ onComingSoon }) => {
  const handleServiceSiteClick = () => {
    window.open('https://service-site-pied.vercel.app', '_blank')
  }

  const handleMemoryGameClick = () => {
    window.open('https://memory-game-9iob.vercel.app', '_blank')
  }

  const handleECommerceClick = () => {
    window.open('https://atlaselectronics.vercel.app/', '_blank')
  }

  const handleAnalyticsClick = () => {
    window.open('https://cite-unseen.vercel.app/', '_blank')
  }

  return (
    <section id="case">
      <button className="case-btn service-site-btn" onClick={handleServiceSiteClick}>
        <img src="/images/bike_repair.jpg" alt="Bike Repair" />
        <p className="banner">shift happens. - Bike Repair Shop</p>
      </button>
      
      <button className="case-btn memory-game-btn" onClick={handleMemoryGameClick}>
        <img src="/images/small_game.jpg" alt="Small Video Game" />
        <p className="banner">Pattern Pulse. - Small Memory Game</p>
      </button>
      
      <button className="case-btn" onClick={handleECommerceClick}>
        <img src="/images/ecommerce.jpg" alt="E Commerce site" />
        <p className="banner">Atlas Electronics - E Commerce site</p>
      </button>
      
      <button className="case-btn" onClick={handleAnalyticsClick}>
        <img src="/images/analytics.png" alt="Analytics site" />
        <p className="banner">Cite Unseen - Analytics site</p>
      </button>
    </section>
  )
}

export default CaseSection
