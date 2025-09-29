import { useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Heart,
  ShoppingCart,
  Share2,
  ArrowLeft,
  Plus,
  Minus,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const allProducts = [
  {
    id: 1,
    name: "Amul Fresh Milk",
    category: "milk",
    price: "₹28",
    originalPrice: "₹32",
    rating: 4.8,
    reviewCount: 1247,
    images: ["/image6.png", "/image6.png", "/image6.png"],
    image: "/image6.png",
    description:
      "Farm fresh full cream milk, rich in calcium and protein.",
    badge: "Bestseller",
    inStock: true,
    nutritionalInfo: {
      calories: "67 per 100ml",
      protein: "3.4g",
      fat: "4.1g",
      carbs: "4.8g",
      calcium: "120mg",
    },
    ingredients: ["Fresh Cow Milk", "Vitamin D", "Vitamin A"],
    benefits: [
      "Rich in calcium for strong bones",
      "High-quality protein for muscle growth",
      "Natural vitamins and minerals",
      "No artificial preservatives",
    ],
    relatedProducts: [2, 3, 4],
  },
  {
    id: 2,
    name: "Amul Butter",
    category: "butter",
    price: "₹58",
    originalPrice: "₹65",
    rating: 4.9,
    reviewCount: 980,
    images: ["/image5.jpeg", "/image5.jpeg", "/image5.jpeg"],
    image: "/image5.jpeg",
    description: "Utterly butterly delicious, made from pure cream.",
    badge: "Premium",
    inStock: true,
    nutritionalInfo: {
      calories: "717 per 100g",
      protein: "0.85g",
      fat: "81g",
      carbs: "0.06g",
      calcium: "24mg",
    },
    ingredients: ["Milk Fat", "Salt"],
    benefits: [
      "Source of energy",
      "Enhances flavor of food",
      "Made from pure cream",
    ],
    relatedProducts: [1, 3, 5],
  },
  {
    id: 3,
    name: "Amul Cheese Cubes",
    category: "cheese",
    price: "₹95",
    originalPrice: "₹105",
    rating: 4.7,
    reviewCount: 560,
    images: ["/image2.jpeg", "/image2.jpeg", "/image2.jpeg"],
    image: "/image2.jpeg",
    description: "Fresh and creamy processed cheese cubes.",
    badge: "New",
    inStock: true,
    nutritionalInfo: {
      calories: "350 per 100g",
      protein: "25g",
      fat: "27g",
      carbs: "3.5g",
      calcium: "721mg",
    },
    ingredients: ["Processed Cheese", "Salt", "Milk Solids"],
    benefits: [
      "High protein content",
      "Good source of calcium",
      "Creamy texture",
    ],
    relatedProducts: [1, 2, 6],
  },
  {
    id: 4,
    name: "Amul Vanilla Ice Cream",
    category: "ice-cream",
    price: "₹45",
    originalPrice: "₹52",
    rating: 4.6,
    reviewCount: 380,
    images: ["/image4.jpeg", "/image4.jpeg", "/image4.jpeg"],
    image: "/image4.jpeg",
    description: "Rich and creamy vanilla ice cream.",
    badge: "Popular",
    inStock: true,
    nutritionalInfo: {
      calories: "207 per 100g",
      protein: "3.5g",
      fat: "11g",
      carbs: "24g",
      calcium: "120mg",
    },
    ingredients: ["Milk", "Sugar", "Vanilla Essence", "Cream"],
    benefits: [
      "Creamy and delicious",
      "Contains essential nutrients",
      "Popular dessert choice",
    ],
    relatedProducts: [1, 3, 5],
  },
  {
    id: 5,
    name: "Amul Toned Milk",
    category: "milk",
    price: "₹24",
    originalPrice: "₹28",
    rating: 4.5,
    reviewCount: 450,
    images: ["/image3.jpeg", "/image3.jpeg", "/image3.jpeg"],
    image: "/image3.jpeg",
    description: "Light and nutritious toned milk.",
    badge: "",
    inStock: true,
    nutritionalInfo: {
      calories: "52 per 100ml",
      protein: "3.1g",
      fat: "1.5g",
      carbs: "4.9g",
      calcium: "110mg",
    },
    ingredients: ["Toned Milk", "Vitamin D"],
    benefits: [
      "Low fat",
      "Good for weight watchers",
      "Rich in calcium",
    ],
    relatedProducts: [1, 4, 6],
  },
  {
    id: 6,
    name: "Amul Chocolate",
    category: "sweets",
    price: "₹35",
    originalPrice: "₹40",
    rating: 4.8,
    reviewCount: 670,
    images: ["/image1.jpeg", "/image1.jpeg", "/image1.jpeg"],
    image: "/image1.jpeg",
    description: "Rich milk chocolate bar.",
    badge: "Favorite",
    inStock: true,
    nutritionalInfo: {
      calories: "546 per 100g",
      protein: "7.5g",
      fat: "31g",
      carbs: "58g",
      calcium: "200mg",
    },
    ingredients: ["Milk Chocolate", "Sugar", "Cocoa Butter", "Milk Solids"],
    benefits: [
      "Delicious taste",
      "Rich in calcium",
      "Good energy source",
    ],
    relatedProducts: [3, 5, 2],
  },
];

const getProductById = (id: string | undefined) => {
  const numericId = parseInt(id || "1");
  return allProducts.find((product) => product.id === numericId) || allProducts[0];
};

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = getProductById(id);

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
      description: `${product.name} ${
        isWishlisted ? "removed from" : "added to"
      } your wishlist`,
    });
  };

  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders above ₹200",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "100% pure and fresh",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
  ];

  const selectedImageSrc =
    product.images?.[selectedImage] || product.image || "/default.png";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Breadcrumb */}
        <section className="py-4 bg-cream border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                to="/products"
                className="text-muted-foreground hover:text-primary"
              >
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="mb-6" asChild>
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
                    src={selectedImageSrc}
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
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent"
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
                    <span className="text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button
                      size="sm"
                      onClick={() => {
                        if (quantity > 1) setQuantity(quantity - 1);
                      }}
                    >
                      <Minus />
                    </Button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <Button size="sm" onClick={() => setQuantity(quantity + 1)}>
                      <Plus />
                    </Button>
                  </div>
                </div>

                {/* Actions */}
 <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 w-full">
  <Button
    variant="outline"
    size="lg"
    onClick={handleWishlist}
    aria-label="Add to Wishlist"
    className="w-full sm:w-auto"
  >
    <Heart
      className={`mr-2 transition-colors ${
        isWishlisted ? "text-red-600 fill-red-600" : ""
      }`}
    />
    Wishlist
  </Button>

  <Button
    size="lg"
    onClick={handleAddToCart}
    aria-label="Add to Cart"
    className="w-full sm:w-auto"
  >
    <ShoppingCart className="mr-2" />
    Add to Cart
  </Button>

  <NavLink
    to={`/order/${id}?quantity=${quantity}`}
    aria-label="Buy Now"
    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-11 w-full sm:w-auto"
  >
    Buy Now
  </NavLink>

  <Button
    variant="outline"
    size="lg"
    aria-label="Share"
    className="w-full sm:w-auto"
  >
    <Share2 className="mr-2" />
    Share
  </Button>
</div>



                {/* Delivery Features */}
                <div className="grid grid-cols-3 gap-6">
                  {features.map(({ icon: Icon, title, description }, idx) => (
                    <Card
                      key={idx}
                      className="border-none shadow-none bg-muted text-center"
                    >
                      <CardContent className="space-y-1">
                        <Icon className="mx-auto h-6 w-6 text-primary" />
                        <p className="text-lg font-bold">{title}</p>
                        <p className="text-muted-foreground text-sm">
                          {description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mt-16">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="nutritional">Nutritional Info</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-4">
                <p>{product.description}</p>
              </TabsContent>

              <TabsContent value="nutritional" className="mt-4">
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  {Object.entries(product.nutritionalInfo).map(([key, val]) => (
                    <li key={key}>
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                      {val}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="ingredients" className="mt-4">
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  {product.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="benefits" className="mt-4">
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
