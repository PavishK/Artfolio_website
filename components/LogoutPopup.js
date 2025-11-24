"use client";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, XIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { authApi } from "@/services/api";
import toast from "react-hot-toast";
import { useState } from "react";

export default function LogoutPopup({ open, onClose }) {
  const router = useRouter();
  const [ makeLoading, setMakeLoading ] = useState(false);

  // Logout handler
  const handleLogout = async () => {
    try {
      toast.loading("Logging out...", { id: "LogOut" });
      setMakeLoading(true);
      const res = await authApi.post(
        "/api/auth/session",
        {},
        { withCredentials: true }
      );

      toast.success(res.data.message, { id: "LogOut" });
      onClose();
      router.replace("/artwork-admin/login");
    } catch (error) {
      toast.error("Unable to logout!", { id: "LogOut" });
    } finally {
        setMakeLoading(false);
    }
  };

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
              disabled={makeLoading}
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
                <LogOut className="w-8 h-8 text-blush" />
              </motion.div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-charcoal text-center mb-2">
              Log Out?
            </h2>

            {/* Message */}
            <p className="text-center text-charcoal/80 mb-6">
              Are you sure you want to log out of your account?
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                disabled={makeLoading}
                className="flex-1 bg-forest text-blush py-2 rounded-xl font-medium hover:bg-forest/80 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                disabled={makeLoading}
                className="flex-1 bg-wood text-blush py-2 rounded-xl font-medium hover:bg-wood/80 transition flex items-center justify-center w-full"
              >
              { !makeLoading 
              ? "Log Out"
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
