import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    
    const emailContent = `
New Hotel Reservation Request

Reservation Details:
- Check-In: ${new Date(data.checkIn).toLocaleDateString()}
- Check-Out: ${new Date(data.checkOut).toLocaleDateString()}
- Number of Guests: ${data.guests}
- Room Type: ${data.roomType}

Guest Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}

Special Requests:
${data.specialRequests || 'None'}

---
This reservation was submitted from the H&J Hotel website.
    `.trim()

    console.log('=== NEW RESERVATION ===')
    console.log(emailContent)
    console.log('=====================')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Reservation received successfully' 
    })
  } catch (error) {
    console.error('Error processing reservation:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process reservation' },
      { status: 500 }
    )
  }
}
