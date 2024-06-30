import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/common/PrivateRoute';
import UserContextProvider from './context/UserContextProvider';
import EventRegistration from './pages/EventRegistration';
import Events from './pages/Events';
import Facilites from './pages/Facilites';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/login" element={<Login />} />
            {/* <Route element={<PrivateRoute />}> */}
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route
                path="/event-registration"
                element={<EventRegistration />}
              />
              <Route path="/services" element={<Services />} />
              <Route path="/facilities" element={<Facilites />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
