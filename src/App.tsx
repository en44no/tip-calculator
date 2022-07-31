import './App.css';
import { useState } from 'react';
import Social from './components/Social';
import { CurrencyDollarIcon, ChartPieIcon, UserCircleIcon } from '@heroicons/react/outline';

function App() {

  const [quantity, setQuantity] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [people, setPeople] = useState(1);


  const getTotal = () => {
    return (parseInt(quantity) + getTotalTip() || 0);
  }

  const getTotalTip = () => {
    return (parseInt(quantity) * parseInt(tipPercentage) / 100 || 0);
  }

  const getTotalPerPerson = () => {
    return (parseInt(quantity) + getTotalTip() || 0) / people;
  }

  const getTipPerPerson = () => {
    return ((parseInt(quantity) * (parseInt(tipPercentage) / 100)) / people) || 0;
  }

  const onInputChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    switch (e.target.id) {
      case 'quantity':
        setQuantity(value);
        break;
      case 'percentage':
        setTipPercentage(value);
        break;
      default: break;
    }
  }

  const preventMinus = (e: any) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <div className='flex justify-center items-center w-screen h-[80vh] md:h-screen p-2' style={{ 'background': '#ffffff' }}>
      <div style={{ 'background': '#fefefe' }} className='w-screen md:w-[32rem] lg:w-[32rem] px-7 lg:px-10 py-3 lg:py-5 flex flex-col gap-3 rounded-lg shadow-md'>
        <h1 className='text-center font-bold text-3xl text-blue-500'>Calcular propina</h1>
        <div className='flex flex-col gap-1'>
          <label htmlFor='quantity' className='block text-md font-medium text-gray-700'>Cantidad a pagar</label>
          <div className='relative'>
            <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
              <span className="font-bold text-gray-400 text-md"> <CurrencyDollarIcon className='h-6 w-6' /> </span>
            </div>
            <input autoFocus id='quantity' type='number' min='0' className='border-none shadow-md rounded-lg h-8 pl-8 pr-2 w-full' value={quantity} onKeyPress={preventMinus} onChange={onInputChange} />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='percentage' className='block text-md font-medium text-gray-700'>Porcentaje de propina</label>
          <div className='relative'>
            <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
              <span className="font-bold text-gray-400 text-md"> <ChartPieIcon className='h-6 w-6' /> </span>
            </div>
            <input id='percentage' type='number' min='0' className='border-none shadow-md rounded-lg h-8 pl-8 pr-2 w-full' value={tipPercentage} onKeyPress={preventMinus} onChange={onInputChange} />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='people' className='block text-md font-medium text-gray-700'>Cantidad de personas</label>
          <div className='relative border-none shadow-md rounded-lg p-1 bg-white'>
            <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
              <span className="font-bold text-gray-400 text-md"> <UserCircleIcon className='h-6 w-6' /> </span>
            </div>
            <div className='flex items-center ml-8'>
              <input id="people" type="range" min="1" max="20" className="w-full h-2 mr-1 bg-gray-200 rounded-lg appearance-none dark:bg-gray-200" value={people} onChange={(e) => setPeople(parseInt(e.target.value))} />
              <span className='w-6 text-center font-semibold text-md'>{people}</span>
            </div>
          </div>
        </div>
        <div className='p-4 pt-2 flex flex-col gap-1'>
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
      </div>
      <Social />
    </div>
  )
}

export default App;
