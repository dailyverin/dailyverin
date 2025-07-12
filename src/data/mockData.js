// Mock data for the website - This will be replaced with backend API calls later

export const productCategories = [
  {
    id: 1,
    name: {
      en: "Office Stationery",
      hi: "कार्यालय स्टेशनरी",
      mr: "कार्यालयीन स्टेशनरी",
      kn: "ಕಛೇರಿ ಸ್ಟೇಷನರಿ",
      ml: "ഓഫീസ് സ്റ്റേഷനറി",
      bn: "অফিস স্টেশনারি",
      te: "కార్యాలయ స్టేషనరీ"
    },
    description: {
      en: "Complete range of office stationery items including pens, papers, files, and more",
      hi: "पेन, पेपर, फाइल और अन्य सभी कार्यालय स्टेशनरी की पूरी श्रृंखला",
      mr: "पेन, पेपर, फाइल आणि इतर सर्व कार्यालयीन स्टेशनरीची संपूर्ण श्रेणी",
      kn: "ಪೆನ್, ಪೇಪರ್, ಫೈಲ್ ಮತ್ತು ಇತರ ಎಲ್ಲಾ ಕಛೇರಿ ಸ್ಟೇಷನರಿ ಸಾಮಗ್ರಿಗಳ ಸಂಪೂರ್ಣ ಶ್ರೇಣಿ",
      ml: "പെൻ, പേപ്പർ, ഫയൽ എന്നിവയുൾപ്പെടെ ഓഫീസ് സ്റ്റേഷനറി ഇനങ്ങളുടെ പൂർണ്ണ ശ്രേണി",
      bn: "কলম, কাগজ, ফাইল এবং অন্যান্য সমস্ত অফিস স্টেশনারি আইটেমের সম্পূর্ণ পরিসর",
      te: "పెన్, పేపర్, ఫైల్ మరియు ఇతర అన్ని కార్యాలయ స్టేషనరీ వస్తువుల పూర్తి శ్రేణి"
    },
    image: "https://images.pexels.com/photos/1329308/pexels-photo-1329308.jpeg",
    products: [
      "Pens & Pencils", "Files & Folders", "Paper & Notebooks", 
      "Staplers & Clips", "Markers & Highlighters", "Calculators"
    ]
  },
  {
    id: 2,
    name: {
      en: "IT Equipment",
      hi: "आईटी उपकरण",
      mr: "आयटी उपकरणे",
      kn: "ಐಟಿ ಉಪಕರಣಗಳು",
      ml: "ഐടി ഉപകരണങ്ങൾ",
      bn: "আইটি সরঞ্জাম",
      te: "ఐటి పరికరాలు"
    },
    description: {
      en: "Computers, laptops, printers, and all IT-related equipment for government offices",
      hi: "सरकारी कार्यालयों के लिए कंप्यूटर, लैपटॉप, प्रिंटर और सभी आईटी संबंधी उपकरण",
      mr: "सरकारी कार्यालयांसाठी कॉम्प्युटर, लॅपटॉप, प्रिंटर आणि सर्व आयटी संबंधित उपकरणे",
      kn: "ಸರ್ಕಾರಿ ಕಛೇರಿಗಳಿಗೆ ಕಂಪ್ಯೂಟರ್, ಲ್ಯಾಪ್‌ಟಾಪ್, ಪ್ರಿಂಟರ್ ಮತ್ತು ಎಲ್ಲಾ ಐಟಿ ಸಂಬಂಧಿತ ಉಪಕರಣಗಳು",
      ml: "സർക്കാർ ഓഫീസുകൾക്കായി കമ്പ്യൂട്ടർ, ലാപ്‌ടോപ്പ്, പ്രിന്റർ, കൂടാതെ എല്ലാ ഐടി ബന്ധപ്പെട്ട ഉപകരണങ്ങൾ",
      bn: "সরকারী অফিসের জন্য কম্পিউটার, ল্যাপটপ, প্রিন্টার এবং সমস্ত আইটি সম্পর্কিত সরঞ্জাম",
      te: "ప్రభుత్వ కార్యాలయాలకు కంప్యూటర్లు, ల్యాప్‌టాప్‌లు, ప్రింటర్లు మరియు అన్ని ఐటి సంబంధిత పరికరాలు"
    },
    image: "https://images.unsplash.com/photo-1660224319984-4af12c1a469b",
    products: [
      "Desktop Computers", "Laptops", "Printers", "Scanners", 
      "Monitors", "Keyboards & Mouse", "Network Equipment"
    ]
  },
  {
    id: 3,
    name: {
      en: "Office Consumables",
      hi: "कार्यालय उपभोग्य सामग्री",
      mr: "कार्यालयीन वापरण्यायोग्य वस्तू",
      kn: "ಕಛೇರಿ ಉಪಭೋಗ್ಯ ವಸ್ತುಗಳು",
      ml: "ഓഫീസ് ഉപഭോഗ സാമഗ്രികൾ",
      bn: "অফিস ভোগ্যপণ্য",
      te: "కార్యాలయ వినియోగ వస్తువులు"
    },
    description: {
      en: "Toner cartridges, ink, batteries, and other consumable office supplies",
      hi: "टोनर कार्ट्रिज, स्याही, बैटरी और अन्य उपभोग्य कार्यालय आपूर्ति",
      mr: "टोनर काडतूस, शाई, बॅटरी आणि इतर वापरण्यायोग्य कार्यालयीन पुरवठा",
      kn: "ಟೋನರ್ ಕಾರ್ಟ್ರಿಜ್, ಇಂಕ್, ಬ್ಯಾಟರಿ ಮತ್ತು ಇತರ ಉಪಭೋಗ್ಯ ಕಛೇರಿ ಸರಬರಾಜುಗಳು",
      ml: "ടോണർ കാട്രിഡ്ജുകൾ, മഷി, ബാറ്ററികൾ, മറ്റ് ഉപഭോഗ ഓഫീസ് സപ്ലൈകൾ",
      bn: "টোনার কার্ট্রিজ, কালি, ব্যাটারি এবং অন্যান্য ভোগ্য অফিস সরবরাহ",
      te: "టోనర్ కార్ట్రిడ్జెస్, ఇంక్, బ్యాటరీలు మరియు ఇతర వినియోగ కార్యాలయ సరఫరాలు"
    },
    image: "https://images.unsplash.com/photo-1716698288651-b0b8698ea2f0",
    products: [
      "Toner Cartridges", "Ink Cartridges", "Batteries", "CDs & DVDs", 
      "USB Drives", "Memory Cards", "Office Paper"
    ]
  },
  {
    id: 4,
    name: {
      en: "Air Conditioning",
      hi: "एयर कंडीशनिंग",
      mr: "एअर कंडिशनिंग",
      kn: "ಏರ್ ಕಂಡೀಷನಿಂಗ್",
      ml: "എയർ കണ്ടീഷനിംഗ്",
      bn: "এয়ার কন্ডিশনিং",
      te: "ఎయిర్ కండిషనింగ్"
    },
    description: {
      en: "Complete air conditioning solutions including installation and maintenance",
      hi: "स्थापना और रखरखाव सहित पूर्ण एयर कंडीशनिंग समाधान",
      mr: "स्थापना आणि देखभाल यासह संपूर्ण एअर कंडिशनिंग सोल्यूशन्स",
      kn: "ಸ್ಥಾಪನೆ ಮತ್ತು ನಿರ್ವಹಣೆ ಸೇರಿದಂತೆ ಸಂಪೂರ್ಣ ಏರ್ ಕಂಡೀಷನಿಂಗ್ ಪರಿಹಾರಗಳು",
      ml: "ഇൻസ്റ്റലേഷനും മെയിന്റനൻസും ഉൾപ്പെടെയുള്ള സമ്പൂർണ്ണ എയർ കണ്ടീഷനിംഗ് സൊല്യൂഷനുകൾ",
      bn: "ইনস্টলেশন এবং রক্ষণাবেক্ষণ সহ সম্পূর্ণ এয়ার কন্ডিশনিং সমাধান",
      te: "ఇన్‌స్టాలేషన్ మరియు మెయింటెనెన్స్‌తో సహా పూర్తి ఎయిర్ కండిషనింగ్ సొల్యూషన్స్"
    },
    image: "https://images.pexels.com/photos/30535624/pexels-photo-30535624.jpeg",
    products: [
      "Split ACs", "Window ACs", "Central AC Systems", "AC Installation", 
      "AC Maintenance", "AC Repair Services"
    ]
  },
  {
    id: 5,
    name: {
      en: "Electrical Tools",
      hi: "विद्युत उपकरण",
      mr: "विद्युत साधने",
      kn: "ವಿದ್ಯುತ್ ಉಪಕರಣಗಳು",
      ml: "വൈദ്യുത ഉപകരണങ്ങൾ",
      bn: "বৈদ্যুতিক সরঞ্জাম",
      te: "విద్యుత్ పరికరాలు"
    },
    description: {
      en: "Professional electrical tools and equipment for government facility maintenance",
      hi: "सरकारी सुविधा रखरखाव के लिए पेशेवर विद्युत उपकरण और उपकरण",
      mr: "सरकारी सुविधांच्या देखभालीसाठी व्यावसायिक विद्युत साधने आणि उपकरणे",
      kn: "ಸರ್ಕಾರಿ ಸೌಲಭ್ಯ ನಿರ್ವಹಣೆಗಾಗಿ ವೃತ್ತಿಪರ ವಿದ್ಯುತ್ ಉಪಕರಣಗಳು ಮತ್ತು ಸಲಕರಣೆಗಳು",
      ml: "സർക്കാർ സൗകര്യ പരിപാലനത്തിനായുള്ള പ്രൊഫഷണൽ ഇലക്ട്രിക്കൽ ടൂളുകളും ഉപകരണങ്ങളും",
      bn: "সরকারী সুবিধা রক্ষণাবেক্ষণের জন্য পেশাদার বৈদ্যুতিক সরঞ্জাম এবং যন্ত্রপাতি",
      te: "ప్రభుత్వ సౌకర్య నిర్వహణ కోసం వృత్తిపరమైన విద్యుత్ పరికరాలు మరియు పరికరాలు"
    },
    image: "https://images.unsplash.com/photo-1590921401384-aa02f1a981f6",
    products: [
      "Power Tools", "Testing Equipment", "Cables & Wires", "Switches & Sockets", 
      "Electrical Meters", "Safety Equipment"
    ]
  },
  {
    id: 6,
    name: {
      en: "Cleaning Supplies",
      hi: "सफाई की आपूर्ति",
      mr: "साफसफाईची साहित्य",
      kn: "ಸ್ವಚ್ಛತಾ ಸರಬರಾಜುಗಳು",
      ml: "ശുചീകരണ സാമഗ്രികൾ",
      bn: "পরিষ্কারের সরবরাহ",
      te: "శుభ్రపరిచే సరఫరాలు"
    },
    description: {
      en: "Complete range of cleaning and maintenance supplies for office hygiene",
      hi: "कार्यालय स्वच्छता के लिए सफाई और रखरखाव आपूर्ति की पूरी श्रृंखला",
      mr: "कार्यालयीन स्वच्छतेसाठी साफसफाई आणि देखभाल पुरवठ्याची संपूर्ण श्रेणी",
      kn: "ಕಛೇರಿ ನೈರ್ಮಲ್ಯಕ್ಕಾಗಿ ಶುಚಿಗೊಳಿಸುವಿಕೆ ಮತ್ತು ನಿರ್ವಹಣೆ ಸರಬರಾಜುಗಳ ಸಂಪೂರ್ಣ ಶ್ರೇಣಿ",
      ml: "ഓഫീസ് ശുചിത്വത്തിനായുള്ള ശുചീകരണ, പരിപാലന സാമഗ്രികളുടെ പൂർണ്ണ ശ്രേണി",
      bn: "অফিস স্বাস্থ্যবিধির জন্য পরিষ্কার এবং রক্ষণাবেক্ষণ সরবরাহের সম্পূর্ণ পরিসর",
      te: "కార్యాలయ పరిశుభ్రత కోసం శుభ్రపరిచే మరియు నిర్వహణ సరఫరాల పూర్తి శ్రేణి"
    },
    image: "https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg",
    products: [
      "Detergents & Soaps", "Toilet Paper", "Hand Sanitizers", "Floor Cleaners", 
      "Vacuum Cleaners", "Cleaning Tools", "Disinfectants"
    ]
  }
];

