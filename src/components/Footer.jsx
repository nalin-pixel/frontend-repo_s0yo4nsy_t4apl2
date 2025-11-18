import React from 'react'

function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-blue-200/70 text-sm">Not affiliated with Hypixel or Mojang. All trades follow server rules.</p>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-white/80">Need help?</span>
          <a href="https://discord.com/" target="_blank" className="px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 hover:bg-indigo-500/30 transition">Join Discord</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
