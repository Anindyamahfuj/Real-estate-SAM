document.addEventListener('DOMContentLoaded', function() {
  
  AOS.init({ duration: 1000, once: true, offset: 100 });

 const properties = [
  // ----- GULSHAN (Realistic Prices) -----
  { name: "Gulshan Lake View Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 14500000, priceText: "1.45 Crore", bedrooms: 2, area: "1850 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Garden Residency", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 15500000, priceText: "1.55 Crore", bedrooms: 2, area: "1900 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Park View", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 18500000, priceText: "1.85 Crore", bedrooms: 3, area: "2100 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Elite Tower", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2300 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Avenue Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 25000000, priceText: "2.5 Crore", bedrooms: 3, area: "2500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Mid-Range Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 28000000, priceText: "2.8 Crore", bedrooms: 3, area: "2700 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Premium Residency", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 32000000, priceText: "3.2 Crore", bedrooms: 4, area: "3000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Lake Terrace", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 35000000, priceText: "3.5 Crore", bedrooms: 4, area: "3200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Presidential Tower", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 55000000, priceText: "5.5 Crore", bedrooms: 5, area: "5800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Royal Villa", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 75000000, priceText: "7.5 Crore", bedrooms: 5, area: "6500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Imperial Palace", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 100000000, priceText: "10 Crore", bedrooms: 6, area: "8500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Compact Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 16500000, priceText: "1.65 Crore", bedrooms: 2, area: "1750 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Cozy Residency", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 18000000, priceText: "1.8 Crore", bedrooms: 2, area: "1950 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Premium 2BHK", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 26000000, priceText: "2.6 Crore", bedrooms: 2, area: "2200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Elite 2BHK", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 28000000, priceText: "2.8 Crore", bedrooms: 2, area: "2350 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan 3BHK Luxury", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2400 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan 3BHK Premium", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 32000000, priceText: "3.2 Crore", bedrooms: 3, area: "3100 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan 3BHK Penthouse", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 42000000, priceText: "4.2 Crore", bedrooms: 3, area: "3800 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan 3BHK Grand", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 68000000, priceText: "6.8 Crore", bedrooms: 3, area: "5000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan 4BHK Executive", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 38000000, priceText: "3.8 Crore", bedrooms: 4, area: "3500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan 4BHK Duplex", location: "gulshan", locationDisplay: "Gulshan", type: "duplex", price: 52000000, priceText: "5.2 Crore", bedrooms: 4, area: "4500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan 5BHK Mansion", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 115000000, priceText: "11.5 Crore", bedrooms: 6, area: "9500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Central Heights", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 17000000, priceText: "1.7 Crore", bedrooms: 2, area: "2000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Sky Residences", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 62000000, priceText: "6.2 Crore", bedrooms: 4, area: "4600 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Green Villas", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 85000000, priceText: "8.5 Crore", bedrooms: 5, area: "7000 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

  // ----- BANANI -----
  { name: "Banani Lake View Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 15000000, priceText: "1.5 Crore", bedrooms: 3, area: "2500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Garden Apartment", location: "banani", locationDisplay: "Banani", type: "apartment", price: 17500000, priceText: "1.75 Crore", bedrooms: 3, area: "2200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Central Residency", location: "banani", locationDisplay: "Banani", type: "apartment", price: 20000000, priceText: "2.0 Crore", bedrooms: 3, area: "2600 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Commercial Plaza", location: "banani", locationDisplay: "Banani", type: "commercial", price: 25000000, priceText: "2.5 Crore", bedrooms: 0, area: "5500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Duplex Residence", location: "banani", locationDisplay: "Banani", type: "duplex", price: 35000000, priceText: "3.5 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Corporate Tower", location: "banani", locationDisplay: "Banani", type: "commercial", price: 52000000, priceText: "5.2 Crore", bedrooms: 0, area: "7200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Luxury Penthouse", location: "banani", locationDisplay: "Banani", type: "penthouse", price: 78000000, priceText: "7.8 Crore", bedrooms: 5, area: "5200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Sky Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 88000000, priceText: "8.8 Crore", bedrooms: 5, area: "6000 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Studio Apartment", location: "banani", locationDisplay: "Banani", type: "apartment", price: 16000000, priceText: "1.6 Crore", bedrooms: 2, area: "1700 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani 2BHK Residency", location: "banani", locationDisplay: "Banani", type: "apartment", price: 25000000, priceText: "2.5 Crore", bedrooms: 2, area: "2100 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Grand Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 92000000, priceText: "9.2 Crore", bedrooms: 5, area: "6800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Lake Edge", location: "banani", locationDisplay: "Banani", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2450 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Corporate Suites", location: "banani", locationDisplay: "Banani", type: "commercial", price: 38000000, priceText: "3.8 Crore", bedrooms: 0, area: "4800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

  // ----- BARIDHARA -----
  { name: "Baridhara Diplomatic Enclave", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 14500000, priceText: "1.45 Crore", bedrooms: 2, area: "1950 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Green View", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 16500000, priceText: "1.65 Crore", bedrooms: 2, area: "2000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara DOHS Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 23000000, priceText: "2.3 Crore", bedrooms: 4, area: "3200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Lake View", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 32000000, priceText: "3.2 Crore", bedrooms: 3, area: "2800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Executive Residency", location: "baridhara", locationDisplay: "Baridhara", type: "duplex", price: 48000000, priceText: "4.8 Crore", bedrooms: 4, area: "4800 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Presidential Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 88000000, priceText: "8.8 Crore", bedrooms: 6, area: "7200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara 2BHK Apartment", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 15000000, priceText: "1.5 Crore", bedrooms: 2, area: "1850 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Compact Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 25000000, priceText: "2.5 Crore", bedrooms: 2, area: "2600 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara 6BHK Estate", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 120000000, priceText: "12 Crore", bedrooms: 6, area: "10000 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Golden Enclave", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 62000000, priceText: "6.2 Crore", bedrooms: 5, area: "6200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Diplomatic Tower", location: "baridhara", locationDisplay: "Baridhara", type: "penthouse", price: 72000000, priceText: "7.2 Crore", bedrooms: 5, area: "5800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Royal Residency", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 65000000, priceText: "6.5 Crore", bedrooms: 4, area: "5400 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Embassy Heights", location: "baridhara", locationDisplay: "Baridhara", type: "penthouse", price: 78000000, priceText: "7.8 Crore", bedrooms: 5, area: "6200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Central Park", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 20000000, priceText: "2.0 Crore", bedrooms: 3, area: "2300 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Lake Palace", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 82000000, priceText: "8.2 Crore", bedrooms: 5, area: "6800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

  // ----- UTTARA -----
  { name: "Uttara Sky Garden", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 12000000, priceText: "1.2 Crore", bedrooms: 2, area: "1300 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Lake View Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 13500000, priceText: "1.35 Crore", bedrooms: 2, area: "1500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Sector 6 Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 18000000, priceText: "1.8 Crore", bedrooms: 3, area: "2100 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Executive Penthouse", location: "uttara", locationDisplay: "Uttara", type: "penthouse", price: 28000000, priceText: "2.8 Crore", bedrooms: 4, area: "3500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Lake View Villa", location: "uttara", locationDisplay: "Uttara", type: "villa", price: 40000000, priceText: "4.0 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Commercial Hub", location: "uttara", locationDisplay: "Uttara", type: "commercial", price: 58000000, priceText: "5.8 Crore", bedrooms: 0, area: "6800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Budget Home", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 11500000, priceText: "1.15 Crore", bedrooms: 2, area: "1400 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Economy Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 12500000, priceText: "1.25 Crore", bedrooms: 2, area: "1550 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara 5BHK Penthouse", location: "uttara", locationDisplay: "Uttara", type: "penthouse", price: 50000000, priceText: "5.0 Crore", bedrooms: 5, area: "4800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Sector 4 Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 16000000, priceText: "1.6 Crore", bedrooms: 3, area: "1950 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Lake Edge Villa", location: "uttara", locationDisplay: "Uttara", type: "villa", price: 48000000, priceText: "4.8 Crore", bedrooms: 4, area: "4500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

  // ----- DHANMONDI -----
  { name: "Dhanmondi Lake View Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 16000000, priceText: "1.6 Crore", bedrooms: 2, area: "1800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Luxury Residency", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 20000000, priceText: "2.0 Crore", bedrooms: 3, area: "2200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Royal Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2700 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Duplex Home", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "duplex", price: 36000000, priceText: "3.6 Crore", bedrooms: 4, area: "4000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Presidential Suite", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "penthouse", price: 55000000, priceText: "5.5 Crore", bedrooms: 5, area: "4800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Royal Villa", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "villa", price: 80000000, priceText: "8.0 Crore", bedrooms: 5, area: "6200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Budget Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 13500000, priceText: "1.35 Crore", bedrooms: 2, area: "1600 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Premium 2BHK", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 21000000, priceText: "2.1 Crore", bedrooms: 2, area: "2300 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi 5BHK Palace", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "villa", price: 95000000, priceText: "9.5 Crore", bedrooms: 5, area: "7500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Lake Tower", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 28000000, priceText: "2.8 Crore", bedrooms: 3, area: "2850 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Elite Penthouse", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "penthouse", price: 65000000, priceText: "6.5 Crore", bedrooms: 4, area: "5200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

  // ----- BASHUNDHARA -----
  { name: "Bashundhara R/A Apartment", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 12500000, priceText: "1.25 Crore", bedrooms: 2, area: "1450 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Green Apartment", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 14000000, priceText: "1.4 Crore", bedrooms: 2, area: "1600 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Family Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Executive Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 32000000, priceText: "3.2 Crore", bedrooms: 4, area: "3800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Premium Penthouse", location: "bashundhara", locationDisplay: "Bashundhara", type: "penthouse", price: 45000000, priceText: "4.5 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Commercial Space", location: "bashundhara", locationDisplay: "Bashundhara", type: "commercial", price: 72000000, priceText: "7.2 Crore", bedrooms: 0, area: "7500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Value Home", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 13000000, priceText: "1.3 Crore", bedrooms: 2, area: "1500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara 2BHK Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 20000000, priceText: "2.0 Crore", bedrooms: 2, area: "2500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara 6BHK Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 80000000, priceText: "8.0 Crore", bedrooms: 6, area: "8200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Green View", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 18000000, priceText: "1.8 Crore", bedrooms: 3, area: "2000 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Royal Tower", location: "bashundhara", locationDisplay: "Bashundhara", type: "penthouse", price: 52000000, priceText: "5.2 Crore", bedrooms: 4, area: "4800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

  // ----- 15 NEW PROPERTIES (Realistic Prices) -----
  { name: "Gulshan Lakefront Penthouse", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 52000000, priceText: "5.2 Crore", bedrooms: 4, area: "4900 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani City View Apartment", location: "banani", locationDisplay: "Banani", type: "apartment", price: 25000000, priceText: "2.5 Crore", bedrooms: 3, area: "2550 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Lake Tower", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 38000000, priceText: "3.8 Crore", bedrooms: 3, area: "3100 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Executive Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 18000000, priceText: "1.8 Crore", bedrooms: 3, area: "2050 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Garden Villa", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "villa", price: 48000000, priceText: "4.8 Crore", bedrooms: 4, area: "4300 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Lake View", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 20000000, priceText: "2.0 Crore", bedrooms: 3, area: "2250 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Executive Suite", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2450 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Royal Penthouse", location: "banani", locationDisplay: "Banani", type: "penthouse", price: 82000000, priceText: "8.2 Crore", bedrooms: 5, area: "5600 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Green Residency", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 19000000, priceText: "1.9 Crore", bedrooms: 2, area: "2100 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Uttara Royal Villa", location: "uttara", locationDisplay: "Uttara", type: "villa", price: 40000000, priceText: "4.0 Crore", bedrooms: 4, area: "4000 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Dhanmondi Executive Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 26000000, priceText: "2.6 Crore", bedrooms: 3, area: "2750 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Bashundhara Penthouse Suite", location: "bashundhara", locationDisplay: "Bashundhara", type: "penthouse", price: 58000000, priceText: "5.8 Crore", bedrooms: 5, area: "5100 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Gulshan Park Residences", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 17000000, priceText: "1.7 Crore", bedrooms: 2, area: "1800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Banani Lake Front Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 95000000, priceText: "9.5 Crore", bedrooms: 6, area: "7200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { name: "Baridhara Sky Gardens", location: "baridhara", locationDisplay: "Baridhara", type: "penthouse", price: 70000000, priceText: "7.0 Crore", bedrooms: 5, area: "5900 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" }
];

  console.log(`Total properties loaded: ${properties.length}`);

  // ========== HERO SLIDER (unchanged) ==========
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentSlide = 0;
  let slideInterval;

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    const dots = document.querySelectorAll('.dot');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) next = 0;
    goToSlide(next);
  }

  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) prev = slides.length - 1;
    goToSlide(prev);
  }

  if (slides.length > 0 && dotsContainer) {
    createDots();
    if (nextBtn) nextBtn.addEventListener('click', () => { clearInterval(slideInterval); nextSlide(); startAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { clearInterval(slideInterval); prevSlide(); startAutoSlide(); });
    startAutoSlide();
  }

  function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // ========== COUNTER ANIMATION ==========
  const statNumbers = document.querySelectorAll('.stat-number');
  function animateNumbers() {
    statNumbers.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      if (!target || el.innerText !== '0') return;
      let current = 0;
      const increment = target / 50;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          el.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          el.innerText = target;
        }
      };
      updateCounter();
    });
  }

  const observerOptions = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);

  // ========== FEATURED PROPERTIES (with correct inquire link) ==========
function renderFeaturedProperties() {
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    featuredGrid.innerHTML = properties.slice(0, 6).map(prop => `
      <div class="property-card">
        <img src="${prop.image}" alt="${prop.name}" class="property-img">
        <div class="property-info">
          <h3>${prop.name}</h3>
          <div class="property-location"><i class="fas fa-map-pin"></i> ${prop.locationDisplay}</div>
          <div class="property-price">৳ ${prop.priceText}</div>
          <p>${prop.bedrooms ? `${prop.bedrooms} Beds | ` : 'Commercial Space | '}${prop.area}</p>
          <a href="contact.html?property=${encodeURIComponent(prop.name)}&type=${prop.type}" class="btn-luxury" style="margin-top:16px; display:inline-block;">Inquire →</a>
        </div>
      </div>
    `).join('');
  }
}

  // ========== PROPERTIES PAGE FILTERS ==========
  let currentPage = 1;
  const itemsPerPage = 9;

  function filterProperties() {
    const typeFilter = document.getElementById('propertyType')?.value || 'all';
    const locationFilter = document.getElementById('propertyLocation')?.value || 'all';
    const priceFilter = document.getElementById('propertyPrice')?.value || 'all';
    const bedroomsFilter = document.getElementById('propertyBedrooms')?.value || 'all';
    const searchTerm = document.getElementById('searchProperty')?.value.toLowerCase() || '';

    let filtered = [...properties];

    if (typeFilter !== 'all') filtered = filtered.filter(p => p.type === typeFilter);
    if (locationFilter !== 'all') filtered = filtered.filter(p => p.location === locationFilter);
    if (priceFilter !== 'all') {
      if (priceFilter === '0-2') filtered = filtered.filter(p => p.price < 20000000);
      else if (priceFilter === '2-4') filtered = filtered.filter(p => p.price >= 20000000 && p.price < 40000000);
      else if (priceFilter === '4-6') filtered = filtered.filter(p => p.price >= 40000000 && p.price < 60000000);
      else if (priceFilter === '6-10') filtered = filtered.filter(p => p.price >= 60000000 && p.price < 100000000);
      else if (priceFilter === '10-15') filtered = filtered.filter(p => p.price >= 100000000 && p.price < 150000000);
      else if (priceFilter === '15+') filtered = filtered.filter(p => p.price >= 150000000);
    }
    if (bedroomsFilter !== 'all') {
      const bedroomNum = parseInt(bedroomsFilter);
      if (bedroomNum === 5) filtered = filtered.filter(p => p.bedrooms >= 5);
      else filtered = filtered.filter(p => p.bedrooms === bedroomNum);
    }
    if (searchTerm) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.locationDisplay.toLowerCase().includes(searchTerm));
    }

    const resultsCount = document.getElementById('filterResultsCount');
    if (resultsCount) {
      resultsCount.innerHTML = `<i class="fas fa-building"></i> Showing ${filtered.length} of ${properties.length} total properties | <i class="fas fa-info-circle"></i> Contact us for complete portfolio.`;
    }
    return filtered;
  }

  function renderPropertiesGrid() {
    const grid = document.getElementById('propertiesGrid');
    if (!grid) return;
    const filtered = filterProperties();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    if (paginated.length === 0) {
      grid.innerHTML = `<div style="text-align:center; padding:60px; color:#aaa;">
        <i class="fas fa-home" style="font-size:3rem; margin-bottom:20px; display:block;"></i>
        <h3>No properties match your filters</h3>
        <p>Try different criteria or <a href="contact.html" style="color:#D4AF37;">contact our team</a> for personalized assistance.</p>
        <p style="margin-top:15px; font-size:0.9rem;">We have ${properties.length} properties in our database. Our experts can find the perfect match for you.</p>
        <button onclick="document.getElementById('resetFilters').click()" class="btn-reset" style="margin-top:20px;">Reset All Filters</button>
      </div>`;
    } else {
      grid.innerHTML = paginated.map(prop => `
        <div class="property-card">
          <img src="${prop.image}" alt="${prop.name}" class="property-img">
          <div class="property-info">
            <h3>${prop.name}</h3>
            <div class="property-location"><i class="fas fa-map-pin"></i> ${prop.locationDisplay}</div>
            <div class="property-price">৳ ${prop.priceText}</div>
            <p>${prop.bedrooms ? `${prop.bedrooms} Beds | ` : 'Commercial Space | '}${prop.area}</p>
            <a href="contact.html?property=${encodeURIComponent(prop.name)}&type=${prop.type}" class="btn-luxury" style="margin-top:16px; display:inline-block;">Inquire →</a>
          </div>
        </div>
      `).join('');
      
      const existingNote = document.querySelector('.grid-note');
      if (!existingNote && filtered.length > itemsPerPage) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'grid-note';
        noteDiv.style.cssText = 'text-align:center; margin-top:30px; padding:20px; background:#111; border-radius:20px; border:1px solid rgba(212,175,55,0.2);';
        noteDiv.innerHTML = `<i class="fas fa-gem" style="color:#D4AF37;"></i> Showing ${paginated.length} of ${filtered.length} properties. <a href="contact.html" style="color:#D4AF37;">Contact us</a> to view our complete portfolio of ${properties.length} luxury properties.`;
        grid.parentNode.insertBefore(noteDiv, grid.nextSibling);
      }
    }
    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    const paginationDiv = document.getElementById('propertiesPagination');
    if (!paginationDiv) return;
    if (totalPages <= 1) {
      paginationDiv.innerHTML = '';
      return;
    }
    let buttons = '';
    for (let i = 1; i <= totalPages; i++) {
      buttons += `<button class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    paginationDiv.innerHTML = buttons;
    document.querySelectorAll('#propertiesPagination button').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        renderPropertiesGrid();
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    });
  }

  function resetFilters() {
    const typeFilter = document.getElementById('propertyType');
    const locationFilter = document.getElementById('propertyLocation');
    const priceFilter = document.getElementById('propertyPrice');
    const bedroomsFilter = document.getElementById('propertyBedrooms');
    const searchInput = document.getElementById('searchProperty');
    if (typeFilter) typeFilter.value = 'all';
    if (locationFilter) locationFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    if (bedroomsFilter) bedroomsFilter.value = 'all';
    if (searchInput) searchInput.value = '';
    currentPage = 1;
    renderPropertiesGrid();
  }

  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) resetBtn.addEventListener('click', resetFilters);

  const typeFilter = document.getElementById('propertyType');
  const locationFilter = document.getElementById('propertyLocation');
  const priceFilter = document.getElementById('propertyPrice');
  const bedroomsFilter = document.getElementById('propertyBedrooms');
  const searchInput = document.getElementById('searchProperty');

  if (typeFilter) typeFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (locationFilter) locationFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (priceFilter) priceFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (bedroomsFilter) bedroomsFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (searchInput) searchInput.addEventListener('input', () => { currentPage = 1; renderPropertiesGrid(); });

  // ========== GALLERY (unchanged) ==========
 const galleryItems = [
  { category: "exterior", url: "https://media.istockphoto.com/id/2175972607/photo/modern-luxury-home-with-geometric-driveway-and-sunset-sky.jpg?s=612x612&w=0&k=20&c=0pvJ_frDStQGywjOptq9XmyEQgVIxfH3Yg7MbYIfIjI=" },
  { category: "interior", url: "https://dlifeinteriors.com/wp-content/uploads/2024/12/Living-and-kitchen-design-for-studio-apartment.jpg" },
  { category: "exterior", url: "https://t4.ftcdn.net/jpg/04/05/09/41/360_F_405094135_YGTjfUW6LFHwCHjBNe9ogNGXKp4D2WPQ.jpg" },
  { category: "interior", url: "https://design-authority.com/wp-content/uploads/2021/09/Modern-Luxury-Interior-Design-by-Elicyon.jpg" },
  { category: "amenities", url: "https://images.squarespace-cdn.com/content/v1/589a3e1a414fb58b9eca1eed/262a63ed-96ca-443b-8940-b23398d3b146/luxury-amenities-pandemic-1.jpg" },
  { category: "exterior", url: "https://t4.ftcdn.net/jpg/03/16/87/65/360_F_316876592_HCfokg4ZdE2o9mhxolxqBPBKNn3W2x49.jpg" },
  { category: "interior", url: "https://intdesigners.com/wp-content/uploads/2024/04/Luxury-Home-Interior-Design.webp" },
  { category: "amenities", url: "https://businessnes.com/wp-content/uploads/2025/10/Top-100-Luxury-Apartment-Amenities-List.webp" },
  { category: "exterior", url: "https://media.istockphoto.com/id/1211174516/photo/beautiful-large-luxury-home-exterior-on-bright-sunny-day-with-green-grass-and-blue-sky.jpg?s=612x612&w=0&k=20&c=XASAYWGXM6Z6Ha6mCT-YDkGtuG0ejFWRB5utlkEEriI=" }
];
  function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);
    galleryGrid.innerHTML = filtered.map(item => `
      <div class="gallery-item">
        <img src="${item.url}" alt="Gallery Image">
      </div>
    `).join('');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        if (lightbox && lightboxImg) {
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
        }
      });
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderGallery(this.dataset.filter);
      });
    });
    renderGallery('all');
  }

  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.querySelector('.close-lightbox');
  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  // ========== NEWSLETTER ==========
  const newsBtn = document.getElementById('newsBtn');
  if (newsBtn) {
    newsBtn.addEventListener('click', function() {
      const emailInput = document.getElementById('newsEmail');
      const email = emailInput?.value.trim();
      if (email && email.includes('@')) {
        alert(`Thank you! You'll receive updates at ${email}`);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

 renderFeaturedProperties();
renderPropertiesGrid();

// ========== AI PROPERTY ASSISTANT (MOVED INSIDE DOMContentLoaded) ==========
(function() {
  function normalize(str) {
    return str.toLowerCase().replace(/[^\w\s]/g, '').trim().replace(/\s+/g, ' ');
  }

  const locationMap = {
    'gulshan': ['gulshan', 'gulson', 'gulshon', 'gulshn', 'gulsan', 'gulshaan'],
    'banani': ['banani', 'banany', 'bananai', 'bananii'],
    'baridhara': ['baridhara', 'baridara', 'baridhora', 'baridhar', 'baridharra'],
    'uttara': ['uttara', 'utara', 'uttora', 'utarra', 'uttarra'],
    'dhanmondi': ['dhanmondi', 'dhanmondy', 'dhanmondii'],
    'bashundhara': ['bashundhara', 'bashundara', 'bashundhora', 'bashundhar']
  };
  const locationAlias = {};
  for (const [canon, aliases] of Object.entries(locationMap)) {
    for (const a of aliases) locationAlias[a] = canon;
  }

  const typeMap = {
    'apartment': ['apartment', 'apartments', 'flat', 'flats', 'apt', 'appartment', 'aprt'],
    'villa': ['villa', 'villas', 'vila', 'villla'],
    'penthouse': ['penthouse', 'penthous', 'pent house'],
    'commercial': ['commercial', 'office', 'shop', 'store', 'comercial']
  };
  const typeAlias = {};
  for (const [canon, aliases] of Object.entries(typeMap)) {
    for (const a of aliases) typeAlias[a] = canon;
  }

  function parseQueryToFilters(input) {
    const text = normalize(input);
    let filters = { location: null, bedrooms: null, priceMin: null, priceMax: null, type: null };
    let explanation = '';

    for (const word of text.split(' ')) {
      if (locationAlias[word]) { filters.location = locationAlias[word]; break; }
    }
    if (!filters.location) {
      for (const [canon, aliases] of Object.entries(locationMap)) {
        for (const a of aliases) {
          if (text.includes(a)) { filters.location = canon; break; }
        }
        if (filters.location) break;
      }
    }
    if (filters.location) explanation += `📍 ${filters.location.charAt(0).toUpperCase() + filters.location.slice(1)}. `;

    const bedMatch = text.match(/(\d+)\s*(?:bed|bhk|bedroom|bedrooms)/);
    if (bedMatch) filters.bedrooms = parseInt(bedMatch[1]);
    if (filters.bedrooms) explanation += `🛏️ ${filters.bedrooms}+ bedroom(s). `;

    let under = text.match(/under\s*(\d+(?:\.\d+)?)\s*crore/);
    if (under) { filters.priceMax = parseFloat(under[1]) * 1e7; explanation += `💰 Under ${under[1]} crore. `; }
    let above = text.match(/(?:above|over|more than)\s*(\d+(?:\.\d+)?)\s*crore/);
    if (above) { filters.priceMin = parseFloat(above[1]) * 1e7; explanation += `💰 Above ${above[1]} crore. `; }
    let between = text.match(/between\s*(\d+(?:\.\d+)?)\s*and\s*(\d+(?:\.\d+)?)\s*crore/);
    if (between) {
      filters.priceMin = parseFloat(between[1]) * 1e7;
      filters.priceMax = parseFloat(between[2]) * 1e7;
      explanation += `💰 Between ${between[1]} and ${between[2]} crore. `;
    }
    let less = text.match(/(?:less than|below|lower than)\s*(\d+(?:\.\d+)?)\s*crore/);
    if (less) { filters.priceMax = parseFloat(less[1]) * 1e7; explanation += `💰 Below ${less[1]} crore. `; }

    for (const word of text.split(' ')) {
      if (typeAlias[word]) { filters.type = typeAlias[word]; break; }
    }
    if (!filters.type) {
      for (const [canon, aliases] of Object.entries(typeMap)) {
        for (const a of aliases) {
          if (text.includes(a)) { filters.type = canon; break; }
        }
        if (filters.type) break;
      }
    }
    if (filters.type) explanation += `🏢 ${filters.type.charAt(0).toUpperCase() + filters.type.slice(1)}. `;

    return { filters, explanation };
  }

  function applyFilters(propertiesList, filters) {
    let filtered = [...propertiesList];
    if (filters.location) filtered = filtered.filter(p => p.location === filters.location);
    if (filters.bedrooms) {
      if (filters.bedrooms >= 5) filtered = filtered.filter(p => p.bedrooms >= 5);
      else filtered = filtered.filter(p => p.bedrooms === filters.bedrooms);
    }
    if (filters.priceMin !== null || filters.priceMax !== null) {
      filtered = filtered.filter(p => {
        if (filters.priceMin !== null && p.price < filters.priceMin) return false;
        if (filters.priceMax !== null && p.price > filters.priceMax) return false;
        return true;
      });
    }
    if (filters.type) filtered = filtered.filter(p => p.type === filters.type);
    return filtered;
  }

  function saveFiltersToStorage(filters) {
    const filtersToStore = {
      location: filters.location || '',
      bedrooms: filters.bedrooms ? filters.bedrooms.toString() : '',
      priceMin: filters.priceMin !== null ? filters.priceMin.toString() : '',
      priceMax: filters.priceMax !== null ? filters.priceMax.toString() : '',
      type: filters.type || ''
    };
    sessionStorage.setItem('samPropertyFilters', JSON.stringify(filtersToStore));
  }

  function initAI(propertiesList) {
    const sendBtn = document.getElementById('aiSendBtn');
    const input = document.getElementById('aiUserInput');
    const messagesContainer = document.getElementById('aiChatMessages');

    if (!sendBtn || !input || !messagesContainer) {
      console.warn('AI: Missing DOM elements. Make sure the section HTML is added.');
      return;
    }

    function addMessage(text, isUser = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `ai-message ${isUser ? 'ai-user' : 'ai-bot'}`;
      msgDiv.innerHTML = text;
      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function addPropertySuggestion(property, filtersUsed) {
      const container = document.createElement('div');
      container.className = 'ai-property-suggestion';
      
      const nameDiv = document.createElement('div');
      nameDiv.className = 'prop-name';
      nameDiv.innerHTML = `🏠 ${property.name}`;
      
      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'prop-details';
      detailsDiv.innerHTML = `📍 ${property.locationDisplay} | ${property.priceText} | ${property.bedrooms} Beds | ${property.area}`;
      
      const button = document.createElement('button');
      button.className = 'view-btn';
      button.textContent = '🔍 View similar properties →';
      
      button.addEventListener('click', () => {
        saveFiltersToStorage(filtersUsed);
        window.location.href = 'properties.html';
      });
      
      container.appendChild(nameDiv);
      container.appendChild(detailsDiv);
      container.appendChild(button);
      messagesContainer.appendChild(container);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function processQuery(query) {
      if (!query.trim()) return;
      addMessage(query, true);
      input.value = '';

      if (/^(hi|hello|hey|greetings|hola|sup)/i.test(query)) {
        addMessage("Hello! I'm SAM AI. Tell me what you're looking for. Example: '3BHK apartment in Gulshan under 5 crore'");
        return;
      }

      if (/help/i.test(query)) {
        addMessage("I can help you find properties. Try asking:<br>• '3BHK villa in Gulshan under 10 crore'<br>• 'Apartments in Banani between 2 and 4 crore'<br>• '2 bedroom flat in Uttara above 1.5 crore'");
        return;
      }

      const { filters, explanation } = parseQueryToFilters(query);
      const matchedProperties = applyFilters(propertiesList, filters);

      if (matchedProperties.length === 0) {
        addMessage("😔 No properties match your criteria. Try different keywords or contact our team for help.");
      } else {
        let reply = `✅ Found ${matchedProperties.length} property(ies). ${explanation}`;
        addMessage(reply);
        
        const showCount = Math.min(matchedProperties.length, 3);
        for (let i = 0; i < showCount; i++) {
          addPropertySuggestion(matchedProperties[i], filters);
        }
        if (matchedProperties.length > 3) {
          addMessage(`✨ And ${matchedProperties.length - 3} more. Use the buttons above to see similar properties.`);
        } else {
          addMessage(`📞 Contact us to schedule a viewing or get more details.`);
        }
      }
    }

    sendBtn.addEventListener('click', () => processQuery(input.value));
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') processQuery(input.value);
    });
  }

  // Start AI immediately (properties is already defined inside this scope)
  initAI(properties);
})();

});


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50){
    navbar.style.background = 'rgba(5,5,5,0.96)';
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
  } else {
    navbar.style.background = 'rgba(10,10,10,0.98)';
    navbar.style.boxShadow = 'none';
  }
});


