import { Users, FileText, Image, Calendar, TrendingUp, UserCircle, ShoppingBag, CreditCard } from 'lucide-react';
import { NavigationItem } from '../App';

interface DashboardProps {
  onNavigate: (section: NavigationItem) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const pendingActions = [
    {
      id: 'modeler-requests' as NavigationItem,
      title: 'Modeler Requests',
      count: 5,
      icon: Users,
    },
    {
      id: 'signup-verification' as NavigationItem,
      title: 'Signup Verifications',
      count: 3,
      icon: FileText,
    },
    {
      id: 'media-approval' as NavigationItem,
      title: 'Media Approvals',
      count: 12,
      icon: Image,
    },
    {
      id: 'bookings' as NavigationItem,
      title: 'Booking Requests',
      count: 8,
      icon: Calendar,
    },
    {
      id: 'payments' as NavigationItem,
      title: 'Payment Verifications',
      count: 4,
      icon: CreditCard,
    },
  ];

  const stats = [
    { label: 'Total Modelers', value: 127, change: '+12', icon: UserCircle, color: 'bg-blue-500' },
    { label: 'Active Modelers', value: 98, change: '+5', icon: Users, color: 'bg-green-500' },
    { label: 'Total Customers', value: 342, change: '+28', icon: ShoppingBag, color: 'bg-purple-500' },
    { label: 'Completed Bookings', value: 156, change: '+14', icon: Calendar, color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { type: 'New modeler request', name: 'Sarah Johnson', time: '5 minutes ago' },
    { type: 'Payment verified', name: 'ABC Events Ltd', time: '12 minutes ago' },
    { type: 'Booking confirmed', name: 'Model #1234', time: '23 minutes ago' },
    { type: 'Media approved', name: 'Model #5678', time: '35 minutes ago' },
    { type: 'New customer signup', name: 'Elite Productions', time: '1 hour ago' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-neutral-950 text-2xl mb-1">Overview</h1>
            <p className="text-[#4a5565]">Manage your platform efficiently</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#6a7282] rounded-full" />
            <span className="text-[#6a7282] text-sm">Last updated: Just now</span>
          </div>
        </div>
      </div>

      {/* Pending Actions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-neutral-950 text-xl mb-1">Pending Actions</h2>
            <p className="text-[#4a5565]">Items requiring your immediate attention</p>
          </div>
          <div className="bg-[#d4183d] text-white px-4 py-2 rounded-lg">
            32 Total
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5 mb-8">
          {pendingActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onNavigate(action.id)}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-left relative"
              >
                <div className="mb-10">
                  <Icon className="w-6 h-6 text-[#4a5565]" />
                </div>
                <div className="text-neutral-950 text-[30px] mb-1">{action.count}</div>
                <div className="text-[#4a5565] text-sm">{action.title}</div>
                <div className="absolute top-4 right-4 bg-[#d4183d] text-white text-xs px-2 py-1 rounded-lg">
                  {action.count}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-[#00a63e]">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xl">{stat.change}</span>
                </div>
              </div>
              <div className="text-neutral-950 text-xl mb-1">{stat.value}</div>
              <div className="text-[#6a7282] text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-neutral-950 text-lg mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="text-neutral-950 text-sm">{activity.type}</p>
                <p className="text-[#6a7282] text-xs">{activity.name}</p>
              </div>
              <span className="text-[#6a7282] text-xs">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
