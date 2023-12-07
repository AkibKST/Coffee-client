
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  return (
    <div className='container'>
      
      <h1 className='text-6xl text-purple-600'>Total coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 p-20 mx-auto'>
      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        ></CoffeeCard>)
      }
      </div>
     
    </div>
  )
}

export default App
