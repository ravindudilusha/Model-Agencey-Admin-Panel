import { useState } from 'react';
import { Plus, Edit, Trash2, X, Calendar, DollarSign, MapPin, Image as ImageIcon, Upload, Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ClassSchedule {
  id: string;
  location: string;
  day: string;
  time: string;
}

interface CourseFee {
  totalFee: number;
  registrationFee: number;
  monthlyFee: number;
  oneTimePayment: number;
  discount: number;
}

interface Banner {
  id: string;
  title: string;
  imageUrl: string;
  active: boolean;
}

export function AcademyManagement() {
  const [schedules, setSchedules] = useState<ClassSchedule[]>([
    { id: 'SCH001', location: 'Kurunegala', day: 'Sunday', time: '9:30 AM - 12:00 PM' },
    { id: 'SCH002', location: 'Negombo', day: 'Sunday', time: '1:30 PM - 4:30 PM' },
    { id: 'SCH003', location: 'Colombo', day: 'Saturday', time: '1:00 PM - 3:30 PM' },
  ]);

  const [fees, setFees] = useState<CourseFee>({
    totalFee: 45000,
    registrationFee: 1000,
    monthlyFee: 15000,
    oneTimePayment: 40000,
    discount: 5000,
  });

  const [banners, setBanners] = useState<Banner[]>([
    { id: 'BAN001', title: 'Main Banner - The Walk Model Academy', imageUrl: '', active: true },
    { id: 'BAN002', title: 'Founder Banner - Dasun Wijesinghe', imageUrl: '', active: true },
  ]);

  const [editingSchedule, setEditingSchedule] = useState<ClassSchedule | null>(null);
  const [editingFees, setEditingFees] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showFeesModal, setShowFeesModal] = useState(false);
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

  const handleEditSchedule = (schedule: ClassSchedule) => {
    setEditingSchedule({ ...schedule });
    setShowScheduleModal(true);
  };

  const handleSaveSchedule = () => {
    if (editingSchedule) {
      setSchedules(schedules.map(s => s.id === editingSchedule.id ? editingSchedule : s));
      setShowScheduleModal(false);
      setEditingSchedule(null);
      toast.success('Class schedule updated successfully!');
    }
  };

  const handleSaveFees = () => {
    setShowFeesModal(false);
    setEditingFees(false);
    toast.success('Course fees updated successfully!');
  };

  const handleEditBanner = (banner: Banner) => {
    setSelectedBanner({ ...banner });
    setShowBannerModal(true);
  };

  const handleUploadBanner = (bannerId: string) => {
    // In real app, this would handle file upload
    alert(`Upload banner for ${bannerId}`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Academy Management</h1>
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
      <h2 className="text-neutral-950 text-2xl mb-6">Content Management</h2>

      {/* Class Schedules Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-neutral-950 text-xl">Class Schedules</h3>
          <button
            onClick={() => {
              setEditingSchedule({
                id: `SCH${(schedules.length + 1).toString().padStart(3, '0')}`,
                location: '',
                day: 'Monday',
                time: '',
              });
              setShowScheduleModal(true);
            }}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Schedule
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <button
                  onClick={() => handleEditSchedule(schedule)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 text-[#6a7282]" />
                </button>
              </div>
              <h4 className="text-neutral-950 text-lg mb-3">{schedule.location}</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-[#6a7282]" />
                  <span className="text-neutral-950">{schedule.day}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-[#6a7282]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M8 4v4l2.667 1.333M14.667 8A6.667 6.667 0 118 1.333 6.667 6.667 0 0114.667 8z" />
                  </svg>
                  <span className="text-neutral-950">{schedule.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Fees Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-neutral-950 text-xl">Course Fees & Payment Plans</h3>
          <button
            onClick={() => { setEditingFees(true); setShowFeesModal(true); }}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Edit Fees
          </button>
        </div>

        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-neutral-950 mb-4">Course Fee Details</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-[#6a7282] text-sm">Total Course Fee:</span>
                  <span className="text-neutral-950">LKR {fees.totalFee.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-[#6a7282] text-sm">Registration Fee:</span>
                  <span className="text-neutral-950">LKR {fees.registrationFee.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-[#6a7282] text-sm">Monthly Installment:</span>
                  <span className="text-neutral-950">LKR {fees.monthlyFee.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-neutral-950 mb-4">One-Time Payment Option</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-[#6a7282] text-sm">One-Time Payment:</span>
                  <span className="text-neutral-950">LKR {fees.oneTimePayment.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-[#6a7282] text-sm">Discount Amount:</span>
                  <span className="text-green-600">LKR {fees.discount.toLocaleString()} OFF</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                  <p className="text-green-800 text-sm">
                    <strong>Savings:</strong> Students save LKR {fees.discount.toLocaleString()} with one-time payment!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Management Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-neutral-950 text-xl">Banner Management</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {banners.map((banner) => (
            <div key={banner.id} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-neutral-950 mb-1">{banner.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-lg ${
                    banner.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {banner.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <button
                  onClick={() => handleEditBanner(banner)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 text-[#6a7282]" />
                </button>
              </div>

              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 flex flex-col items-center justify-center min-h-[200px]">
                <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-[#6a7282] text-sm mb-1">Banner Preview</p>
                <p className="text-[#6a7282] text-xs">{banner.id}</p>
              </div>

              <button
                onClick={() => handleUploadBanner(banner.id)}
                className="w-full px-4 py-2 bg-white border border-gray-300 text-neutral-950 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload New Banner
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Schedule Modal */}
      {showScheduleModal && editingSchedule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[500px]">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-neutral-950 text-xl">Edit Class Schedule</h2>
                  <p className="text-[#6a7282] text-sm mt-1">{editingSchedule.location}</p>
                </div>
                <button 
                  onClick={() => setShowScheduleModal(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-neutral-950 mb-2">Location</label>
                <input
                  type="text"
                  value={editingSchedule.location}
                  onChange={(e) => setEditingSchedule({ ...editingSchedule, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-950 mb-2">Day</label>
                <select
                  value={editingSchedule.day}
                  onChange={(e) => setEditingSchedule({ ...editingSchedule, day: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-950 mb-2">Time</label>
                <input
                  type="text"
                  value={editingSchedule.time}
                  onChange={(e) => setEditingSchedule({ ...editingSchedule, time: e.target.value })}
                  placeholder="e.g., 9:30 AM - 12:00 PM"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowScheduleModal(false)}
                className="flex-1 bg-white border border-gray-300 text-neutral-950 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSchedule}
                className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Fees Modal */}
      {showFeesModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[600px]">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-neutral-950 text-xl">Edit Course Fees</h2>
                  <p className="text-[#6a7282] text-sm mt-1">Update course pricing and payment plans</p>
                </div>
                <button 
                  onClick={() => setShowFeesModal(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-950 mb-2">Total Course Fee (LKR)</label>
                  <input
                    type="number"
                    value={fees.totalFee}
                    onChange={(e) => setFees({ ...fees, totalFee: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-950 mb-2">Registration Fee (LKR)</label>
                  <input
                    type="number"
                    value={fees.registrationFee}
                    onChange={(e) => setFees({ ...fees, registrationFee: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-950 mb-2">Monthly Installment (LKR)</label>
                  <input
                    type="number"
                    value={fees.monthlyFee}
                    onChange={(e) => setFees({ ...fees, monthlyFee: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-950 mb-2">One-Time Payment (LKR)</label>
                  <input
                    type="number"
                    value={fees.oneTimePayment}
                    onChange={(e) => setFees({ ...fees, oneTimePayment: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm text-neutral-950 mb-2">Discount Amount (LKR)</label>
                  <input
                    type="number"
                    value={fees.discount}
                    onChange={(e) => setFees({ ...fees, discount: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <p className="text-xs text-[#6a7282] mt-1">Savings for one-time payment</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowFeesModal(false)}
                className="flex-1 bg-white border border-gray-300 text-neutral-950 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveFees}
                className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Banner Modal */}
      {showBannerModal && selectedBanner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[600px]">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-neutral-950 text-xl">Edit Banner</h2>
                  <p className="text-[#6a7282] text-sm mt-1">{selectedBanner.title}</p>
                </div>
                <button 
                  onClick={() => setShowBannerModal(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-neutral-950 mb-2">Banner Title</label>
                <input
                  type="text"
                  value={selectedBanner.title}
                  onChange={(e) => setSelectedBanner({ ...selectedBanner, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-950 mb-2">Banner Status</label>
                <select
                  value={selectedBanner.active ? 'active' : 'inactive'}
                  onChange={(e) => setSelectedBanner({ ...selectedBanner, active: e.target.value === 'active' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-950 mb-2">Upload Banner Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-neutral-950 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-[#6a7282]">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowBannerModal(false)}
                className="flex-1 bg-white border border-gray-300 text-neutral-950 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setBanners(banners.map(b => b.id === selectedBanner.id ? selectedBanner : b));
                  setShowBannerModal(false);
                  toast.success('Banner updated successfully!');
                }}
                className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}