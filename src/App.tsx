import Footer from './components/Footer';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='flex flex-col flex-grow justify-center items-center space-y-4'>
        {/* Header */}
        <Header />

        {/* Quote */}
        <Quote />
      </div>
      <div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
