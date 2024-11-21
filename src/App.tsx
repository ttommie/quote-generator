import Footer from './components/Footer';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  return (
    <div className="dark flex flex-col min-h-screen bg-background text-textColor">
      <div className='flex flex-col flex-grow justify-center items-center space-y-4'>
        <Header />
        <Quote />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
