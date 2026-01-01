import { useState } from 'react';
import { Eye, Check, X, Phone, Search } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { RejectModal } from './RejectModal';

interface Booking {
  id: string;
  bookingId: string;
  eventName: string;
  modelerId: string;
  modelerName: string;
  modelerBasePrice: number;
  customerId: string;
  customerName: string;
  companyName: string;
  customerPhone: string;
  customerEmail: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  submittedDate: string;
  status: 'pending' | 'accepted' | 'payment-pending' | 'confirmed' | 'rejected';
  rejectionReason?: string;
}

export function BookingManagement() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 'BK001',
      bookingId: 'BR001',
      eventName: 'Fashion Show',
      modelerId: 'M001',
      modelerName: 'Sarah',
      modelerBasePrice: 5000,
      customerId: 'C001',
      customerName: 'John Smith',
      companyName: 'ABC Corporation',
      customerPhone: '+94 77 123 4567',
      customerEmail: 'john@abc.com',
      eventDate: '12/15/2025',
      eventTime: '18:00',
      eventLocation: 'Colombo Hilton',
      submittedDate: '11/23/2025',
      status: 'pending',
    },
    {
      id: 'BK002',
      bookingId: 'BR002',
      eventName: 'Product Launch',
      modelerId: 'M002',
      modelerName: 'Emily',
      modelerBasePrice: 6000,
      customerId: 'C002',
      customerName: 'Jane Doe',
      companyName: 'XYZ Events',
      customerPhone: '+94 71 234 5678',
      customerEmail: 'jane@xyz.com',
      eventDate: '12/20/2025',
      eventTime: '19:00',
      eventLocation: 'Shangri-La Hotel',
      submittedDate: '11/20/2025',
      status: 'accepted',
    },
    {
      id: 'BK003',
      bookingId: 'BR003',
      eventName: 'Commercial Shoot',
      modelerId: 'M003',
      modelerName: 'Michael',
      modelerBasePrice: 5500,
      customerId: 'C003',
      customerName: 'Bob Wilson',
      companyName: 'Elite Productions',
      customerPhone: '+94 76 345 6789',
      customerEmail: 'bob@elite.com',
      eventDate: '12/28/2025',
      eventTime: '10:00',
      eventLocation: 'Studio 5, Colombo',
      submittedDate: '11/18/2025',
      status: 'confirmed',
    },
  ]);

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [bookingToReject, setBookingToReject] = useState<string | null>(null);

  const handleAccept = (id: string) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: 'accepted' } : booking
    ));
    // In real app: Send email with payment link to customer
    toast.success('Booking accepted! Payment link sent to customer.');
  };

  const handleReject = (id: string, reason: string) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: 'rejected', rejectionReason: reason } : booking
    ));
    toast.error('Booking rejected successfully!');
  };

  const openRejectModal = (id: string) => {
    setBookingToReject(id);
    setShowRejectModal(true);
  };

  const confirmReject = (reason: string) => {
    if (bookingToReject) {
      handleReject(bookingToReject, reason);
    }
    setShowRejectModal(false);
    setBookingToReject(null);
  };

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const handleCallCustomer = (phone: string) => {
    alert(`Calling customer at ${phone}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return { text: 'Pending Review', className: 'bg-[#fbbf24] text-white' };
      case 'accepted':
        return { text: 'Accepted - Awaiting Payment', className: 'bg-[#3b82f6] text-white' };
      case 'payment-pending':
        return { text: 'Payment Pending', className: 'bg-[#f97316] text-white' };
      case 'confirmed':
        return { text: 'Confirmed', className: 'bg-[#00a63e] text-white' };
      case 'rejected':
        return { text: 'Rejected', className: 'bg-[#d4183d] text-white' };
      default:
        return { text: status, className: 'bg-gray-500 text-white' };
    }
  };

  const filteredBookings = bookings.filter(booking =>
    booking.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Bookings</h1>
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
        <h2 className="text-neutral-950 text-2xl">Booking Management</h2>
        <div className="relative w-64">
          <Search className="w-4 h-4 text-[#6a7282] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Booking Cards */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => {
          const statusBadge = getStatusBadge(booking.status);
          return (
            <div key={booking.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              {/* Header Row */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-neutral-950">{booking.eventName}</h3>
                    <span className={`text-xs px-3 py-1 rounded-lg ${statusBadge.className}`}>
                      {statusBadge.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6a7282]">
                    <span>Booking ID:</span>
                    <span>{booking.bookingId}</span>
                  </div>
                  <p className="text-sm text-[#6a7282] mt-1">Submitted: {booking.submittedDate}</p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-8 mb-6">
                {/* Model Details */}
                <div>
                  <h4 className="text-neutral-950 mb-3">Model Details</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-[#6a7282] text-xs">ID:</p>
                      <p className="text-neutral-950 text-sm">{booking.modelerId}</p>
                    </div>
                    <div>
                      <p className="text-[#6a7282] text-xs">Name:</p>
                      <p className="text-neutral-950 text-sm">{booking.modelerName}</p>
                    </div>
                    <div>
                      <p className="text-[#6a7282] text-xs">Base Price:</p>
                      <p className="text-neutral-950 text-sm">LKR {booking.modelerBasePrice.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Customer Details */}
                <div>
                  <h4 className="text-neutral-950 mb-3">Customer Details</h4>
                  <div className="space-y-2">
                    <p className="text-neutral-950 text-sm">{booking.customerName}</p>
                    <p className="text-neutral-950 text-sm">{booking.companyName}</p>
                    <p className="text-neutral-950 text-sm">{booking.customerPhone}</p>
                    <p className="text-neutral-950 text-sm">{booking.customerEmail}</p>
                  </div>
                </div>
              </div>

              {/* Event Details Row */}
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-[#6a7282] text-xs mb-1">Event Date:</h4>
                  <p className="text-neutral-950 text-sm">{booking.eventDate}</p>
                  <p className="text-neutral-950 text-sm">{booking.eventTime}</p>
                </div>
                <div>
                  <h4 className="text-[#6a7282] text-xs mb-1">Location:</h4>
                  <p className="text-neutral-950 text-sm">{booking.eventLocation}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-[rgba(0,0,0,0.1)]">
                <button
                  onClick={() => handleViewDetails(booking)}
                  className="px-4 py-2 bg-white border border-gray-300 text-neutral-950 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Full Details
                </button>
                {booking.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleCallCustomer(booking.customerPhone)}
                      className="px-4 py-2 bg-white border border-gray-300 text-neutral-950 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Customer
                    </button>
                    <button
                      onClick={() => handleAccept(booking.id)}
                      className="px-4 py-2 bg-[#00a63e] text-white rounded-lg text-sm hover:bg-[#008c34] transition-colors flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Accept
                    </button>
                    <button
                      onClick={() => openRejectModal(booking.id)}
                      className="px-4 py-2 bg-[#d4183d] text-white rounded-lg text-sm hover:bg-[#b91c24] transition-colors flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* View Full Details Modal */}
      {showDetailsModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[500px]">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-neutral-950 text-xl">Booking Details -</h2>
                  <h2 className="text-neutral-950 text-xl">{selectedBooking.bookingId}</h2>
                </div>
                <button 
                  onClick={() => setShowDetailsModal(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[#6a7282] text-sm mt-2">View detailed information about the booking.</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Event Information */}
              <div>
                <h3 className="text-neutral-950 mb-3">Event Information</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Event:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.eventName}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Date:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.eventDate}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Time:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.eventTime}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Location:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.eventLocation}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-neutral-950 mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Customer:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.customerName}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Company:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.companyName}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Phone:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.customerPhone}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-24">Email:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedBooking.customerEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <RejectModal
          isOpen={showRejectModal}
          onClose={() => setShowRejectModal(false)}
          onConfirm={confirmReject}
          title="Reject Booking"
          itemName={bookingToReject ? bookings.find(b => b.id === bookingToReject)?.eventName || '' : ''}
        />
      )}
    </div>
  );
}