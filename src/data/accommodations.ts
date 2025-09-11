export const accommodations = {
  hotels: [
    {
      id: 1,
      name: "The Himalayan Heritage Resort",
      location: "Rishikesh",
      type: "resort",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹4,500",
      priceRange: "luxury",
      rating: 4.8,
      description: "Luxury resort with river views, spa services, and yoga facilities. Perfect for spiritual retreats and relaxation.",
      amenities: ["Free WiFi", "Spa", "Restaurant", "River View", "Yoga Center", "Pool"],
      reviews: [
        { user: "Priya S.", rating: 5, comment: "Amazing river views and excellent spa services!" },
        { user: "Raj K.", rating: 4, comment: "Perfect for yoga retreats, very peaceful atmosphere." }
      ]
    },
    {
      id: 2,
      name: "Hotel Snow View Palace",
      location: "Nainital",
      type: "hotel",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹2,800",
      priceRange: "mid",
      rating: 4.5,
      description: "Comfortable hotel overlooking Naini Lake with modern amenities and easy access to Mall Road shopping.",
      amenities: ["Free WiFi", "Restaurant", "Room Service", "Lake View", "Parking"],
      reviews: [
        { user: "Amit T.", rating: 4, comment: "Great lake views and convenient location near Mall Road." },
        { user: "Sneha M.", rating: 5, comment: "Excellent service and beautiful rooms with lake view." }
      ]
    },
    {
      id: 3,
      name: "Mountain Homestay Delight",
      location: "Mussoorie",
      type: "homestay",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹1,800",
      priceRange: "budget",
      rating: 4.3,
      description: "Cozy homestay with authentic Garhwali cuisine and warm hospitality. Experience local culture and traditions.",
      amenities: ["Home Cooked Meals", "Local Guide", "Garden", "Mountain View", "WiFi"],
      reviews: [
        { user: "Kavita R.", rating: 4, comment: "Authentic local experience with delicious home-cooked food." },
        { user: "Vikram P.", rating: 4, comment: "Warm hospitality and great mountain views from the garden." }
      ]
    },
    {
      id: 4,
      name: "Corbett Wildlife Resort",
      location: "Jim Corbett",
      type: "resort",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹6,200",
      priceRange: "luxury",
      rating: 4.7,
      description: "Eco-friendly resort inside the national park offering wildlife safaris and nature experiences.",
      amenities: ["Safari Package", "Restaurant", "Nature Walks", "Bonfire", "Wildlife Library"],
      reviews: [
        { user: "Rohit S.", rating: 5, comment: "Amazing wildlife experience! Saw tigers on the safari." },
        { user: "Meera J.", rating: 4, comment: "Great eco-friendly resort with knowledgeable guides." }
      ]
    },
    {
      id: 5,
      name: "Budget Lodge Haridwar",
      location: "Haridwar",
      type: "lodge",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹1,200",
      priceRange: "budget",
      rating: 4.1,
      description: "Simple and clean accommodation near Har Ki Pauri with basic amenities for pilgrims and budget travelers.",
      amenities: ["Clean Rooms", "AC", "Hot Water", "Near Temple", "24/7 Reception"],
      reviews: [
        { user: "Ramesh K.", rating: 4, comment: "Clean and affordable, perfect for pilgrimage stay." },
        { user: "Sunita D.", rating: 4, comment: "Good location near Har Ki Pauri, basic but comfortable." }
      ]
    },
    {
      id: 6,
      name: "Alpine Ski Resort Auli",
      location: "Auli",
      type: "resort",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹5,800",
      priceRange: "luxury",
      rating: 4.6,
      description: "Premium ski resort with slope access, equipment rental, and panoramic mountain views.",
      amenities: ["Ski Equipment", "Slope Access", "Restaurant", "Heater", "Mountain View", "Equipment Storage"],
      reviews: [
        { user: "Arjun M.", rating: 5, comment: "Perfect skiing experience with professional equipment and slopes." },
        { user: "Pooja L.", rating: 4, comment: "Beautiful mountain views and excellent skiing facilities." }
      ]
    },
    {
      id: 7,
      name: "Lake View Resort Nainital",
      location: "Nainital",
      type: "resort",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹3,500",
      priceRange: "mid",
      rating: 4.4,
      description: "Beautiful resort with direct lake access, boating facilities, and mountain views.",
      amenities: ["Lake Access", "Boating", "Restaurant", "WiFi", "Mountain View", "Garden"],
      reviews: [
        { user: "Deepak S.", rating: 4, comment: "Great lake access and peaceful environment." },
        { user: "Anita R.", rating: 5, comment: "Perfect for family vacation with beautiful lake views." }
      ]
    },
    {
      id: 8,
      name: "Heritage Palace Mussoorie",
      location: "Mussoorie",
      type: "hotel",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹4,200",
      priceRange: "luxury",
      rating: 4.7,
      description: "Colonial-era heritage hotel with vintage charm, modern amenities, and panoramic valley views.",
      amenities: ["Heritage Architecture", "Valley View", "Restaurant", "WiFi", "Room Service", "Parking"],
      reviews: [
        { user: "Sanjay T.", rating: 5, comment: "Beautiful heritage property with excellent service." },
        { user: "Ritu K.", rating: 4, comment: "Charming colonial architecture and great valley views." }
      ]
    }
    }
  ],
  restaurants: [
    {
      id: 1,
      name: "Ganga View Restaurant",
      location: "Rishikesh",
      type: "Multi-Cuisine",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹400-800",
      priceRange: "mid",
      rating: 4.6,
      description: "Rooftop restaurant with stunning Ganga views serving North Indian, Continental, and local Garhwali dishes.",
      specialties: ["River View Dining", "Garhwali Thali", "Fresh Trout", "Organic Vegetables"],
      reviews: [
        { user: "Rahul M.", rating: 5, comment: "Amazing river views and delicious Garhwali thali!" },
        { user: "Priya S.", rating: 4, comment: "Great ambiance and fresh trout preparations." }
      ]
    },
    {
      id: 2,
      name: "Boat House Club Restaurant",
      location: "Nainital",
      type: "Continental",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹600-1200",
      priceRange: "luxury",
      rating: 4.7,
      description: "Elegant lakeside dining with continental cuisine, fresh trout preparations, and romantic ambiance.",
      specialties: ["Lake View", "Fresh Trout", "Continental Menu", "Wine Selection"],
      reviews: [
        { user: "Amit K.", rating: 5, comment: "Perfect romantic dinner spot with excellent trout dishes." },
        { user: "Neha P.", rating: 4, comment: "Beautiful lake views and great continental food." }
      ]
    },
    {
      id: 3,
      name: "Mall Road Cafe",
      location: "Mussoorie",
      type: "Cafe",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹200-500",
      priceRange: "budget",
      rating: 4.2,
      description: "Charming cafe on Mall Road serving hot beverages, sandwiches, and local snacks with mountain views.",
      specialties: ["Mountain View", "Hot Coffee", "Local Snacks", "Sandwiches"],
      reviews: [
        { user: "Vikash T.", rating: 4, comment: "Great coffee and perfect spot for people watching on Mall Road." },
        { user: "Anjali R.", rating: 4, comment: "Cozy atmosphere with good mountain views." }
      ]
    },
    {
      id: 4,
      name: "Dhaba Junction",
      location: "Haridwar",
      type: "Indian",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹300-600",
      priceRange: "budget",
      rating: 4.4,
      description: "Authentic Punjabi dhaba serving traditional Indian cuisine with generous portions and local flavors.",
      specialties: ["Punjabi Cuisine", "Dal Makhani", "Fresh Rotis", "Lassi"],
      reviews: [
        { user: "Harpreet S.", rating: 5, comment: "Authentic Punjabi flavors and generous portions!" },
        { user: "Ravi D.", rating: 4, comment: "Best dal makhani in Haridwar, very reasonable prices." }
      ]
    },
    {
      id: 5,
      name: "The Corbett Machan",
      location: "Jim Corbett",
      type: "Multi-Cuisine",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹800-1500",
      priceRange: "luxury",
      rating: 4.8,
      description: "Tree-house style restaurant in the forest offering organic farm-to-table dining with wildlife ambiance.",
      specialties: ["Tree House Dining", "Organic Food", "Wildlife Views", "Farm Fresh"],
      reviews: [
        { user: "Rohit J.", rating: 5, comment: "Unique tree-house dining experience with amazing organic food!" },
        { user: "Meera L.", rating: 5, comment: "Perfect jungle ambiance and fresh farm-to-table meals." }
      ]
    },
    {
      id: 6,
      name: "Himalayan Treats",
      location: "Auli",
      type: "Local Cuisine",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹400-700",
      priceRange: "mid",
      rating: 4.3,
      description: "Cozy restaurant specializing in local Kumaoni and Garhwali cuisine with warm interiors and mountain views.",
      specialties: ["Kumaoni Cuisine", "Mandua Roti", "Local Vegetables", "Mountain Herbs"],
      reviews: [
        { user: "Sunita M.", rating: 4, comment: "Authentic local cuisine with fresh mountain herbs." },
        { user: "Deepak K.", rating: 4, comment: "Great mandua roti and local vegetable preparations." }
      ]
    },
    {
      id: 7,
      name: "Spice Garden Chinese",
      location: "Dehradun",
      type: "Chinese",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹500-900",
      priceRange: "mid",
      rating: 4.5,
      description: "Popular Chinese restaurant serving authentic Szechuan and Cantonese dishes with modern ambiance.",
      specialties: ["Szechuan Cuisine", "Dim Sum", "Hot Pot", "Noodles"],
      reviews: [
        { user: "Arjun P.", rating: 5, comment: "Best Chinese food in Dehradun, authentic flavors!" },
        { user: "Kavya S.", rating: 4, comment: "Great dim sum and excellent hot pot varieties." }
      ]
    },
    {
      id: 8,
      name: "Bella Vista Italian",
      location: "Nainital",
      type: "Italian",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹700-1200",
      priceRange: "luxury",
      rating: 4.6,
      description: "Upscale Italian restaurant with lake views, serving authentic pasta, pizza, and Italian wines.",
      specialties: ["Wood-fired Pizza", "Fresh Pasta", "Italian Wines", "Tiramisu"],
      reviews: [
        { user: "Marco R.", rating: 5, comment: "Authentic Italian flavors with beautiful lake views!" },
        { user: "Simran K.", rating: 4, comment: "Excellent wood-fired pizza and fresh pasta dishes." }
      ]
    }
  ]
};