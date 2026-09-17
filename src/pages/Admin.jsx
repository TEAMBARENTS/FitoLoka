import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ref, set, get, child } from "firebase/database";
import { database } from '../firebase'; 

function Admin() {
  const KODE_MASTER = "ADMIN2026";
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); 
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputMasterCode, setInputMasterCode] = useState('');
  
  const [namaPemilik, setNamaPemilik] = useState('');
  const [nomorLahan, setNomorLahan] = useState('');
  const [kodeAkses, setKodeAkses] = useState('');
  const [pesan, setPesan] = useState({ text: '', type: '' });

  const handleLoginAdmin = (e) => {
    e.preventDefault();
    if (inputMasterCode === KODE_MASTER) {
      setIsAuthenticated(true);
      setPesan({ text: '', type: '' });
    } else {
      setPesan({ text: 'Wrong Master Code!', type: 'error' });
    }
  };

  const generateRandomID = () => {
    const randID = "LHN-" + Math.floor(100 + Math.random() * 900);
    setNomorLahan(randID);
  };
  const generateRandomPIN = () => {
    const randPIN = Math.floor(1000 + Math.random() * 9000).toString();
    setKodeAkses(randPIN);
  };

  const handleDaftarLahan = async (e) => {
    e.preventDefault();
    setPesan({ text: '', type: '' });

    if (!namaPemilik || !nomorLahan || !kodeAkses) {
      setPesan({ text: 'All fields are required.', type: 'error' });
      return;
    }

    const idLahanUpper = nomorLahan.toUpperCase();

    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `lahan/${idLahanUpper}`));
      
      if (snapshot.exists()) {
        setPesan({ text: 'Farm Number Already Exists!', type: 'error' });
        return;
      }

      const strukturDataBaru = {
        nama_pemilik: namaPemilik,
        kode_akses: kodeAkses,
        waktu_daftar: new Date().toISOString(),
        sensor: {
          suhu: 0,
          kelembapan: 0,
          nutrisi: 0
        }
      };

      await set(ref(database, `lahan/${idLahanUpper}`), strukturDataBaru);
      
      setPesan({ text: `Success! Farm ${idLahanUpper} registered successfully.`, type: 'success' });

      setNamaPemilik('');
      setNomorLahan('');
      setKodeAkses('');

    } catch (error) {
      console.error(error);
      setPesan({ text: 'Failed to contact database.', type: 'error' });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full border border-emerald-400/80">
          <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">FitoLoka Secure Admin</h2>
          <form onSubmit={handleLoginAdmin} className="flex flex-col-1">
            <input 
              type="password" 
              placeholder="Enter Master Code" 
              className="w-3/4 p-3 bg-white text-black rounded-l-2xl border border-emerald-400/80 placeholder:text-emerald-400 text-center tracking-widest"
              value={inputMasterCode}
              onChange={(e) => setInputMasterCode(e.target.value)}
            />
            <button type="submit" className="w-1/4 bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-r-2xl transition">Access</button>
          </form>
          {pesan.text && <p className="text-red-400 text-sm font-medium text-center mt-2 rounded">{pesan.text}</p>}
          <button onClick={handleBackToHome} className="w-full text-gray-500 mt-4 text-sm hover:text-green-800 underline">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-100 text-white p-6 md:p-12 font-poppins">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-emerald-400/80 shadow-2xl">
        
        <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-green-600">Admin Center Control</h1>
            <p className="text-gray-400 text-sm">Manage agricultural data and settings</p>
          </div>
          <button onClick={handleBackToHome} className="bg-gray-700 hover:bg-gray-600 hover:text-red-500 px-4 py-2 rounded-2xl text-sm font-bold transition">Close Panel</button>
        </div>

        {pesan.text && (
          <div className={`p-4 rounded-lg mb-6 font-bold ${pesan.type === 'success' ? 'bg-green-900 text-green-200 border border-green-600' : 'bg-red-900 text-red-200 border border-red-600'}`}>
            {pesan.text}
          </div>
        )}

        <form onSubmit={handleDaftarLahan} className="space-y-6">
          <div>
            <label className="block text-green-600 text-sm font-bold mb-2">Farm Owner Name (Client Name)</label>
            <input 
              type="text" 
              className="w-full p-3 bg-white rounded-2xl border text-green-600 border-emerald-400/80 placeholder:text-emerald-500 focus:border-green-500 outline-none"
              placeholder="Example: Mr. Budi (Tomato Greenhouse)"
              value={namaPemilik}
              onChange={(e) => setNamaPemilik(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="lg:block text-green-600 text-sm font-bold mb-2 flex justify-between">
                Farm Number (Tracking ID)
                <button type="button" onClick={generateRandomID} className="text-green-400 ml-2 text-xs hover:underline">Generate ID</button>
              </label>
              <input 
                type="text" 
                className="w-full p-3 bg-white rounded-2xl border text-green-600  border-emerald-400/80 placeholder:text-emerald-500 focus:border-green-500 outline-none uppercase"
                placeholder="Example: LHN-001"
                value={nomorLahan}
                onChange={(e) => setNomorLahan(e.target.value)}
              />
            </div>

            <div>
              <label className="lg:block text-green-600 text-sm font-bold mb-2 flex justify-between">
                Access Code (PIN)
                <button type="button" onClick={generateRandomPIN} className="text-green-400 ml-2 text-xs hover:underline">Generate PIN</button>
              </label>
              <input 
                type="text" 
                className="w-full p-3 bg-white rounded-2xl border text-green-600 border-emerald-400/80 placeholder:text-emerald-500 focus:border-green-500 outline-none text-center tracking-widest font-bold"
                placeholder="Example: 1234"
                value={kodeAkses}
                onChange={(e) => setKodeAkses(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl mt-4 shadow-lg transition duration-200">
            Register New Farm to System
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