// ========== ENHANCED CONTACT FORM HANDLER (with extra fields) ==========
// Read URL parameters from "Inquire Now" buttons
const urlParams = new URLSearchParams(window.location.search);
const propertyName = urlParams.get('property');
const propertyType = urlParams.get('type');

const inquiryTypeSelect = document.getElementById('inquiryType');
const propertyInterestSelect = document.getElementById('propertyInterest');
const buyExtraDiv = document.getElementById('buyExtraFields');
const buyPrice = document.getElementById('buyPrice');
const buyPropertyName = document.getElementById('buyPropertyName');
const buyArea = document.getElementById('buyArea');
const buyLocation = document.getElementById('buyLocation');

// Pre‑fill from URL parameters
if (propertyName && inquiryTypeSelect) {
  inquiryTypeSelect.value = 'buy';
  const messageField = document.getElementById('message');
  if (messageField) messageField.value = `I am interested in buying this property: ${propertyName}`;
}
if (propertyType && propertyInterestSelect) {
  let mappedType = propertyType;
  if (propertyType === 'apartment') mappedType = 'apartment';
  else if (propertyType === 'villa') mappedType = 'villa';
  else if (propertyType === 'penthouse') mappedType = 'penthouse';
  else if (propertyType === 'commercial') mappedType = 'commercial';
  else mappedType = '';
  if (mappedType) propertyInterestSelect.value = mappedType;
}

