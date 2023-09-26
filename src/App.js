import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomersTable from './routes/CustomersTable'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<CustomersTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
