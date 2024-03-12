import './App.css';
import PaginatedItems from './PaginatedItems';

function App() {
 
  return (
    <div className="main" >
      <PaginatedItems itemsPerPage={3}/>
    </div>
  );
}

export default App;