// Show/hide extra fields when "Looking to Buy" is selected
function toggleBuyExtraFields() {
  if (inquiryTypeSelect && buyExtraDiv) {
    if (inquiryTypeSelect.value === 'buy') {
      buyExtraDiv.style.display = 'block';
      if (buyPrice) buyPrice.required = true;
      if (buyPropertyName) buyPropertyName.required = true;
      if (buyArea) buyArea.required = true;
      if (buyLocation) buyLocation.required = true;
    } else {
      buyExtraDiv.style.display = 'none';
      if (buyPrice) buyPrice.required = false;
      if (buyPropertyName) buyPropertyName.required = false;
      if (buyArea) buyArea.required = false;
      if (buyLocation) buyLocation.required = false;
    }
  }
}
if (inquiryTypeSelect) {
  inquiryTypeSelect.addEventListener('change', toggleBuyExtraFields);
  toggleBuyExtraFields(); // initial check
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName')?.value.trim();
    const email = document.getElementById('emailAddress')?.value.trim();
    const phone = document.getElementById('phoneNumber')?.value.trim();
    const inquiryType = inquiryTypeSelect?.value;
    const propertyInterest = propertyInterestSelect?.value;
    const message = document.getElementById('message')?.value.trim();

    // Main fields validation
    if (!fullName) { showFormFeedback('Please enter your full name.', 'error'); return; }
    if (!email) { showFormFeedback('Please enter your email address.', 'error'); return; }
    if (!email.includes('@') || !email.includes('.')) { showFormFeedback('Enter a valid email (e.g., name@domain.com).', 'error'); return; }
    if (!phone) { showFormFeedback('Phone number is required.', 'error'); return; }
    if (!/^\d+$/.test(phone)) { showFormFeedback('Phone number must contain only digits.', 'error'); return; }
    if (!inquiryType) { showFormFeedback('Please select an inquiry type.', 'error'); return; }
    if (!propertyInterest) { showFormFeedback('Please select your interested property type.', 'error'); return; }
    if (!message) { showFormFeedback('Please write a message.', 'error'); return; }

    // Extra fields validation only if "Looking to Buy"
    if (inquiryType === 'buy') {
      if (!buyPrice?.value.trim()) { showFormFeedback('Expected price is required.', 'error'); return; }
      const priceVal = parseFloat(buyPrice.value.trim());
      if (isNaN(priceVal)) { showFormFeedback('Price must be a number (e.g., 5.2).', 'error'); return; }
      if (!buyPropertyName?.value.trim()) { showFormFeedback('Exact property name is required.', 'error'); return; }
      if (!buyArea?.value.trim()) { showFormFeedback('Area (sq ft) is required.', 'error'); return; }
      const areaVal = parseFloat(buyArea.value.trim());
      if (isNaN(areaVal)) { showFormFeedback('Area must be a number.', 'error'); return; }
      if (!buyLocation?.value.trim()) { showFormFeedback('Location is required.', 'error'); return; }
    }

    // All valid
    showFormFeedback(`✨ Thank you ${fullName}! Your inquiry has been sent. We will contact you at ${email} within 24 hours.`, 'success');
    contactForm.reset();
    if (buyExtraDiv) buyExtraDiv.style.display = 'none';
    
    setTimeout(() => {
      const feedbackDiv = document.getElementById('formFeedback');
      if (feedbackDiv) feedbackDiv.innerHTML = '';
    }, 5000);
  });
}

