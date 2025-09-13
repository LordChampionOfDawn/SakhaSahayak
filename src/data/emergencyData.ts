export interface Hospital {
  id: number;
  name: string;
  location: string;
  contact: string;
  type: 'government' | 'private' | 'specialty';
  services: string[];
  emergency24x7: boolean;
}

export const hospitals: Hospital[] = [
  {
    id: 1,
    name: "AIIMS Rishikesh",
    location: "Rishikesh, Dehradun District",
    contact: "+91-135-246-1111",
    type: "government",
    services: ["Emergency Care", "Trauma Center", "ICU", "Surgery", "Cardiology"],
    emergency24x7: true
  },
  {
    id: 2,
    name: "Max Super Speciality Hospital",
    location: "Dehradun",
    contact: "+91-135-667-3000",
    type: "private",
    services: ["Multi-specialty", "Emergency Care", "ICU", "Surgery", "Diagnostics"],
    emergency24x7: true
  },
  {
    id: 3,
    name: "Government Doon Medical College & Hospital",
    location: "Dehradun",
    contact: "+91-135-271-5555",
    type: "government",
    services: ["General Medicine", "Emergency Care", "Surgery", "Pediatrics", "Gynecology"],
    emergency24x7: true
  },
  {
    id: 4,
    name: "Base Hospital",
    location: "Haldwani, Nainital District",
    contact: "+91-5946-255-600",
    type: "government",
    services: ["Emergency Care", "General Medicine", "Surgery", "Orthopedics"],
    emergency24x7: true
  },
  {
    id: 5,
    name: "Himalayan Hospital",
    location: "Jolly Grant, Dehradun",
    contact: "+91-135-247-1350",
    type: "private",
    services: ["Emergency Care", "Trauma Center", "ICU", "Surgery", "Cardiology"],
    emergency24x7: true
  },
  {
    id: 6,
    name: "Shri Mahant Indiresh Hospital",
    location: "Patel Nagar, Dehradun",
    contact: "+91-135-271-5200",
    type: "private",
    services: ["Multi-specialty", "Emergency Care", "Cancer Treatment", "Neurology"],
    emergency24x7: true
  },
  {
    id: 7,
    name: "Combined Military Hospital",
    location: "Dehradun Cantonment",
    contact: "+91-135-276-2302",
    type: "government",
    services: ["Emergency Care", "General Medicine", "Surgery", "Specialized Treatment"],
    emergency24x7: true
  },
  {
    id: 8,
    name: "District Hospital Pauri",
    location: "Pauri Garhwal",
    contact: "+91-1368-222-079",
    type: "government",
    services: ["Emergency Care", "General Medicine", "Maternity", "Basic Surgery"],
    emergency24x7: true
  }
];

export const emergencyServices = [
  { title: 'Emergency Services', number: '112', description: 'All emergencies' },
  { title: 'Police', number: '100', description: 'Police assistance' },
  { title: 'Fire Service', number: '101', description: 'Fire emergency' },
  { title: 'Ambulance', number: '108', description: 'Medical emergency' },
  { title: 'Tourist Helpline', number: '1363', description: 'Tourist assistance' },
  { title: 'Disaster Management', number: '1070', description: 'Disaster response' },
];