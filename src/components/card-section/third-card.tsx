"use client";
import { DraftingCompass, Save, Zap, Star } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

// Individual draggable tag component
const Tag = ({ icon: Icon, text, onDragStart, onDragEnd, index }) => {
  const dragControls = useDragControls();
  const ref = useRef(null);

  return (
    <motion.div
      drag
      dragControls={dragControls}
      onDragStart={() => onDragStart(index)}
      onDragEnd={() => onDragEnd(index)}
      dragMomentum={false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileDrag={{ scale: 1.05, zIndex: 1 }}
      ref={ref}
      className="flex items-start justify-start gap-2 rounded-lg border border-slate-100/35 px-2 py-1 font-medium cursor-move"
    >
      <Icon className="text-white" size={14} />
      <p className="text-xs text-white">{text}</p>
    </motion.div>
  );
};

// Empty placeholder tag
const EmptyTag = () => (
  <div className="flex items-start justify-start gap-2 rounded-lg border border-dashed border-slate-100/35 px-2 py-1 font-medium opacity-30">
    <span className="text-xs text-white">+ Add tag</span>
  </div>
);

// The tags container with drag-and-drop functionality
export const TagsContainer = () => {
  const [tags, setTags] = useState([
    { id: 1, icon: DraftingCompass, text: "new design" },
    { id: 2, icon: Save, text: "save money" },
    { id: 3, icon: Zap, text: "fast workflow" },
    { id: 4, icon: Star, text: "premium features" }
  ]);
  
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragEnd = (index) => {
    if (draggedIndex !== null) {
      // Reorder tags if needed
      const newTags = [...tags];
      const draggedTag = newTags[draggedIndex];
      
      // Remove the dragged item
      newTags.splice(draggedIndex, 1);
      // Insert it at the new position
      newTags.splice(index, 0, draggedTag);
      
      setTags(newTags);
      setDraggedIndex(null);
    }
  };

  return (
    <div className="mt-1 flex w-full flex-wrap gap-2">
      <AnimatePresence>
        {tags.map((tag, index) => (
          <Tag
            key={tag.id}
            icon={tag.icon}
            text={tag.text}
            index={index}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </AnimatePresence>
      <EmptyTag />
    </div>
  );
};

// PortfolioCard.jsx
export const ThirdCard = () => {
  return (
    <div className="relative flex size-full select-none flex-col items-start justify-start gap-3 rounded-lg border-slate-700/25 bg-gradient-to-tl from-slate-500/40 to-transparent p-px">
      <div className="group relative flex size-full select-none flex-col items-start justify-start overflow-hidden rounded-[calc(0.45rem-0.3px)] border border-slate-200 bg-gradient-to-br from-[#020406] via-[#03111a] to-[#0c313f] bg-bottom p-2 transition duration-500 hover:border-slate-300 dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800">
        <div className="bg-primary/40 absolute -right-11 -top-11 flex size-60 rounded-full blur-[100px]" />

        <div className="z-10 mt-4 flex items-center justify-start gap-2 px-2 text-sm text-slate-500 dark:text-slate-200">
          <div className="z-10 flex size-full flex-col items-start justify-end gap-2">
            <h1 className="text-balance text-xl font-semibold capitalize text-slate-50 dark:text-slate-100">
              Flexible Design Solutions That Adapt To You
            </h1>
            <p className="text-sm font-medium leading-relaxed text-slate-200 dark:text-slate-200/30">
              Transform your ideas into reality with customizable design services .
            </p>
            
            <TagsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};