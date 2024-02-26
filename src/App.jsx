
import Header from './components/Header';
import Game from './components/Game';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Game />
      </div>
    </div>
  );
}

export default App;
