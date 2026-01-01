import { useState } from 'react';
import { Check, X, Eye, Image as ImageIcon, Video, ChevronDown, ChevronUp, User } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { RejectModal } from './RejectModal';

interface MediaItem {
  id: string;
  modelerId: string;
  modelerName: string;
  type: 'photo' | 'video';
  filename: string;
  uploadDate: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
}

interface ModelerMediaGroup {
  modelerId: string;
  modelerName: string;
  items: MediaItem[];
  pendingCount: number;
  approvedCount: number;
  rejectedCount: number;
}

export function MediaApproval() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: 'MED001',
      modelerId: 'MOD001',
      modelerName: 'Sarah Johnson',
      type: 'photo',
      filename: 'profile_photo_1.jpg',
      uploadDate: '2025-12-12 10:30',
      status: 'pending',
    },
    {
      id: 'MED002',
      modelerId: 'MOD001',
      modelerName: 'Sarah Johnson',
      type: 'photo',
      filename: 'portfolio_2.jpg',
      uploadDate: '2025-12-12 10:32',
      status: 'pending',
    },
    {
      id: 'MED003',
      modelerId: 'MOD001',
      modelerName: 'Sarah Johnson',
      type: 'video',
      filename: 'runway_showcase.mp4',
      uploadDate: '2025-12-12 10:35',
      status: 'pending',
    },
    {
      id: 'MED004',
      modelerId: 'MOD002',
      modelerName: 'Michael Silva',
      type: 'video',
      filename: 'runway_walk.mp4',
      uploadDate: '2025-12-12 11:15',
      status: 'pending',
    },
    {
      id: 'MED005',
      modelerId: 'MOD002',
      modelerName: 'Michael Silva',
      type: 'photo',
      filename: 'headshot_pro.jpg',
      uploadDate: '2025-12-12 11:18',
      status: 'approved',
    },
    {
      id: 'MED006',
      modelerId: 'MOD003',
      modelerName: 'Amanda Fernando',
      type: 'photo',
      filename: 'headshot_1.jpg',
      uploadDate: '2025-12-12 14:20',
      status: 'pending',
    },
    {
      id: 'MED007',
      modelerId: 'MOD003',
      modelerName: 'Amanda Fernando',
      type: 'photo',
      filename: 'portfolio_1.jpg',
      uploadDate: '2025-12-12 14:22',
      status: 'pending',
    },
    {
      id: 'MED008',
      modelerId: 'MOD003',
      modelerName: 'Amanda Fernando',
      type: 'photo',
      filename: 'portfolio_2.jpg',
      uploadDate: '2025-12-12 14:23',
      status: 'pending',
    },
    {
      id: 'MED009',
      modelerId: 'MOD004',
      modelerName: 'David Chen',
      type: 'photo',
      filename: 'fashion_shoot_1.jpg',
      uploadDate: '2025-12-13 09:15',
      status: 'pending',
    },
    {
      id: 'MED010',
      modelerId: 'MOD004',
      modelerName: 'David Chen',
      type: 'photo',
      filename: 'fashion_shoot_2.jpg',
      uploadDate: '2025-12-13 09:16',
      status: 'pending',
    },
  ]);

  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [expandedModelers, setExpandedModelers] = useState<Set<string>>(new Set());
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [mediaToReject, setMediaToReject] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setMediaItems(mediaItems.map(item => 
      item.id === id ? { ...item, status: 'approved' } : item
    ));
    setShowPreview(false);
    // In real app: Publish media to modeler's profile
    toast.success('Media approved and published!');
  };

  const handleReject = (id: string, reason: string) => {
    setMediaItems(mediaItems.map(item => 
      item.id === id ? { ...item, status: 'rejected', rejectionReason: reason } : item
    ));
    setShowPreview(false);
    // In real app: Notify modeler of rejection with reason
    toast.error('Media rejected!');
  };

  const openRejectModal = (id: string) => {
    setMediaToReject(id);
    setShowRejectModal(true);
  };

  const confirmReject = (reason: string) => {
    if (mediaToReject) {
      handleReject(mediaToReject, reason);
    }
    setShowRejectModal(false);
    setMediaToReject(null);
  };

  const viewMedia = (item: MediaItem) => {
    setSelectedMedia(item);
    setShowPreview(true);
  };

  const toggleModeler = (modelerId: string) => {
    const newExpanded = new Set(expandedModelers);
    if (newExpanded.has(modelerId)) {
      newExpanded.delete(modelerId);
    } else {
      newExpanded.add(modelerId);
    }
    setExpandedModelers(newExpanded);
  };

  const expandAll = () => {
    const allModelerIds = new Set(mediaItems.map(item => item.modelerId));
    setExpandedModelers(allModelerIds);
  };

  const collapseAll = () => {
    setExpandedModelers(new Set());
  };

  // Group media by modeler
  const modelerGroups: ModelerMediaGroup[] = mediaItems.reduce((groups, item) => {
    let group = groups.find(g => g.modelerId === item.modelerId);
    if (!group) {
      group = {
        modelerId: item.modelerId,
        modelerName: item.modelerName,
        items: [],
        pendingCount: 0,
        approvedCount: 0,
        rejectedCount: 0,
      };
      groups.push(group);
    }
    group.items.push(item);
    if (item.status === 'pending') group.pendingCount++;
    if (item.status === 'approved') group.approvedCount++;
    if (item.status === 'rejected') group.rejectedCount++;
    return groups;
  }, [] as ModelerMediaGroup[]);

  // Filter groups by status
  const filteredGroups = modelerGroups
    .map(group => ({
      ...group,
      items: filterStatus === 'all' 
        ? group.items 
        : group.items.filter(item => item.status === filterStatus)
    }))
    .filter(group => group.items.length > 0);

  // Calculate overall stats
  const totalPending = mediaItems.filter(m => m.status === 'pending').length;
  const totalApproved = mediaItems.filter(m => m.status === 'approved').length;
  const totalRejected = mediaItems.filter(m => m.status === 'rejected').length;
  const photoCount = mediaItems.filter(m => m.type === 'photo' && m.status === 'pending').length;
  const videoCount = mediaItems.filter(m => m.type === 'video' && m.status === 'pending').length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-950 text-2xl mb-1">Media Approval</h1>
          <p className="text-[#4a5565] text-sm">Review and approve modeler photos and videos</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <svg className="w-4 h-4 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M8 4v4l2.667 1.333M14.667 8A6.667 6.667 0 118 1.333 6.667 6.667 0 0114.667 8z" />
          </svg>
          <span className="text-[#4a5565] text-sm">Last updated: Just now</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4">
          <div className="text-[#6a7282] text-xs uppercase mb-2">Pending Review</div>
          <div className="text-neutral-950 text-2xl">{totalPending}</div>
        </div>
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4">
          <div className="text-[#6a7282] text-xs uppercase mb-2">Pending Photos</div>
          <div className="text-blue-600 text-2xl">{photoCount}</div>
        </div>
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4">
          <div className="text-[#6a7282] text-xs uppercase mb-2">Pending Videos</div>
          <div className="text-purple-600 text-2xl">{videoCount}</div>
        </div>
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4">
          <div className="text-[#6a7282] text-xs uppercase mb-2">Approved</div>
          <div className="text-green-600 text-2xl">{totalApproved}</div>
        </div>
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4">
          <div className="text-[#6a7282] text-xs uppercase mb-2">Rejected</div>
          <div className="text-red-600 text-2xl">{totalRejected}</div>
        </div>
      </div>

      {/* Filter and Controls */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              filterStatus === 'all' ? 'bg-black text-white' : 'bg-white border border-[#d1d5dc] text-neutral-950 hover:bg-gray-50'
            }`}
          >
            All Media
          </button>
          <button
            onClick={() => setFilterStatus('pending')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              filterStatus === 'pending' ? 'bg-black text-white' : 'bg-white border border-[#d1d5dc] text-neutral-950 hover:bg-gray-50'
            }`}
          >
            Pending ({totalPending})
          </button>
          <button
            onClick={() => setFilterStatus('approved')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              filterStatus === 'approved' ? 'bg-black text-white' : 'bg-white border border-[#d1d5dc] text-neutral-950 hover:bg-gray-50'
            }`}
          >
            Approved ({totalApproved})
          </button>
          <button
            onClick={() => setFilterStatus('rejected')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              filterStatus === 'rejected' ? 'bg-black text-white' : 'bg-white border border-[#d1d5dc] text-neutral-950 hover:bg-gray-50'
            }`}
          >
            Rejected ({totalRejected})
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-2 text-sm text-neutral-950 border border-[#d1d5dc] rounded-lg hover:bg-gray-50"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-2 text-sm text-neutral-950 border border-[#d1d5dc] rounded-lg hover:bg-gray-50"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Modeler Groups */}
      <div className="space-y-4">
        {filteredGroups.map((group) => {
          const isExpanded = expandedModelers.has(group.modelerId);
          
          return (
            <div key={group.modelerId} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
              {/* Modeler Header */}
              <button
                onClick={() => toggleModeler(group.modelerId)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl text-neutral-950">{group.modelerName}</h3>
                    <p className="text-sm text-[#6a7282]">ID: {group.modelerId}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    {group.pendingCount > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#6a7282] uppercase">Pending:</span>
                        <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-lg">
                          {group.pendingCount}
                        </span>
                      </div>
                    )}
                    {group.approvedCount > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#6a7282] uppercase">Approved:</span>
                        <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-lg">
                          {group.approvedCount}
                        </span>
                      </div>
                    )}
                    {group.rejectedCount > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#6a7282] uppercase">Rejected:</span>
                        <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-lg">
                          {group.rejectedCount}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expand/Collapse Icon */}
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-[#6a7282]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6a7282]" />
                  )}
                </div>
              </button>

              {/* Media Items */}
              {isExpanded && (
                <div className="border-t border-[rgba(0,0,0,0.1)] p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {group.items.map((item) => (
                      <div key={item.id} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                        {/* Media Preview */}
                        <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
                          {item.type === 'photo' ? (
                            <ImageIcon className="w-12 h-12 text-gray-400" />
                          ) : (
                            <Video className="w-12 h-12 text-gray-400" />
                          )}
                          <div className="absolute top-2 right-2">
                            <span className={`px-2 py-1 text-xs rounded ${
                              item.type === 'photo' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                          {item.status !== 'pending' && (
                            <div className="absolute top-2 left-2">
                              <span className={`px-2 py-1 text-xs rounded ${
                                item.status === 'approved' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                              }`}>
                                {item.status}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Media Info */}
                        <div className="p-3">
                          <p className="text-xs text-[#6a7282] mb-2 truncate" title={item.filename}>
                            {item.filename}
                          </p>
                          <p className="text-xs text-[#6a7282] mb-3">{item.uploadDate}</p>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => viewMedia(item)}
                              className="flex-1 px-2 py-1.5 bg-white border border-gray-300 text-neutral-950 rounded text-xs hover:bg-gray-100 transition-colors flex items-center justify-center gap-1"
                            >
                              <Eye className="w-3 h-3" />
                              View
                            </button>
                            {item.status === 'pending' && (
                              <>
                                <button
                                  onClick={() => handleApprove(item.id)}
                                  className="px-2 py-1.5 bg-[#00a63e] text-white rounded text-xs hover:bg-[#008c34] transition-colors"
                                  title="Approve"
                                >
                                  <Check className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => openRejectModal(item.id)}
                                  className="px-2 py-1.5 bg-[#d4183d] text-white rounded text-xs hover:bg-[#b51432] transition-colors"
                                  title="Reject"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-12 text-center">
          <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl text-neutral-950 mb-2">No media items found</h3>
          <p className="text-[#6a7282]">
            {filterStatus === 'all' 
              ? 'No media items available' 
              : `No ${filterStatus} media items`}
          </p>
        </div>
      )}

      {/* Preview Modal */}
      {showPreview && selectedMedia && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-neutral-950 text-xl">Media Preview</h2>
                  <p className="text-[#6a7282] text-sm mt-1">{selectedMedia.modelerName} - {selectedMedia.modelerId}</p>
                </div>
                <button 
                  onClick={() => setShowPreview(false)} 
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="aspect-video bg-gray-100 flex items-center justify-center mb-6 rounded-lg border-2 border-[#d1d5dc]">
                {selectedMedia.type === 'photo' ? (
                  <div className="text-center">
                    <ImageIcon className="w-24 h-24 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">{selectedMedia.filename}</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Video className="w-24 h-24 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">{selectedMedia.filename}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block uppercase">Media ID</label>
                  <p className="text-sm text-neutral-950">{selectedMedia.id}</p>
                </div>
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block uppercase">File Type</label>
                  <p className="text-sm text-neutral-950">{selectedMedia.type}</p>
                </div>
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block uppercase">Upload Date</label>
                  <p className="text-sm text-neutral-950">{selectedMedia.uploadDate}</p>
                </div>
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block uppercase">Status</label>
                  <span className={`inline-block px-3 py-1 text-xs rounded-lg ${
                    selectedMedia.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    selectedMedia.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedMedia.status}
                  </span>
                </div>
              </div>

              {selectedMedia.rejectionReason && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <h4 className="text-sm text-red-900 mb-1">Rejection Reason:</h4>
                  <p className="text-sm text-red-800">{selectedMedia.rejectionReason}</p>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {selectedMedia.status === 'pending' && (
              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => openRejectModal(selectedMedia.id)}
                  className="flex-1 bg-[#d4183d] text-white py-3 rounded-lg hover:bg-[#b51432] transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Reject Media
                </button>
                <button
                  onClick={() => handleApprove(selectedMedia.id)}
                  className="flex-1 bg-[#00a63e] text-white py-3 rounded-lg hover:bg-[#008c34] transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Approve & Publish
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reject Modal */}
      <RejectModal
        isOpen={showRejectModal}
        onClose={() => setShowRejectModal(false)}
        onConfirm={confirmReject}
        title="Reject Media"
        itemName={mediaToReject ? mediaItems.find(m => m.id === mediaToReject)?.filename || '' : ''}
      />
    </div>
  );
}