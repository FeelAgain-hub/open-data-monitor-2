import { ChevronDown, CheckCircle2 } from 'lucide-react'

export function SectionSelector() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b border-gray-800 pb-4">
      <div className="flex items-center gap-4">
        <span className="text-gray-500 text-sm">розділ:</span>
        <button className="flex items-center gap-2 bg-[#111] border border-gray-700 px-4 py-2 rounded text-sm text-white hover:bg-gray-800 transition-colors">
          <span className="text-cyan-400">⚡</span> Perfect Storm
          <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
        </button>
      </div>
      
      <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/10 px-3 py-1.5 rounded border border-green-500/20">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-green-500/70 uppercase tracking-wider">Data_Integrity</span>
          <span className="font-bold tracking-wider">VERIFIED</span>
        </div>
        <CheckCircle2 className="w-5 h-5" />
      </div>
    </div>
  )
}
