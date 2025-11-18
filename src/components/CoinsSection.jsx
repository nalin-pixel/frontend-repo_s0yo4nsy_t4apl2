import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function CoinsSection() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/pricing/coins`)
        const data = await res.json()
        setPackages(data.coins || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="coins" className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Coin Pricing</h2>
        <p className="text-blue-200/80 text-center mt-2">Choose a package that fits your needs</p>

        {loading ? (
          <p className="text-center text-blue-200 mt-10">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {packages.map((p) => (
              <PriceCard
                key={p.id}
                title={`${p.amount_million}M Coins`}
                subtitle={p.description}
                price={`$${p.price_usd.toFixed(2)}`}
                highlight={p.best_value}
                footer="Instant delivery after confirmation"
              >
                <ul className="list-disc list-inside space-y-1">
                  <li>Secure trade method</li>
                  <li>Ban-safe best practices</li>
                  <li>Proof of delivery</li>
                </ul>
              </PriceCard>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CoinsSection
