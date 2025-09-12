export interface Hotel {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: 'budget' | 'mid-range' | 'luxury';
  amenities: string[];
  reviews: Array<{
    user: string;
    rating: number;
    comment: string;
  }>;
  location: string;
}

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  reviews: Array<{
    user: string;
    rating: number;
    comment: string;
  }>;
  specialties: string[];
  location: string;
}

export const accommodations = {
  hotels: [
    {
      id: 1,
      name: "The Himalayan Resort",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      price: 8500,
      rating: 4.8,
      category: 'luxury' as const,
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Spa', 'Room Service'],
      reviews: [
        { user: "Rajesh Kumar", rating: 5, comment: "Excellent mountain views and top-notch service!" },
        { user: "Priya Sharma", rating: 4, comment: "Beautiful location, great for families." }
      ],
      location: "Mussoorie"
    },
    {
      id: 2,
      name: "Valley View Hotel",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      price: 4500,
      rating: 4.5,
      category: 'mid-range' as const,
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Garden'],
      reviews: [
        { user: "Amit Singh", rating: 4, comment: "Good value for money with nice valley views." },
        { user: "Neha Gupta", rating: 5, comment: "Clean rooms and friendly staff." }
      ],
      location: "Nainital"
    },
    {
      id: 3,
      name: "Mountain Lodge",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
      price: 2800,
      rating: 4.2,
      category: 'budget' as const,
      amenities: ['WiFi', 'Parking', 'Restaurant'],
      reviews: [
        { user: "Vikram Joshi", rating: 4, comment: "Simple but comfortable stay." },
        { user: "Sunita Devi", rating: 4, comment: "Good location near the market." }
      ],
      location: "Rishikesh"
    },
    {
      id: 4,
      name: "Ganga View Resort",
      image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
      price: 6200,
      rating: 4.6,
      category: 'luxury' as const,
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Spa', 'Yoga Center', 'River View'],
      reviews: [
        { user: "Deepak Mehta", rating: 5, comment: "Perfect for spiritual retreat with Ganga views." },
        { user: "Kavita Rani", rating: 4, comment: "Peaceful location with excellent yoga facilities." }
      ],
      location: "Haridwar"
    },
    {
      id: 5,
      name: "Pine Forest Hotel",
      image: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg",
      price: 3500,
      rating: 4.3,
      category: 'mid-range' as const,
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Bonfire'],
      reviews: [
        { user: "Rohit Sharma", rating: 4, comment: "Great for nature lovers, surrounded by pine trees." },
        { user: "Meera Jain", rating: 4, comment: "Cozy atmosphere and good food." }
      ],
      location: "Almora"
    },
    {
      id: 6,
      name: "Budget Inn Dehradun",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      price: 1800,
      rating: 3.9,
      category: 'budget' as const,
      amenities: ['WiFi', 'Parking'],
      reviews: [
        { user: "Suresh Kumar", rating: 4, comment: "Basic but clean accommodation." },
        { user: "Anita Singh", rating: 3, comment: "Good for budget travelers." }
      ],
      location: "Dehradun"
    },
    {
      id: 7,
      name: "Luxury Mountain Retreat",
      image: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg",
      price: 12000,
      rating: 4.9,
      category: 'luxury' as const,
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Spa', 'Pool', 'Butler Service', 'Helicopter Pad'],
      reviews: [
        { user: "Arjun Kapoor", rating: 5, comment: "Ultimate luxury experience in the mountains!" },
        { user: "Ritu Agarwal", rating: 5, comment: "Exceptional service and breathtaking views." }
      ],
      location: "Auli"
    },
    {
      id: 8,
      name: "Riverside Cottage",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      price: 3800,
      rating: 4.4,
      category: 'mid-range' as const,
      amenities: ['WiFi', 'Parking', 'Restaurant', 'River Access', 'Adventure Sports'],
      reviews: [
        { user: "Manish Tiwari", rating: 4, comment: "Perfect for adventure enthusiasts." },
        { user: "Pooja Verma", rating: 5, comment: "Beautiful riverside location with great activities." }
      ],
      location: "Jim Corbett"
    }
  ],
  restaurants: [
    {
      id: 1,
      name: "Himalayan Spice",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      cuisine: "Indian",
      priceRange: "₹₹₹",
      price: 800,
      rating: 4.7,
      reviews: [
        { user: "Ravi Kumar", rating: 5, comment: "Authentic Garhwali cuisine with amazing mountain views!" },
        { user: "Sita Devi", rating: 4, comment: "Great local dishes and warm hospitality." }
      ],
      specialties: ["Garhwali Thali", "Kafuli", "Chainsoo"],
      location: "Mussoorie"
    },
    {
      id: 2,
      name: "Dragon Palace",
      image: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg",
      cuisine: "Chinese",
      priceRange: "₹₹",
      price: 500,
      rating: 4.4,
      reviews: [
        { user: "Amit Singh", rating: 4, comment: "Good Chinese food with reasonable prices." },
        { user: "Priya Sharma", rating: 4, comment: "Fresh ingredients and quick service." }
      ],
      specialties: ["Hakka Noodles", "Manchurian", "Sweet & Sour"],
      location: "Nainital"
    },
    {
      id: 3,
      name: "Bella Vista",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      cuisine: "Italian",
      priceRange: "₹₹₹",
      price: 1200,
      rating: 4.6,
      reviews: [
        { user: "Deepak Mehta", rating: 5, comment: "Excellent pasta and pizza with mountain views." },
        { user: "Neha Gupta", rating: 4, comment: "Authentic Italian flavors in the hills." }
      ],
      specialties: ["Wood-fired Pizza", "Pasta Carbonara", "Tiramisu"],
      location: "Mussoorie"
    },
    {
      id: 4,
      name: "Ganga Café",
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
      cuisine: "Continental",
      priceRange: "₹₹",
      price: 600,
      rating: 4.3,
      reviews: [
        { user: "Vikram Joshi", rating: 4, comment: "Peaceful riverside dining with healthy options." },
        { user: "Kavita Rani", rating: 4, comment: "Great for breakfast and organic food lovers." }
      ],
      specialties: ["Organic Salads", "Fresh Juices", "Continental Breakfast"],
      location: "Rishikesh"
    },
    {
      id: 5,
      name: "Spice Garden",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      cuisine: "Indian",
      priceRange: "₹₹",
      price: 450,
      rating: 4.5,
      reviews: [
        { user: "Sunita Devi", rating: 5, comment: "Delicious North Indian food with generous portions." },
        { user: "Rohit Sharma", rating: 4, comment: "Great value for money and tasty curries." }
      ],
      specialties: ["Butter Chicken", "Dal Makhani", "Naan"],
      location: "Dehradun"
    },
    {
      id: 6,
      name: "Mountain View Dhaba",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
      cuisine: "Punjabi",
      priceRange: "₹",
      price: 300,
      rating: 4.2,
      reviews: [
        { user: "Manish Tiwari", rating: 4, comment: "Authentic dhaba experience with hearty meals." },
        { user: "Meera Jain", rating: 4, comment: "Simple but delicious Punjabi food." }
      ],
      specialties: ["Rajma Chawal", "Chole Bhature", "Lassi"],
      location: "Almora"
    },
    {
      id: 7,
      name: "The Royal Kitchen",
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg",
      cuisine: "Multi-cuisine",
      priceRange: "₹₹₹₹",
      price: 2000,
      rating: 4.8,
      reviews: [
        { user: "Arjun Kapoor", rating: 5, comment: "Fine dining experience with impeccable service." },
        { user: "Ritu Agarwal", rating: 5, comment: "Exquisite food presentation and flavors." }
      ],
      specialties: ["Tandoori Platter", "Continental Fusion", "Dessert Selection"],
      location: "Auli"
    },
    {
      id: 8,
      name: "Forest Café",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      cuisine: "Organic",
      priceRange: "₹₹",
      price: 550,
      rating: 4.4,
      reviews: [
        { user: "Pooja Verma", rating: 4, comment: "Fresh organic ingredients and eco-friendly dining." },
        { user: "Suresh Kumar", rating: 4, comment: "Healthy options with great forest ambiance." }
      ],
      specialties: ["Organic Salads", "Herbal Teas", "Farm-to-Table Meals"],
      location: "Jim Corbett"
    }
  ]
};