function showFormFeedback(msg, type) {
  const feedbackDiv = document.getElementById('formFeedback');
  if (feedbackDiv) {
    feedbackDiv.innerHTML = `<div style="background: ${type === 'success' ? 'rgba(212,175,55,0.15)' : 'rgba(255,68,68,0.15)'}; padding: 14px; border-radius: 28px; color: ${type === 'success' ? '#D4AF37' : '#ff6b6b'}; margin-top: 20px; text-align:center; border:1px solid ${type === 'success' ? '#D4AF37' : '#ff6b6b'};">${msg}</div>`;
    setTimeout(() => {
      if (feedbackDiv.innerHTML.includes(msg)) feedbackDiv.innerHTML = '';
    }, 5000);
  }
}


// ============================================
// 25X BETTER – PREMIUM ADDITIONS (ADD ONLY)
// ============================================

// 1. PAGE LOADER
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('pageLoader');
        if (loader) loader.classList.add('hidden');
    }, 800);
});

// 2. SCROLL PROGRESS BAR & BACK TO TOP
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) progressBar.style.width = progress + '%';
    
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        if (scrollTop > 300) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    }
});

// 3. BACK TO TOP
const backBtn = document.getElementById('backToTop');
if (backBtn) {
    backBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 4. TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// 5. THEME TOGGLE (Dark/Light Mode)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            this.innerHTML = '<i class="fas fa-sun"></i>';
            showToast('🌞 Light mode activated', 'info');
        } else {
            localStorage.setItem('theme', 'dark');
            this.innerHTML = '<i class="fas fa-moon"></i>';
            showToast('🌙 Dark mode activated', 'info');
        }
    });
}

