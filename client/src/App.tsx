import React from 'react';
import Counter from './components/Counter';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8">
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-4">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react w-16 h-16" alt="React logo" />
        </a>
      </div>

      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-gray-800">Vite + React + Redux</h1>

      {/* Counter Component */}
      <div className="w-full max-w-sm p-4 bg-white shadow rounded">
        <Counter />
      </div>

      {/* Footer Section */}
      <p className="text-gray-600 text-sm">
        Edit <code className="font-mono text-blue-600">src/App.tsx</code> and save to test HMR.
      </p>
      <p className="text-gray-500 text-sm">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
};

export default App;
