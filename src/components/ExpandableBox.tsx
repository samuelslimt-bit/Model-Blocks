import React, { useState, useId } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableBoxProps {
  previewText: string;
  revealedText: string;
  className?: string;
  id?: string;
  variant?: 'default' | 'tint';
}

export const ExpandableBox: React.FC<ExpandableBoxProps> = ({
  previewText,
  revealedText,
  className = '',
  id,
  variant = 'default',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const generatedId = useId();
  const contentId = id ? `${id}-content` : `expandable-${generatedId}`;

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const baseStyle =
    variant === 'tint'
      ? 'bg-[#FFE3C7] border-l-4 border-[#D96708] border-y border-r border-[#B9C2CC]/60 p-5 sm:p-6 shadow-sm'
      : 'bg-white border-l-4 border-[#D96708] border-y border-r border-[#B9C2CC] p-5 sm:p-6 shadow-sm';

  return (
    <div
      id={id}
      className={`rounded-sm transition-all duration-150 ${baseStyle} ${className}`}
    >
      <p className={`text-base sm:text-[17px] leading-relaxed ${variant === 'tint' ? 'text-[#232B33]' : 'text-[#5B6570]'}`}>
        {previewText}
      </p>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={id ? `${id}-button` : undefined}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0.38, 0.9] }}
            className="overflow-hidden"
          >
            <p className={`pt-3 text-base sm:text-[17px] leading-relaxed border-t mt-3 ${variant === 'tint' ? 'border-[#D96708]/20 text-[#232B33]' : 'border-[#F4F4EF] text-[#5B6570]'}`}>
              {revealedText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 pt-1">
        <button
          id={id ? `${id}-button` : undefined}
          type="button"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D96708] hover:text-[#232B33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D96708] transition-colors cursor-pointer"
        >
          <span>{isExpanded ? 'Show less' : 'Read more'}</span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-[#D96708]" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-[#D96708]" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};