// 6. COOKIE CONSENT
const cookieConsent = document.getElementById('cookieConsent');
const acceptCookies = document.getElementById('acceptCookies');
if (cookieConsent && acceptCookies) {
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.classList.add('show');
    }
    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.classList.remove('show');
    });
}

// 7. WISHLIST FUNCTIONALITY
function toggleWishlist(propertyName, button) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const index = wishlist.indexOf(propertyName);
    if (index > -1) {
        wishlist.splice(index, 1);
        if (button) button.classList.remove('liked');
        showToast('❌ Removed from wishlist', 'warning');
    } else {
        wishlist.push(propertyName);
        if (button) button.classList.add('liked');
        showToast('❤️ Added to wishlist!', 'success');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// 8. COMPARE FUNCTIONALITY
let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');

function updateCompareBar() {
    const bar = document.getElementById('compareBar');
    const items = document.getElementById('compareItems');
    if (!bar || !items) return;
    if (compareList.length > 0) {
        bar.classList.add('show');
        items.innerHTML = compareList.map((name, i) => `
            <div class="compare-item">
                ${name}
                <span class="remove-compare" data-index="${i}">&times;</span>
            </div>
        `).join('');
        document.querySelectorAll('.remove-compare').forEach(el => {
            el.addEventListener('click', function() {
                compareList.splice(parseInt(this.dataset.index), 1);
                localStorage.setItem('compareList', JSON.stringify(compareList));
                updateCompareBar();
                showToast('Removed from compare', 'info');
            });
        });
    } else {
        bar.classList.remove('show');
    }
}

const clearCompare = document.getElementById('clearCompare');
if (clearCompare) {
    clearCompare.addEventListener('click', function() {
        compareList = [];
        localStorage.setItem('compareList', JSON.stringify(compareList));
        updateCompareBar();
        showToast('🧹 Compare list cleared', 'info');
    });
}

const compareBtn = document.getElementById('compareBtn');
if (compareBtn) {
    compareBtn.addEventListener('click', function() {
        if (compareList.length < 2) {
            showToast('⚠️ Select at least 2 properties to compare', 'error');
            return;
        }
        showToast(`📊 Comparing ${compareList.length} properties`, 'success');
        localStorage.setItem('compareList', JSON.stringify(compareList));
        window.location.href = 'properties.html?compare=true';
    });
}
updateCompareBar();

// 9. FULLSCREEN IMAGE VIEW
document.addEventListener('click', function(e) {
    if (e.target.closest('.property-img')) {
        const img = e.target.closest('.property-img');
        const fullscreen = document.getElementById('fullscreenView');
        const fullImg = document.getElementById('fullscreenImg');
        if (fullscreen && fullImg) {
            fullImg.src = img.src;
            fullscreen.classList.add('active');
        }
    }
});
const closeFs = document.querySelector('.close-fs');
if (closeFs) {
    closeFs.addEventListener('click', function() {
        document.getElementById('fullscreenView').classList.remove('active');
    });
}
const fullscreenView = document.getElementById('fullscreenView');
if (fullscreenView) {
    fullscreenView.addEventListener('click', function(e) {
        if (e.target === this) this.classList.remove('active');
    });
}

// 10. HAMBURGER MENU
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelector('.nav-links');
if (navContainer && navLinks) {
    let hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
        hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        navContainer.insertBefore(hamburger, navLinks);
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }
}

