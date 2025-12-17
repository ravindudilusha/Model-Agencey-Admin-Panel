import { useState } from 'react';
import { Check, X, Eye, Image as ImageIcon, Video } from 'lucide-react';

interface MediaItem {
  id: string;
  modelerId: string;
  modelerName: string;
  type: 'photo' | 'video';
  filename: string;
  uploadDate: string;
  status: 'pending' | 'approved' | 'rejected';
  reason?: string;
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
      modelerId: 'MOD002',
      modelerName: 'Michael Silva',
      type: 'video',
      filename: 'runway_walk.mp4',
      uploadDate: '2025-12-12 11:15',
      status: 'pending',
    },
    {
      id: 'MED004',
      modelerId: 'MOD003',
      modelerName: 'Amanda Fernando',
      type: 'photo',
      filename: 'headshot_1.jpg',
      uploadDate: '2025-12-12 14:20',
      status: 'pending',
    },
  ]);

  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'photo' | 'video'>('all');

  const handleApprove = (id: string) => {
    setMediaItems(mediaItems.map(item => 
      item.id === id ? { ...item, status: 'approved' } : item
    ));
    setShowPreview(false);
    // In real app: Publish media to modeler's profile
  };

  const handleReject = (id: string, reason: string) => {
    setMediaItems(mediaItems.map(item => 
      item.id === id ? { ...item, status: 'rejected', reason } : item
    ));
    setShowPreview(false);
    // In real app: Notify modeler of rejection with reason
  };

  const viewMedia = (item: MediaItem) => {
    setSelectedMedia(item);
    setShowPreview(true);
  };

  const filteredItems = mediaItems.filter(item => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  const pendingCount = mediaItems.filter(m => m.status === 'pending').length;
  const photoCount = mediaItems.filter(m => m.type === 'photo' && m.status === 'pending').length;
  const videoCount = mediaItems.filter(m => m.type === 'video' && m.status === 'pending').length;

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-neutral-950 text-2xl mb-2">Media Approval</h1>
        <p className="text-[#4a5565]">Review and approve modeler photos and videos</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-[#6a7282] text-sm mb-1">Pending Review</div>
          <div className="text-neutral-950 text-2xl">{pendingCount}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-[#6a7282] text-sm mb-1">Pending Photos</div>
          <div className="text-blue-600 text-2xl">{photoCount}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-[#6a7282] text-sm mb-1">Pending Videos</div>
          <div className="text-purple-600 text-2xl">{videoCount}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-[#6a7282] text-sm mb-1">Approved Today</div>
          <div className="text-green-600 text-2xl">8</div>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilterType('all')}
          className={`px-4 py-2 rounded-lg ${
            filterType === 'all' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-neutral-950'
          }`}
        >
          All Media
        </button>
        <button
          onClick={() => setFilterType('photo')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            filterType === 'photo' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-neutral-950'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          Photos
        </button>
        <button
          onClick={() => setFilterType('video')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            filterType === 'video' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-neutral-950'
          }`}
        >
          <Video className="w-4 h-4" />
          Videos
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
              {item.type === 'photo' ? (
                <ImageIcon className="w-12 h-12 text-gray-400" />
              ) : (
                <Video className="w-12 h-12 text-gray-400" />
              )}
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs rounded ${
                  item.type === 'photo' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                }`}>
                  {item.type}
                </span>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm text-neutral-950 mb-1">{item.modelerName}</p>
              <p className="text-xs text-[#6a7282] mb-2">ID: {item.modelerId}</p>
              <p className="text-xs text-[#6a7282] mb-3">{item.uploadDate}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => viewMedia(item)}
                  className="flex-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200"
                >
                  <Eye className="w-3 h-3 inline mr-1" />
                  View
                </button>
                {item.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(item.id)}
                      className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                    >
                      <Check className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleReject(item.id, 'Does not meet quality standards')}
                      className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </>
                )}
              </div>
              {item.status !== 'pending' && (
                <div className="mt-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {showPreview && selectedMedia && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-neutral-950 text-xl">Media Preview - {selectedMedia.id}</h2>
              <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className="aspect-video bg-gray-100 flex items-center justify-center mb-4">
                {selectedMedia.type === 'photo' ? (
                  <div className="text-center">
                    <ImageIcon className="w-24 h-24 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Photo preview: {selectedMedia.filename}</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Video className="w-24 h-24 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Video preview: {selectedMedia.filename}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block">Modeler</label>
                  <p className="text-sm text-neutral-950">{selectedMedia.modelerName}</p>
                </div>
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block">Modeler ID</label>
                  <p className="text-sm text-neutral-950">{selectedMedia.modelerId}</p>
                </div>
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block">File Type</label>
                  <p className="text-sm text-neutral-950">{selectedMedia.type}</p>
                </div>
                <div>
                  <label className="text-xs text-[#6a7282] mb-1 block">Upload Date</label>
                  <p className="text-sm text-neutral-950">{selectedMedia.uploadDate}</p>
                </div>
              </div>
            </div>

            {selectedMedia.status === 'pending' && (
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => handleReject(selectedMedia.id, 'Does not meet quality standards')}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Reject Media
                </button>
                <button
                  onClick={() => handleApprove(selectedMedia.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Approve & Publish
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
