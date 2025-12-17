import { useState } from 'react';
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

export type NavigationItem = 
  | 'dashboard'
  | 'modeler-requests'
  | 'signup-verification'
  | 'media-approval'
  | 'modelers'
  | 'customers'
  | 'bookings'
  | 'payments'
  | 'analytics'
  | 'academy';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState<NavigationItem>('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveSection} />;
      case 'modeler-requests':
        return <ModelerRequests />;
      case 'signup-verification':
        return <SignupVerification />;
      case 'media-approval':
        return <MediaApproval />;
      case 'modelers':
        return <ModelerManagement />;
      case 'customers':
        return <CustomerManagement />;
      case 'bookings':
        return <BookingManagement />;
      case 'payments':
        return <PaymentVerification />;
      case 'analytics':
        return <Analytics />;
      case 'academy':
        return <AcademyManagement />;
      default:
        return <Dashboard onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} onLogout={handleLogout} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}