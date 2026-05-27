document.addEventListener('DOMContentLoaded', function() {
  
  AOS.init({ duration: 1000, once: true, offset: 100 });

  // ========== 100+ REAL PROPERTIES (YOUR EXISTING ARRAY – KEPT AS IS) ==========
  const properties = [
    // ----- GULSHAN -----
    { name: "Gulshan Lake View Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 18500000, priceText: "1.85 Crore", bedrooms: 2, area: "1850 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Garden Residency", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 19500000, priceText: "1.95 Crore", bedrooms: 2, area: "1900 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Park View", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 25000000, priceText: "2.5 Crore", bedrooms: 3, area: "2100 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Elite Tower", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 32000000, priceText: "3.2 Crore", bedrooms: 3, area: "2300 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Avenue Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 38000000, priceText: "3.8 Crore", bedrooms: 3, area: "2500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Mid-Range Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 42000000, priceText: "4.2 Crore", bedrooms: 3, area: "2700 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Premium Residency", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 48000000, priceText: "4.8 Crore", bedrooms: 4, area: "3000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Lake Terrace", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 52000000, priceText: "5.2 Crore", bedrooms: 4, area: "3200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Presidential Tower", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 85000000, priceText: "8.5 Crore", bedrooms: 5, area: "5800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Royal Villa", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 125000000, priceText: "12.5 Crore", bedrooms: 5, area: "6500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Imperial Palace", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 180000000, priceText: "18 Crore", bedrooms: 6, area: "8500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Compact Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 25000000, priceText: "2.5 Crore", bedrooms: 2, area: "1750 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Cozy Residency", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 29000000, priceText: "2.9 Crore", bedrooms: 2, area: "1950 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Premium 2BHK", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 45000000, priceText: "4.5 Crore", bedrooms: 2, area: "2200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Elite 2BHK", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 48000000, priceText: "4.8 Crore", bedrooms: 2, area: "2350 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan 3BHK Luxury", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 35000000, priceText: "3.5 Crore", bedrooms: 3, area: "2400 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan 3BHK Premium", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 55000000, priceText: "5.5 Crore", bedrooms: 3, area: "3100 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan 3BHK Penthouse", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 75000000, priceText: "7.5 Crore", bedrooms: 3, area: "3800 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan 3BHK Grand", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 120000000, priceText: "12 Crore", bedrooms: 3, area: "5000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan 4BHK Executive", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 60000000, priceText: "6 Crore", bedrooms: 4, area: "3500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan 4BHK Duplex", location: "gulshan", locationDisplay: "Gulshan", type: "duplex", price: 90000000, priceText: "9 Crore", bedrooms: 4, area: "4500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan 5BHK Mansion", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 200000000, priceText: "20 Crore", bedrooms: 6, area: "9500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Central Heights", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 27000000, priceText: "2.7 Crore", bedrooms: 2, area: "2000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Sky Residences", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 110000000, priceText: "11 Crore", bedrooms: 4, area: "4600 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Green Villas", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 160000000, priceText: "16 Crore", bedrooms: 5, area: "7000 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

    // ----- BANANI -----
    { name: "Banani Lake View Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Garden Apartment", location: "banani", locationDisplay: "Banani", type: "apartment", price: 28000000, priceText: "2.8 Crore", bedrooms: 3, area: "2200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Central Residency", location: "banani", locationDisplay: "Banani", type: "apartment", price: 35000000, priceText: "3.5 Crore", bedrooms: 3, area: "2600 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Commercial Plaza", location: "banani", locationDisplay: "Banani", type: "commercial", price: 45000000, priceText: "4.5 Crore", bedrooms: 0, area: "5500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Duplex Residence", location: "banani", locationDisplay: "Banani", type: "duplex", price: 62000000, priceText: "6.2 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Corporate Tower", location: "banani", locationDisplay: "Banani", type: "commercial", price: 95000000, priceText: "9.5 Crore", bedrooms: 0, area: "7200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Luxury Penthouse", location: "banani", locationDisplay: "Banani", type: "penthouse", price: 140000000, priceText: "14 Crore", bedrooms: 5, area: "5200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Sky Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 165000000, priceText: "16.5 Crore", bedrooms: 5, area: "6000 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Studio Apartment", location: "banani", locationDisplay: "Banani", type: "apartment", price: 26000000, priceText: "2.6 Crore", bedrooms: 2, area: "1700 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani 2BHK Residency", location: "banani", locationDisplay: "Banani", type: "apartment", price: 46000000, priceText: "4.6 Crore", bedrooms: 2, area: "2100 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Grand Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 175000000, priceText: "17.5 Crore", bedrooms: 5, area: "6800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Lake Edge", location: "banani", locationDisplay: "Banani", type: "apartment", price: 39000000, priceText: "3.9 Crore", bedrooms: 3, area: "2450 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Corporate Suites", location: "banani", locationDisplay: "Banani", type: "commercial", price: 68000000, priceText: "6.8 Crore", bedrooms: 0, area: "4800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

    // ----- BARIDHARA -----
    { name: "Baridhara Diplomatic Enclave", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 19500000, priceText: "1.95 Crore", bedrooms: 2, area: "1950 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Green View", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 25000000, priceText: "2.5 Crore", bedrooms: 2, area: "2000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara DOHS Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 38000000, priceText: "3.8 Crore", bedrooms: 4, area: "3200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Lake View", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 58000000, priceText: "5.8 Crore", bedrooms: 3, area: "2800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Executive Residency", location: "baridhara", locationDisplay: "Baridhara", type: "duplex", price: 88000000, priceText: "8.8 Crore", bedrooms: 4, area: "4800 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Presidential Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 165000000, priceText: "16.5 Crore", bedrooms: 6, area: "7200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara 2BHK Apartment", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 21000000, priceText: "2.1 Crore", bedrooms: 2, area: "1850 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Compact Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 42000000, priceText: "4.2 Crore", bedrooms: 2, area: "2600 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara 6BHK Estate", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 220000000, priceText: "22 Crore", bedrooms: 6, area: "10000 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Golden Enclave", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 115000000, priceText: "11.5 Crore", bedrooms: 5, area: "6200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Diplomatic Tower", location: "baridhara", locationDisplay: "Baridhara", type: "penthouse", price: 135000000, priceText: "13.5 Crore", bedrooms: 5, area: "5800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Royal Residency", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 120000000, priceText: "12 Crore", bedrooms: 4, area: "5400 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Embassy Heights", location: "baridhara", locationDisplay: "Baridhara", type: "penthouse", price: 145000000, priceText: "14.5 Crore", bedrooms: 5, area: "6200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Central Park", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 33000000, priceText: "3.3 Crore", bedrooms: 3, area: "2300 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Lake Palace", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 155000000, priceText: "15.5 Crore", bedrooms: 5, area: "6800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

    // ----- UTTARA -----
    { name: "Uttara Sky Garden", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 12000000, priceText: "1.2 Crore", bedrooms: 2, area: "1300 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Lake View Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 15000000, priceText: "1.5 Crore", bedrooms: 2, area: "1500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Sector 6 Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 28000000, priceText: "2.8 Crore", bedrooms: 3, area: "2100 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Executive Penthouse", location: "uttara", locationDisplay: "Uttara", type: "penthouse", price: 49000000, priceText: "4.9 Crore", bedrooms: 4, area: "3500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Lake View Villa", location: "uttara", locationDisplay: "Uttara", type: "villa", price: 75000000, priceText: "7.5 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Commercial Hub", location: "uttara", locationDisplay: "Uttara", type: "commercial", price: 110000000, priceText: "11 Crore", bedrooms: 0, area: "6800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Budget Home", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 13000000, priceText: "1.3 Crore", bedrooms: 2, area: "1400 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Economy Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 16000000, priceText: "1.6 Crore", bedrooms: 2, area: "1550 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara 5BHK Penthouse", location: "uttara", locationDisplay: "Uttara", type: "penthouse", price: 95000000, priceText: "9.5 Crore", bedrooms: 5, area: "4800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Sector 4 Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "1950 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Lake Edge Villa", location: "uttara", locationDisplay: "Uttara", type: "villa", price: 88000000, priceText: "8.8 Crore", bedrooms: 4, area: "4500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

    // ----- DHANMONDI -----
    { name: "Dhanmondi Lake View Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 2, area: "1800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Luxury Residency", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 32000000, priceText: "3.2 Crore", bedrooms: 3, area: "2200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Royal Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 39000000, priceText: "3.9 Crore", bedrooms: 3, area: "2700 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Duplex Home", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "duplex", price: 65000000, priceText: "6.5 Crore", bedrooms: 4, area: "4000 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Presidential Suite", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "penthouse", price: 105000000, priceText: "10.5 Crore", bedrooms: 5, area: "4800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Royal Villa", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "villa", price: 155000000, priceText: "15.5 Crore", bedrooms: 5, area: "6200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Budget Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 18000000, priceText: "1.8 Crore", bedrooms: 2, area: "1600 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Premium 2BHK", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 38000000, priceText: "3.8 Crore", bedrooms: 2, area: "2300 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi 5BHK Palace", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "villa", price: 190000000, priceText: "19 Crore", bedrooms: 5, area: "7500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Lake Tower", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 47000000, priceText: "4.7 Crore", bedrooms: 3, area: "2850 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Elite Penthouse", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "penthouse", price: 125000000, priceText: "12.5 Crore", bedrooms: 4, area: "5200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

    // ----- BASHUNDHARA -----
    { name: "Bashundhara R/A Apartment", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 14000000, priceText: "1.4 Crore", bedrooms: 2, area: "1450 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Green Apartment", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 17000000, priceText: "1.7 Crore", bedrooms: 2, area: "1600 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Family Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 34000000, priceText: "3.4 Crore", bedrooms: 3, area: "2800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Executive Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 54000000, priceText: "5.4 Crore", bedrooms: 4, area: "3800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Premium Penthouse", location: "bashundhara", locationDisplay: "Bashundhara", type: "penthouse", price: 78000000, priceText: "7.8 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Commercial Space", location: "bashundhara", locationDisplay: "Bashundhara", type: "commercial", price: 130000000, priceText: "13 Crore", bedrooms: 0, area: "7500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Value Home", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 15000000, priceText: "1.5 Crore", bedrooms: 2, area: "1500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara 2BHK Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 32000000, priceText: "3.2 Crore", bedrooms: 2, area: "2500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara 6BHK Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 145000000, priceText: "14.5 Crore", bedrooms: 6, area: "8200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Green View", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 24000000, priceText: "2.4 Crore", bedrooms: 3, area: "2000 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Royal Tower", location: "bashundhara", locationDisplay: "Bashundhara", type: "penthouse", price: 98000000, priceText: "9.8 Crore", bedrooms: 4, area: "4800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },

    // ========== 15 NEW PROPERTIES ==========
    { name: "Gulshan Lakefront Penthouse", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 95000000, priceText: "9.5 Crore", bedrooms: 4, area: "4900 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani City View Apartment", location: "banani", locationDisplay: "Banani", type: "apartment", price: 41000000, priceText: "4.1 Crore", bedrooms: 3, area: "2550 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Lake Tower", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 67000000, priceText: "6.7 Crore", bedrooms: 3, area: "3100 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Executive Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 26000000, priceText: "2.6 Crore", bedrooms: 3, area: "2050 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Garden Villa", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "villa", price: 85000000, priceText: "8.5 Crore", bedrooms: 4, area: "4300 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Lake View", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 31000000, priceText: "3.1 Crore", bedrooms: 3, area: "2250 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Executive Suite", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 36000000, priceText: "3.6 Crore", bedrooms: 3, area: "2450 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Royal Penthouse", location: "banani", locationDisplay: "Banani", type: "penthouse", price: 155000000, priceText: "15.5 Crore", bedrooms: 5, area: "5600 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Green Residency", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 28000000, priceText: "2.8 Crore", bedrooms: 2, area: "2100 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Royal Villa", location: "uttara", locationDisplay: "Uttara", type: "villa", price: 65000000, priceText: "6.5 Crore", bedrooms: 4, area: "4000 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Executive Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 43000000, priceText: "4.3 Crore", bedrooms: 3, area: "2750 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Penthouse Suite", location: "bashundhara", locationDisplay: "Bashundhara", type: "penthouse", price: 105000000, priceText: "10.5 Crore", bedrooms: 5, area: "5100 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Park Residences", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 2, area: "1800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Lake Front Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 185000000, priceText: "18.5 Crore", bedrooms: 6, area: "7200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Sky Gardens", location: "baridhara", locationDisplay: "Baridhara", type: "penthouse", price: 128000000, priceText: "12.8 Crore", bedrooms: 5, area: "5900 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" }
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
