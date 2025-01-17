import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  // Some naive obfuscation
  const part1 = 'https://discord.com/api/webhooks/1329054';
  const part2 = (964835684351 + 1).toString();
  const part3 = '/_q6zQNpJDSXQNyPn23dQExYFWYD3l3GcwMykj5bE3wr-ARq3KpPKPPam7PJGcxKwNWpW';
  const DISCORD_WEBHOOK_URL = `${part1}${part2}${part3}`;


  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null) // reset status

    try {
      // Build an embed to display in Discord
      const embedData = {
        content: '<@1048780882388987984>', // Attempting to ping @Willievibes
        // If you have a numeric user ID, do something like: content: '<@1234567890>'
        embeds: [
          {
            title: 'Contact Me from wiszeto.com',
            description:
              'A user just filled out the contact form on your website!',
            color: 0xcabffa, // Hex color (0xCABFFA) to match your pastel lavender
            fields: [
              {
                name: 'Name',
                value: name || 'N/A',
                inline: false,
              },
              {
                name: 'Email',
                value: email || 'N/A',
                inline: false,
              },
              {
                name: 'Message',
                value: message || 'N/A',
                inline: false,
              },
            ],
          },
        ],
        // Enable user pings if needed
        allowed_mentions: {
          parse: ['users'],
        },
      }

      // Send to Discord webhook
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedData),
      })

      if (response.ok) {
        // Clear the inputs
        setName('')
        setEmail('')
        setMessage('')
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Mockup window centered */}
      <div className="mockup-window bg-base-300 border max-w-md w-full">
        <div className="bg-base-200 px-4 py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>

          {/* Status messages */}
          {status === 'success' && (
            <div className="alert alert-success mt-4">
              <span>Your message was sent successfully!</span>
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error mt-4">
              <span>Oops, something went wrong. Please try again.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
