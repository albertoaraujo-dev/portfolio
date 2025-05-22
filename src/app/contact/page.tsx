'use client'

import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })

    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   })

    //   if (!response.ok) throw new Error('Failed to send message')
      
    //   setStatus('success')
    //   setFormData({ name: '', email: '', message: '' })
    // } catch {
    //   setStatus('error')
    // }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary dark:text-slate-200"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div 
          className="space-y-8"
          {...slideInLeft}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-slate-200">Get in Touch</h2>
            <p className="text-secondary dark:text-slate-400">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-secondary dark:text-slate-200" />
              <div>
                <h3 className="font-semibold text-secondary dark:text-slate-200">Email</h3>
                <a href="mailto:your.email@example.com" className="text-secondary hover:text-dark dark:text-slate-400 dark:hover:text-slate-200">
                  albertoaraujo.dev@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaWhatsapp className="h-6 w-6 text-secondary dark:text-slate-200" />
              <div>
                <h3 className="font-semibold text-secondary dark:text-slate-200">Phone</h3>
                <a href="tel:+1234567890" className="text-secondary hover:text-dark dark:text-slate-400 dark:hover:text-slate-200">
                  +55 (11) 95366-8691
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-secondary dark:text-slate-200" />
              <div>
                <h3 className="font-semibold text-secondary dark:text-slate-200">Location</h3>
                <p className="text-secondary dark:text-slate-400 dark:hover:text-slate-200">São Bernardo do Campo, SP</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
          {...slideInRight}
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary dark:text-slate-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {status === 'success' && (
              <motion.p 
                className="text-green-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p 
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
} 