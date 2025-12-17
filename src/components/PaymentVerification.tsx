import { useState } from 'react';
import { Check, X, Eye, FileText } from 'lucide-react';

interface Payment {
  id: string;
  paymentId: string;
  eventName: string;
  bookingId: string;
  submittedDate: string;
  customerName: string;
  companyName: string;
  modelId: string;
  amount: number;
  paymentSlipFilename: string;
  status: 'pending' | 'verified' | 'rejected';
}

export function PaymentVerification() {
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: 'PAY001',
      paymentId: 'PM001',
      eventName: 'Fashion Show',
      bookingId: 'BR002',
      submittedDate: '11/23/2025',
      customerName: 'John Smith',
      companyName: 'ABC Corporation',
      modelId: 'M001',
      amount: 5000,
      paymentSlipFilename: 'payment_slip_booking_001.jpg',
      status: 'pending',
    },
    {
      id: 'PAY002',
      paymentId: 'PM002',
      eventName: 'Product Launch',
      bookingId: 'BR003',
      submittedDate: '11/22/2025',
      customerName: 'Jane Doe',
      companyName: 'XYZ Events',
      modelId: 'M002',
      amount: 6000,
      paymentSlipFilename: 'payment_slip_booking_002.jpg',
      status: 'pending',
    },
    {
      id: 'PAY003',
      paymentId: 'PM003',
      eventName: 'Wedding Photography',
      bookingId: 'BR004',
      submittedDate: '11/20/2025',
      customerName: 'Bob Wilson',
      companyName: 'Elite Productions',
      modelId: 'M001',
      amount: 5500,
      paymentSlipFilename: 'payment_slip_booking_003.jpg',
      status: 'verified',
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [showPaymentSlip, setShowPaymentSlip] = useState(false);

  const handleApprove = (id: string) => {
    setPayments(payments.map(payment =>
      payment.id === id ? { ...payment, status: 'verified' } : payment
    ));
    setShowPaymentSlip(false);
    // In real app: Send confirmation email, block calendar date, notify modeler
  };

  const handleReject = (id: string) => {
    setPayments(payments.map(payment =>
      payment.id === id ? { ...payment, status: 'rejected' } : payment
    ));
    setShowPaymentSlip(false);
  };

  const handleViewPaymentSlip = (payment: Payment) => {
    setSelectedPayment(payment);
    setShowPaymentSlip(true);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Payments</h1>
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
      <h2 className="text-neutral-950 text-2xl mb-6">Payment Verification</h2>

      {/* Payment Cards */}
      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
            {/* Header Row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl text-neutral-950 mb-2">{payment.eventName}</h3>
                <div className="flex items-center gap-2 text-sm text-[#6a7282] mb-1">
                  <span>Payment ID:</span>
                  <span>{payment.paymentId}</span>
                  <span>•</span>
                  <span>Booking:</span>
                  <span>{payment.bookingId}</span>
                </div>
                <p className="text-sm text-[#6a7282]">Submitted: {payment.submittedDate}</p>
              </div>
              <span className={`text-white text-xs px-3 py-1.5 rounded-lg ${
                payment.status === 'pending' ? 'bg-[#6a7282]' :
                payment.status === 'verified' ? 'bg-[#00a63e]' :
                'bg-[#d4183d]'
              }`}>
                {payment.status}
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Customer */}
              <div>
                <h4 className="text-[#6a7282] text-xs mb-2">Customer</h4>
                <p className="text-sm text-neutral-950 mb-1">{payment.customerName}</p>
                <p className="text-sm text-neutral-950">{payment.companyName}</p>
              </div>

              {/* Model ID */}
              <div>
                <h4 className="text-[#6a7282] text-xs mb-2">Model ID:</h4>
                <p className="text-sm text-neutral-950">{payment.modelId}</p>
              </div>

              {/* Amount */}
              <div>
                <h4 className="text-[#6a7282] text-xs mb-2">Amount</h4>
                <p className="text-sm text-neutral-950">LKR</p>
                <p className="text-sm text-neutral-950">{payment.amount.toLocaleString()}</p>
              </div>
            </div>

            {/* Payment Slip */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-neutral-950">
                <FileText className="w-4 h-4" />
                <span>Payment Slip:</span>
                <span className="text-[#6a7282]">{payment.paymentSlipFilename}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() => handleViewPaymentSlip(payment)}
                className="px-4 py-2 bg-white border border-gray-300 text-neutral-950 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Payment Slip
              </button>
              {payment.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleApprove(payment.id)}
                    className="px-4 py-2 bg-[#00a63e] text-white rounded-lg text-sm hover:bg-[#008c34] transition-colors flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Approve Payment
                  </button>
                  <button
                    onClick={() => handleReject(payment.id)}
                    className="px-4 py-2 bg-[#d4183d] text-white rounded-lg text-sm hover:bg-[#b51432] transition-colors flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Reject Payment
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Payment Slip Modal */}
      {showPaymentSlip && selectedPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-neutral-950 text-xl">Payment Slip - {selectedPayment.paymentId}</h2>
                  <p className="text-[#6a7282] text-sm mt-1">{selectedPayment.eventName}</p>
                </div>
                <button 
                  onClick={() => setShowPaymentSlip(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Payment Slip Image */}
              <div>
                <h3 className="text-neutral-950 mb-3">Payment Slip</h3>
                <div className="bg-gray-100 border-2 border-[#d1d5dc] rounded-lg p-8 aspect-video flex flex-col items-center justify-center">
                  <FileText className="w-16 h-16 text-gray-400 mb-3" />
                  <p className="text-[#6a7282] text-sm mb-1">Payment Slip Image:</p>
                  <p className="text-[#6a7282] text-sm">{selectedPayment.paymentSlipFilename}</p>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h3 className="text-neutral-950 mb-3">Payment Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-32">Payment ID:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedPayment.paymentId}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-32">Booking ID:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedPayment.bookingId}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-32">Customer:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedPayment.customerName} - {selectedPayment.companyName}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-32">Model ID:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedPayment.modelId}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-32">Amount:</p>
                    <p className="text-neutral-950 text-sm flex-1">LKR {selectedPayment.amount.toLocaleString()}</p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-[#6a7282] text-sm w-32">Submitted:</p>
                    <p className="text-neutral-950 text-sm flex-1">{selectedPayment.submittedDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            {selectedPayment.status === 'pending' && (
              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => handleReject(selectedPayment.id)}
                  className="flex-1 bg-[#d4183d] text-white py-3 rounded-lg hover:bg-[#b51432] transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Reject Payment
                </button>
                <button
                  onClick={() => handleApprove(selectedPayment.id)}
                  className="flex-1 bg-[#00a63e] text-white py-3 rounded-lg hover:bg-[#008c34] transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Approve Payment
                </button>
              </div>
            )}

            {selectedPayment.status === 'verified' && (
              <div className="p-6 border-t border-gray-200">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">
                    <strong>Payment Verified:</strong> Booking confirmed and modeler notified.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
