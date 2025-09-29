# 🥛 Amul Daily Delivery – React + TypeScript App

This is a fully responsive **React + TypeScript** web application simulating an **e-commerce platform** for **Amul dairy products**. It includes features like product listing, filtering, product details, cart, wishlist, order placement, and essential authentication flows like login, signup, and password reset.

---

## 📦 Features

- ✅ **Modern UI** using Tailwind CSS and component libraries like ShadCN UI
- ✅ **Fully responsive** design – optimized for mobile, tablet, and desktop
- ✅ **Login / Signup / Forgot Password** pages with validation and toast feedback
- ✅ **Product Detail Page** with:
  - Tabbed sections (Description, Nutritional Info, Ingredients, Benefits)
  - Add to Cart, Wishlist, Share, and Buy Now functionality
- ✅ **Order Page** with form validation and delivery options
- ✅ **Filtering system** to browse products by category
- ✅ **Routing** with `react-router-dom`
- ✅ Reusable UI components (e.g., buttons, inputs, labels)
- ✅ Clean and scalable codebase with full TypeScript support

---

## 🗂️ Pages Included

- `/` – Home Page
- `/products` – All Products with Category Filtering
- `/products/:id` – Product Detail Page with full info
- `/order/:id` – Order Placement Page (with query param for quantity)
- `/login` – User login
- `/signup` – User registration
- `/forgot-password` – Password recovery
- `/about` – About the brand
- `/contact` – Contact form

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Abhishek-Singh8081/Amul-the-taste-of-india.git
cd Amul-the-taste-of-india


# intsall dependencies 
npm install
# or
yarn install


#start the development server
npm run dev
# or
yarn dev
