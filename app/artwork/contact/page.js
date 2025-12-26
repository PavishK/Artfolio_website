"use client";

import React, { Activity, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, LocateIcon, PhoneCallIcon } from 'lucide-react';
import Link from 'next/link';
import { socials } from '@/data/links';
import CustomInput from '@/components/CustomInput';
import CustomCheckbox from '@/components/CustomCheckbox';
import toast from 'react-hot-toast';
import UploadImage from '@/components/UploadImage';
import { api } from '@/services/api';
import Spinner from '@/components/Spinner';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const contacts = [
  { icon:<MessageCircle/>, title:"Chat with us", desc:"Have a question or an idea?", link:"mailto:example@gmail.com", val:"example@gmail.com"},
  { icon:<LocateIcon/>, title:"Visit", desc:"Feel free to reach out.", link:"", val:"111 Smart Loram Loram ipsum"},
  { icon:<PhoneCallIcon/>, title:"Call", desc:"Mon-Fri from 8am to 5pm.", link:"tel:919998877652", val:"+91 999 887-7652"},
];

const reasons = [ "need art", "Art timeline", "Artwork type", "General enquiry"]

function Contact() {
  const [ contact, setContact ] = useState({ name:"", email:"", desc:""});
  const [ reason, setReason ] = useState('');
  const [ image, setImage ] = useState("");
  const [ makeLoading, setMakeLoading ] = useState(false);

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]:e.target.value });
  }

  const sendViaMail = async( data ) => {
    try {
      setMakeLoading(true);
      const res = await api.post("/api/contact", data);
      toast.success("Message received! We’ll follow up soon.")
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setMakeLoading(false);
    }
  }

  const onSubmitContact = () => {

    if( !contact.name || !contact.email || !contact.desc || !reason) {
      toast.error("Please fill out the fields!");
      return;
    }

    if( reason ==="need art" && !image) {
      toast.error("Please choose an image!");
      return;
    }

    sendViaMail({ ...contact, reason, image});
  }
  return (
    <div className='relative w-full flex flex-col bg-gradient-to-tr from-blush to-white'>

    <div className='text-black w-full flex sm:flex-row gap-y-10 flex-col-reverse items-center justify-between px-6 sm:px-12 lg:px-20 py-10 mt-12 sm:mt-10 sm:py-12 overflow-hidden'>
      
      <div className='flex-1/2 relative flex flex-col items-start justify-normal gap-y-8'>

        { contacts.map((v,i) => (
          <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover="hover"
          key={i} 
          className='flex items-start justify-normal gap-x-4'>

            <motion.div 
            initial={{ rotate:-40 }}
            whileInView={{ rotate:0 }}
            transition={{ duration: 0.8 }}
            className='bg-blush p-2 rounded-lg shadow-lg text-wood'>
              {v.icon}
            </motion.div>

            <div className='flex items-start flex-col justify-normal gap-y-1.5'>
              <div className=''>
                <h1 className='font-bold text-xl'>{v.title}</h1>
                <p className='text-charcoal/80 first-letter:capitalize'>{v.desc}</p>
              </div>
              <Link href={v.link} className='font-bold w-40'>{v.val}</Link>
            </div>

          </motion.div>
        ))}

        <ul
        className="flex items-center justify-center gap-x-5 mt-16 text-wood">
        { socials.map((v,i)=>(
          <motion.li 
          key={i}
          whileHover={{ scale: 1.1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 160 }}>
            <Link href={v.link}>{v.icon}</Link>
          </motion.li>
        ))}
        </ul>

      </div>

      <div className='w-full flex-1/2 flex flex-col items-start justify-normal gap-y-6 px-8 py-10 bg-blush rounded-xl'>
          
          <div className=' text-charcoal sm:pr-10'>
            <h1 className='text-2xl sm:text-3xl font-medium'>Need an art? Designed just for you. Let&apos;s Get Started.</h1>
            <p>Please provide valid details for further enquiry.</p>
          </div>

          <div className='w-full flex flex-col gap-y-4'>

          <CustomInput
          label={"Your name"}
            type={"text"}
            name={"name"}
            value={contact.name}
            func={handleInputChange}
          />

          <CustomInput
          label={"Your email"}
            type={"email"}
            name={"email"}
            value={contact.email}
            func={handleInputChange}
          />

          <CustomInput
          label={"Tell us a little about the need..."}
            type={"text"}
            name={"desc"}
            value={contact.desc}
            func={handleInputChange}
          />

          <CustomCheckbox
            label={"How can we help?"}
            list={reasons}
            func={(val)=>setReason(val)}
          />

          <Activity>
              { reason === "need art" &&
              <UploadImage label={"Choose image for reference"} className={"font-medium text-lg"} choosedImage={(e) => setImage(e)} />
              }
          </Activity>

          </div>
          
          <button onClick={onSubmitContact} className='w-full text-center bg-wood p-1.5 rounded-sm text-blush hover:scale-105 transition-all cursor-pointer'>
            Let&apos;s get started
          </button>

      </div>

    </div>
      
      { makeLoading && <Spinner/> }

    </div>
  )
}

export default Contact