import { useState } from 'react';
import { Check, X, Eye, User, CreditCard, Calendar, Shield, FileText } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { RejectModal } from './RejectModal';

interface SignupVerification {
  id: string;
  refNumber: string;
  name: string;
  email: string;
  phone: string;
  idNumber: string;
  paymentReference: string;
  paymentAmount: number;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
  referenceMatched: boolean;
  rejectionReason?: string;
}

export function SignupVerification() {
  const [signups, setSignups] = useState<SignupVerification[]>([
    {
      id: 'SUP001',
      refNumber: 'REF2025001',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+94 77 123 4567',
      idNumber: '920123456V',
      paymentReference: 'PAY123456',
      paymentAmount: 5199,
      submittedDate: '11/23/2025',
      status: 'pending',
      referenceMatched: true,
    },
    {
      id: 'SUP002',
      refNumber: 'REF2025001',
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+94 71 234 5678',
      idNumber: '880445789V',
      paymentReference: 'PAY123457',
      paymentAmount: 999,
      submittedDate: '11/22/2025',
      status: 'pending',
      referenceMatched: true,
    },
  ]);

  const [selectedSignup, setSelectedSignup] = useState<SignupVerification | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [signupToReject, setSignupToReject] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setSignups(signups.map(signup => 
      signup.id === id ? { ...signup, status: 'approved' } : signup
    ));
    setShowDetails(false);
    // In real app: Generate username (ID Number) and temp password, send email
    toast.success(`Signup ${id} approved and credentials sent.`);
  };

  const handleReject = (id: string, reason: string) => {
    setSignups(signups.map(signup => 
      signup.id === id ? { ...signup, status: 'rejected', rejectionReason: reason } : signup
    ));
    setShowDetails(false);
    // In real app: Send rejection email with reason
    toast.error(`Signup ${id} rejected with reason: ${reason}`);
  };

  const openRejectModal = (id: string) => {
    setSignupToReject(id);
    setShowRejectModal(true);
  };

  const confirmReject = (reason: string) => {
    if (signupToReject) {
      handleReject(signupToReject, reason);
    }
    setShowRejectModal(false);
    setSignupToReject(null);
  };

  const viewDetails = (signup: SignupVerification) => {
    setSelectedSignup(signup);
    setShowDetails(true);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Signup Verification</h1>
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
      <h2 className="text-neutral-950 text-2xl mb-6">Signup Verification</h2>

      {/* Signup Cards */}
      <div className="space-y-4">
        {signups.map((signup) => (
          <div key={signup.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
            {/* Header Row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl text-neutral-950 mb-2">{signup.name}</h3>
                <div className="flex items-center gap-2 text-sm text-[#6a7282]">
                  <span>Ref: {signup.refNumber}</span>
                  <span>•</span>
                  <span>NIC: {signup.idNumber}</span>
                </div>
                <p className="text-sm text-[#6a7282] mt-1">Submitted: {signup.submittedDate}</p>
              </div>
              <span className="bg-black text-white text-xs px-3 py-1.5 rounded-lg">
                {signup.status}
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {/* Contact */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Contact</h4>
                <p className="text-sm text-neutral-950 mb-1">{signup.phone}</p>
                <p className="text-sm text-neutral-950">{signup.email}</p>
              </div>

              {/* Payment */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Payment</h4>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neutral-950" />
                  <p className="text-sm text-neutral-950">Payment slip uploaded</p>
                </div>
              </div>

              {/* Reference Match */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Reference Match</h4>
                {signup.referenceMatched ? (
                  <span className="inline-flex items-center px-3 py-1 bg-[#00a63e] text-white text-xs rounded-lg">
                    Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs rounded-lg">
                    Mismatch
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() => viewDetails(signup)}
                className="px-4 py-2 bg-gray-100 text-neutral-950 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Details & Documents
              </button>
              {signup.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleApprove(signup.id)}
                    className="px-4 py-2 bg-[#00a63e] text-white rounded-lg text-sm hover:bg-[#008c34] transition-colors flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Approve & Send Credentials
                  </button>
                  <button
                    onClick={() => openRejectModal(signup.id)}
                    className="px-4 py-2 bg-[#d4183d] text-white rounded-lg text-sm hover:bg-[#b51432] transition-colors flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {showDetails && selectedSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-neutral-950 text-xl">Signup Verification - {selectedSignup.name}</h2>
                <button 
                  onClick={() => setShowDetails(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Payment Slip */}
              <div>
                <h3 className="text-neutral-950 mb-4">Payment Slip</h3>
                <div className="bg-gray-100 border-2 border-[#d1d5dc] rounded-lg p-8 aspect-video flex flex-col items-center justify-center">
                  <CreditCard className="w-16 h-16 text-gray-400 mb-3" />
                  <p className="text-[#6a7282] text-sm mb-1">Payment Slip Image:</p>
                  <p className="text-[#6a7282] text-sm">payment_slip_001.jpg</p>
                </div>
              </div>

              {/* ID Documents */}
              <div>
                <h3 className="text-neutral-950 mb-4">ID Documents</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* ID Front */}
                  <div>
                    <h4 className="text-[#6a7282] text-sm mb-2">ID Front</h4>
                    <div className="bg-gray-100 border-2 border-[#d1d5dc] rounded-lg aspect-[3/2] flex flex-col items-center justify-center">
                      <div className="text-5xl mb-2">🪪</div>
                      <p className="text-[#6a7282] text-xs">National ID - Front</p>
                    </div>
                  </div>

                  {/* ID Back */}
                  <div>
                    <h4 className="text-[#6a7282] text-sm mb-2">ID Back</h4>
                    <div className="bg-gray-100 border-2 border-[#d1d5dc] rounded-lg aspect-[3/2] flex flex-col items-center justify-center">
                      <div className="text-5xl mb-2">🪪</div>
                      <p className="text-[#6a7282] text-xs">National ID - Back</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Photos */}
              <div>
                <h3 className="text-neutral-950 mb-4">Professional Photos</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((photoNum) => (
                    <div key={photoNum} className="relative">
                      <div className="aspect-[3/4] bg-gray-100 rounded-lg border-2 border-[#d1d5dc] overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          Photo {photoNum}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            {selectedSignup.status === 'pending' && (
              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => openRejectModal(selectedSignup.id)}
                  className="flex-1 bg-[#d4183d] text-white py-3 rounded-lg hover:bg-[#b51432] transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Reject Signup
                </button>
                <button
                  onClick={() => handleApprove(selectedSignup.id)}
                  className="flex-1 bg-[#00a63e] text-white py-3 rounded-lg hover:bg-[#008c34] transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Approve & Send Credentials
                </button>
              </div>
            )}

            {selectedSignup.status === 'approved' && (
              <div className="p-6 border-t border-gray-200">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">
                    <strong>Account Created:</strong> Username: {selectedSignup.idNumber} | Temp Password: Sent via email
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <RejectModal
          isOpen={showRejectModal}
          onClose={() => setShowRejectModal(false)}
          onConfirm={confirmReject}
          title="Reject Signup"
          itemName={signupToReject ? signups.find(s => s.id === signupToReject)?.name || '' : ''}
        />
      )}
    </div>
  );
}