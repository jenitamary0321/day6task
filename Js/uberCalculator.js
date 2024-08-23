class UberPriceCalculator {
    constructor(baseFare, costPerKm, bookingFee) {
      this.baseFare = baseFare;        // Base fare
      this.costPerKm = costPerKm;      // Cost per kilometer
      this.bookingFee = bookingFee;    // Booking fee (if any)
    }
  
    // Method to calculate price based on distance
    calculatePrice(distance) {
      return this.baseFare + (this.costPerKm * distance) + this.bookingFee;
    }
  }
  
  // Example usage:
  const uberCalculator = new UberPriceCalculator(50, 10, 20); // Base fare: 50, Cost per km: 10, Booking fee: 20
  const distance = 15; // Distance in kilometers
  const price = uberCalculator.calculatePrice(distance);
  
  console.log(`The Uber price for ${distance} km is: ₹${price}`);
  