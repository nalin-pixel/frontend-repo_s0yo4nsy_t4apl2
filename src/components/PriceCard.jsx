import React from 'react'

function PriceCard({ title, subtitle, price, highlight, footer, children }) {
  return (
    <div className={`relative rounded-2xl p-[1px] ${highlight ? 'bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500' : 'bg-white/10'}`}>
      <div className="rounded-2xl bg-slate-900/80 backdrop-blur-sm h-full">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              {subtitle && <p className="text-sm text-blue-200/70 mt-1">{subtitle}</p>}
            </div>
            {highlight && (
              <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30">Best Value</span>
            )}
          </div>
          <div className="mt-6">
            <div className="text-4xl font-extrabold text-white">{price}</div>
          </div>
          <div className="mt-4 text-blue-200/80 text-sm">
            {children}
          </div>
        </div>
        {footer && (
          <div className="px-6 py-4 bg-white/5 rounded-b-2xl border-t border-white/10">
            <p className="text-sm text-blue-100/80">{footer}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PriceCard
