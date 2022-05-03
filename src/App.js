import './App.css';
import { useState } from 'react';
import DrinkDropdown from './DrinkDropdown';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';
import InstructionsList from './InstructionsList';
import InstructionsForm from './InstructionsForm';
import OrderNameInput from './OrderNameInput';
import Order from './Order';

function App() {
  const [drinkId, setDrink] = useState('drink-1');
  const [sideId, setSide] = useState('side-1');
  const [foodId, setFood] = useState('food-1');
  const [orderName, setOrderName] = useState('customer');
  const { instruction, setInstructions } = useState(['']);

  return (
    <div className="App">
      <Order drinkId={drinkId} sideId={sideId} foodId={foodId} />
      <h2>Order is ready for {orderName}!</h2>
      <div className="bottom">
        <OrderNameInput setOrderName={setOrderName} />
        <section className="dropdowns">
          <DrinkDropdown setDrink={setDrink} />
          <SideDropdown setSide={setSide} />
          <FoodDropdown setFood={setFood} />
        </section>
        <InstructionsForm setInstructions={setInstructions} instructions={instruction} />
        <InstructionsList instructions={instruction} />
      </div>
    </div>
  );
}

export default App;
