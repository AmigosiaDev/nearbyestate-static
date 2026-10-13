import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'resend-contact-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if ((req.url === '/api/contact' || req.url === '/api/contact.php') && req.method === 'POST') {
              let body = ''
              req.on('data', chunk => { body += chunk })
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body)
                  const { fullName, phoneNumber, emailAddress, enquiryType, message } = data

                  if (!fullName || !phoneNumber || !message) {
                    res.statusCode = 422
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: 'Please fill in all required fields.' }))
                    return
                  }

                  if (!/^[a-zA-Z\s]+$/.test(fullName)) {
                    res.statusCode = 422
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: 'Full Name can only contain letters.' }))
                    return
                  }

                  if (!/^\d+$/.test(phoneNumber) || phoneNumber.length < 7) {
                    res.statusCode = 422
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: 'Phone Number can only contain numbers (min 7 digits).' }))
                    return
                  }

                  if (emailAddress && (!emailAddress.includes('@') || !emailAddress.includes('.') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress))) {
                    res.statusCode = 422
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: 'Email must contain @ and a valid domain.' }))
                    return
                  }

                  if (message.length > 50) {
                    res.statusCode = 422
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: 'Message cannot exceed 50 characters.' }))
                    return
                  }

                  const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY
                  const toEmail = env.CONTACT_NOTIFICATION_EMAIL || process.env.CONTACT_NOTIFICATION_EMAIL || 'sayyidnishasns200@gmail.com'

                  if (!apiKey) {
                    res.statusCode = 500
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: 'RESEND_API_KEY is not defined in .env' }))
                    return
                  }

                  const emailHtml = `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                      <div style="background: #071F17; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
                        <h2 style="color: #00D084; margin: 0; font-size: 20px;">New Property Enquiry</h2>
                        <p style="color: #cbd5e1; margin: 6px 0 0; font-size: 13px;">Received via NearbyEstate Landing Page</p>
                      </div>

                      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569; width: 35%;">Full Name:</td>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${fullName}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Phone Number:</td>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="tel:${phoneNumber}" style="color: #0F382C; font-weight: bold;">${phoneNumber}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Email Address:</td>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${emailAddress ? `<a href="mailto:${emailAddress}" style="color: #0F382C;">${emailAddress}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Enquiry Type:</td>
                          <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0F382C; font-weight: bold;"><span style="background: #e6f9f2; color: #0A543C; padding: 4px 10px; border-radius: 6px;">${enquiryType}</span></td>
                        </tr>
                      </table>

                      <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #00D084; margin-bottom: 24px;">
                        <strong style="color: #334155; font-size: 13px; display: block; margin-bottom: 6px;">Message:</strong>
                        <p style="color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</p>
                      </div>

                      <div style="text-align: center; color: #94a3b8; font-size: 11px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
                        NearbyEstate Notification System • Direct Connection Platform
                      </div>
                    </div>
                  `

                  const response = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${apiKey}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      from: 'NearbyEstate <onboarding@resend.dev>',
                      to: [toEmail],
                      subject: `New Enquiry: ${enquiryType} - ${fullName}`,
                      html: emailHtml,
                    }),
                  })

                  const resData = (await response.json()) as any
                  if (!response.ok) {
                    res.statusCode = response.status
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: resData.message || 'Failed to send via Resend' }))
                    return
                  }

                  res.statusCode = 200
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ success: true, id: resData.id }))
                } catch (err: any) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: err.message || 'Internal server error' }))
                }
              })
              return
            }
            next()
          })
        }
      }
    ],
    server: {
      host: true,
      port: 5174,
      allowedHosts: true,
    },
  }
})
