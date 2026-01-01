import { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface RejectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
  title: string;
  itemName: string;
}

export function RejectModal({ isOpen, onClose, onConfirm, title, itemName }: RejectModalProps) {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (reason.trim()) {
      onConfirm(reason);
      setReason('');
      onClose();
    }
  };

  const handleCancel = () => {
    setReason('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[14px] w-full max-w-md">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-[#d4183d]" />
              </div>
              <h2 className="text-neutral-950 text-xl">{title}</h2>
            </div>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[#6a7282] mb-4">
            You are about to reject <span className="text-neutral-950">{itemName}</span>. Please provide a reason for rejection.
          </p>
          
          <div>
            <label className="block text-sm text-neutral-950 mb-2">
              Rejection Reason <span className="text-red-600">*</span>
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason for rejection..."
              className="w-full px-4 py-3 border border-[#d1d5dc] rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
              rows={4}
              required
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-3 border border-[#d1d5dc] text-neutral-950 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!reason.trim()}
            className="flex-1 px-4 py-3 bg-[#d4183d] text-white rounded-lg hover:bg-[#b51432] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Rejection
          </button>
        </div>
      </div>
    </div>
  );
}
