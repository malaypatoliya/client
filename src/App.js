import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Chat from './pages/Chat';
import { SocketProvider } from './context/SocketProvider';


function App() {
  return (
    <BrowserRouter>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </SocketProvider>
    </BrowserRouter >
  );
}

export default App;
