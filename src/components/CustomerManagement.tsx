import { useState } from 'react';
import { Eye, UserX, UserCheck, Search, X, Key } from 'lucide-react';

interface Booking {
  id: string;
  eventName: string;
  modelerName: string;
  date: string;
  price: number;
}

interface Customer {
  id: string;
  customerId: string;
  name: string;
  companyName: string;
  idNumber: string;
  email: string;
  phone: string;
  address: string;
  bookingsCount: number;
  totalSpent: number;
  status: 'active' | 'suspended';
  joinDate: string;
  recentBookings: Booking[];
}

export function CustomerManagement() {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 'CUS001',
      customerId: 'C001',
      name: 'John Smith',
      companyName: 'ABC Corporation',
      idNumber: '900123456V',
      email: 'john@abc.com',
      phone: '+94 77 123 4567',
      address: '123 Main Street, Colombo 03',
      bookingsCount: 5,
      totalSpent: 45000,
      status: 'active',
      joinDate: '3/15/2025',
      recentBookings: [
        { id: 'B001', eventName: 'Fashion Show', modelerName: 'Sarah Johnson', date: '2025-11-15', price: 15000 },
        { id: 'B002', eventName: 'Product Launch', modelerName: 'Emily Davis', date: '2025-10-22', price: 18000 },
        { id: 'B003', eventName: 'Commercial Shoot', modelerName: 'Michael Brown', date: '2025-09-10', price: 12000 },
      ],
    },
    {
      id: 'CUS002',
      customerId: 'C002',
      name: 'Jane Doe',
      companyName: 'XYZ Events',
      idNumber: '910234567V',
      email: 'jane@xyz.com',
      phone: '+94 71 234 5678',
      address: '456 Park Avenue, Colombo 07',
      bookingsCount: 12,
      totalSpent: 85000,
      status: 'active',
      joinDate: '2/10/2025',
      recentBookings: [
        { id: 'B004', eventName: 'Wedding Photography', modelerName: 'Sarah Johnson', date: '2025-11-20', price: 20000 },
        { id: 'B005', eventName: 'Corporate Event', modelerName: 'Emily Davis', date: '2025-10-15', price: 25000 },
        { id: 'B006', eventName: 'Brand Campaign', modelerName: 'Michael Brown', date: '2025-09-28', price: 22000 },
      ],
    },
    {
      id: 'CUS003',
      customerId: 'C003',
      name: 'Bob Wilson',
      companyName: 'Elite Productions',
      idNumber: '920345678V',
      email: 'bob@elite.com',
      phone: '+94 76 345 6789',
      address: '789 Lake Road, Kandy',
      bookingsCount: 3,
      totalSpent: 28000,
      status: 'suspended',
      joinDate: '4/20/2025',
      recentBookings: [
        { id: 'B007', eventName: 'Music Video', modelerName: 'Sarah Johnson', date: '2025-08-12', price: 10000 },
        { id: 'B008', eventName: 'Fashion Shoot', modelerName: 'Emily Davis', date: '2025-07-05', price: 12000 },
        { id: 'B009', eventName: 'Magazine Cover', modelerName: 'Michael Brown', date: '2025-06-18', price: 6000 },
      ],
    },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleStatus = (id: string) => {
    setCustomers(customers.map(customer =>
      customer.id === id
        ? { ...customer, status: customer.status === 'active' ? 'suspended' : 'active' }
        : customer
    ));
  };

  const handleViewDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
    setShowViewModal(true);
  };

  const handleResetPassword = (customer: Customer) => {
    alert(`Password reset for ${customer.name}. New temporary password sent to ${customer.email}`);
  };

  const handleSuspendAccount = (customer: Customer) => {
    toggleStatus(customer.id);
    setShowViewModal(false);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.idNumber.includes(searchTerm)
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Customers</h1>
          <p className="text-[#4a5565] text-sm">Manage your platform efficiently</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <svg className="w-4 h-4 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M8 4v4l2.667 1.333M14.667 8A6.667 6.667 0 118 1.333 6.667 6.667 0 0114.667 8z" />
          </svg>
          <span className="text-[#4a5565] text-sm">Last updated: Just now</span>
        </div>
      </div>

      {/* Page Heading with Search */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-neutral-950 text-2xl">Customer Management</h2>
        <div className="relative w-64">
          <Search className="w-4 h-4 text-[#6a7282] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Customer Cards */}
      <div className="space-y-4">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
            {/* Header Row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl text-neutral-950 mb-1">{customer.name}</h3>
                <p className="text-sm text-[#6a7282] mb-2">{customer.companyName}</p>
                <div className="flex items-center gap-2 text-sm text-[#6a7282]">
                  <span>ID: {customer.customerId}</span>
                  <span>•</span>
                  <span>NIC: {customer.idNumber}</span>
                </div>
              </div>
              <span className={`text-white text-xs px-3 py-1.5 rounded-lg ${
                customer.status === 'active' ? 'bg-[#00a63e]' : 'bg-[#d4183d]'
              }`}>
                {customer.status}
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Contact */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Contact</h4>
                <p className="text-sm text-neutral-950 mb-1">{customer.phone}</p>
                <p className="text-sm text-neutral-950">{customer.email}</p>
              </div>

              {/* Total Bookings */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Total Bookings</h4>
                <p className="text-sm text-neutral-950">{customer.bookingsCount}</p>
              </div>

              {/* Joined Date */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Joined Date</h4>
                <p className="text-sm text-neutral-950">{customer.joinDate}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() => handleViewDetails(customer)}
                className="px-4 py-2 bg-white border border-gray-300 text-neutral-950 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Details
              </button>
              {customer.status === 'active' ? (
                <button
                  onClick={() => toggleStatus(customer.id)}
                  className="px-4 py-2 bg-[#d4183d] text-white rounded-lg text-sm hover:bg-[#b51432] transition-colors flex items-center gap-2"
                >
                  <UserX className="w-4 h-4" />
                  Suspend
                </button>
              ) : (
                <button
                  onClick={() => toggleStatus(customer.id)}
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  Activate
                </button>
              )}
              <button
                onClick={() => handleResetPassword(customer)}
                className="px-4 py-2 bg-gray-100 text-neutral-950 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Key className="w-4 h-4" />
                Reset Password
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Details Modal */}
      {showViewModal && selectedCustomer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-neutral-950 text-xl">Customer Details</h2>
                <button 
                  onClick={() => setShowViewModal(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="text-neutral-950 mb-3">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Email</p>
                    <p className="text-neutral-950 text-sm">{selectedCustomer.email}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Phone</p>
                    <p className="text-neutral-950 text-sm">{selectedCustomer.phone}</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-neutral-950 mb-3">Address</h3>
                <p className="text-neutral-950 text-sm">{selectedCustomer.address}</p>
              </div>

              {/* Booking Statistics */}
              <div>
                <h3 className="text-neutral-950 mb-4">Booking Statistics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-3xl text-neutral-950 mb-2">{selectedCustomer.bookingsCount}</div>
                    <p className="text-[#6a7282] text-sm">Total Bookings</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-xl text-neutral-950 mb-1">LKR</div>
                    <div className="text-2xl text-neutral-950 mb-1">{selectedCustomer.totalSpent.toLocaleString()}</div>
                    <p className="text-[#6a7282] text-sm">Total Spent</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-lg text-neutral-950 mb-2">{selectedCustomer.joinDate}</div>
                    <p className="text-[#6a7282] text-sm">Joined Date</p>
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div>
                <h3 className="text-neutral-950 mb-3">Recent Bookings</h3>
                <div className="space-y-3">
                  {selectedCustomer.recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                      <div>
                        <p className="text-sm text-neutral-950 mb-1">{booking.eventName} - {booking.modelerName}</p>
                        <p className="text-xs text-[#6a7282]">{booking.date}</p>
                      </div>
                      <p className="text-sm text-neutral-950">LKR {booking.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-200 flex gap-4">
              <button
                onClick={() => setShowViewModal(false)}
                className="flex-1 bg-gray-100 text-neutral-950 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleResetPassword(selectedCustomer)}
                className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Reset Password
              </button>
              <button
                onClick={() => handleSuspendAccount(selectedCustomer)}
                className={`flex-1 py-3 rounded-lg transition-colors ${
                  selectedCustomer.status === 'active'
                    ? 'bg-[#d4183d] text-white hover:bg-[#b51432]'
                    : 'bg-[#00a63e] text-white hover:bg-[#008c34]'
                }`}
              >
                {selectedCustomer.status === 'active' ? 'Suspend Account' : 'Activate Account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
