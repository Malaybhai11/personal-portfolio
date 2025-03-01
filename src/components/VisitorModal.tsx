import { useState } from 'react'
import { supabase } from '../supabase/config'

interface VisitorModalProps {
  isOpen: boolean;
  onSubmitSuccess: () => void;
}

export default function VisitorModal({ isOpen, onSubmitSuccess }: VisitorModalProps) {
  const [fullName, setFullName] = useState('')
  const [shake, setShake] = useState(false)

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const { error } = await supabase
        .from('visitors')
        .insert([{ full_name: fullName }])

      if (error) throw error
      
      // Call the success handler to close modal and show main content
      onSubmitSuccess()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  function handleOverlayClick() {
    setShake(true)
    setTimeout(() => setShake(false), 820) // Reset after animation
  }

  return (
    <div 
      className="modal-overlay"
      onClick={handleOverlayClick}
    >
      <div 
        className={`modal-content ${shake ? 'shake' : ''}`}
        onClick={e => e.stopPropagation()} // Prevent click from reaching overlay
      >
        <h2>Welcome!</h2>
        <p>Please enter your name to continue</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className={shake ? 'error' : ''}
            required
          />
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  )
} 