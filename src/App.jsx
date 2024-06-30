import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import UserContextProvider from './context/UserContextProvider';
import Done from './pages/Done';
import EventRegistration from './pages/EventRegistration';
import Events from './pages/Events';
import Facilites from './pages/Facilites';
import Home from './pages/Home';
import Login from './pages/Login';
import MarketPlace from './pages/MarketPlace';
import Services from './pages/Services';
import Volunteers from './pages/Volunteers';
import VolunteerForm from './pages/VolunteerForm';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event-registration" element={<EventRegistration />} />
            <Route path="/services" element={<Services />} />
            <Route path="/facilities" element={<Facilites />} />
            <Route path="/done" element={<Done />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/volunteer' element={<Volunteers />} />
            <Route path='/volunteerRegistration' element={<VolunteerForm />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
