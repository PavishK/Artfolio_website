"use client";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, XIcon, Loader2 } from "lucide-react";

export default function Popup({ open, onClose, func,loading, icon, title, desc, btnName }) {

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[1000]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-blush rounded-2xl shadow-xl w-[90%] max-w-sm p-6 relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              disabled={loading}
              className="absolute top-3 right-3 text-charcoal hover:text-royal"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                className="p-4 bg-royal rounded-full shadow-md"
              >
                {icon}
              </motion.div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-charcoal text-center mb-2">
              {title}
            </h2>

            {/* Message */}
            <p className="text-center text-charcoal/80 mb-6">
              {desc}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                disabled={loading}
                className="flex-1 bg-forest text-blush py-2 rounded-xl font-medium hover:bg-forest/80 transition"
              >
                Cancel
              </button>

              <button
                onClick={func}
                disabled={loading}
                className="flex-1 bg-wood text-blush py-2 rounded-xl font-medium hover:bg-wood/80 transition flex items-center justify-center w-full"
              >
              { !loading 
              ? btnName
              : <Loader2 size={24} className="self-center animate-spin"/>
              }
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      
    </AnimatePresence>
  );
}
