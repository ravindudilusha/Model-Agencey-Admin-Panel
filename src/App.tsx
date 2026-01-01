import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ModelerRequests } from './components/ModelerRequests';
import { SignupVerification } from './components/SignupVerification';
import { MediaApproval } from './components/MediaApproval';
import { ModelerManagement } from './components/ModelerManagement';
import { CustomerManagement } from './components/CustomerManagement';
import { BookingManagement } from './components/BookingManagement';
import { PaymentVerification } from './components/PaymentVerification';
import { Analytics } from './components/Analytics';
import { AcademyManagement } from './components/AcademyManagement';
import { AdminLogin } from './components/AdminLogin';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <AdminLogin onLogin={handleLogin} />
        } />
        
        <Route path="/*" element={
          !isAuthenticated ? <Navigate to="/login" replace /> : (
            <div className="flex h-screen bg-gray-50">
              <Sidebar onLogout={handleLogout} />
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/modeler-requests" element={<ModelerRequests />} />
                  <Route path="/signup-verification" element={<SignupVerification />} />
                  <Route path="/media-approval" element={<MediaApproval />} />
                  <Route path="/modelers" element={<ModelerManagement />} />
                  <Route path="/customers" element={<CustomerManagement />} />
                  <Route path="/bookings" element={<BookingManagement />} />
                  <Route path="/payments" element={<PaymentVerification />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/academy" element={<AcademyManagement />} />
                </Routes>
              </main>
            </div>
          )
        } />
      </Routes>
    </BrowserRouter>
  );
}