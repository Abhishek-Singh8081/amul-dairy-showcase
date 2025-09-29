import { Truck, Shield, Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyAmul = () => {
  const features = [
    {
      icon: Truck,
      title: "Daily Fresh Delivery",
      description: "Fresh dairy products delivered to your doorstep every morning before 7 AM"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "75+ years of trust with rigorous quality checks and pure ingredients"
    },
    {
      icon: Clock,
      title: "Convenient Ordering",
      description: "Order anytime till midnight and set up recurring deliveries for your needs"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every product is crafted with care by our farmers and delivered with love"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Amul?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            With your needs in mind, Amul is designed to provide extreme convenience 
            and comfort right at your doorstep, same time every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full shadow-soft">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="mt-16 bg-cream rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How It Works
            </h3>
            <p className="text-muted-foreground text-lg">
              Simple steps to get fresh dairy delivered daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full text-accent-foreground font-bold text-lg shadow-soft">
                1
              </div>
              <h4 className="text-xl font-semibold text-foreground">Register & Top-up</h4>
              <p className="text-muted-foreground">
                Sign up with your basic details and add money to your Amul wallet
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full text-accent-foreground font-bold text-lg shadow-soft">
                2
              </div>
              <h4 className="text-xl font-semibold text-foreground">Set Your Order</h4>
              <p className="text-muted-foreground">
                Choose from 200+ products and create recurring orders for your daily needs
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full text-accent-foreground font-bold text-lg shadow-soft">
                3
              </div>
              <h4 className="text-xl font-semibold text-foreground">We Deliver</h4>
              <p className="text-muted-foreground">
                Fresh products delivered at your doorstep every morning by 7 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmul;