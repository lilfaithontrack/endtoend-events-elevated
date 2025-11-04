import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Music } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-20 relative overflow-hidden min-h-[80vh] flex items-center">
          {/* Burgundy Spotlights */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-md mx-auto">
              <div className="bg-white/5 rounded-lg border border-white/10 p-8 animate-fade-in">
                {/* Logo */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-2">
                    <Music className="h-10 w-10 text-accent" />
                    <span className="font-serif text-2xl font-bold text-gradient-luxury">
                      End To End
                    </span>
                  </div>
                </div>

                {/* Toggle Tabs */}
                <div className="flex gap-2 mb-8 bg-white/5 p-1 rounded-lg">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                      isLogin
                        ? "bg-accent text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                      !isLogin
                        ? "bg-accent text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Register
                  </button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                  {!isLogin && (
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>

                  {!isLogin && (
                    <div>
                      <Label htmlFor="confirm-password" className="text-white">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex justify-end">
                      <button type="button" className="text-sm text-accent hover:text-accent/80 transition-colors">
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <Button variant="luxury" className="w-full mt-6">
                    {isLogin ? "Login" : "Create Account"}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-black text-white/50">Or continue with</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    Google
                  </Button>
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    Facebook
                  </Button>
                </div>
              </div>

              <p className="text-center text-white/50 text-sm mt-6">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