// 11. AUTO-SAVE CONTACT FORM
const contactFormInputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');
if (contactFormInputs.length > 0) {
    contactFormInputs.forEach(input => {
        input.addEventListener('input', function() {
            const data = {};
            contactFormInputs.forEach(el => {
                data[el.id] = el.value;
            });
            localStorage.setItem('contactFormData', JSON.stringify(data));
        });
    });
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
        const data = JSON.parse(savedData);
        contactFormInputs.forEach(el => {
            if (data[el.id]) el.value = data[el.id];
        });
    }
}

// 12. FILTER CHIPS (Display active filters on properties page)
function updateFilterChips() {
    const container = document.querySelector('.filter-chips-container');
    if (!container) return;
    let chips = container.querySelector('.filter-chips');
    if (!chips) {
        chips = document.createElement('div');
        chips.className = 'filter-chips';
        container.appendChild(chips);
    }
    chips.innerHTML = '';
    const filters = {
        location: document.getElementById('propertyLocation')?.value,
        type: document.getElementById('propertyType')?.value,
        price: document.getElementById('propertyPrice')?.value,
        bedrooms: document.getElementById('propertyBedrooms')?.value
    };
    const labels = {
        location: '📍 ' + (filters.location ? filters.location.charAt(0).toUpperCase() + filters.location.slice(1) : ''),
        type: '🏢 ' + (filters.type ? filters.type.charAt(0).toUpperCase() + filters.type.slice(1) : ''),
        price: '💰 ' + (filters.price ? filters.price.replace('-', ' - ') + ' Crore' : ''),
        bedrooms: '🛏️ ' + (filters.bedrooms ? filters.bedrooms + '+ Beds' : '')
    };
    let hasFilters = false;
    Object.keys(filters).forEach(key => {
        if (filters[key] && filters[key] !== 'all') {
            hasFilters = true;
            const chip = document.createElement('span');
            chip.className = 'filter-chip';
            chip.innerHTML = `${labels[key]} <span class="remove-chip" data-filter="${key}">&times;</span>`;
            chips.appendChild(chip);
        }
    });
    if (!hasFilters) {
        chips.innerHTML = '<span style="color:#666;font-size:13px;">No active filters</span>';
    }
    document.querySelectorAll('.remove-chip').forEach(el => {
        el.addEventListener('click', function() {
            const filter = this.dataset.filter;
            const map = {
                'location': 'propertyLocation',
                'type': 'propertyType',
                'price': 'propertyPrice',
                'bedrooms': 'propertyBedrooms'
            };
            const select = document.getElementById(map[filter]);
            if (select) {
                select.value = 'all';
                const event = new Event('change');
                select.dispatchEvent(event);
                updateFilterChips();
                showToast('Filter removed', 'info');
            }
        });
    });
}
// Call on filter change
document.querySelectorAll('#propertyType, #propertyLocation, #propertyPrice, #propertyBedrooms').forEach(el => {
    el.addEventListener('change', updateFilterChips);
});
// Call on page load
setTimeout(updateFilterChips, 500);

// 13. PROPERTY VIEW COUNTER
function trackPropertyView(propertyName) {
    let views = JSON.parse(localStorage.getItem('propertyViews') || '{}');
    views[propertyName] = (views[propertyName] || 0) + 1;
    localStorage.setItem('propertyViews', JSON.stringify(views));
}
document.addEventListener('click', function(e) {
    const card = e.target.closest('.property-card');
    if (card) {
        const name = card.querySelector('h3')?.textContent;
        if (name) trackPropertyView(name);
    }
});

