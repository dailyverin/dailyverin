import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import GemPortal from "./components/GemPortal";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Data
import { translations } from "./data/translations";

const DailyverWebsite = () => {
  const [language, setLanguage] = useState('en');
  const [currentTranslations, setCurrentTranslations] = useState(translations.en);

  useEffect(() => {
    setCurrentTranslations(translations[language] || translations.en);
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        translations={currentTranslations} 
      />
      
      <main>
        <Hero translations={currentTranslations} />
        <About translations={currentTranslations} />
        <Products language={language} translations={currentTranslations} />
        <GemPortal translations={currentTranslations} />
        <Testimonials language={language} />
        <Contact translations={currentTranslations} />
      </main>
      
      <Footer translations={currentTranslations} />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DailyverWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
