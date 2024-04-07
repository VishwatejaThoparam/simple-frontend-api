import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"  /* to import bootstrap */

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavbarHeader from './Components/Navbar';
import EditBookPage from './Components/Pages/EditBook';
import AddBookPage from './Components/Pages/AddBook';
import ViewBookPage from './Components/Pages/ViewBook';
import BooksPage from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarHeader/>
        <Routes>
        <Route exact path='/' element={<BooksPage/>}/>
        <Route exact path="/addbook" element={<AddBookPage/>} />
        <Route exact path="/editbook/:id" element={<EditBookPage/>} />
        <Route exact path="/viewbook/:id" element={<ViewBookPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