export const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    organization: "ISRO Bangalore",
    text: {
      en: "Dailyver.in has been our trusted partner for office supplies. Their prompt delivery and quality products have never disappointed us.",
      hi: "Dailyver.in हमारे कार्यालय आपूर्ति के लिए विश्वसनीय भागीदार रहा है। उनकी त्वरित डिलीवरी और गुणवत्तापूर्ण उत्पादों ने हमें कभी निराश नहीं किया।",
      mr: "Dailyver.in आमच्या कार्यालयीन पुरवठ्यासाठी विश्वसनीय भागीदार आहे. त्यांची तत्काळ डिलिव्हरी आणि दर्जेदार उत्पादनांनी आम्हाला कधीही निराश केले नाही.",
      kn: "Dailyver.in ನಮ್ಮ ಕಛೇರಿ ಸರಬರಾಜುಗಳಿಗೆ ನಂಬಿಗಸ್ತ ಪಾಲುದಾರರಾಗಿದ್ದಾರೆ. ಅವರ ತ್ವರಿತ ವಿತರಣೆ ಮತ್ತು ಗುಣಮಟ್ಟದ ಉತ್ಪಾದನೆಗಳು ನಮ್ಮನ್ನು ಎಂದಿಗೂ ನಿರಾಶೆಗೊಳಿಸಿಲ್ಲ.",
      ml: "Dailyver.in ഞങ്ങളുടെ ഓഫീസ് സപ്ലൈകൾക്കുള്ള വിശ്വസ്ത പങ്കാളിയാണ്. അവരുടെ പ്രോംപ്റ്റ് ഡെലിവറിയും ഗുണനിലവാരമുള്ള ഉൽപ്പാദനങ്ങളും ഞങ്ങളെ ഒരിക്കലും നിരാശപ്പെടുത്തിയിട്ടില്ല.",
      bn: "Dailyver.in আমাদের অফিস সরবরাহের জন্য বিশ্বস্ত অংশীদার। তাদের দ্রুত ডেলিভারি এবং মানসম্পন্ন পণ্য আমাদের কখনো হতাশ করেনি।",
      te: "Dailyver.in మా కార్యాలయ సరఫరాలకు నమ్మకమైన భాగస్వామి. వారి త్వరిత డెలివరీ మరియు నాణ్యమైన ఉత్పత్తులు మమ్మల్ని ఎప్పుడూ నిరాశపరచలేదు."
    },
    rating: 5
  },
  {
    name: "Col. Priya Sharma",
    organization: "Indian Army HQ",
    text: {
      en: "Excellent service and competitive pricing. They understand government procurement requirements very well.",
      hi: "उत्कृष्ट सेवा और प्रतिस्पर्धी मूल्य निर्धारण। वे सरकारी खरीद आवश्यकताओं को बहुत अच्छी तरह समझते हैं।",
      mr: "उत्कृष्ट सेवा आणि स्पर्धात्मक किंमत. ते सरकारी खरेदी आवश्यकता खूप चांगल्या प्रकारे समजतात.",
      kn: "ಅತ್ಯುತ್ತಮ ಸೇವೆ ಮತ್ತು ಸ್ಪರ್ಧಾತ್ಮಕ ಬೆಲೆ. ಅವರು ಸರ್ಕಾರಿ ಖರೀದಿ ಅವಶ್ಯಕತೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.",
      ml: "മികച്ച സേവനവും മത്സര വിലയും. സർക്കാർ സംഭരണ ആവശ്യകതകൾ അവർ നന്നായി മനസ്സിലാക്കുന്നു.",
      bn: "চমৎকার সেবা এবং প্রতিযোগিতামূলক মূল্য। তারা সরকারী ক্রয় প্রয়োজনীয়তা খুব ভাল বোঝে।",
      te: "అద్భుతమైన సేవ మరియు పోటీ ధర. వారు ప్రభుత్వ సేకరణ అవసరాలను బాగా అర్థం చేసుకుంటారు."
    },
    rating: 5
  },
  {
    name: "Mr. Suresh Patel",
    organization: "BHEL Bhopal",
    text: {
      en: "Reliable partner for all our office needs. Their expertise in GEM portal processes is commendable.",
      hi: "हमारी सभी कार्यालयीन आवश्यकताओं के लिए विश्वसनीय भागीदार। जीईएम पोर्टल प्रक्रियाओं में उनकी विशेषज्ञता सराहनीय है।",
      mr: "आमच्या सर्व कार्यालयीन गरजांसाठी विश्वसनीय भागीदार. GEM पोर्टल प्रक्रियेतील त्यांचे कौशल्य प्रशंसनीय आहे.",
      kn: "ನಮ್ಮ ಎಲ್ಲಾ ಕಛೇರಿ ಅಗತ್ಯಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರರು. GEM ಪೋರ್ಟಲ್ ಪ್ರಕ್ರಿಯೆಗಳಲ್ಲಿ ಅವರ ಪರಿಣತಿ ಶ್ಲಾಘನೀಯ.",
      ml: "ഞങ്ങളുടെ എല്ലാ ഓഫീസ് ആവശ്യങ്ങൾക്കും വിശ്വസനീയ പങ്കാളി. GEM പോർട്ടൽ പ്രക്രിയകളിലെ അവരുടെ വൈദഗ്ദ്ധ്യം പ്രശംസനീയമാണ്.",
      bn: "আমাদের সমস্ত অফিস প্রয়োজনের জন্য নির্ভরযোগ্য অংশীদার। GEM পোর্টাল প্রক্রিয়ায় তাদের দক্ষতা প্রশংসনীয়।",
      te: "మా అన్ని కార్యాలయ అవసరాలకు నమ్మకమైన భాగస్వామి. GEM పోర్టల్ ప్రక్రియలలో వారి నైపుణ్యం ప్రశంసనీయం."
    },
    rating: 5
  }
];

// Form validation and submission mock
export const submitContactForm = async (formData) => {
  // Mock API call - will be replaced with real backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock form submission:', formData);
      resolve({ success: true, message: 'Form submitted successfully!' });
    }, 1000);
  });
};