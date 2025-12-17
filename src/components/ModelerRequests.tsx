import { useState } from 'react';
import { Eye, Check, X, Search } from 'lucide-react';

interface ModelerRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  dob: string;
  age: number;
  gender: string;
  idNumber: string;
  address: string;
  height: string;
  weight: string;
  chest: string;
  shoulder: string;
  waist: string;
  shoeSize: string;
  skinColor: string;
  eyeColor: string;
  hairColor: string;
  experience: boolean;
  experienceDetails?: string;
  interests: string[];
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
  photos: string[];
}

export function ModelerRequests() {
  const [requests, setRequests] = useState<ModelerRequest[]>([
    {
      id: 'REQ001',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+94 77 123 4567',
      whatsapp: '+94 77 123 4567',
      dob: '1998-05-15',
      age: 28,
      gender: 'Female',
      idNumber: '920123456V',
      address: 'Colombo 03',
      height: '175cm',
      weight: '58kg',
      chest: '86 cm',
      shoulder: '40 cm',
      waist: '65 cm',
      shoeSize: '38',
      skinColor: 'Fair',
      eyeColor: 'Brown',
      hairColor: 'Black',
      experience: true,
      experienceDetails: 'Fashion Academy Colombo',
      interests: ['Runway', 'Commercial'],
      status: 'pending',
      submittedDate: '11/23/2025',
      photos: [],
    },
    {
      id: 'REQ002',
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+94 71 234 5678',
      whatsapp: '+94 71 234 5678',
      dob: '1995-08-22',
      age: 32,
      gender: 'Male',
      idNumber: '880445789V',
      address: 'Kandy',
      height: '182cm',
      weight: '75kg',
      chest: '98 cm',
      shoulder: '46 cm',
      waist: '80 cm',
      shoeSize: '42',
      skinColor: 'Medium',
      eyeColor: 'Brown',
      hairColor: 'Brown',
      experience: false,
      interests: ['Commercial', 'Fitness'],
      status: 'pending',
      submittedDate: '11/22/2025',
      photos: [],
    },
    {
      id: 'REQ003',
      name: 'Amanda Fernando',
      email: 'amanda.f@email.com',
      phone: '+94 76 345 6789',
      whatsapp: '+94 76 345 6789',
      dob: '2000-03-10',
      age: 24,
      gender: 'Female',
      idNumber: '200234567V',
      address: 'Galle',
      height: '168cm',
      weight: '52kg',
      chest: '84 cm',
      shoulder: '38 cm',
      waist: '62 cm',
      shoeSize: '37',
      skinColor: 'Fair',
      eyeColor: 'Brown',
      hairColor: 'Black',
      experience: false,
      interests: ['Runway'],
      status: 'pending',
      submittedDate: '11/25/2025',
      photos: [],
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState<ModelerRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const handleApprove = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
    // In real app: Send email with reference number, payment instructions, signup link
  };

  const handleReject = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
    // In real app: Send rejection email with reason
  };

  const viewDetails = (request: ModelerRequest) => {
    setSelectedRequest(request);
    setShowDetails(true);
  };

  const filteredRequests = requests.filter(req => {
    const matchesSearch = req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         req.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || req.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Modeler Requests</h1>
          <p className="text-[#4a5565] text-sm">Manage your platform efficiently</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <svg className="w-4 h-4 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M8 4v4l2.667 1.333M14.667 8A6.667 6.667 0 118 1.333 6.667 6.667 0 0114.667 8z" />
          </svg>
          <span className="text-[#4a5565] text-sm">Last updated: Just now</span>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a1af]" />
          <input
            type="text"
            placeholder="Search requests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-[#f3f3f5] border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
          className="px-4 py-2 border border-[#d1d5dc] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Request Cards */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
            {/* Header Row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl text-neutral-950 mb-2">{request.name}</h3>
                <div className="flex items-center gap-2 text-sm text-[#6a7282]">
                  <span>ID: {request.id}</span>
                  <span>•</span>
                  <span>NIC: {request.idNumber}</span>
                  <span>•</span>
                  <span>{request.age} years old</span>
                  <span>•</span>
                  <span>{request.gender}</span>
                </div>
                <p className="text-sm text-[#6a7282] mt-1">Submitted: {request.submittedDate}</p>
              </div>
              <span className="bg-black text-white text-xs px-3 py-1.5 rounded-lg">
                {request.status}
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {/* Contact */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Contact</h4>
                <p className="text-sm text-neutral-950 mb-1">{request.phone}</p>
                <p className="text-sm text-neutral-950">{request.email}</p>
              </div>

              {/* Physical */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Physical</h4>
                <p className="text-sm text-neutral-950 mb-1">Height: {request.height}</p>
                <p className="text-sm text-neutral-950">Weight: {request.weight}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Features</h4>
                <p className="text-sm text-neutral-950 mb-1">Skin: {request.skinColor}</p>
                <p className="text-sm text-neutral-950">Hair: {request.hairColor}</p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Experience</h4>
                <p className="text-sm text-neutral-950 mb-1">{request.experience ? 'Yes' : 'No'}</p>
                {request.experienceDetails && (
                  <p className="text-sm text-neutral-950">{request.experienceDetails}</p>
                )}
              </div>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <h4 className="text-[#6a7282] text-xs uppercase mb-2">Interests</h4>
              <div className="flex gap-2 flex-wrap">
                {request.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 border border-black rounded-lg text-sm text-neutral-950"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() => viewDetails(request)}
                className="px-4 py-2 bg-gray-100 text-neutral-950 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Full Details
              </button>
              {request.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="px-4 py-2 bg-[#00a63e] text-white rounded-lg text-sm hover:bg-[#008c34] transition-colors flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
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
      {showDetails && selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[1280px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <h2 className="text-neutral-950 text-4xl">{selectedRequest.name}</h2>
                  <span className="bg-[#fef9c2] border-2 border-[#d08700] text-[#894b00] px-4 py-2 rounded-lg uppercase">
                    {selectedRequest.status}
                  </span>
                </div>
                <button 
                  onClick={() => setShowDetails(false)} 
                  className="text-gray-500 hover:text-gray-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Info Grid */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <span className="text-[#6a7282]">Request ID: </span>
                  <span className="text-neutral-950">{selectedRequest.id}</span>
                </div>
                <div>
                  <span className="text-[#6a7282]">National ID: </span>
                  <span className="text-neutral-950">{selectedRequest.idNumber}</span>
                </div>
                <div>
                  <span className="text-[#6a7282]">Age & Gender: </span>
                  <span className="text-neutral-950">{selectedRequest.age} years, {selectedRequest.gender}</span>
                </div>
                <div>
                  <span className="text-[#6a7282]">Submitted: </span>
                  <span className="text-neutral-950">{selectedRequest.submittedDate}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-16 space-y-12">
              {/* Contact & Physical Info Grid */}
              <div className="grid grid-cols-3 gap-12">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl text-neutral-950 mb-6 pb-3 border-b border-black">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">Email Address</div>
                      <div className="text-neutral-950">{selectedRequest.email}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">Phone Number</div>
                      <div className="text-neutral-950">{selectedRequest.phone}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">WhatsApp Number</div>
                      <div className="text-neutral-950">{selectedRequest.whatsapp}</div>
                    </div>
                  </div>
                </div>

                {/* Physical Attributes */}
                <div>
                  <h3 className="text-xl text-neutral-950 mb-6 pb-3 border-b border-black">Physical Attributes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">Height</div>
                      <div className="text-neutral-950">{selectedRequest.height}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">Weight</div>
                      <div className="text-neutral-950">{selectedRequest.weight}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">Skin Color</div>
                      <div className="text-neutral-950">{selectedRequest.skinColor}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">Hair Color</div>
                      <div className="text-neutral-950">{selectedRequest.hairColor}</div>
                    </div>
                  </div>
                </div>

                {/* Experience & Interests */}
                <div>
                  <h3 className="text-xl text-neutral-950 mb-6 pb-3 border-b border-black">Experience & Interests</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-[#6a7282] mb-1 uppercase">Modeling Experience</div>
                      <div className="text-neutral-950">{selectedRequest.experience ? 'Yes' : 'No'}</div>
                      {selectedRequest.experienceDetails && (
                        <div className="text-sm text-[#6a7282] mt-1">{selectedRequest.experienceDetails}</div>
                      )}
                    </div>
                    <div>
                      <div className="text-xs text-[#6a7282] mb-2 uppercase">Areas of Interest</div>
                      <div className="flex gap-2 flex-wrap">
                        {selectedRequest.interests.map((interest, idx) => (
                          <span key={idx} className="px-3 py-1 border border-black rounded-lg text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Portfolio Photos */}
              <div>
                <h3 className="text-xl text-neutral-950 mb-6">Professional Portfolio Photos</h3>
                <div className="grid grid-cols-4 gap-8">
                  {[1, 2, 3, 4].map((photoNum) => (
                    <div key={photoNum} className="relative">
                      <div className="aspect-[3/4] bg-gray-100 rounded-lg border-2 border-[#d1d5dc] overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          Photo {photoNum}
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                        Photo {photoNum}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ID Verification Documents */}
              <div>
                <h3 className="text-xl text-neutral-950 mb-6">ID Verification Documents (National ID Card)</h3>
                <div className="grid grid-cols-2 gap-12">
                  {/* Front Side */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#00a63e]" />
                      <span className="text-[#6a7282] text-sm">Front Side</span>
                    </div>
                    <div className="bg-gray-100 border-2 border-[#d1d5dc] rounded-lg aspect-[3/2] flex flex-col items-center justify-center">
                      <div className="text-6xl mb-2">🪪</div>
                      <div className="text-[#6a7282] text-sm">National ID - Front</div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#00a63e]" />
                      <span className="text-[#6a7282] text-sm">Back Side</span>
                    </div>
                    <div className="bg-gray-100 border-2 border-[#d1d5dc] rounded-lg aspect-[3/2] flex flex-col items-center justify-center">
                      <div className="text-6xl mb-2">🪪</div>
                      <div className="text-[#6a7282] text-sm">National ID - Back</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            {selectedRequest.status === 'pending' && (
              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => handleApprove(selectedRequest.id)}
                  className="flex-1 bg-[#00a63e] text-white py-4 rounded-lg text-lg hover:bg-[#008c34] transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Accept Request
                </button>
                <button
                  onClick={() => handleReject(selectedRequest.id)}
                  className="flex-1 bg-[#d4183d] text-white py-4 rounded-lg text-lg hover:bg-[#b51432] transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Reject Request
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
