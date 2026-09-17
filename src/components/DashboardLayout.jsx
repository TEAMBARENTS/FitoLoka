import { HiOutlineArrowRightOnRectangle, HiOutlineSquares2X2 } from "react-icons/hi2";

function DashboardLayout({ idLahan, namaPemilik, onLogout, children }) {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAF9] text-slate-800 flex font-poppins">
      
      <aside className="w-64 h-full bg-white border-r border-emerald-200/80 flex-col justify-between hidden md:flex flex-shrink-0 shadow-sm z-20">
        <div>
          <div className="p-6 border-b border-emerald-100">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-[#0A6847]">
                FITO<span className="font-light text-slate-700">LOKA</span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium tracking-wide">Smart Greenhouse Monitor</p>
          </div>

          <nav className="py-4 pr-10 space-y-2">
            <a 
              href="#overview" 
              className="flex items-center gap-3 px-4 py-3 rounded-r-2xl bg-[#0A6847] text-white font-medium shadow-md shadow-[#0A6847]/20 transition-all duration-200"
            >
              <HiOutlineSquares2X2 className="text-xl" />
              <span>Dashboard</span>
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-100/80 mb-3 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Connected to</span>
              <span className="bg-emerald-200/60 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                ID: {idLahan}
              </span>
            </div>
            <p className="text-sm font-bold text-slate-800 truncate">{namaPemilik}</p>
          </div>
          
          <button 
            onClick={onLogout}
            className="w-full bg-rose-50 hover:bg-rose-100/80 text-rose-600 border border-rose-200/80 py-2.5 px-4 rounded-xl transition duration-200 text-sm font-semibold shadow-xs cursor-pointer flex items-center justify-center gap-2"
          >
            <HiOutlineArrowRightOnRectangle className="text-lg" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 h-full overflow-y-auto bg-[#F8FAF9]">
        <div className="md:hidden bg-white px-5 py-3.5 border-b border-slate-200 flex justify-between items-center sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-2">
            <div>
              <h1 className="text-lg font-bold text-[#0A6847] leading-tight">FITOLOKA</h1>
              <p className="text-xs text-slate-500 font-medium truncate max-w-[160px]">{namaPemilik} ({idLahan})</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-semibold py-1.5 px-3 rounded-lg flex items-center gap-1"
          >
            <HiOutlineArrowRightOnRectangle />
            <span>Log Out</span>
          </button>
        </div>

        <div className="p-5 sm:p-8 lg:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}

export default DashboardLayout;