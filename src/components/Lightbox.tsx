import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryAlbum } from '../types';
import { PlaceholderImage } from './PlaceholderImage';

interface LightboxProps {
  album: GalleryAlbum | null;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  album,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !album) return null;

  const currentPhoto = album.photos[currentIndex] || album.photos[0];
  const totalPhotos = album.photos.length;

  return (
    <div
      id="gallery-lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${album.title} Gallery Lightbox`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#232B33]/92 backdrop-blur-xs p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
    >
      {/* Content wrapper: stopPropagation so clicks inside don't close */}
      <div
        id="lightbox-content-box"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#2E3947] border border-[#3C4857] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-[#232B33] border-b border-[#3C4857] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#D96708] bg-[#3C4857] px-2 py-0.5 rounded-xs shrink-0">
              {album.title}
            </span>
            <span className="text-sm text-[#FFFFFF] font-medium truncate">
              {currentPhoto.title}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Position Counter */}
            <span className="text-xs font-mono text-[#9AA0A6]">
              {currentIndex + 1} of {totalPhotos}
            </span>

            {/* Close Button */}
            <button
              id="lightbox-close-button"
              type="button"
              onClick={onClose}
              aria-label="Close lightbox"
              className="text-[#9AA0A6] hover:text-[#FFFFFF] hover:bg-[#3C4857] p-1.5 rounded-xs transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Main Image Display Area */}
        <div className="relative flex-1 bg-[#232B33] overflow-hidden flex items-center justify-center min-h-[260px] sm:min-h-[380px] p-2 sm:p-4">
          <div className="w-full max-w-3xl rounded-xs overflow-hidden border border-[#3C4857] shadow-inner">
            <PlaceholderImage photo={currentPhoto} className="w-full" />
          </div>

          {/* Left Arrow */}
          <button
            id="lightbox-prev-button"
            type="button"
            onClick={onPrev}
            aria-label="Previous photograph"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#232B33]/85 text-[#FFFFFF] hover:bg-[#D96708] border border-[#3C4857] p-2.5 rounded-full transition-colors cursor-pointer z-20 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Right Arrow */}
          <button
            id="lightbox-next-button"
            type="button"
            onClick={onNext}
            aria-label="Next photograph"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#232B33]/85 text-[#FFFFFF] hover:bg-[#D96708] border border-[#3C4857] p-2.5 rounded-full transition-colors cursor-pointer z-20 shadow-md"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Caption & Technical Note */}
        <div className="px-5 py-3.5 bg-[#2E3947] border-t border-[#3C4857]">
          <p className="text-sm text-[#DCE8F1] leading-relaxed">
            {currentPhoto.description}
          </p>

          {/* Thumbnails row */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 pt-1">
            {album.photos.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${p.title}`}
                className={`h-12 w-16 shrink-0 rounded-xs border overflow-hidden transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'border-[#D96708] ring-1 ring-[#D96708] opacity-100'
                    : 'border-[#3C4857] opacity-60 hover:opacity-100'
                }`}
              >
                <div className="w-full h-full bg-[#232B33] flex items-center justify-center text-[10px] text-[#9AA0A6] font-mono">
                  {idx + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
