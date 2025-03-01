import { useState } from 'react'
import { supabase } from '../supabase/config'

export default function VisitorForm() {
  const [fullName, setFullName] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    try {
      const { error } = await supabase
        .from('visitors')
        .insert([{ full_name: fullName }])

      if (error) throw error

      setMessage('Thanks for visiting!')
      setFullName('')
    } catch (error) {
      console.error('Error:', error)
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="visitor-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  )
} 