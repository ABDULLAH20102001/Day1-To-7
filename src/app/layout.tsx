'use client';
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// import Nave1 from "./components/Nave Botem/Nave1";
// import Botem from "./components/Nave Botem/Botem";
// import Product2 from "./components/Product/2Product";
// import LeatestProducts from "./components/Product/LeatestProducts";


// import Home from "./page";
// import Home5 from "./components/Home/Home";
// import SelaiderHome from "./components/Home/SelaiderHome/page";

// import SelaiderFeaturedProducts from "./components/Product/FeaturedProducts/page";
// import LeatestProducts from "./components/Product/LeatestProducts";
// import WhatShopexOffer from "./components/Product/WhatShopexOffer";
// import TrendingProducts from "./components/Trending Products2/Trending Products";
// import TrendingProductsHome from "./components/Trending Products2/Trending Products Home";
// import DiscountItemHome from "./components/Discount Item/Discount Item Home";
// import A123 from "./components/Discount Item/123";
// import LeatestBlogHome from "./components/Leatest Blog/Leatest Blog Home";
// import LeatestBlog from "./components/Leatest Blog/Leatest Blog";
// import ShopGridDefault from "./components/page1/page";
// import ShopList from "./components/page2/page";
// import ProductDetails from "./components/page3/Product Details";
// import Contact from "./ContactUs/page";
// import BlogB from "./components/Blog/blog-b";
// import Products from "./components/Products/page";
// import Gatin from "./components/GetInTouch/gat in to";
// import Signup from "./Signup/page";
// import Login from "./signup1/login1/page";
// import ProductList from "./components/Nave Botem/SaeachBarTest";


// import App1 from "./page1";
// import As1 from "./page1";
// import Selaiderttop from "./components/Selaider Top Categories/page";






// import MyAccount12 from "./components/12";
// import TrendingProducts from "./components/12";











const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* <Nave1 /> */}

      

      
       
        
        {/* <Home5/> */}

        {/* <Product2 /> */}
       
        
        
        
        
        
        {/* <LeatestProducts/> */}
        {/* <Selaiderttop/> */}

        {/* <WhatShopexOffer/> */}

       
        {/* <TrendingProductsHome/> */}

        {/* <TrendingProducts/> */}

        {/* <DiscountItemHome/> */}

        {/* <A123/> */}

        {/* <LeatestBlogHome/>
        <LeatestBlog/>  */}


         {/* <ShopGridDefault/>   Page-1  */}
        {/*<ShopList/>                {/*Page-2  */}
        {/* <ProductDetails/>
        <Contact/>
         <ShopGridDefault/>
        <ShopList/> 
        <Products/>

        <Signup/> */}

       {/* <App1/>
        <As1/> */}
        {/* <Login/> */}
        
        
        {children}
      </body>
    </html>
  );
}
