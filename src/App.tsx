import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'dark';
  })

  // const [mode, setMode] = useState('dark')

  const HandleColor = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);

    localStorage.setItem('mode', newMode);
  }

  return (
    <div className={`${mode} flex flex-col min-h-screen bg-background text-textColor transition-colors duration-300`}>
      <div className='flex flex-col flex-grow justify-center items-center space-y-4'>
        <Header onClick={HandleColor} modeType={mode === 'dark' ? true : false}/>
        <Quote />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
