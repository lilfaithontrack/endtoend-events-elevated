import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const ticketName = searchParams.get("ticket") || "General Admission";
  const ticketPrice = searchParams.get("price") || "$79";
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Confirmed!",
      description: `Your ${quantity} ${ticketName} ticket(s) have been purchased.`,
    });
    setTimeout(() => navigate("/events"), 2000);
  };

  const totalPrice = parseFloat(ticketPrice.replace("$", "")) * quantity;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-20 relative overflow-hidden">
          {/* Burgundy Spotlights */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} />
          
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <Button
              variant="ghost"
              onClick={() => navigate("/tickets")}
              className="mb-6 text-white/70 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tickets
            </Button>

            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient-luxury">Checkout</span>
              </h1>
              <p className="text-white/70 text-lg">Complete your ticket purchase</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 animate-fade-in">
                    <h2 className="font-serif text-2xl font-bold text-white mb-6">Contact Information</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white/90">First Name</Label>
                        <Input
                          id="firstName"
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white/90">Last Name</Label>
                        <Input
                          id="lastName"
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email" className="text-white/90">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="phone" className="text-white/90">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center gap-2 mb-6">
                      <CreditCard className="h-6 w-6 text-accent" />
                      <h2 className="font-serif text-2xl font-bold text-white">Payment Details</h2>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardName" className="text-white/90">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber" className="text-white/90">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-white/90">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            required
                            className="mt-2 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-white/90">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                            maxLength={3}
                            className="mt-2 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-white/50 text-sm">
                      <Lock className="h-4 w-4" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </div>

                  <Button type="submit" variant="luxury" className="w-full" size="lg">
                    Complete Purchase - ${totalPrice.toFixed(2)}
                  </Button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 sticky top-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <h2 className="font-serif text-2xl font-bold text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-white/90">
                      <span className="font-medium">{ticketName}</span>
                      <span>{ticketPrice}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-white/90">Quantity</Label>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="h-8 w-8 p-0 border-white/20 text-white hover:bg-white/10"
                        >
                          -
                        </Button>
                        <span className="text-white font-medium w-8 text-center">{quantity}</span>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.min(10, quantity + 1))}
                          className="h-8 w-8 p-0 border-white/20 text-white hover:bg-white/10"
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-white/70 mb-2">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-white/70 mb-2">
                        <span>Service Fee</span>
                        <span>${(totalPrice * 0.1).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-white font-bold text-xl mt-4">
                        <span>Total</span>
                        <span className="text-accent">${(totalPrice * 1.1).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                    <p className="text-white/70 text-sm">
                      Tickets will be sent to your email address immediately after purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
