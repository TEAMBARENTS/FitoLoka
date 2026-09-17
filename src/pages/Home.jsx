import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ref, get, child } from "firebase/database"
import { database } from '../firebase'

import Hero from '../components/Hero'
import Service from '../components/Service'
import Portofolio from '../components/Portofolio'
import Footer from '../components/Footer'

const Home = () => {
  const [step, setStep] = useState(0); 
  const [inputLahan, setInputLahan] = useState('');
  const [inputKode, setInputKode] = useState('');
  const [pesanError, setPesanError] = useState('');
  const [dataLahanAktif, setDataLahanAktif] = useState(null);
  const navigate = useNavigate();

  const handleCariLahan = async (e) => {
    e.preventDefault();
    setPesanError('');
    
    if (!inputLahan.trim()) {
      setPesanError('Farmland ID cannot be empty.');
      return;
    }

    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `lahan/${inputLahan.toUpperCase()}`));
      
      if (snapshot.exists()) {
        setDataLahanAktif(snapshot.val());
        setStep(1); 
      } else {
        setPesanError('Farmland not found.');
      }
    } catch (error) {
      setPesanError('A network error occurred.');
      console.error(error);
    }
  };

  const handleVerifikasiKode = (e) => {
    e.preventDefault();
    setPesanError('');

  if (inputKode === dataLahanAktif.kode_akses) {
    navigate("/dashboard", {
      state: {
        idLahan: inputLahan.toUpperCase(),
        namaPemilik: dataLahanAktif.nama_pemilik
      }
    });
    } else {
      setPesanError('Incorrect Access Code!');
    }
  };


  return (
    <div className='overflow-hidden relative'>
      
      {step === 1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
          <div className="bg-[#0f291e] p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-green-800" data-aos="zoom-in">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Enter Access Code</h2>
            <p className="text-sm text-gray-300 mb-6 text-center">
              Farmland found: <br/>
              <span className="font-bold text-green-400 text-lg">{dataLahanAktif.nama_pemilik}</span>
            </p>
            
            <form onSubmit={handleVerifikasiKode}>
              <input 
                type="password" 
                className="w-full px-2 py-2 bg-gray-800 rounded-xl text-white text-center tracking-[0.5em] text-xl focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                placeholder="****"
                value={inputKode}
                onChange={(e) => setInputKode(e.target.value)}
              />
              {pesanError && <p className="text-red-600 text-md font-medium mb-4 text-center">{pesanError}</p>}
              
              <div className="flex gap-4">
                <button 
                  type="button" 
                  onClick={() => setStep(0)} 
                  className="w-1/3 bg-gray-600 hover:bg-gray-700 hover:text-red-700 text-white font-bold py-3 rounded-xl transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="w-2/3 bg-white hover:bg-gray-300 text-green-600 font-bold py-3 rounded-xl transition"
                >
                  Open Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Hero 
        inputLahan={inputLahan} 
        setInputLahan={setInputLahan} 
        handleCariLahan={handleCariLahan} 
        pesanError={pesanError}
      />
      <Service />
      <Portofolio />
      <Footer />
    </div>
  )
}

export default Home