import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/whatsappvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 mt-[3vh]">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide"
            style={{
              fontFamily: "'Great Vibes', cursive",
              letterSpacing: '0.05em',
              lineHeight: 1.1,
            }}
          >
            Fresh Daily Dairy
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Delivered at Your Doorstep
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience the taste of pure, farm-fresh dairy products. From creamy milk to delicious 
            butter, we bring India's finest dairy straight to your home every morning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NavLink
  to="/products"
  className={({ isActive }) =>
    `inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-semibold
    transition-colors duration-300
    shadow-md
    ${
      isActive
        ? "bg-accent text-accent-foreground"
        : "bg-accent hover:bg-accent-light text-accent-foreground"
    }`
  }
>
  Start Your Daily Delivery
  <ArrowRight className="ml-2 h-5 w-5" />
</NavLink>

            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 transition-colors duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">75+</div>
              <div className="text-white/80 text-sm md:text-base">Years of Trust</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">100M+</div>
              <div className="text-white/80 text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">200+</div>
              <div className="text-white/80 text-sm md:text-base">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">Pan</div>
              <div className="text-white/80 text-sm md:text-base">India Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
