import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, ShoppingCart, Share2, ArrowLeft, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample product data - in real app, this would come from an API
const getProductById = (id: string) => {
  const products = [
    {
      id: 1,
      name: "Amul Fresh Milk",
      category: "Milk",
      price: "₹28",
      originalPrice: "₹32",
      rating: 4.8,
      reviewCount: 1247,
      images: [
        "/api/placeholder/600/600",
        "/api/placeholder/600/600",
        "/api/placeholder/600/600"
      ],
      description: "Farm fresh full cream milk, rich in calcium and protein. Sourced directly from our partner farmers and processed with utmost care to retain natural goodness.",
      badge: "Bestseller",
      inStock: true,
      nutritionalInfo: {
        calories: "67 per 100ml",
        protein: "3.4g",
        fat: "4.1g",
        carbs: "4.8g",
        calcium: "120mg"
      },
      ingredients: ["Fresh Cow Milk", "Vitamin D", "Vitamin A"],
      benefits: [
        "Rich in calcium for strong bones",
        "High-quality protein for muscle growth",
        "Natural vitamins and minerals",
        "No artificial preservatives"
      ],
      relatedProducts: [2, 3, 4]
    }
  ];
  
  return products.find(p => p.id === parseInt(id)) || products[0];
};

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = getProductById(id || "1");

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} ${isWishlisted ? "removed from" : "added to"} your wishlist`,
    });
  };

  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders above ₹200"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "100% pure and fresh"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Breadcrumb */}
        <section className="py-4 bg-cream border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-6"
              asChild
            >
              <Link to="/products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  {product.badge && (
                    <Badge className="bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {product.name}
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-accent fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Inclusive of all taxes • Free delivery on orders above ₹200
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Quantity</label>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-medium w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-gradient-primary shadow-soft text-lg py-6"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleWishlist}
                      className="px-6"
                    >
                      <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
                    </Button>
                    <Button variant="outline" size="lg" className="px-6">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-lg py-6"
                  >
                    Buy Now
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-cream p-2 rounded-lg">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="mt-16">
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="shadow-soft border-0">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                          {product.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-muted-foreground">
                              • {ingredient}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="shadow-soft border-0">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Benefits</h3>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <li key={index} className="text-muted-foreground">
                              • {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="nutrition" className="mt-6">
                  <Card className="shadow-soft border-0">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Nutritional Information</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-cream rounded-lg">
                            <div className="font-semibold text-primary capitalize">{key}</div>
                            <div className="text-sm text-muted-foreground">{value}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Customer Reviews</h3>
                      <Button variant="outline">Write a Review</Button>
                    </div>
                    
                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <Card key={review} className="shadow-soft border-0">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="font-medium">Customer {review}</div>
                                <div className="flex items-center space-x-1 mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                                  ))}
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">2 days ago</div>
                            </div>
                            <p className="text-muted-foreground">
                              Excellent quality milk! Fresh and creamy, delivered right on time. 
                              My family loves it and we've been ordering regularly.
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;