// 14. PRINT PROPERTY DETAILS
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('share-btn') && e.target.classList.contains('print')) {
        const card = e.target.closest('.property-card');
        if (card) {
            const clone = card.cloneNode(true);
            const win = window.open('', '_blank');
            if (win) {
                win.document.write('<html><head><title>Property Details</title>');
                win.document.write('<style>body{font-family: Arial; padding:40px; color:#333;} .property-card{border:1px solid #ddd;padding:20px;border-radius:12px;max-width:500px;margin:auto;} h3{color:#D4AF37;} .property-img{max-width:100%;border-radius:8px;} .btn-luxury{display:none;} .share-buttons{display:none;} .wishlist-btn{display:none;} .compare-checkbox{display:none;}</style>');
                win.document.write('</head><body>');
                win.document.write(clone.innerHTML);
                win.document.write('</body></html>');
                win.document.close();
                win.print();
            }
        }
    }
});

// 15. TYPING EFFECT ON HERO
const heroHeading = document.querySelector('.hero-content h1');
if (heroHeading) {
    const originalText = heroHeading.textContent;
    const words = originalText.split(' ');
    let index = 0;
    heroHeading.innerHTML = '';
    const typingInterval = setInterval(() => {
        if (index < words.length) {
            heroHeading.innerHTML += words[index] + ' ';
            index++;
        } else {
            clearInterval(typingInterval);
            heroHeading.innerHTML = originalText;
        }
    }, 200);
}

console.log('🚀 25X Better features loaded successfully!');


// ============================================
// 50X BETTER – BUSINESS & ENGAGEMENT FEATURES
// ============================================

// ============================================
// LEAD POPUP - WORKING VERSION
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Get all elements
    const leadTriggers = document.querySelectorAll('#leadTrigger');
    const leadPopup = document.getElementById('leadPopup');
    const leadClose = document.getElementById('leadClose');
    const leadForm = document.getElementById('leadForm');

    // If no popup exists, exit
    if (!leadPopup) {
        console.warn('Lead popup not found');
        return;
    }

    // ----- OPEN POPUP WHEN ANY TRIGGER BUTTON IS CLICKED -----
    if (leadTriggers.length > 0) {
        leadTriggers.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Check if already subscribed
                if (localStorage.getItem('leadCaptured') === 'true') {
                    showToast('✅ You are already subscribed!', 'success');
                    return;
                }
                
                // Show popup
                leadPopup.classList.add('show');
                console.log('Popup opened'); // Debug
            });
        });
    } else {
        console.warn('No lead trigger buttons found');
    }

    // ----- CLOSE POPUP WHEN X IS CLICKED -----
    if (leadClose) {
        leadClose.addEventListener('click', function(e) {
            e.stopPropagation();
            leadPopup.classList.remove('show');
            console.log('Popup closed via X');
        });
    }

    // ----- CLOSE POPUP WHEN CLICKING OUTSIDE -----
    leadPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
            console.log('Popup closed via outside click');
        }
    });

    // ----- HANDLE FORM SUBMISSION -----
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('leadName')?.value.trim();
            const email = document.getElementById('leadEmail')?.value.trim();
            
            if (!name) {
                showToast('⚠️ Please enter your full name.', 'error');
                return;
            }
            if (!email || !email.includes('@') || !email.includes('.')) {
                showToast('⚠️ Please enter a valid email address.', 'error');
                return;
            }
            
            // Save to localStorage
            localStorage.setItem('leadCaptured', 'true');
            localStorage.setItem('leadName', name);
            localStorage.setItem('leadEmail', email);
            
            // Show success
            this.innerHTML = '<p style="color:#D4AF37;font-size:1.2rem;">✅ Thank you! We\'ll keep you updated.</p>';
            
            // Close popup after 1.5 seconds
            setTimeout(function() {
                leadPopup.classList.remove('show');
                showToast('🎉 Welcome! You\'ll get early property alerts.', 'success');
            }, 1500);
        });
    }

    // ----- TOAST FUNCTION (if not already defined) -----
    if (typeof showToast === 'undefined') {
        window.showToast = function(message, type) {
            const container = document.getElementById('toastContainer');
            if (container) {
                const toast = document.createElement('div');
                toast.className = 'toast ' + (type || 'info');
                toast.textContent = message;
                container.appendChild(toast);
                setTimeout(function() {
                    if (toast.parentNode) toast.remove();
                }, 4000);
            } else {
                alert(message);
            }
        };
    }

    console.log('Lead popup initialized with ' + leadTriggers.length + ' trigger buttons');
});
// 2. WHATSAPP FLOATING BUTTON (Already in HTML)

// 3. MORTGAGE CALCULATOR
function initMortgageCalculator() {
    const calc = document.getElementById('mortgageCalculator');
    if (!calc) return;
    const priceInput = calc.querySelector('.price-input');
    const downInput = calc.querySelector('.down-input');
    const rateInput = calc.querySelector('.rate-input');
    const termInput = calc.querySelector('.term-input');
    const resultDiv = calc.querySelector('.calc-result');

    function calculateMortgage() {
        const price = parseFloat(priceInput?.value) || 0;
        const down = parseFloat(downInput?.value) || 0;
        const rate = (parseFloat(rateInput?.value) || 0) / 100 / 12;
        const term = (parseFloat(termInput?.value) || 20) * 12;
        const loan = price - down;
        if (loan <= 0 || rate <= 0 || term <= 0) {
            if (resultDiv) resultDiv.innerHTML = '<div class="amount">0 ৳</div><div>Enter valid values</div>';
            return;
        }
        const monthly = loan * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        if (resultDiv) {
            resultDiv.innerHTML = `
                <div class="amount">${monthly.toLocaleString('en-BD', { maximumFractionDigits: 0 })} ৳</div>
                <div style="color:#aaa;font-size:13px;">Monthly payment for ${term} months at ${(rate*1200).toFixed(1)}% APR</div>
                <div style="color:#666;font-size:12px;margin-top:6px;">Total: ${(monthly * term).toLocaleString('en-BD', { maximumFractionDigits: 0 })} ৳</div>
            `;
        }
    }
    [priceInput, downInput, rateInput, termInput].forEach(input => {
        if (input) input.addEventListener('input', calculateMortgage);
    });
    setTimeout(calculateMortgage, 300);
}
initMortgageCalculator();

// 4. FEATURED BADGE – Add to featured properties in render functions
// (Already integrated in the property card template)

// 5. PROPERTY STATUS – Add to property cards
// This will be integrated via the render functions

// 6. SIMILAR PROPERTIES SUGGESTION
function getSimilarProperties(propertyName, propertiesList) {
    const current = propertiesList.find(p => p.name === propertyName);
    if (!current) return [];
    return propertiesList.filter(p => 
        p.name !== propertyName && 
        (p.location === current.location || p.type === current.type)
    ).slice(0, 3);
}

// 7. EMAIL PROPERTY ALERTS
document.getElementById('alertEmail')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value.trim();
    if (email && email.includes('@')) {
        localStorage.setItem('alertEmail', email);
        showToast('📧 You\'ll receive property alerts at ' + email, 'success');
        this.querySelector('input').value = '';
    }
});

// 8. ENHANCED AI WITH CONTEXT MEMORY
let aiContext = [];
const originalProcessQuery = window.processQuery || function() {};

