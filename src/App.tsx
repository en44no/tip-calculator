import './App.css';
import { useState } from 'react';

function App() {

  const [quantity, setQuantity] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(1);


  const getTotal = () => {
    return (quantity + getTotalTip() || 0);
  }

  const getTotalTip = () => {
    return ((quantity * (tipPercentage / 100)) / people) || 0;
  }

  const getTotalPerPerson = () => {
    return (quantity + getTotalTip() || 0) / people;
  }

  const getTipPerPerson = () => {
    return (getTotalTip() / people) || 0;
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen' style={{ 'background': '#f8f8f8' }}>
      <div style={{ 'width': '33%', 'background': '#ffffff' }} className='p-10 flex flex-col gap-3 rounded-lg shadow-xl'>
        <h1 className='text-center font-bold text-3xl text-blue-500'>Calcular propina</h1>
        <div className='flex flex-col gap-1'>
          <label htmlFor='quantity' className='block text-md font-medium text-gray-700'>Cantidad</label>
          <div className='relative'>
            <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
              <span className="font-bold text-gray-500 text-md"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> </span>
            </div>
            <input id='quantity' type='number' min='0' className='border rounded-lg h-8 pl-8 pr-2 w-full' value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='percentage' className='block text-md font-medium text-gray-700'>Porcentaje de propina</label>
          <div className='relative'>
            <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
              <span className="font-bold text-gray-500 text-md"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg> </span>
            </div>
            <input id='percentage' type='number' min='0' className='border rounded-lg h-8 pl-8 pr-2 w-full' value={tipPercentage} onChange={(e) => setTipPercentage(parseInt(e.target.value))} />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='percentage' className='block text-md font-medium text-gray-700'>Cantidad de personas</label>
          <div className='relative border border-gray-500 rounded-lg p-1'>
            <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
              <span className="font-bold text-gray-500 text-md"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> </span>
            </div>
            <div className='flex items-center ml-8'>
              <input id="minmax-range" type="range" min="1" max="10" value={people} onChange={(e) => setPeople(parseInt(e.target.value))} className="w-full h-2 mr-1 bg-gray-200 rounded-lg appearance-none dark:bg-gray-200" />
              <span className='w-6 text-center font-semibold text-md'>{people}</span>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <h3 className='font-semibold text-lg'>Propina por persona</h3>
          <h3 className='font-semibold text-lg'>${getTipPerPerson().toFixed(2)}</h3>
        </div>
        <div className='flex justify-between'>
          <h3 className='font-bold text-lg text-blue-500'>Total por persona</h3>
          <h3 className='font-bold text-lg text-blue-500'>${getTotalPerPerson().toFixed(2)}</h3>
        </div>
        <hr />
        <div className='flex justify-between'>
          <h3 className='font-semibold text-lg'>Propina total</h3>
          <h3 className='font-semibold text-lg'>${getTotalTip().toFixed(2)}</h3>
        </div>
        <div className='flex justify-between'>
          <h3 className='font-bold text-lg text-blue-500'>Total</h3>
          <h3 className='font-bold text-lg text-blue-500'>${getTotal().toFixed(2)}</h3>
        </div>
      </div>
    </div >
  )
}

export default App
