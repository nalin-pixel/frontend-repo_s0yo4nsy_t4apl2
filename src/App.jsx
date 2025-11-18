import React from 'react'
import Header from './components/Header'
import CoinsSection from './components/CoinsSection'
import AccountsSection from './components/AccountsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <Header />
      <CoinsSection />
      <AccountsSection />
      <Footer />
    </div>
  )
}

export default App
