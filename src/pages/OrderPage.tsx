import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

// Sample product data
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

const OrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const quantityParam = searchParams.get("quantity");
  const quantity = quantityParam ? parseInt(quantityParam) : 1;

  const { id } = useParams<{ id: string }>();
  const product = allProducts.find((p) => p.id === Number(id));
  const { toast } = useToast();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">Product not found</p>
      </div>
    );
  }

  const numericPrice = parseInt(product.price.replace("₹", ""));
  const totalPrice = numericPrice * quantity;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod");

  const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email.trim());
  const isValidPhone = (phone: string) => /^\d{10}$/.test(phone.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast({ title: "Please enter your name" });
      return;
    }
    if (!isValidEmail(email)) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    if (!isValidPhone(phone)) {
      toast({ title: "Please enter a valid 10-digit phone number" });
      return;
    }
    if (!address.trim()) {
      toast({ title: "Please enter your shipping address" });
      return;
    }

    toast({
      title: "Order placed successfully!",
      description: `Thank you, ${name}. Your order total is ₹${totalPrice}.`,
    });

    navigate("/order-success");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Summary */}
          <div className="border p-4 rounded-md shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Total Price: ₹{totalPrice}</p>
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>

            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Shipping address"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Method</h2>

            <RadioGroup
              defaultValue={paymentMethod}
              onValueChange={(val: "cod" | "online") => setPaymentMethod(val)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod">Cash on Delivery</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">Online Payment</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" className="w-full md:w-1/2">
              Place Order
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default OrderPage;
