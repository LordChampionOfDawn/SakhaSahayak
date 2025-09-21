import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import { Chatbot } from './components/Chatbot';
import HomePage from './pages/HomePage';
import TouristGuidePage from './pages/TouristGuidePage';
import AccommodationPage from './pages/AccommodationPage';
import TransportationPage from './pages/TransportationPage';
import WeatherPage from './pages/WeatherPage';
import DisasterPage from './pages/DisasterPage';
import EventsPage from './pages/EventsPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/*" element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/guide" element={<TouristGuidePage />} />
                    <Route path="/accommodation" element={<AccommodationPage />} />
                    <Route path="/transportation" element={<TransportationPage />} />
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/disaster" element={<DisasterPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Routes>
                </Layout>
              } />
            </Routes>
          </div>
          <Chatbot />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;