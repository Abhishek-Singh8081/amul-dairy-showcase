import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1946", title: "Foundation", description: "Amul was founded in Anand, Gujarat" },
    { year: "1955", title: "National Recognition", description: "Became India's leading dairy brand" },
    { year: "1970", title: "White Revolution", description: "Led India's dairy revolution" },
    { year: "2000", title: "Global Expansion", description: "Expanded to international markets" },
    { year: "2024", title: "Digital Innovation", description: "Launched online delivery platform" }
  ];

  const values = [
    {
      icon: Users,
      title: "Farmer First",
      description: "We believe in empowering our farmers and ensuring fair prices for their produce"
    },
    {
      icon: Heart,
      title: "Quality Promise",
      description: "Every product undergoes rigorous quality checks to ensure the best for our customers"
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description: "We are committed to sustainable farming and environmental responsibility"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "75+ years of excellence in dairy processing and innovation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Amul
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              For over 75 years, Amul has been synonymous with pure, nutritious dairy products. 
              From a small cooperative in Gujarat to India's largest dairy brand, 
              our journey is one of trust, quality, and innovation.
            </p>
          </div>
        </section>


        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-accent text-accent-foreground">Our Story</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    The Taste of India
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Amul began as a simple idea - to ensure that farmers get fair prices for their milk 
                    and consumers get pure, unadulterated dairy products. What started as a small 
                    cooperative in Anand, Gujarat, has grown into India's largest dairy brand.
                  </p>
                  <p>
                    Our success story is built on the foundation of cooperative farming, where 
                    millions of farmers across India are our partners. We believe that when farmers 
                    prosper, the entire nation prospers.
                  </p>
                  <p>
                    Today, Amul is not just a brand - it's a movement that has transformed the 
                    dairy industry in India and continues to set benchmarks for quality and innovation.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-cream rounded-lg">
                    <div className="text-2xl font-bold text-primary">18M+</div>
                    <div className="text-sm text-muted-foreground">Farmers</div>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-lg">
                    <div className="text-2xl font-bold text-primary">₹53K Cr</div>
                    <div className="text-sm text-muted-foreground">Annual Turnover</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src="/mainbanner.jpeg"
                    alt="Amul Heritage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-strong">
                  <div className="text-center">
                    <div className="text-2xl font-bold">75+</div>
                    <div className="text-sm">Years of Trust</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full shadow-soft">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Key milestones in our 75+ year journey
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>

                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft z-10"></div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card className="shadow-soft border-0">
                        <CardContent className="p-6">
                          <Badge className="bg-accent text-accent-foreground mb-2">
                            {milestone.year}
                          </Badge>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Mission
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                "To make India self-sufficient in dairy products and to ensure that 
                every Indian has access to pure, nutritious, and affordable dairy products 
                while empowering millions of farmers across the country."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">100M+</div>
                  <div className="text-primary-foreground/80">Lives Impacted</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">200+</div>
                  <div className="text-primary-foreground/80">Product Varieties</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-primary-foreground/80">Countries Served</div>
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

export default About;