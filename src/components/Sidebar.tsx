import { Users, FileText, CheckSquare, Image, UserCircle, ShoppingBag, Calendar, CreditCard, BarChart3, LogOut, LayoutDashboard, GraduationCap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  onLogout: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  badge?: number;
}

export function Sidebar({ onLogout }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard, description: 'Dashboard home' },
    { id: 'modeler-requests', label: 'Modeler Requests', icon: Users, description: 'New applications', badge: 5 },
    { id: 'signup-verification', label: 'Signup Verification', icon: FileText, description: 'Verify signups', badge: 3 },
    { id: 'media-approval', label: 'Media Approval', icon: Image, description: 'Review uploads', badge: 12 },
    { id: 'modelers', label: 'Modelers', icon: UserCircle, description: 'All models' },
    { id: 'customers', label: 'Customers', icon: ShoppingBag, description: 'Client accounts' },
    { id: 'bookings', label: 'Bookings', icon: Calendar, description: 'Booking requests', badge: 8 },
    { id: 'payments', label: 'Payments', icon: CreditCard, description: 'Payment verification', badge: 4 },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, description: 'Reports & insights' },
    { id: 'academy', label: 'Academy Content', icon: GraduationCap, description: 'Manage academy info' },
  ];

  const totalPending = navItems.reduce((sum, item) => sum + (item.badge || 0), 0);

  return (
    <div className="w-72 bg-gradient-to-b from-black via-[#101828] to-black border-r border-[#1e2939] flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-[#1e2939]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-white rounded-[14px] flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-white text-lg">Admin Panel</h1>
            <p className="text-[#99a1af] text-xs">Control Center</p>
          </div>
        </div>

        {/* Pending Actions Alert */}
        <div className="bg-[rgba(251,44,54,0.1)] border border-[rgba(251,44,54,0.2)] rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-[#FB2C36]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M8 1.33v5.34m0 2.66v.01" />
            </svg>
            <span className="text-white text-sm">Pending Actions</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-2xl">{totalPending}</span>
            <span className="text-[#99a1af] text-xs">items need attention</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === `/${item.id}`;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/${item.id}`)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-[14px] mb-2 transition-all ${
                isActive 
                  ? 'bg-white shadow-lg' 
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  isActive ? 'bg-black' : 'bg-white/5'
                }`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#D1D5DC]'}`} />
                </div>
                <div className="text-left">
                  <p className={`text-sm ${isActive ? 'text-black' : 'text-[#D1D5DC]'}`}>
                    {item.label}
                  </p>
                  <p className="text-xs text-[#6a7282]">{item.description}</p>
                </div>
              </div>
              {item.badge && (
                <span className="bg-[#d4183d] text-white text-xs px-2 py-0.5 rounded-lg">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="w-full flex items-center justify-between px-4 py-3 rounded-[14px] mb-2 transition-all hover:bg-white/5"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5">
            <LogOut className="w-5 h-5 text-[#D1D5DC]" />
          </div>
          <div className="text-left">
            <p className="text-sm text-[#D1D5DC]">Logout</p>
          </div>
        </div>
      </button>
    </div>
  );
}