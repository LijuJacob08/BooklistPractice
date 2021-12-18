import BookContextProvider from './Contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
      <Navbar />
      <BookList />
     
     </BookContextProvider> 
    
     </div>
  );
}

export default App;
