import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Room type mapping for better display
const roomTypeNames = {
  'deluxe': 'Standard Suite',
  'regular': 'Regular Suite', 
  'executive': 'Executive Suite',
  'royal': 'Royal Suite',
  'apartment': 'Apartment Suite',
  'vip': 'VIP Lounge'
}

const roomPrices = {
  'deluxe': 'N45,000/night',
  'regular': 'N55,000/night',
  'executive': 'N60,000/night', 
  'royal': 'N80,000/night',
  'apartment': 'N200,000/night',
  'vip': 'N230,000/night'
}

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Calculate number of nights
    const checkIn = new Date(data.checkIn)
    const checkOut = new Date(data.checkOut)
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
    
    // Calculate total price
    const pricePerNight = roomPrices[data.roomType]?.replace(/[^\d]/g, '') || '0'
    const totalPrice = parseInt(pricePerNight) * nights
    
    const emailContent = `
🏨 NEW HOTEL RESERVATION REQUEST

📅 RESERVATION DETAILS:
• Check-In Date: ${checkIn.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}
• Check-Out Date: ${checkOut.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}
• Number of Nights: ${nights}
• Number of Guests: ${data.guests}
• Room Type: ${roomTypeNames[data.roomType] || data.roomType}
• Price per Night: ${roomPrices[data.roomType] || 'N/A'}
• Total Estimated Cost: N${totalPrice.toLocaleString()}

👤 GUEST INFORMATION:
• Full Name: ${data.firstName} ${data.lastName}
• Email: ${data.email}
• Phone: ${data.phone}

📝 SPECIAL REQUESTS:
${data.specialRequests || 'None specified'}

---
📧 This reservation was submitted from the Hotel Haven website.
⏰ Submitted at: ${new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  })}
    `.trim()

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Hotel Haven <onboarding@resend.dev>',
      to: ['somto565@gmail.com'],
      subject: `🏨 New Reservation Request - ${data.firstName} ${data.lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #d4af37; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🏨 Hotel Haven</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">New Reservation Request</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            
            <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 10px; margin-bottom: 20px;">📅 Reservation Details</h2>
            
            <div style="margin-bottom: 25px;">
              <p style="margin: 8px 0; color: #555;"><strong>Check-In Date:</strong> ${checkIn.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Check-Out Date:</strong> ${checkOut.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Number of Nights:</strong> ${nights}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Number of Guests:</strong> ${data.guests}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Room Type:</strong> ${roomTypeNames[data.roomType] || data.roomType}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Price per Night:</strong> ${roomPrices[data.roomType] || 'N/A'}</p>
              <p style="margin: 8px 0; color: #d4af37; font-size: 18px;"><strong>Total Estimated Cost:</strong> N${totalPrice.toLocaleString()}</p>
            </div>

            <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 10px; margin-bottom: 20px;">👤 Guest Information</h2>
            
            <div style="margin-bottom: 25px;">
              <p style="margin: 8px 0; color: #555;"><strong>Full Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #d4af37;">${data.email}</a></p>
              <p style="margin: 8px 0; color: #555;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #d4af37;">${data.phone}</a></p>
            </div>

            ${data.specialRequests ? `
            <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 10px; margin-bottom: 20px;">📝 Special Requests</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
              <p style="margin: 0; color: #555; line-height: 1.6;">${data.specialRequests}</p>
            </div>
            ` : ''}

            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #d4af37; margin-top: 30px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                📧 This reservation was submitted from the Hotel Haven website<br>
                ⏰ Submitted at: ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
            </div>
          </div>
        </div>
      `
    })

    

    console.log('=== EMAIL SENT ===')
    console.log('Email ID:', emailResponse.data?.id)
    console.log('Recipient: somto565@gmail.com')
    console.log('Subject:', `New Reservation Request - ${data.firstName} ${data.lastName}`)
    console.log('==================')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Reservation received and email sent successfully',
      emailId: emailResponse.data?.id
    })
  } catch (error) {
    console.error('Error processing reservation:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process reservation' },
      { status: 500 }
    )
  }
}
