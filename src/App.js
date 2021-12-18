import BookContextProvider from './Contexts/BookContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
      <Navbar />
     </BookContextProvider> 
    
     </div>
  );
}

export default App;
