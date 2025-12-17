import { useState } from 'react';
import { Eye, Edit, UserX, UserCheck, Key, Search, X } from 'lucide-react';

interface Modeler {
  id: string;
  modelId: string;
  idNumber: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  height: string;
  weight: string;
  hairColor: string;
  eyeColor: string;
  bust: string;
  waist: string;
  hips: string;
  shoeSize: string;
  basePrice: number;
  photosCount: number;
  videosCount: number;
  bookingsCount: number;
  rating: number;
  status: 'active' | 'inactive';
  joinDate: string;
}

export function ModelerManagement() {
  const [modelers, setModelers] = useState<Modeler[]>([
    {
      id: 'MOD001',
      modelId: 'M001',
      idNumber: '920123456V',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+94 77 123 4567',
      bio: 'Professional fashion and commercial model with 5+ years of experience. Specialized in runway, editorial, and brand campaigns.',
      height: '175 cm',
      weight: '58 kg',
      hairColor: 'Blonde',
      eyeColor: 'Blue',
      bust: '86 cm',
      waist: '64 cm',
      hips: '91 cm',
      shoeSize: '38',
      basePrice: 5000,
      photosCount: 10,
      videosCount: 5,
      bookingsCount: 47,
      rating: 4.8,
      status: 'active',
      joinDate: '1/15/2025',
    },
    {
      id: 'MOD002',
      modelId: 'M002',
      idNumber: '930234567V',
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '+94 71 234 5678',
      bio: 'Experienced commercial and editorial model. Passionate about fashion and creative collaborations.',
      height: '168 cm',
      weight: '54 kg',
      hairColor: 'Brown',
      eyeColor: 'Green',
      bust: '84 cm',
      waist: '62 cm',
      hips: '88 cm',
      shoeSize: '37',
      basePrice: 6000,
      photosCount: 8,
      videosCount: 3,
      bookingsCount: 52,
      rating: 4.9,
      status: 'active',
      joinDate: '2/20/2025',
    },
    {
      id: 'MOD003',
      modelId: 'M003',
      idNumber: '880445789V',
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+94 76 345 6789',
      bio: 'Male fashion model specializing in commercial and fitness photography.',
      height: '183 cm',
      weight: '78 kg',
      hairColor: 'Black',
      eyeColor: 'Brown',
      bust: '98 cm',
      waist: '82 cm',
      hips: '95 cm',
      shoeSize: '42',
      basePrice: 5500,
      photosCount: 7,
      videosCount: 2,
      bookingsCount: 35,
      rating: 4.7,
      status: 'inactive',
      joinDate: '3/10/2025',
    },
  ]);

  const [selectedModeler, setSelectedModeler] = useState<Modeler | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editForm, setEditForm] = useState<Modeler | null>(null);

  const toggleStatus = (id: string) => {
    setModelers(modelers.map(modeler =>
      modeler.id === id
        ? { ...modeler, status: modeler.status === 'active' ? 'inactive' : 'active' }
        : modeler
    ));
  };

  const handleViewProfile = (modeler: Modeler) => {
    setSelectedModeler(modeler);
    setShowViewModal(true);
  };

  const handleEdit = (modeler: Modeler) => {
    setSelectedModeler(modeler);
    setEditForm({ ...modeler });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (editForm) {
      setModelers(modelers.map(m => m.id === editForm.id ? editForm : m));
      setShowEditModal(false);
      setEditForm(null);
    }
  };

  const handleResetPassword = (modeler: Modeler) => {
    // In real app: Generate new temp password and send email
    alert(`Password reset for ${modeler.name}. New temporary password sent to ${modeler.email}`);
  };

  const filteredModelers = modelers.filter(modeler =>
    modeler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    modeler.modelId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    modeler.idNumber.includes(searchTerm)
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Modelers</h1>
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
        <h2 className="text-neutral-950 text-2xl">Modeler Management</h2>
        <div className="relative w-64">
          <Search className="w-4 h-4 text-[#6a7282] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search modelers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Modeler Cards */}
      <div className="space-y-4">
        {filteredModelers.map((modeler) => (
          <div key={modeler.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
            {/* Header Row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl text-neutral-950 mb-2">{modeler.name}</h3>
                <div className="flex items-center gap-2 text-sm text-[#6a7282]">
                  <span>ID: {modeler.modelId}</span>
                  <span>•</span>
                  <span>NIC: {modeler.idNumber}</span>
                </div>
              </div>
              <span className={`text-white text-xs px-3 py-1.5 rounded-lg ${
                modeler.status === 'active' ? 'bg-[#00a63e]' : 'bg-[#6a7282]'
              }`}>
                {modeler.status}
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {/* Contact */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Contact</h4>
                <p className="text-sm text-neutral-950 mb-1">{modeler.phone}</p>
                <p className="text-sm text-neutral-950">{modeler.email}</p>
              </div>

              {/* Base Price */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Base Price</h4>
                <p className="text-sm text-neutral-950 mb-1">LKR</p>
                <p className="text-sm text-neutral-950">{modeler.basePrice.toLocaleString()}</p>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Rating</h4>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-sm text-neutral-950">{modeler.rating}</span>
                </div>
              </div>

              {/* Total Bookings */}
              <div>
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Total Bookings</h4>
                <p className="text-sm text-neutral-950">{modeler.bookingsCount}</p>
              </div>

              {/* Joined */}
              <div className="col-start-4">
                <h4 className="text-[#6a7282] text-xs uppercase mb-2">Joined</h4>
                <p className="text-sm text-neutral-950">{modeler.joinDate}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() => handleViewProfile(modeler)}
                className="px-4 py-2 bg-white border border-gray-300 text-neutral-950 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Profile
              </button>
              <button
                onClick={() => handleEdit(modeler)}
                className="px-4 py-2 bg-white border border-gray-300 text-neutral-950 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit
              </button>
              {modeler.status === 'active' ? (
                <button
                  onClick={() => toggleStatus(modeler.id)}
                  className="px-4 py-2 bg-[#d4183d] text-white rounded-lg text-sm hover:bg-[#b51432] transition-colors flex items-center gap-2"
                >
                  <UserX className="w-4 h-4" />
                  Deactivate
                </button>
              ) : (
                <button
                  onClick={() => toggleStatus(modeler.id)}
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  Activate
                </button>
              )}
              <button
                onClick={() => handleResetPassword(modeler)}
                className="px-4 py-2 bg-gray-100 text-neutral-950 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Key className="w-4 h-4" />
                Reset Password
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Profile Modal */}
      {showViewModal && selectedModeler && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-neutral-950 text-xl">Model Profile</h2>
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
              {/* Profile Header */}
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-3xl flex-shrink-0">
                  {selectedModeler.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-neutral-950 mb-1">{selectedModeler.name}</h3>
                  <p className="text-sm text-[#6a7282] mb-1">Model ID: {selectedModeler.modelId}</p>
                  <p className="text-sm text-[#6a7282] mb-2">NIC: {selectedModeler.idNumber}</p>
                  <span className={`inline-block text-white text-xs px-3 py-1 rounded-lg ${
                    selectedModeler.status === 'active' ? 'bg-[#00a63e]' : 'bg-[#6a7282]'
                  }`}>
                    {selectedModeler.status}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-neutral-950 mb-3">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Email</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.email}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Phone</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.phone}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-neutral-950 mb-3">Bio</h3>
                <p className="text-[#6a7282] text-sm leading-relaxed">{selectedModeler.bio}</p>
              </div>

              {/* Physical Measurements */}
              <div>
                <h3 className="text-neutral-950 mb-3">Physical Measurements</h3>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Height</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.height}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Weight</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.weight}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Hair Color</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.hairColor}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Eye Color</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.eyeColor}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Bust</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.bust}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Waist</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.waist}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Hips</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.hips}</p>
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm mb-1">Shoe Size</p>
                    <p className="text-neutral-950 text-sm">{selectedModeler.shoeSize}</p>
                  </div>
                </div>
              </div>

              {/* Performance Statistics */}
              <div>
                <h3 className="text-neutral-950 mb-4">Performance Statistics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-3xl text-neutral-950 mb-1">{selectedModeler.rating}</div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-yellow-500 text-lg">★</span>
                    </div>
                    <p className="text-[#6a7282] text-sm">Rating</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-3xl text-neutral-950 mb-2">{selectedModeler.bookingsCount}</div>
                    <p className="text-[#6a7282] text-sm">Total Bookings</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-3xl text-neutral-950 mb-1">LKR</div>
                    <div className="text-lg text-neutral-950 mb-1">{selectedModeler.basePrice.toLocaleString()}</div>
                    <p className="text-[#6a7282] text-sm">Base Price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditModal && editForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-neutral-950 text-xl">Edit Model Profile</h2>
                <button 
                  onClick={() => setShowEditModal(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Profile Header */}
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-3xl flex-shrink-0">
                  {editForm.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-neutral-950 mb-1">{editForm.name}</h3>
                  <p className="text-sm text-[#6a7282] mb-1">Model ID: {editForm.modelId}</p>
                  <p className="text-sm text-[#6a7282]">NIC: {editForm.idNumber}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-neutral-950 mb-3">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="text-neutral-950 mb-3 block">Bio</label>
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              {/* Physical Measurements */}
              <div>
                <h3 className="text-neutral-950 mb-3">Physical Measurements</h3>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Height</label>
                    <input
                      type="text"
                      value={editForm.height}
                      onChange={(e) => setEditForm({ ...editForm, height: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Weight</label>
                    <input
                      type="text"
                      value={editForm.weight}
                      onChange={(e) => setEditForm({ ...editForm, weight: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Hair Color</label>
                    <input
                      type="text"
                      value={editForm.hairColor}
                      onChange={(e) => setEditForm({ ...editForm, hairColor: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Eye Color</label>
                    <input
                      type="text"
                      value={editForm.eyeColor}
                      onChange={(e) => setEditForm({ ...editForm, eyeColor: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Bust</label>
                    <input
                      type="text"
                      value={editForm.bust}
                      onChange={(e) => setEditForm({ ...editForm, bust: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Waist</label>
                    <input
                      type="text"
                      value={editForm.waist}
                      onChange={(e) => setEditForm({ ...editForm, waist: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Hips</label>
                    <input
                      type="text"
                      value={editForm.hips}
                      onChange={(e) => setEditForm({ ...editForm, hips: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Shoe Size</label>
                    <input
                      type="text"
                      value={editForm.shoeSize}
                      onChange={(e) => setEditForm({ ...editForm, shoeSize: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing & Status */}
              <div>
                <h3 className="text-neutral-950 mb-3">Pricing & Status</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Base Price (LKR)</label>
                    <input
                      type="number"
                      value={editForm.basePrice}
                      onChange={(e) => setEditForm({ ...editForm, basePrice: Number(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="text-[#6a7282] text-sm mb-2 block">Status</label>
                    <select
                      value={editForm.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value as 'active' | 'inactive' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Performance Statistics (Read Only) */}
              <div>
                <h3 className="text-neutral-950 mb-3">Performance Statistics (Read Only)</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl text-neutral-950 mb-1">{editForm.rating}</div>
                      <p className="text-[#6a7282] text-sm">Rating</p>
                    </div>
                    <div>
                      <div className="text-2xl text-neutral-950 mb-1">{editForm.bookingsCount}</div>
                      <p className="text-[#6a7282] text-sm">Total Bookings</p>
                    </div>
                    <div>
                      <div className="text-2xl text-neutral-950 mb-1">{editForm.photosCount}/{editForm.videosCount}</div>
                      <p className="text-[#6a7282] text-sm">Photos/Videos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-200 flex gap-4">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 bg-gray-100 text-neutral-950 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}