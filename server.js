const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Booking endpoint
app.post('/api/book', async (req, res) => {
  try {
    const { type, itemName, fullName, phone, email, checkIn, nights, guests, notes } = req.body;
    
    // Simulate booking processing
    const bookingId = 'BK' + Date.now();
    
    console.log('Booking received:', {
      bookingId,
      type,
      itemName,
      fullName,
      phone,
      email,
      checkIn,
      nights,
      guests,
      notes
    });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.json({
      success: true,
      bookingId,
      message: "Your booking is confirmed. We'll send you a notification with confirmation and payment link on your given number and mail.",
      details: {
        type,
        itemName,
        fullName,
        phone,
        email,
        checkIn,
        nights,
        guests
      }
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Booking failed. Please try again.'
    });
  }
});

// Chat endpoint with LLM integration
app.post('/api/chat', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    console.log('Chat request:', { message, context });
    
    let response = '';
    
    // Try OpenAI first
    if (process.env.OPENAI_API_KEY) {
      try {
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: `You are SakhaSahayak AI, a helpful assistant for Uttarakhand tourism and safety. You are currently on the ${context?.page || 'website'} page. Provide helpful, accurate information about tourism, safety, weather, and emergency services in Uttarakhand.`
              },
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: 150
          })
        });
        
        if (openaiResponse.ok) {
          const data = await openaiResponse.json();
          response = data.choices[0].message.content;
        }
      } catch (error) {
        console.error('OpenAI API error:', error);
      }
    }
    
    // Try Google Gemini if OpenAI failed
    if (!response && process.env.GEMINI_API_KEY) {
      try {
        const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are SakhaSahayak AI, a helpful assistant for Uttarakhand tourism and safety. You are currently on the ${context?.page || 'website'} page. User asks: ${message}`
              }]
            }]
          })
        });
        
        if (geminiResponse.ok) {
          const data = await geminiResponse.json();
          response = data.candidates[0].content.parts[0].text;
        }
      } catch (error) {
        console.error('Gemini API error:', error);
      }
    }
    
    // Fallback responses if no API key or API failed
    if (!response) {
      const fallbackResponses = {
        tourism: "I can help you with tourism information for Uttarakhand! You can explore places like Rishikesh, Nainital, Mussoorie, and many more. What specific destination are you interested in?",
        safety: "For safety information, I recommend checking weather conditions, carrying emergency contacts, and informing someone about your travel plans. Do you need specific safety tips for any location?",
        weather: "Weather in Uttarakhand varies by season and altitude. Monsoon (July-September) can cause landslides. Winter brings snow to higher altitudes. Which area are you planning to visit?",
        emergency: "For emergencies, call 112 (All emergencies), 108 (Ambulance), or 100 (Police). Tourist helpline: 1363. Do you need specific emergency information for any location?",
        default: `You are currently on the ${context?.page || 'website'} page. I'm here to help with tourism and safety information for Uttarakhand. You can ask me about destinations, hotels, weather, emergency contacts, or safety tips. What would you like to know?`
      };
      
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('place') || lowerMessage.includes('visit') || lowerMessage.includes('tourism')) {
        response = fallbackResponses.tourism;
      } else if (lowerMessage.includes('safety') || lowerMessage.includes('safe')) {
        response = fallbackResponses.safety;
      } else if (lowerMessage.includes('weather') || lowerMessage.includes('rain')) {
        response = fallbackResponses.weather;
      } else if (lowerMessage.includes('emergency') || lowerMessage.includes('help')) {
        response = fallbackResponses.emergency;
      } else {
        response = fallbackResponses.default;
      }
    }
    
    res.json({
      success: true,
      response,
      context: context?.page || 'website'
    });
    
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      success: false,
      response: 'Sorry, I encountered an error. Please try again.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment variables loaded:');
  console.log('- OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'Set' : 'Not set');
  console.log('- GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Set' : 'Not set');
});