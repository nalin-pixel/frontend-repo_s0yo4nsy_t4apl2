import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function AccountsSection() {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/pricing/accounts`)
        const data = await res.json()
        setOffers(data.accounts || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="accounts" className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Account Shop</h2>
        <p className="text-blue-200/80 text-center mt-2">Verified accounts with transparent stats</p>

        {loading ? (
          <p className="text-center text-blue-200 mt-10">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {offers.map((o) => (
              <PriceCard
                key={o.id}
                title={o.tier}
                subtitle={o.popular ? 'Popular choice' : undefined}
                price={`$${o.price_usd.toFixed(2)}`}
                highlight={!!o.popular}
                footer={o.stock != null ? `${o.stock} in stock` : undefined}
              >
                <ul className="list-disc list-inside space-y-1">
                  {o.features?.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </PriceCard>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AccountsSection