// 9. NEIGHBORHOOD DATA (Example)
const neighborhoodData = {
    'gulshan': { schools: 5, hospitals: 3, markets: 4, distance: '2 km' },
    'banani': { schools: 4, hospitals: 2, markets: 5, distance: '1.5 km' },
    'baridhara': { schools: 6, hospitals: 4, markets: 3, distance: '3 km' },
    'uttara': { schools: 8, hospitals: 3, markets: 6, distance: '4 km' },
    'dhanmondi': { schools: 7, hospitals: 5, markets: 8, distance: '1 km' },
    'bashundhara': { schools: 5, hospitals: 2, markets: 4, distance: '2.5 km' }
};

function showNeighborhoodInfo(location) {
    const info = neighborhoodData[location];
    if (!info) return;
    const container = document.querySelector('.neighborhood-info');
    if (!container) return;
    container.innerHTML = `
        <div class="neighborhood-item"><i class="fas fa-school"></i><span>${info.schools} Schools</span></div>
        <div class="neighborhood-item"><i class="fas fa-hospital"></i><span>${info.hospitals} Hospitals</span></div>
        <div class="neighborhood-item"><i class="fas fa-store"></i><span>${info.markets} Markets</span></div>
        <div class="neighborhood-item"><i class="fas fa-map-pin"></i><span>${info.distance} to center</span></div>
    `;
}

// 10. BLOG DATA
const blogPosts = [
    {
        title: "Top 5 Luxury Neighborhoods in Dhaka",
        excerpt: "Discover the most prestigious areas for luxury living in the capital.",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
        date: "Jan 15, 2025"
    },
    {
        title: "Real Estate Investment Guide 2025",
        excerpt: "Expert tips on maximizing returns in Bangladesh's growing market.",
        image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
        date: "Jan 10, 2025"
    },
    {
        title: "Why Luxury Properties Are a Smart Investment",
        excerpt: "The benefits of investing in premium real estate assets.",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
        date: "Jan 5, 2025"
    }
];

function renderBlog() {
    const container = document.querySelector('.blog-preview');
    if (!container) return;
    container.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-content">
                <div class="blog-date">${post.date}</div>
                <h4>${post.title}</h4>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>
    `).join('');
}
setTimeout(renderBlog, 500);

// 11. TESTIMONIALS WITH PHOTOS
const testimonials = [
    {
        name: "Mr. Rahman",
        location: "Gulshan",
        text: "SAM Properties helped me find my dream home. Professional and trustworthy service.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Mrs. Khan",
        location: "Banani",
        text: "The best real estate experience in Bangladesh. Highly recommended for serious buyers.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Dr. Ahmed",
        location: "Uttara",
        text: "Excellent service, transparent process, and amazing properties. 5 stars!",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

function renderTestimonials() {
    const container = document.querySelector('.testimonial-grid');
    if (!container) return;
    container.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <img src="${t.image}" alt="${t.name}">
            <div class="testimonial-text">"${t.text}"</div>
            <div class="testimonial-author">${t.name} – ${t.location}</div>
        </div>
    `).join('');
}
setTimeout(renderTestimonials, 500);

// 12. PROPERTY SCORE
function calculatePropertyScore(property) {
    let score = 0;
    if (property.bedrooms >= 4) score += 20;
    else if (property.bedrooms >= 3) score += 15;
    else if (property.bedrooms >= 2) score += 10;
    if (property.area >= 4000) score += 20;
    else if (property.area >= 3000) score += 15;
    else if (property.area >= 2000) score += 10;
    if (['gulshan', 'banani', 'baridhara'].includes(property.location)) score += 20;
    else if (['dhanmondi', 'bashundhara'].includes(property.location)) score += 15;
    else score += 10;
    if (property.price >= 80000000) score += 15;
    else if (property.price >= 40000000) score += 10;
    else score += 5;
    return Math.min(score, 100);
}

// 13. MARK PROPERTY STATUS
function getPropertyStatus(property) {
    const statuses = ['available', 'available', 'available', 'pending', 'sold'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// 14. ENHANCED PROPERTY CARD RENDERING (to be integrated)
console.log('50X Better features loaded successfully!');


// ============================================
// ADDED FEATURES – TOAST, COMPARE, FULLSCREEN, COOKIE
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // 1. TOAST FUNCTION
    window.showToast = function(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) {
            alert(message);
            return;
        }
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, 4000);
    };

    // Test toast on load
    setTimeout(() => {
        showToast('🚀 Welcome to SAM Properties!', 'success');
    }, 1500);

  

    // 3. FULLSCREEN IMAGE VIEW
    document.addEventListener('click', function(e) {
        if (e.target.closest('.property-img')) {
            const img = e.target.closest('.property-img');
            const fullscreen = document.getElementById('fullscreenView');
            const fullImg = document.getElementById('fullscreenImg');
            if (fullscreen && fullImg) {
                fullImg.src = img.src;
                fullscreen.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }
    });

    document.querySelector('.close-fs')?.addEventListener('click', function() {
        const fullscreen = document.getElementById('fullscreenView');
        if (fullscreen) {
            fullscreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.getElementById('fullscreenView')?.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 4. COOKIE CONSENT
    const cookieConsent = document.getElementById('cookieConsent');
    if (cookieConsent) {
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieConsent.style.display = 'flex';
        }
        
        document.getElementById('acceptCookies')?.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.style.display = 'none';
            showToast('🍪 Cookies accepted!', 'success');
        });
    }

    // Initialize
    updateCompareBar();
    setTimeout(addCompareToCards, 500);
    
    const observer = new MutationObserver(() => addCompareToCards());
    const grid = document.getElementById('propertiesGrid');
    if (grid) {
        observer.observe(grid, { childList: true, subtree: true });
    }
});

console.log('🚀 All features added successfully!');


// ===== FEATURE 1: ADVANCED PROPERTY SEARCH =====
document.getElementById('searchBtn')?.addEventListener('click', function() {
    const keyword = document.getElementById('searchKeyword').value.toLowerCase();
    const price = document.getElementById('searchPrice').value;
    const bedrooms = document.getElementById('searchBedrooms').value;
    
    const results = properties.filter(p => {
        let match = true;
        if (keyword && !p.name.toLowerCase().includes(keyword) && !p.locationDisplay.toLowerCase().includes(keyword)) match = false;
        if (price !== 'all') {
            const [min, max] = price.split('-');
            if (max === '10+') { if (p.price < 100000000) match = false; }
            else { if (p.price < parseInt(min) * 1000000 || p.price > parseInt(max) * 1000000) match = false; }
        }
        if (bedrooms !== 'all') {
            const bed = parseInt(bedrooms);
            if (p.bedrooms < bed) match = false;
        }
        return match;
    });
    
    const container = document.getElementById('searchResults');
    if (results.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:40px; color:#888;">No properties match your criteria</div>';
    } else {
        container.innerHTML = results.slice(0, 6).map(p => `
            <div class="property-card">
                <img src="${p.image}" alt="${p.name}">
                <div class="info">
                    <h4>${p.name}</h4>
                    <p>${p.locationDisplay} | ${p.priceText}</p>
                    <p style="color:#666; font-size:12px;">${p.bedrooms} Beds | ${p.area}</p>
                    <a href="re-contact.html" class="btn-luxury" style="display:inline-block; margin-top:10px; padding:6px 18px; background:#D4AF37; color:#0a0a0a; border-radius:30px; text-decoration:none; font-weight:600; font-size:12px;">View →</a>
                </div>
            </div>
        `).join('');
    }
});
