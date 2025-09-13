export interface Event {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  timing: string;
  highlights: string[];
  category: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    name: "Kumbh Mela",
    image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Largest spiritual gathering in the world, held every 12 years in Haridwar. Millions of pilgrims gather for holy baths in the Ganges.",
    location: "Haridwar",
    timing: "Every 12 years (Next: 2034)",
    highlights: ["Holy Bath", "Spiritual Discourses", "Cultural Programs", "Religious Processions"],
    category: "Religious"
  },
  {
    id: 2,
    name: "Nanda Devi Raj Jat Yatra",
    image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Famous pilgrimage and cultural procession in the Garhwal region, dedicated to Goddess Nanda Devi. A journey through scenic mountain trails.",
    location: "Garhwal Region",
    timing: "Every 12 years (August-September)",
    highlights: ["Mountain Pilgrimage", "Cultural Procession", "Traditional Music", "Folk Dance"],
    category: "Cultural"
  },
  {
    id: 3,
    name: "Dehradun Literature Festival",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Celebration of books, art, and culture bringing together renowned authors, poets, and literary enthusiasts from across the country.",
    location: "Dehradun",
    timing: "November (Annual)",
    highlights: ["Author Sessions", "Poetry Readings", "Book Launches", "Cultural Performances"],
    category: "Literary"
  },
  {
    id: 4,
    name: "International Yoga Festival",
    image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Global event promoting wellness and spirituality in the yoga capital of the world. Features renowned yoga masters and spiritual teachers.",
    location: "Rishikesh",
    timing: "March (Annual)",
    highlights: ["Yoga Sessions", "Meditation Workshops", "Spiritual Talks", "Wellness Programs"],
    category: "Spiritual"
  },
  {
    id: 5,
    name: "Bagwal Festival",
    image: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Traditional festival in Champawat known for its unique stone-throwing ritual and cultural significance in Kumaoni tradition.",
    location: "Champawat",
    timing: "August (Annual)",
    highlights: ["Stone Throwing Ritual", "Traditional Games", "Folk Music", "Local Cuisine"],
    category: "Traditional"
  }
];