import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Heart, ShoppingCart, Search } from "lucide-react";

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "Amul Fresh Milk",
    category: "milk",
    price: "₹28",
    originalPrice: "₹32",
    rating: 4.8,
    image: "/image6.png",
    description: "Farm fresh full cream milk, rich in calcium and protein",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Amul Butter",
    category: "butter",
    price: "₹58",
    originalPrice: "₹65",
    rating: 4.9,
    image: "/image5.jpeg",
    description: "Utterly butterly delicious, made from pure cream",
    badge: "Premium"
  },
  {
    id: 3,
    name: "Amul Cheese Cubes",
    category: "cheese",
    price: "₹95",
    originalPrice: "₹105",
    rating: 4.7,
    image: "/image2.jpeg",
    description: "Fresh and creamy processed cheese cubes",
    badge: "New"
  },
  {
    id: 4,
    name: "Amul Vanilla Ice Cream",
    category: "ice-cream",
    price: "₹45",
    originalPrice: "₹52",
    rating: 4.6,
    image: "/image4.jpeg",
    description: "Rich and creamy vanilla ice cream",
    badge: "Popular"
  },
  {
    id: 5,
    name: "Amul Toned Milk",
    category: "milk",
    price: "₹24",
    originalPrice: "₹28",
    rating: 4.5,
    image: "/image3.jpeg",
    description: "Light and nutritious toned milk",
    badge: ""
  },
  {
    id: 6,
    name: "Amul Chocolate",
    category: "sweets",
    price: "₹35",
    originalPrice: "₹40",
    rating: 4.8,
    image: "/image1.jpeg",
    description: "Rich milk chocolate bar",
    badge: "Favorite"
  }
];

const categories = [
  { value: "all", label: "All Products" },
  { value: "milk", label: "Milk" },
  { value: "butter", label: "Butter" },
  { value: "cheese", label: "Cheese" },
  { value: "ice-cream", label: "Ice Cream" },
  { value: "sweets", label: "Sweets & Chocolates" }
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [sortBy, setSortBy] = useState("name");

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price.replace("₹", "")) - parseInt(b.price.replace("₹", ""));
      case "price-high":
        return parseInt(b.price.replace("₹", "")) - parseInt(a.price.replace("₹", ""));
      case "rating":
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover our complete range of fresh dairy products, 
              crafted with care and delivered with love
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-cream border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {sortedProducts.length} of {allProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                  <CardContent className="p-0 relative overflow-hidden">
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>

                    <div className="aspect-[4/3] bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4 space-y-3">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {categories.find(c => c.value === product.category)?.label}
                        </p>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">(234 reviews)</span>
                      </div>

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
                            Buy Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your criteria
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;