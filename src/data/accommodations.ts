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
  description: string;
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
  price: number;
  description: string;
}

export const accommodations = {
  hotels: [
    {
      id: 1,
      name: "Hotel Snow View",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 2500,
      rating: 4.3,
      category: 'mid-range' as const,
      amenities: ['Free WiFi', 'Parking', 'Breakfast Included', 'Mountain View'],
      reviews: [
        { user: "Rajesh Kumar", rating: 4, comment: "Great view of the hills! Perfect location." },
        { user: "Priya Sharma", rating: 4, comment: "Clean rooms and friendly staff." }
      ],
      location: "Mussoorie",
      description: "Comfortable hotel with stunning mountain views and excellent amenities."
    },
    {
      id: 2,
      name: "Himalayan Retreat",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 4000,
      rating: 4.7,
      category: 'luxury' as const,
      amenities: ['Free WiFi', 'Lake View', 'Family Friendly', 'Restaurant', 'Spa'],
      reviews: [
        { user: "Amit Singh", rating: 5, comment: "Perfect stay by the lake. Amazing service!" },
        { user: "Neha Gupta", rating: 4, comment: "Beautiful location with great facilities." }
      ],
      location: "Nainital",
      description: "Luxury retreat offering breathtaking lake views and premium amenities."
    },
    {
      id: 3,
      name: "Mountain Lodge Rishikesh",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 1800,
      rating: 4.2,
      category: 'budget' as const,
      amenities: ['Free WiFi', 'Parking', 'River View'],
      reviews: [
        { user: "Vikram Joshi", rating: 4, comment: "Simple but comfortable stay near the Ganges." },
        { user: "Sunita Devi", rating: 4, comment: "Good value for money, peaceful location." }
      ],
      location: "Rishikesh",
      description: "Budget-friendly lodge with river views and spiritual atmosphere."
    },
    {
      id: 4,
      name: "Ganga View Resort",
      image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 6200,
      rating: 4.6,
      category: 'luxury' as const,
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Spa', 'Yoga Center', 'River View'],
      reviews: [
        { user: "Deepak Mehta", rating: 5, comment: "Perfect for spiritual retreat with Ganga views." },
        { user: "Kavita Rani", rating: 4, comment: "Peaceful location with excellent yoga facilities." }
      ],
      location: "Haridwar",
      description: "Luxury resort perfect for spiritual retreats with Ganga river views."
    },
    {
      id: 5,
      name: "Pine Forest Hotel",
      image: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 3500,
      rating: 4.3,
      category: 'mid-range' as const,
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Bonfire', 'Nature Walks'],
      reviews: [
        { user: "Rohit Sharma", rating: 4, comment: "Great for nature lovers, surrounded by pine trees." },
        { user: "Meera Jain", rating: 4, comment: "Cozy atmosphere and good food." }
      ],
      location: "Almora",
      description: "Charming hotel nestled among pine forests with nature activities."
    },
    {
      id: 6,
      name: "Budget Inn Dehradun",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 1500,
      rating: 3.9,
      category: 'budget' as const,
      amenities: ['Free WiFi', 'Parking', 'AC'],
      reviews: [
        { user: "Suresh Kumar", rating: 4, comment: "Basic but clean accommodation in city center." },
        { user: "Anita Singh", rating: 3, comment: "Good for budget travelers, convenient location." }
      ],
      location: "Dehradun",
      description: "Affordable accommodation in the heart of Dehradun city."
    },
    {
      id: 7,
      name: "Luxury Mountain Retreat",
      image: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 12000,
      rating: 4.9,
      category: 'luxury' as const,
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Spa', 'Pool', 'Butler Service', 'Helicopter Pad'],
      reviews: [
        { user: "Arjun Kapoor", rating: 5, comment: "Ultimate luxury experience in the mountains!" },
        { user: "Ritu Agarwal", rating: 5, comment: "Exceptional service and breathtaking views." }
      ],
      location: "Auli",
      description: "Ultra-luxury mountain retreat with world-class amenities and service."
    },
    {
      id: 8,
      name: "Riverside Cottage",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 3800,
      rating: 4.4,
      category: 'mid-range' as const,
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'River Access', 'Adventure Sports'],
      reviews: [
        { user: "Manish Tiwari", rating: 4, comment: "Perfect for adventure enthusiasts." },
        { user: "Pooja Verma", rating: 5, comment: "Beautiful riverside location with great activities." }
      ],
      location: "Jim Corbett",
      description: "Cozy cottage with direct river access and adventure activities."
    }
  ],
  restaurants: [
    {
      id: 1,
      name: "Pahadi Zaika",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Indian",
      priceRange: "₹300-₹600",
      price: 450,
      rating: 4.5,
      reviews: [
        { user: "Ravi Kumar", rating: 5, comment: "Authentic Garhwali thali, must try!" },
        { user: "Sita Devi", rating: 4, comment: "Great local dishes and warm hospitality." }
      ],
      specialties: ["Garhwali Thali", "Kafuli", "Chainsoo"],
      location: "Dehradun",
      description: "Authentic Garhwali cuisine with traditional flavors and local ingredients."
    },
    {
      id: 2,
      name: "Lakeview Café",
      image: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Multi-cuisine",
      priceRange: "₹500-₹900",
      price: 700,
      rating: 4.2,
      reviews: [
        { user: "Amit Singh", rating: 4, comment: "Best coffee with a lake view!" },
        { user: "Priya Sharma", rating: 4, comment: "Great ambiance and variety of food." }
      ],
      specialties: ["Coffee", "Continental Breakfast", "Lake View Dining"],
      location: "Nainital",
      description: "Multi-cuisine café offering stunning lake views and excellent coffee."
    },
    {
      id: 3,
      name: "Himalayan Spice",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Indian",
      priceRange: "₹400-₹800",
      price: 600,
      rating: 4.7,
      reviews: [
        { user: "Deepak Mehta", rating: 5, comment: "Excellent North Indian cuisine with mountain views." },
        { user: "Neha Gupta", rating: 4, comment: "Spicy and flavorful dishes, great service." }
      ],
      specialties: ["Butter Chicken", "Dal Makhani", "Tandoori Items"],
      location: "Mussoorie",
      description: "Premium Indian restaurant with authentic North Indian flavors."
    },
    {
      id: 4,
      name: "Dragon Palace",
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Chinese",
      priceRange: "₹350-₹650",
      price: 500,
      rating: 4.3,
      reviews: [
        { user: "Vikram Joshi", rating: 4, comment: "Good Chinese food with reasonable prices." },
        { user: "Kavita Rani", rating: 4, comment: "Fresh ingredients and quick service." }
      ],
      specialties: ["Hakka Noodles", "Manchurian", "Sweet & Sour"],
      location: "Rishikesh",
      description: "Popular Chinese restaurant with authentic flavors and quick service."
    },
    {
      id: 5,
      name: "Bella Vista",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Italian",
      priceRange: "₹800-₹1500",
      price: 1200,
      rating: 4.6,
      reviews: [
        { user: "Sunita Devi", rating: 5, comment: "Excellent pasta and pizza with mountain views." },
        { user: "Rohit Sharma", rating: 4, comment: "Authentic Italian flavors in the hills." }
      ],
      specialties: ["Wood-fired Pizza", "Pasta Carbonara", "Tiramisu"],
      location: "Mussoorie",
      description: "Authentic Italian restaurant with wood-fired pizzas and mountain views."
    },
    {
      id: 6,
      name: "Mountain View Dhaba",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Punjabi",
      priceRange: "₹200-₹400",
      price: 300,
      rating: 4.2,
      reviews: [
        { user: "Manish Tiwari", rating: 4, comment: "Authentic dhaba experience with hearty meals." },
        { user: "Meera Jain", rating: 4, comment: "Simple but delicious Punjabi food." }
      ],
      specialties: ["Rajma Chawal", "Chole Bhature", "Lassi"],
      location: "Almora",
      description: "Traditional dhaba serving hearty Punjabi meals with mountain views."
    },
    {
      id: 7,
      name: "The Royal Kitchen",
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Multi-cuisine",
      priceRange: "₹1500-₹3000",
      price: 2000,
      rating: 4.8,
      reviews: [
        { user: "Arjun Kapoor", rating: 5, comment: "Fine dining experience with impeccable service." },
        { user: "Ritu Agarwal", rating: 5, comment: "Exquisite food presentation and flavors." }
      ],
      specialties: ["Tandoori Platter", "Continental Fusion", "Dessert Selection"],
      location: "Auli",
      description: "Fine dining restaurant offering multi-cuisine delicacies with premium service."
    },
    {
      id: 8,
      name: "Forest Café",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      cuisine: "Organic",
      priceRange: "₹400-₹800",
      price: 550,
      rating: 4.4,
      reviews: [
        { user: "Pooja Verma", rating: 4, comment: "Fresh organic ingredients and eco-friendly dining." },
        { user: "Suresh Kumar", rating: 4, comment: "Healthy options with great forest ambiance." }
      ],
      specialties: ["Organic Salads", "Herbal Teas", "Farm-to-Table Meals"],
      location: "Jim Corbett",
      description: "Eco-friendly café serving organic meals in a beautiful forest setting."
    }
  ]
};