import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Amul Fresh Milk",
      category: "Milk",
      price: "₹28",
      originalPrice: "₹32",
      rating: 4.8,
      image: "/image6.png",
      description: "Farm fresh full cream milk",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Amul Butter",
      category: "Butter",
      price: "₹58",
      originalPrice: "₹65",
      rating: 4.9,
      image: "/image5.jpeg",
      description: "Utterly butterly delicious",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Amul Cheese Cubes",
      category: "Cheese",
      price: "₹95",
      originalPrice: "₹105",
      rating: 4.7,
      image: "/image2.jpeg",
      description: "Fresh and creamy cheese",
      badge: "New"
    },
    {
      id: 4,
      name: "Amul Ice Cream",
      category: "Ice Cream",
      price: "₹45",
      originalPrice: "₹52",
      rating: 4.6,
      image: "/image4.jpeg",
      description: "Rich vanilla ice cream",
      badge: "Popular"
    }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most loved dairy products, made with care and delivered fresh to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft bg-background">
              <CardContent className="p-0 relative overflow-hidden">
                {/* Badge */}
                <Badge 
                  className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground"
                >
                  {product.badge}
                </Badge>

                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Product Image */}
                <div className="aspect-[4/3] bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">(234 reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      <span className="text-lg font-bold text-foreground">
                        {product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary shadow-soft"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;