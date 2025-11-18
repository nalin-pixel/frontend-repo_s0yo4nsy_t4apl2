import React from 'react'

function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(59,130,246,0.2),transparent),radial-gradient(1000px_500px_at_20%_120%,rgba(147,51,234,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30" />
            <span className="text-xl font-semibold text-white">Skyblock Shop</span>
          </div>
          <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition">Contact</a>
        </div>
        <div className="mt-12 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Hypixel Skyblock Coins & Accounts
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Fast, safe, and reliable. Transparent pricing for coins and ready-to-play accounts.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#coins" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
              View Coin Prices
            </a>
            <a href="#accounts" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10 transition">
              Browse Accounts
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
