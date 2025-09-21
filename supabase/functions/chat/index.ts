import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, context } = await req.json()

    // Try to call Google Gemini API
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')
    
    let response = ''
    
    if (geminiApiKey) {
      try {
        const geminiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `You are SakhaSahayak AI, a helpful assistant for Uttarakhand tourism and safety. You are currently on the ${context?.page || 'website'} page. Provide helpful, accurate information about tourism, safety, weather, and emergency services in Uttarakhand. User asks: ${message}`
                }]
              }]
            })
          }
        )

        if (geminiResponse.ok) {
          const data = await geminiResponse.json()
          response = data.candidates[0].content.parts[0].text
        }
      } catch (error) {
        console.error('Gemini API error:', error)
      }
    }

    // Fallback responses if API fails or no key
    if (!response) {
      const fallbackResponses = {
        tourism: "I can help you with tourism information for Uttarakhand! You can explore places like Rishikesh, Nainital, Mussoorie, and many more. What specific destination are you interested in?",
        safety: "For safety information, I recommend checking weather conditions, carrying emergency contacts, and informing someone about your travel plans. Do you need specific safety tips for any location?",
        weather: "Weather in Uttarakhand varies by season and altitude. Monsoon (July-September) can cause landslides. Winter brings snow to higher altitudes. Which area are you planning to visit?",
        emergency: "For emergencies, call 112 (All emergencies), 108 (Ambulance), or 100 (Police). Tourist helpline: 1363. Do you need specific emergency information for any location?",
        default: `You are currently on the ${context?.page || 'website'} page. I'm here to help with tourism and safety information for Uttarakhand. You can ask me about destinations, hotels, weather, emergency contacts, or safety tips. What would you like to know?`
      }
      
      const lowerMessage = message.toLowerCase()
      if (lowerMessage.includes('place') || lowerMessage.includes('visit') || lowerMessage.includes('tourism')) {
        response = fallbackResponses.tourism
      } else if (lowerMessage.includes('safety') || lowerMessage.includes('safe')) {
        response = fallbackResponses.safety
      } else if (lowerMessage.includes('weather') || lowerMessage.includes('rain')) {
        response = fallbackResponses.weather
      } else if (lowerMessage.includes('emergency') || lowerMessage.includes('help')) {
        response = fallbackResponses.emergency
      } else {
        response = fallbackResponses.default
      }
    }

    return new Response(
      JSON.stringify({ response }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})