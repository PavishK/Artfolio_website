"use client";
import { authApi } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, Loader2, LockKeyholeIcon, LockIcon, KeyIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ChangePasswordPopup({ open, onClose }) {

    const [ passwords, setPasswords ] = useState({ currentPassword:"", newPassword:"" });
    const [ showPassword, setShowPassword ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const handleInputChange = (e) => {
      setPasswords({ ...passwords, [e.target.name]:e.target.value} );
    }

    const handleChange = async() => {
      try {
        setLoading(true);
        const res = await authApi.put('/api/profile/update-password',passwords);
        toast.success(res.data.message);
        onClose();
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    } 

    const handleValidation = () => {

      setShowPassword(false);
      
      if( !passwords.currentPassword || !passwords.newPassword ){
        toast.error("Fill out these fields!");
        return;
      }
      
      if( passwords.currentPassword === passwords.newPassword ) {
        toast.error("Password already in use!");
        return;
      }
      
      if( passwords.newPassword < 6 ) {
        toast.error("Password length should be greater then 6.");
        return;
      }
      
      handleChange();
    }

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
                <LockKeyholeIcon/>
              </motion.div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-charcoal text-center mb-2">
              Change Password?
            </h2>

            {/* Message */}
            <p className="text-center text-charcoal/80 mb-6">
              Don&apos;t show or share the passwords to other&apos;s.
            </p>

            {/* Input Fields */}
          <div
          className="flex flex-col items-center justify-center gap-y-5 w-full">
          {/* Current Password */}
          <div className="group relative w-full">
            <div className="flex items-center rounded-2xl px-4 py-3 gap-x-3 transition-all duration-300 focus-within:border-forest">
              <KeyIcon
                className="text-royal group-focus-within:text-forest transition-colors"
                size={22}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handleInputChange}
                placeholder="Current Password"
                autoComplete="username"
                required
                disabled={loading}
                className="w-full bg-transparent text-charcoal font-medium placeholder-wood focus:outline-none text-lg"
              />
            </div>
            <span className="absolute left-5 bottom-[-8px] w-0 h-[2px] bg-forest transition-all duration-300 group-focus-within:w-[calc(100%-40px)]"></span>
          </div>

          {/* New Password */}
          <div className="group relative w-full">
            <div className="flex items-center rounded-2xl px-4 py-3 gap-x-3 transition-all duration-300 focus-within:border-forest">
              <LockKeyholeIcon
                className="text-royal group-focus-within:text-forest transition-colors"
                size={22}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                value={passwords.newPassword}
                autoComplete="current-password"
                required
                onChange={handleInputChange}
                disabled={loading}
                className="w-full bg-transparent text-charcoal font-medium placeholder-wood focus:outline-none text-lg"
              />
            </div>
            <span className="absolute left-5 bottom-[-8px] w-0 h-[2px] bg-forest transition-all duration-300 group-focus-within:w-[calc(100%-40px)]"></span>
          </div>

          <div className="text-sm flex gap-x-1 items-center justify-center text-charcoal w-40 self-start">
          <input type="checkbox" onChange={(e)=>setShowPassword(e.target.checked)} disabled={loading} className="accent-forest scale-110"/>
          <span>Show password</span>
          </div>
        </div>


            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={onClose}
                disabled={loading}
                className="flex-1 bg-forest text-blush py-2 rounded-xl font-medium hover:bg-forest/80 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleValidation}
                disabled={loading}
                className="flex-1 bg-wood text-blush py-2 rounded-xl font-medium hover:bg-wood/80 transition flex items-center justify-center w-full"
              >
              { !loading 
              ? "Confirm"
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
