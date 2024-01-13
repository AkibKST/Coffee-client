
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Banner from './components/Banner';
import cup1 from './assets/images/cups/Rectangle 9.png';
import cup2 from './assets/images/cups/Rectangle 10.png';
import cup3 from './assets/images/cups/Rectangle 11.png';
import cup4 from './assets/images/cups/Rectangle 12.png';
import cup5 from './assets/images/cups/Rectangle 13.png';
import cup6 from './assets/images/cups/Rectangle 14.png';
import cup7 from './assets/images/cups/Rectangle 15.png';
import cup8 from './assets/images/cups/Rectangle 16.png';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    // This is HOMEPAGE
    <div className=''>

      {/* Banner Section */}
      <div>
        <Banner></Banner>
      </div>

      {/* Our Product section */}
      <div className='px-12'>
        <p className='text-base text-center mt-14'>--- Sip & Savor ---</p>
        <h1 className='text-4xl text-center mb-6'>Our Popular Products</h1>
        <div className='grid md:grid-cols-2 mx-auto'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>

        {/* Follows On Instagram Section */}
        <div>
          <h5 className='text-base text-center mt-12'>Follow Us Now</h5>
          <br />
          <h1 className='text-4xl font-bold text-center'>Follow on Instagram</h1>

          <div className='grid grid-cols-4 pt-10 gap-5'>
            <img src={cup1} alt="" />
            <img src={cup2} alt="" />
            <img src={cup3} alt="" />
            <img src={cup4} alt="" />
            <img src={cup5} alt="" />
            <img src={cup6} alt="" />
            <img src={cup7}alt="" />
            <img src={cup8} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
