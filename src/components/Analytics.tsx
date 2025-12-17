import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

export function Analytics() {
  const monthlyStats = [
    { month: 'Aug', modelers: 8, customers: 15, bookings: 12, revenue: 180000 },
    { month: 'Sep', modelers: 12, customers: 22, bookings: 18, revenue: 270000 },
    { month: 'Oct', modelers: 15, customers: 28, bookings: 25, revenue: 375000 },
    { month: 'Nov', modelers: 18, customers: 35, bookings: 32, revenue: 480000 },
    { month: 'Dec', modelers: 22, customers: 42, bookings: 38, revenue: 570000 },
  ];

  const topModelers = [
    { id: 'MOD001', name: 'Sarah Johnson', bookings: 12, revenue: 180000, rating: 4.8 },
    { id: 'MOD002', name: 'Michael Silva', bookings: 8, revenue: 144000, rating: 4.5 },
    { id: 'MOD003', name: 'Amanda Fernando', bookings: 6, revenue: 90000, rating: 4.7 },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Analytics</h1>
          <p className="text-[#4a5565] text-sm">Manage your platform efficiently</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <svg className="w-4 h-4 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M8 4v4l2.667 1.333M14.667 8A6.667 6.667 0 118 1.333 6.667 6.667 0 0114.667 8z" />
          </svg>
          <span className="text-[#4a5565] text-sm">Last updated: Just now</span>
        </div>
      </div>

      {/* Page Heading */}
      <h2 className="text-neutral-950 text-2xl mb-6">Analytics & Reports</h2>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+22%</span>
            </div>
          </div>
          <p className="text-[#6a7282] text-sm mb-1">Total Modelers</p>
          <p className="text-neutral-950 text-2xl">127</p>
        </div>

        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+28%</span>
            </div>
          </div>
          <p className="text-[#6a7282] text-sm mb-1">Total Customers</p>
          <p className="text-neutral-950 text-2xl">342</p>
        </div>

        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+18%</span>
            </div>
          </div>
          <p className="text-[#6a7282] text-sm mb-1">Total Bookings</p>
          <p className="text-neutral-950 text-2xl">156</p>
        </div>

        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+25%</span>
            </div>
          </div>
          <p className="text-[#6a7282] text-sm mb-1">Total Revenue</p>
          <p className="text-neutral-950 text-2xl">LKR 2.3M</p>
        </div>
      </div>

      {/* Monthly Trends Card */}
      <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6 mb-6">
        <h3 className="text-neutral-950 text-xl mb-6">Monthly Growth Trends</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs text-[#6a7282] uppercase">Month</th>
                <th className="px-4 py-3 text-left text-xs text-[#6a7282] uppercase">New Modelers</th>
                <th className="px-4 py-3 text-left text-xs text-[#6a7282] uppercase">New Customers</th>
                <th className="px-4 py-3 text-left text-xs text-[#6a7282] uppercase">Bookings</th>
                <th className="px-4 py-3 text-left text-xs text-[#6a7282] uppercase">Revenue (LKR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {monthlyStats.map((stat, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-neutral-950">{stat.month} 2025</td>
                  <td className="px-4 py-3 text-sm text-neutral-950">{stat.modelers}</td>
                  <td className="px-4 py-3 text-sm text-neutral-950">{stat.customers}</td>
                  <td className="px-4 py-3 text-sm text-neutral-950">{stat.bookings}</td>
                  <td className="px-4 py-3 text-sm text-neutral-950">{stat.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section - Two Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Modelers Card */}
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <h3 className="text-neutral-950 text-xl mb-6">Top Modelers</h3>
          <div className="space-y-4">
            {topModelers.map((modeler, index) => (
              <div key={modeler.id} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-neutral-950 mb-0.5">{modeler.name}</p>
                    <p className="text-xs text-[#6a7282]">{modeler.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-950 mb-0.5">{modeler.bookings} bookings</p>
                  <p className="text-xs text-[#6a7282]">LKR {modeler.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Statistics Card */}
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <h3 className="text-neutral-950 text-xl mb-6">Platform Statistics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <span className="text-sm text-[#6a7282]">Active Modelers Rate</span>
              <span className="text-sm text-neutral-950">77%</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <span className="text-sm text-[#6a7282]">Average Booking Value</span>
              <span className="text-sm text-neutral-950">LKR 15,000</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <span className="text-sm text-[#6a7282]">Customer Retention</span>
              <span className="text-sm text-neutral-950">68%</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <span className="text-sm text-[#6a7282]">Average Response Time</span>
              <span className="text-sm text-neutral-950">18 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6a7282]">Platform Rating</span>
              <span className="text-sm text-neutral-950 flex items-center gap-1">
                <span className="text-yellow-500">★</span> 4.6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
