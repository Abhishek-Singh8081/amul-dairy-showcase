import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react";


const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Anand Agricultural University Campus",
        "Anand, Gujarat 388001",
        "India"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Customer Care: +91 1800 258 3333",
        "Business Enquiry: +91 2692 260148",
        "Toll Free: 1800 103 2642"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@amul.coop",
        "customercare@amul.coop",
        "business@amul.coop"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "bg-green-500"
    },
    {
      icon: Headphones,
      title: "Phone Support",
      description: "Speak directly with our customer care",
      action: "Call Now",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries via email",
      action: "Send Email",
      color: "bg-purple-500"
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
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We're here to help! Get in touch with us for any questions, 
              feedback, or support you need.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Can We Help?
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose the best way to reach us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {supportOptions.map((option, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${option.color} rounded-full shadow-soft`}>
                      <option.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {option.description}
                    </p>
                    <Button className="bg-gradient-primary shadow-soft">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="business">Business Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button className="w-full bg-gradient-primary shadow-soft text-lg py-6">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We're always happy to hear from our customers. Whether you have questions 
                    about our products, need help with an order, or want to share feedback, 
                    we're here to listen.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="shadow-soft border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-primary p-3 rounded-lg shadow-soft">
                            <info.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold text-foreground">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Map Placeholder */}
                <Card className="shadow-soft border-0">
                  <CardContent className="p-0">
                    <div className="aspect-[16/10] bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                        <p className="text-sm text-muted-foreground">
                          Interactive Map Coming Soon
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Quick answers to common questions
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid gap-6">
              {[
                {
                  question: "What are your delivery hours?",
                  answer: "We deliver fresh products every morning between 6:00 AM - 8:00 AM to ensure you get the freshest dairy products."
                },
                {
                  question: "How do I place a recurring order?",
                  answer: "You can set up recurring orders through our app or website. Simply select the products and frequency, and we'll deliver automatically."
                },
                {
                  question: "What if I'm not satisfied with a product?",
                  answer: "We offer a 100% satisfaction guarantee. Contact our customer care within 24 hours, and we'll replace or refund the product."
                },
                {
                  question: "Do you deliver in my area?",
                  answer: "We deliver in most major cities across India. Enter your pincode on our website to check delivery availability in your area."
                }
              ].map((faq, index) => (
                <Card key={index} className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;