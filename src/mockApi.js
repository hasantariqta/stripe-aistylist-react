// This is a mock API for demonstration purposes
// In a real application, this would be handled by your backend server

// Mock function to simulate creating a payment intent
export const createPaymentIntent = async (amount) => {
  // In a real app, you would make an API call to your server
  // which would then call Stripe's API to create a PaymentIntent
  
  console.log(`Creating payment intent for amount: ${amount}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return a mock client secret
  // IMPORTANT: In production, NEVER do this! Always get a real client secret from your server
  return {
    clientSecret: "mock_client_secret_" + Math.random().toString(36).substring(2, 15),
  };
};
