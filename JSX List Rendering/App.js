import './App.css';
import FruitList from './FruitList';


function App() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'PineApple', 'Mango']
  return (
    <FruitList
    fruits = {fruits}
    />
  );
}

export default App;
