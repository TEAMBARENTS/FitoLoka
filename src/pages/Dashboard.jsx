import { useState, useEffect } from 'react';
import { ref, onValue, set } from "firebase/database";
import { database } from '../firebase'; 
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import DashboardLayout from '../components/DashboardLayout'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { FiThermometer, FiDroplet, FiActivity, FiRefreshCw } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi2';

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);

function Dashboard() {
  const [suhu, setSuhu] = useState(0);
  const [kelembapan, setKelembapan] = useState(0);
  const [nutrisi, setNutrisi] = useState(0);
  const [riwayatData, setRiwayatData] = useState([]);
  const [jenisTanaman, setJenisTanaman] = useState([]);
  
  const [aiAnalysis, setAiAnalysis] = useState("Waiting for AI analysis based on current sensor data...");
  const [isAiLoading, setIsAiLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const idLahan = location.state?.idLahan;
  const namaPemilik = location.state?.namaPemilik;

  useEffect(() => {
    if (!idLahan) {
      navigate("/");
    }
  }, [idLahan, navigate]);

  const onLogout = () => {
    navigate("/");
  };
  
  useEffect(() => {
    if (!idLahan) return;
    const basePath = `lahan/${idLahan}/sensor`;
    
    const unsubSuhu = onValue(ref(database, `${basePath}/suhu`), (snapshot) => setSuhu(snapshot.val() || 0));
    const unsubKelembapan = onValue(ref(database, `${basePath}/kelembapan`), (snapshot) => setKelembapan(snapshot.val() || 0));
    const unsubNutrisi = onValue(ref(database, `${basePath}/nutrisi`), (snapshot) => setNutrisi(snapshot.val() || 0));

    return () => {
      unsubSuhu();
      unsubKelembapan();
      unsubNutrisi();
    };
  }, [idLahan]);

  useEffect(() => {
    const waktuSekarang = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (suhu === 0 && kelembapan === 0) return;

    setRiwayatData(prevData => {
      const dataBaru = [...prevData, { waktu: waktuSekarang, suhu: suhu, kelembapan: kelembapan }];
      if (dataBaru.length > 12) return dataBaru.slice(dataBaru.length - 12);
      return dataBaru;
    });
  }, [suhu, kelembapan]);

  const analisisDenganAI = async () => {
    if (suhu === 0 && kelembapan === 0) return; 

    setIsAiLoading(true);
    setAiAnalysis("AI is analyzing field conditions...");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
      const prompt = `Anda adalah asisten penyuluh pertanian cerdas dari FitoLoka.
      Tugas Anda menganalisis data sensor saat ini KHUSUS untuk tanaman: ${jenisTanaman}.
      
      Data Saat Ini:
      - Suhu: ${suhu}°C
      - Kelembapan: ${kelembapan}%
      - Nutrisi: ${nutrisi} PPM
      
      Instruksi Wajib:
      1. Jawab dalam Bahasa Inggris yang santai, ramah, dan mudah dipahami petani. JANGAN gunakan istilah ilmiah yang rumit.
      2. Kalimat pertama: Langsung nyatakan apakah kondisi saat ini SAFE, SUB-OPTIMAL, atau DANGEROUS untuk ${jenisTanaman}.
      3. Kalimat kedua: WAJIB sebutkan "Ideal Range" (rentang suhu, kelembapan, dan TDS yang seharusnya) untuk tanaman ${jenisTanaman} sebagai perbandingan.
      4. Kalimat ketiga: Berikan satu saran tindakan teknis singkat apa yang harus dilakukan petani sekarang. (Maksimal 3-4 kalimat).`;

      const result = await model.generateContent(prompt);
      setAiAnalysis(result.response.text());
    } catch (error) {
      console.error("AI Error:", error);
      setAiAnalysis(`Failed: ${error.message}`);
    } finally {
      setIsAiLoading(false);
    }
  };

  const getSuhuStatus = (val) => {
    if (val < 24) return { teks: "Cold", badge: "bg-blue-100 text-blue-700" };
    if (val > 28) return { teks: "Hot", badge: "bg-rose-100 text-rose-700 animate-pulse" };
    return { teks: "Optimal", badge: "bg-emerald-100 text-emerald-700" };
  };

  const getKelembapanStatus = (val) => {
    if (val < 60) return { teks: "Low", badge: "bg-amber-100 text-amber-700" };
    if (val > 75) return { teks: "High", badge: "bg-rose-100 text-rose-700" };
    return { teks: "Optimal", badge: "bg-emerald-100 text-emerald-700" };
  };

  const getNutrisiStatus = (val) => {
    if (val < 800) return { teks: "Low", badge: "bg-amber-100 text-amber-700" };
    if (val > 1200) return { teks: "High", badge: "bg-rose-100 text-rose-700" };
    return { teks: "Optimal", badge: "bg-emerald-100 text-emerald-700" };
  };

  const getRekomendasi = () => {
    if (suhu > 28) return { teks: "Temperature is too high! Immediately activate air circulation or greenhouse cooling.", warna: "bg-rose-50 border-rose-200 text-rose-900", iconWarna: "bg-rose-100 text-rose-600" };
    if (kelembapan < 60) return { teks: "Air humidity is low. It is recommended to perform misting / fogging irrigation.", warna: "bg-amber-50 border-amber-200 text-amber-900", iconWarna: "bg-amber-100 text-amber-600" };
    if (nutrisi < 800) return { teks: "Nutrient levels (PPM) have dropped. Add the required amount of concentrated nutrient solution A/B to the reservoir.", warna: "bg-amber-50 border-amber-200 text-amber-900", iconWarna: "bg-amber-100 text-amber-600" };
    return { teks: "All microclimate parameters for the plants are within the optimal range and very stable.", warna: "bg-emerald-50/90 border-emerald-200 text-emerald-900", iconWarna: "bg-emerald-100 text-[#0A6847]" };
  };

  const rekomendasi = getRekomendasi();
  const suhuStatus = getSuhuStatus(suhu);
  const kelembapanStatus = getKelembapanStatus(kelembapan);
  const nutrisiStatus = getNutrisiStatus(nutrisi);

  const simulasiKirimData = () => {
    const basePath = `lahan/${idLahan}/sensor`;
    set(ref(database, `${basePath}/suhu`), Math.floor(Math.random() * (35 - 20 + 1)) + 20); 
    set(ref(database, `${basePath}/kelembapan`), Math.floor(Math.random() * (90 - 40 + 1)) + 40); 
    set(ref(database, `${basePath}/nutrisi`), Math.floor(Math.random() * (1500 - 500 + 1)) + 500); 
  };

  if (!idLahan) return null;

  return (
    <DashboardLayout idLahan={idLahan} namaPemilik={namaPemilik} onLogout={onLogout}>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Farm Summary</h1>
            <span className="bg-emerald-100 text-[#0A6847] text-xs font-bold px-2.5 py-0.5 rounded-full">
              {idLahan}
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">Real-time monitoring of smart greenhouse microclimate and nutrients.</p>
        </div>
        
        <div className="flex items-center gap-2 self-start sm:self-auto bg-white border border-emerald-200/80 px-4 py-2 rounded-2xl shadow-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0A6847]"></span>
          </span>
          <span className="text-xs font-semibold text-slate-700">IoT Live Connected</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0A6847] to-emerald-100 p-5 md:p-6 rounded-2xl shadow-lg border  flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 relative overflow-hidden" id="ai-panel">
        
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <HiOutlineSparkles className={`w-24 h-24 text-emerald-100 ${isAiLoading ? 'animate-spin' : ''}`} />
        </div>

        <div className="relative z-10 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg text-emerald-50">
                <HiOutlineSparkles className="text-lg" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm tracking-widest uppercase text-emerald-100 whitespace-nowrap">FitoLoka AI</h3>
            </div>
            
            <div className="relative w-full sm:max-w-xs">
              <input 
                type="text"
                placeholder="Enter the type of plant (e.g., Tomato)"
                value={jenisTanaman}
                onChange={(e) => {
                  setJenisTanaman(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    analisisDenganAI();
                  }
                }}
                className="w-full bg-emerald-800/60 text-emerald-100 border border-emerald-800 rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200 placeholder-emerald-200/50 transition-colors"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-400/70 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-white text-sm sm:text-base italic leading-relaxed md:pr-10 min-h-[3rem]">
            "{aiAnalysis}"
          </p>
        </div>
        
        <button 
          onClick={analisisDenganAI}
          disabled={isAiLoading || suhu === 0}
          className={`relative z-10 whitespace-nowrap font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-300 text-sm flex items-center justify-center gap-2 border 
            ${isAiLoading 
              ? 'bg-emerald-900/40 text-emerald-200/50 border-emerald-800 cursor-not-allowed' 
              : 'bg-white text-[#0A6847] border-white hover:bg-emerald-50 hover:shadow-xl hover:shadow-black/20 cursor-pointer active:scale-95'
            }`}
        >
          {isAiLoading ? (
             <>
               <FiRefreshCw className="animate-spin text-lg" />
               Analyzing Data...
             </>
          ) : 'Ask AI Expert'}
        </button>
      </div>

      {/* <div className={`p-5 rounded-2xl border mb-8 shadow-xs flex items-center gap-4 transition-all duration-300 ${rekomendasi.warna}`} id="overview">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${rekomendasi.iconWarna}`}>
          <HiOutlineLightBulb />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase opacity-80">Smart Recommendations FitoLoka</span>
          </div>
          <p className="text-sm sm:text-base font-medium mt-0.5">{rekomendasi.teks}</p>
        </div>
      </div> */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-emerald-200/80 hover:shadow-md transition duration-200 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl group-hover:scale-105 transition">
              <FiThermometer />
            </div>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${suhuStatus.badge}`}>
              {suhuStatus.teks}
            </span>
          </div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Air Temperature</h2>
          <div className="flex items-baseline gap-1 my-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight">{suhu}</span>
            <span className="text-xl font-bold text-rose-500">°C</span>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>AVG Ideal Range:</span>
            <span className="font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
              24°C - 28°C
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xs border border-emerald-200/80 hover:shadow-md transition duration-200 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center text-2xl group-hover:scale-105 transition">
              <FiDroplet />
            </div>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${kelembapanStatus.badge}`}>
              {kelembapanStatus.teks}
            </span>
          </div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Humidity</h2>
          <div className="flex items-baseline gap-1 my-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight">{kelembapan}</span>
            <span className="text-xl font-bold text-sky-500">%</span>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>AVG Ideal Range:</span>
            <span className="font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
              60% - 75%
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xs border border-emerald-200/80 hover:shadow-md transition duration-200 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A6847] flex items-center justify-center text-2xl group-hover:scale-105 transition">
              <FiActivity />
            </div>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${nutrisiStatus.badge}`}>
              {nutrisiStatus.teks}
            </span>
          </div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nutrient Level (TDS)</h2>
          <div className="flex items-baseline gap-1 my-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight">{nutrisi}</span>
            <span className="text-base font-bold text-[#0A6847]">PPM</span>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>AVG Ideal Range:</span>
            <span className="font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
              800 - 1200 PPM
            </span>
          </div>
        </div>

      </div>

      <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-xs border border-emerald-200/80 mb-8" id="analytics">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Microclimate Trend Chart</h2>
            <p className="text-xs text-slate-400 mt-0.5">Real-time movement of temperature and humidity data</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-rose-600">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              Temperature (°C)
            </div>
            <div className="flex items-center gap-1.5 text-sky-600">
              <span className="w-3 h-3 rounded-full bg-sky-500"></span>
              Humidity (%)
            </div>
          </div>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={riwayatData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSuhu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#F43F5E" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="colorKelembapan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis dataKey="waktu" stroke="#94A3B8" tick={{ fontSize: 12 }} />
              <YAxis stroke="#94A3B8" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)', color: '#1E293B', fontWeight: 600, fontSize: '13px' }} 
              />
              <Area type="monotone" dataKey="suhu" stroke="#F43F5E" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSuhu)" dot={{ r: 3, fill: '#F43F5E' }} activeDot={{ r: 6, stroke: '#FFFFFF', strokeWidth: 2 }} />
              <Area type="monotone" dataKey="kelembapan" stroke="#0EA5E9" strokeWidth={2.5} fillOpacity={1} fill="url(#colorKelembapan)" dot={{ r: 3, fill: '#0EA5E9' }} activeDot={{ r: 6, stroke: '#FFFFFF', strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50/60 via-white to-emerald-50/40 p-6 rounded-2xl border border-emerald-100/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5" id="simulator">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-200/80 text-[#0A6847] flex items-center justify-center text-2xl shadow-xs">
            <FiRefreshCw />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-800">Simulate IoT Sensor Devices</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Send random data to the Realtime Database to test the responsiveness of the sensor in plot <span className="text-[#0A6847] font-semibold">{idLahan}</span>.
            </p>
          </div>
        </div>
        <button 
          onClick={simulasiKirimData} 
          className="w-full sm:w-auto bg-[#0A6847] hover:bg-[#085237] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm whitespace-nowrap shadow-md shadow-[#0A6847]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <FiRefreshCw className="text-base" />
          <span>Send Sensor Data</span>
        </button>
      </div>

    </DashboardLayout>
  );
}

export default Dashboard;