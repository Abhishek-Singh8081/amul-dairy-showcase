import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: "Please enter a valid email address" });
      return;
    }

    
    toast({
      title: "Reset link sent",
      description: "Check your inbox for password reset instructions",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-yellow-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">Reset Password 🔐</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:opacity-90 transition"
          >
            Send Reset Link
          </Button>
        </form>

        <div className="mt-6 text-sm text-center text-muted-foreground">
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
