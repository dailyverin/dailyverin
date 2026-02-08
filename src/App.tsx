import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle, Plus, X, ArrowRight, Check } from 'lucide-react';

interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  image: string;
  whatsappMsg: string;
}

interface Testimonial {
  client: string;
  quote: string;
  role: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  requirements: string;
}

const translations = {
  en: {
    navHome: 'Home',
    navProducts: 'Products',
    navAbout: 'About',
    navGem: 'GEM Portal',
    navTestimonials: 'Clients',
    navContact: 'Contact',
    heroTitle: 'Premium Office Supplies for Government Excellence',
    heroSubtitle: 'Quality with Prompt Delivery | Trusted GEM Portal Partner',
    heroCta: 'Explore Our Range',
    aboutTitle: 'About Dailyver.in',
    aboutText: 'Dailyver.in is a leading supplier of high-quality office supplies and equipment to government offices across India. With 7+ years of expertise in GEM portal procurement, we have successfully fulfilled over 10,000 orders for prestigious organizations including BHEL, BEL, ISRO, Indian Army, CISF, GST Department, and more.',
    aboutCta: 'Learn More',
    productsTitle: 'Our Product Categories',
    productsSubtitle: 'Comprehensive range of office essentials delivered nationwide',
    addProduct: 'Add New Product',
    filterAll: 'All',
    contactUs: 'Contact on WhatsApp',
    gemTitle: 'GEM Portal Procurement',
    gemSubtitle: 'Seamless Government E-Marketplace Solutions',
    gemText: 'We specialize in GEM portal tenders and procurement. Our dedicated team ensures compliance, competitive bidding, and timely fulfillment.',
    gemBenefits: [
      'Transparent & Competitive Bidding',
      'Direct Government Portal Integration',
      'Fast Track Approvals & Delivery',
      'Complete Documentation Support',
      'Nationwide Delivery to All Offices'
    ],
    gemStepsTitle: 'How GEM Works with Us',
    gemSteps: [
      'Browse & Select from GEM',
      'Issue Tender / Direct Purchase',
      'We Bid & Win Competitively',
      'Quality Inspection & Dispatch',
      'Installation & After-Sales Support'
    ],
    testimonialsTitle: 'Trusted by India\'s Premier Organizations',
    testimonialsSubtitle: 'Serving the nation\'s most respected government institutions',
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Tell us your requirements. We\'ll help you complete your order on GEM',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone Number',
    formOrg: 'Organization Name',
    formReq: 'Your Requirements',
    formSubmit: 'Send Inquiry via WhatsApp',
    footerText: '© 2025 Dailyver.in - Trusted GEM Partner for Government Offices',
    successMsg: 'Inquiry sent successfully! Our team will contact you shortly.'
  },
  hi: {
    navHome: 'होम',
    navProducts: 'उत्पाद',
    navAbout: 'हमारे बारे में',
    navGem: 'जीईएम पोर्टल',
    navTestimonials: 'ग्राहक',
    navContact: 'संपर्क',
    heroTitle: 'सरकारी उत्कृष्टता के लिए प्रीमियम ऑफिस सप्लाई',
    heroSubtitle: 'गुणवत्ता के साथ त्वरित डिलीवरी | विश्वसनीय जीईएम पार्टनर',
    heroCta: 'हमारी रेंज देखें',
    aboutTitle: 'Dailyver.in के बारे में',
    aboutText: 'Dailyver.in भारत भर के सरकारी कार्यालयों को उच्च गुणवत्ता वाले ऑफिस सप्लाई और उपकरणों का प्रमुख आपूर्तिकर्ता है। जीईएम पोर्टल प्रोक्योरमेंट में 7+ वर्षों की विशेषज्ञता के साथ, हमने BHEL, BEL, ISRO, भारतीय सेना, CISF, GST विभाग आदि सहित प्रतिष्ठित संगठनों के लिए 10,000 से अधिक ऑर्डर सफलतापूर्वक पूरे किए हैं।',
    aboutCta: 'और जानें',
    productsTitle: 'हमारे उत्पाद श्रेणियां',
    productsSubtitle: 'देशभर में वितरित ऑफिस आवश्यकताओं की व्यापक रेंज',
    addProduct: 'नया उत्पाद जोड़ें',
    filterAll: 'सभी',
    contactUs: 'व्हाट्सएप पर संपर्क करें',
    gemTitle: 'जीईएम पोर्टल प्रोक्योरमेंट',
    gemSubtitle: 'सरकारी ई-मार्केटप्लेस समाधान',
    gemText: 'हम जीईएम पोर्टल टेंडर और प्रोक्योरमेंट में विशेषज्ञ हैं। हमारी समर्पित टीम अनुपालन, प्रतिस्पर्धी बोली और समय पर पूर्ति सुनिश्चित करती है।',
    gemBenefits: [
      'पारदर्शी और प्रतिस्पर्धी बोली',
      'सीधा सरकारी पोर्टल एकीकरण',
      'तेज़ ट्रैक अनुमोदन और डिलीवरी',
      'पूर्ण दस्तावेज़ीकरण सहायता',
      'सभी कार्यालयों के लिए राष्ट्रव्यापी डिलीवरी'
    ],
    gemStepsTitle: 'हमारे साथ जीईएम कैसे काम करता है',
    gemSteps: [
      'जीईएम से ब्राउज़ और चुनें',
      'टेंडर जारी करें / डायरेक्ट खरीद',
      'हम प्रतिस्पर्धी रूप से बोली लगाते हैं',
      'गुणवत्ता निरीक्षण और डिस्पैच',
      'स्थापना और आफ्टर-सेल्स सपोर्ट'
    ],
    testimonialsTitle: 'भारत के प्रमुख संगठनों द्वारा भरोसा किया गया',
    testimonialsSubtitle: 'देश के सबसे सम्मानित सरकारी संस्थानों की सेवा',
    contactTitle: 'संपर्क करें',
    contactSubtitle: 'अपनी आवश्यकताएं बताएं। हम जीईएम पर आपके ऑर्डर को पूरा करने में मदद करेंगे',
    formName: 'पूरा नाम',
    formEmail: 'ईमेल पता',
    formPhone: 'फोन नंबर',
    formOrg: 'संगठन का नाम',
    formReq: 'आपकी आवश्यकताएं',
    formSubmit: 'व्हाट्सएप के माध्यम से पूछताछ भेजें',
    footerText: '© 2025 Dailyver.in - सरकारी कार्यालयों के लिए विश्वसनीय जीईएम पार्टनर',
    successMsg: 'पूछताछ सफलतापूर्वक भेजी गई! हमारी टीम जल्द ही संपर्क करेगी।'
  },
  mr: {
    navHome: 'होम',
    navProducts: 'उत्पाद',
    navAbout: 'आमच्याबद्दल',
    navGem: 'GEM पोर्टल',
    navTestimonials: 'ग्राहक',
    navContact: 'संपर्क',
    heroTitle: 'सरकारी उत्कृष्टतेसाठी प्रीमियम ऑफिस सप्लाईज',
    heroSubtitle: 'गुणवत्ता बरोबर त्वरित डिलिव्हरी | विश्वसनीय GEM पार्टनर',
    heroCta: 'आमची रेंज एक्सप्लोर करा',
    aboutTitle: 'Dailyver.in बद्दल',
    aboutText: 'Dailyver.in भारतभरातील सरकारी कार्यालयांना उच्च दर्जाच्या ऑफिस सप्लाईज आणि उपकरणांचा अग्रगण्य पुरवठादार आहे. GEM पोर्टल प्रोक्योरमेंटमध्ये ७+ वर्षांचा अनुभव घेऊन, आम्ही BHEL, BEL, ISRO, भारतीय सेना, CISF, GST विभाग इत्यादींसाठी १००००+ ऑर्डर्स यशस्वीरीत्या पूर्ण केले आहेत.',
    aboutCta: 'अधिक जाणून घ्या',
    productsTitle: 'आमच्या उत्पाद श्रेण्या',
    productsSubtitle: 'देशभरात वितरित केलेल्या ऑफिस गरजांची व्यापक श्रेणी',
    addProduct: 'नवीन उत्पाद जोडा',
    filterAll: 'सर्व',
    contactUs: 'व्हॉट्सअॅप वर संपर्क साधा',
    gemTitle: 'GEM पोर्टल प्रोक्योरमेंट',
    gemSubtitle: 'सरकारी ई-मार्केटप्लेस सोल्युशन्स',
    gemText: 'आम्ही GEM पोर्टल टेंडर्स आणि प्रोक्योरमेंटमध्ये तज्ज्ञ आहोत. आमची समर्पित टीम अनुपालन, स्पर्धात्मक बोली आणि वेळेवर पूर्तता सुनिश्चित करते.',
    gemBenefits: [
      'पारदर्शक आणि स्पर्धात्मक बोली',
      'थेट सरकारी पोर्टल एकत्रीकरण',
      'जलद ट्रॅक मंजुरी आणि डिलिव्हरी',
      'पूर्ण दस्तऐवज समर्थन',
      'सर्व कार्यालयांसाठी देशव्यापी डिलिव्हरी'
    ],
    gemStepsTitle: 'आमच्यासोबत GEM कसे कार्य करते',
    gemSteps: [
      'GEM मधून ब्राउझ करा आणि निवडा',
      'टेंडर काढा / थेट खरेदी',
      'आम्ही स्पर्धात्मक बोली लावतो',
      'गुणवत्ता तपासणी आणि डिस्पॅच',
      'इंस्टॉलेशन आणि आफ्टर सेल्स सपोर्ट'
    ],
    testimonialsTitle: 'भारताच्या प्रमुख संस्थांद्वारे विश्वासार्ह',
    testimonialsSubtitle: 'देशातील सर्वात आदरणीय सरकारी संस्थांची सेवा',
    contactTitle: 'संपर्क साधा',
    contactSubtitle: 'आपल्या गरजा सांगा. आम्ही GEM वर तुमचा ऑर्डर पूर्ण करण्यात मदत करू',
    formName: 'पूर्ण नाव',
    formEmail: 'ईमेल पत्ता',
    formPhone: 'फोन नंबर',
    formOrg: 'संस्था नाव',
    formReq: 'तुमच्या आवश्यकता',
    formSubmit: 'व्हॉट्सअॅपद्वारे चौकशी पाठवा',
    footerText: '© २०२५ Dailyver.in - सरकारी कार्यालयांसाठी विश्वसनीय GEM पार्टनर',
    successMsg: 'चौकशी यशस्वीरीत्या पाठवली! आमची टीम लवकरच संपर्क करेल.'
  },
  kn: {
    navHome: 'ಮುಖಪುಟ',
    navProducts: 'ಉತ್ಪನ್ನಗಳು',
    navAbout: 'ನಮ್ಮ ಬಗ್ಗೆ',
    navGem: 'ಜಿಇಎಂ ಪೋರ್ಟಲ್',
    navTestimonials: 'ಗ್ರಾಹಕರು',
    navContact: 'ಸಂಪರ್ಕಿಸಿ',
    heroTitle: 'ಸರ್ಕಾರಿ ಉತ್ಕೃಷ್ಟತೆಗಾಗಿ ಪ್ರೀಮಿಯಂ ಆಫೀಸ್ ಸಪ್ಲೈಗಳು',
    heroSubtitle: 'ಗುಣಮಟ್ಟದೊಂದಿಗೆ ಪ್ರಾಂಪ್ಟ್ ಡೆಲಿವರಿ | ವಿಶ್ವಾಸಾರ್ಹ ಜಿಇಎಂ ಪಾರ್ಟ್ನರ್',
    heroCta: 'ನಮ್ಮ ಶ್ರೇಣಿಯನ್ನು ಎಕ್ಸ್‌ಪ್ಲೋರ್ ಮಾಡಿ',
    aboutTitle: 'Dailyver.in ಬಗ್ಗೆ',
    aboutText: 'Dailyver.in ಭಾರತದಾದ್ಯಂತ ಸರ್ಕಾರಿ ಕಚೇರಿಗಳಿಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಆಫೀಸ್ ಸಪ್ಲೈಗಳು ಮತ್ತು ಸಲಕರಣೆಗಳ ಪ್ರಮುಖ ಪೂರೈಕೆದಾರರಾಗಿದೆ. ಜಿಇಎಂ ಪೋರ್ಟಲ್ ಪ್ರೊಕ್ಯೂರ್‌ಮೆಂಟ್‌ನಲ್ಲಿ 7+ ವರ್ಷಗಳ ತಜ್ಞತೆಯೊಂದಿಗೆ, ನಾವು BHEL, BEL, ISRO, ಭಾರತೀಯ ಸೇನೆ, CISF, GST ಇಲಾಖೆ ಇತ್ಯಾದಿ ಪ್ರತಿಷ್ಠಿತ ಸಂಸ್ಥೆಗಳಿಗೆ 10,000ಕ್ಕೂ ಹೆಚ್ಚು ಆರ್ಡರ್‌ಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪೂರೈಸಿದ್ದೇವೆ.',
    aboutCta: 'ಹೆಚ್ಚು ತಿಳಿಯಿರಿ',
    productsTitle: 'ನಮ್ಮ ಉತ್ಪನ್ನ ವರ್ಗಗಳು',
    productsSubtitle: 'ದೇಶಾದ್ಯಂತ ವಿತರಿಸಲಾದ ಆಫೀಸ್ ಅಗತ್ಯತೆಗಳ ವ್ಯಾಪಕ ಶ್ರೇಣಿ',
    addProduct: 'ಹೊಸ ಉತ್ಪನ್ನ ಸೇರಿಸಿ',
    filterAll: 'ಎಲ್ಲಾ',
    contactUs: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ',
    gemTitle: 'ಜಿಇಎಂ ಪೋರ್ಟಲ್ ಪ್ರೊಕ್ಯೂರ್‌ಮೆಂಟ್',
    gemSubtitle: 'ಸರ್ಕಾರಿ ಇ-ಮಾರ್ಕೆಟ್‌ಪ್ಲೇಸ್ ಪರಿಹಾರಗಳು',
    gemText: 'ನಾವು ಜಿಇಎಂ ಪೋರ್ಟಲ್ ಟೆಂಡರ್‌ಗಳು ಮತ್ತು ಪ್ರೊಕ್ಯೂರ್‌ಮೆಂಟ್‌ನಲ್ಲಿ ಪರಿಣತರಾಗಿದ್ದೇವೆ. ನಮ್ಮ ಸಮರ್ಪಿತ ತಂಡ ಅನುಸರಣೆ, ಸ್ಪರ್ಧಾತ್ಮಕ ಬಿಡ್ಡಿಂಗ್ ಮತ್ತು ಸಮಯಕ ಪೂರೈಕೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
    gemBenefits: [
      'ಪಾರದರ್ಶಕ ಮತ್ತು ಸ್ಪರ್ಧಾತ್ಮಕ ಬಿಡ್ಡಿಂಗ್',
      'ನೇರ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್ ಏಕೀಕರಣ',
      'ವೇಗದ ಟ್ರ್ಯಾಕ್ ಅನುಮೋದನೆಗಳು ಮತ್ತು ಡೆಲಿವರಿ',
      'ಪೂರ್ಣ ದಸ್ತಾವೇಜು ಬೆಂಬಲ',
      'ಎಲ್ಲಾ ಕಚೇರಿಗಳಿಗೆ ರಾಷ್ಟ್ರವ್ಯಾಪಿ ಡೆಲಿವರಿ'
    ],
    gemStepsTitle: 'ನಮ್ಮೊಂದಿಗೆ ಜಿಇಎಂ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    gemSteps: [
      'ಜಿಇಎಂನಿಂದ ಬ್ರೌಸ್ ಮಾಡಿ ಮತ್ತು ಆಯ್ಕೆಮಾಡಿ',
      'ಟೆಂಡರ್ ನೀಡಿ / ಡೈರೆಕ್ಟ್ ಖರೀದಿ',
      'ನಾವು ಸ್ಪರ್ಧಾತ್ಮಕವಾಗಿ ಬಿಡ್ ಮಾಡುತ್ತೇವೆ',
      'ಗುಣಮಟ್ಟದ ಪರಿಶೀಲನೆ ಮತ್ತು ಡಿಸ್ಪ್ಯಾಚ್',
      'ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಮತ್ತು ಆಫ್ಟರ್-ಸೇಲ್ಸ್ ಬೆಂಬಲ'
    ],
    testimonialsTitle: 'ಭಾರತದ ಪ್ರಮುಖ ಸಂಸ್ಥೆಗಳಿಂದ ವಿಶ್ವಾಸಪೂರ್ವಕ',
    testimonialsSubtitle: 'ದೇಶದ ಅತ್ಯಂತ ಗೌರವಾನ್ವಿತ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳ ಸೇವೆ',
    contactTitle: 'ಸಂಪರ್ಕಿಸಿ',
    contactSubtitle: 'ನಿಮ್ಮ ಅಗತ್ಯಗಳನ್ನು ಹೇಳಿ. ನಾವು ಜಿಇಎಂನಲ್ಲಿ ನಿಮ್ಮ ಆರ್ಡರ್ ಪೂರೈಸಲು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ',
    formName: 'ಪೂರ್ಣ ಹೆಸರು',
    formEmail: 'ಇಮೇಲ್ ವಿಳಾಸ',
    formPhone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    formOrg: 'ಸಂಸ್ಥೆಯ ಹೆಸರು',
    formReq: 'ನಿಮ್ಮ ಅಗತ್ಯಗಳು',
    formSubmit: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಚರ್ಚೆ ಕಳುಹಿಸಿ',
    footerText: '© 2025 Dailyver.in - ಸರ್ಕಾರಿ ಕಚೇರಿಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಜಿಇಎಂ ಪಾರ್ಟ್ನರ್',
    successMsg: 'ಚರ್ಚೆ ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ! ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತದೆ.'
  },
  ml: {
    navHome: 'ഹോം',
    navProducts: 'ഉൽപ്പന്നങ്ങൾ',
    navAbout: 'ഞങ്ങളെക്കുറിച്ച്',
    navGem: 'ജിഇഎം പോർട്ടൽ',
    navTestimonials: 'ഉപഭോക്താക്കൾ',
    navContact: 'ബന്ധപ്പെടുക',
    heroTitle: 'സർക്കാർ മികവിനായി പ്രീമിയം ഓഫീസ് സപ്ലൈകൾ',
    heroSubtitle: 'ഗുണമേന്മയോടെ പ്രോംപ്റ്റ് ഡെലിവറി | വിശ്വസനീയമായ ജിഇഎം പാർട്ണർ',
    heroCta: 'ഞങ്ങളുടെ ശ്രേണി പര്യവേക്ഷണം ചെയ്യുക',
    aboutTitle: 'Dailyver.in-നെക്കുറിച്ച്',
    aboutText: 'Dailyver.in ഭാരതമാകമാനം സർക്കാർ ഓഫീസുകൾക്ക് ഉയർന്ന നിലവാരമുള്ള ഓഫീസ് സപ്ലൈകളും ഉപകരണങ്ങളും വിതരണം ചെയ്യുന്ന പ്രമുഖ സപ്ലൈയറാണ്. ജിഇഎം പോർട്ടൽ പ്രോക്യൂർമെന്റിൽ 7+ വർഷത്തെ വിദഗ്ധതയോടെ, BHEL, BEL, ISRO, ഇന്ത്യൻ ആർമി, CISF, GST ഡിപ്പാർട്ട്മെന്റ് തുടങ്ങിയ പ്രശസ്ത സ്ഥാപനങ്ങൾക്കായി 10,000-ലധികം ഓർഡറുകൾ വിജയകരമായി പൂർത്തിയാക്കിയിട്ടുണ്ട്.',
    aboutCta: 'കൂടുതൽ അറിയുക',
    productsTitle: 'ഞങ്ങളുടെ ഉൽപ്പന്ന വിഭാഗങ്ങൾ',
    productsSubtitle: 'രാജ്യമാകമാനം വിതരണം ചെയ്യുന്ന ഓഫീസ് ആവശ്യങ്ങളുടെ സമഗ്ര ശ്രേണി',
    addProduct: 'പുതിയ ഉൽപ്പന്നം ചേർക്കുക',
    filterAll: 'എല്ലാം',
    contactUs: 'വാട്ട്‌സാപ്പിൽ ബന്ധപ്പെടുക',
    gemTitle: 'ജിഇഎം പോർട്ടൽ പ്രോക്യൂർമെന്റ്',
    gemSubtitle: 'സർക്കാർ ഇ-മാർക്കറ്റ്‌പ്ലേസ് സൊല്യൂഷനുകൾ',
    gemText: 'ഞങ്ങൾ ജിഇഎം പോർട്ടൽ ടെൻഡറുകളിലും പ്രോക്യൂർമെന്റിലും പ്രത്യേകതയുള്ളവരാണ്. ഞങ്ങളുടെ സമർപ്പിത ടീം അനുസരണം, മത്സരാത്മക ബിഡ്ഡിംഗ്, സമയബന്ധിതമായ ഫുൾഫിൽമെന്റ് ഉറപ്പാക്കുന്നു.',
    gemBenefits: [
      'പാരദർശകവും മത്സരാത്മകവുമായ ബിഡ്ഡിംഗ്',
      'നേരിട്ടുള്ള സർക്കാർ പോർട്ടൽ ഇന്റഗ്രേഷൻ',
      'ഫാസ്റ്റ് ട്രാക്ക് അനുമതികളും ഡെലിവറിയും',
      'പൂർണ ഡോക്യുമെന്റേഷൻ സപ്പോർട്ട്',
      'എല്ലാ ഓഫീസുകൾക്കുമായി ദേശീയ ഡെലിവറി'
    ],
    gemStepsTitle: 'ഞങ്ങളോടൊപ്പം ജിഇഎം എങ്ങനെ പ്രവർത്തിക്കുന്നു',
    gemSteps: [
      'ജിഇഎമ്മിൽ നിന്ന് ബ്രൗസ് ചെയ്ത് തിരഞ്ഞെടുക്കുക',
      'ടെൻഡർ ഇഷ്യൂ ചെയ്യുക / ഡയറക്ട് പർച്ചേസ്',
      'ഞങ്ങൾ മത്സരാത്മകമായി ബിഡ് ചെയ്യുന്നു',
      'ഗുണമേന്മ പരിശോധനയും ഡിസ്പാച്ചും',
      'ഇൻസ്റ്റലേഷനും ആഫ്റ്റർ-സെയിൽസ് സപ്പോർട്ടും'
    ],
    testimonialsTitle: 'ഇന്ത്യയിലെ പ്രധാന സ്ഥാപനങ്ങളാൽ വിശ്വസിക്കപ്പെട്ടത്',
    testimonialsSubtitle: 'രാജ്യത്തിലെ ഏറ്റവും ബഹുമാന്യമായ സർക്കാർ സ്ഥാപനങ്ങളുടെ സേവനം',
    contactTitle: 'ബന്ധപ്പെടുക',
    contactSubtitle: 'നിങ്ങളുടെ ആവശ്യങ്ങൾ ഞങ്ങളോട് പറയൂ. ജിഇഎമ്മിൽ നിങ്ങളുടെ ഓർഡർ പൂർത്തിയാക്കാൻ ഞങ്ങൾ സഹായിക്കും',
    formName: 'പൂർണ നാമം',
    formEmail: 'ഇമെയിൽ വിലാസം',
    formPhone: 'ഫോൺ നമ്പർ',
    formOrg: 'സ്ഥാപനത്തിന്റെ പേര്',
    formReq: 'നിങ്ങളുടെ ആവശ്യങ്ങൾ',
    formSubmit: 'വാട്ട്‌സാപ്പ് വഴി അന്വേഷണം അയയ്ക്കുക',
    footerText: '© 2025 Dailyver.in - സർക്കാർ ഓഫീസുകൾക്കായുള്ള വിശ്വസനീയ ജിഇഎം പാർട്ണർ',
    successMsg: 'അന്വേഷണം വിജയകരമായി അയച്ചു! ഞങ്ങളുടെ ടീം ഉടൻ ബന്ധപ്പെടും.'
  },
  bn: {
    navHome: 'হোম',
    navProducts: 'প্রোডাক্টস',
    navAbout: 'আমাদের সম্পর্কে',
    navGem: 'জিইএম পোর্টাল',
    navTestimonials: 'ক্লায়েন্টস',
    navContact: 'যোগাযোগ',
    heroTitle: 'সরকারি উৎকর্ষের জন্য প্রিমিয়াম অফিস সাপ্লাই',
    heroSubtitle: 'মানসম্পন্ন সাথে প্রম্পট ডেলিভারি | বিশ্বস্ত জিইএম পার্টনার',
    heroCta: 'আমাদের রেঞ্জ এক্সপ্লোর করুন',
    aboutTitle: 'Dailyver.in সম্পর্কে',
    aboutText: 'Dailyver.in ভারত জুড়ে সরকারি অফিসগুলোতে উচ্চমানের অফিস সাপ্লাই এবং সরঞ্জাম সরবরাহকারী নেতৃস্থানীয় প্রতিষ্ঠান। জিইএম পোর্টাল প্রকিউরমেন্টে ৭+ বছরের অভিজ্ঞতা সহ, আমরা BHEL, BEL, ISRO, ইন্ডিয়ান আর্মি, CISF, GST ডিপার্টমেন্ট ইত্যাদি মর্যাদাপূর্ণ সংস্থার জন্য ১০,০০০+ অর্ডার সফলভাবে পূরণ করেছি।',
    aboutCta: 'আরও জানুন',
    productsTitle: 'আমাদের প্রোডাক্ট ক্যাটাগরি',
    productsSubtitle: 'দেশব্যাপী বিতরণকৃত অফিসের প্রয়োজনীয়তার ব্যাপক পরিসর',
    addProduct: 'নতুন প্রোডাক্ট যোগ করুন',
    filterAll: 'সব',
    contactUs: 'হোয়াটসঅ্যাপে যোগাযোগ করুন',
    gemTitle: 'জিইএম পোর্টাল প্রকিউরমেন্ট',
    gemSubtitle: 'সরকারি ই-মার্কেটপ্লেস সল্যুশন',
    gemText: 'আমরা জিইএম পোর্টাল টেন্ডার এবং প্রকিউরমেন্টে বিশেষজ্ঞ। আমাদের নিবেদিতপ্রাণ টিম কমপ্লায়েন্স, প্রতিযোগিতামূলক বিডিং এবং সময়মতো পূরণ নিশ্চিত করে।',
    gemBenefits: [
      'স্বচ্ছ ও প্রতিযোগিতামূলক বিডিং',
      'সরাসরি সরকারি পোর্টাল ইন্টিগ্রেশন',
      'দ্রুত ট্র্যাক অনুমোদন ও ডেলিভারি',
      'সম্পূর্ণ ডকুমেন্টেশন সাপোর্ট',
      'সকল অফিসে দেশব্যাপী ডেলিভারি'
    ],
    gemStepsTitle: 'আমাদের সাথে জিইএম কীভাবে কাজ করে',
    gemSteps: [
      'জিইএম থেকে ব্রাউজ ও নির্বাচন করুন',
      'টেন্ডার ইস্যু করুন / সরাসরি ক্রয়',
      'আমরা প্রতিযোগিতামূলকভাবে বিড করি',
      'গুণগত মান পরীক্ষা ও ডিসপ্যাচ',
      'ইনস্টলেশন ও আফটার-সেলস সাপোর্ট'
    ],
    testimonialsTitle: 'ভারতের শীর্ষস্থানীয় সংস্থাগুলোর দ্বারা বিশ্বস্ত',
    testimonialsSubtitle: 'দেশের সবচেয়ে সম্মানিত সরকারি প্রতিষ্ঠানগুলোর সেবা প্রদান',
    contactTitle: 'যোগাযোগ করুন',
    contactSubtitle: 'আপনার প্রয়োজনীয়তা আমাদের বলুন। জিইএম-এ আপনার অর্ডার সম্পূর্ণ করতে আমরা সাহায্য করব',
    formName: 'পুরো নাম',
    formEmail: 'ইমেইল ঠিকানা',
    formPhone: 'ফোন নম্বর',
    formOrg: 'সংস্থার নাম',
    formReq: 'আপনার প্রয়োজনীয়তা',
    formSubmit: 'হোয়াটসঅ্যাপের মাধ্যমে অনুসন্ধান পাঠান',
    footerText: '© ২০২৫ Dailyver.in - সরকারি অফিসের জন্য বিশ্বস্ত জিইএম পার্টনার',
    successMsg: 'অনুসন্ধান সফলভাবে পাঠানো হয়েছে! আমাদের টিম শীঘ্রই যোগাযোগ করবে।'
  },
  te: {
    navHome: 'హోమ్',
    navProducts: 'ఉత్పత్తులు',
    navAbout: 'మా గురించి',
    navGem: 'జిఇఎం పోర్టల్',
    navTestimonials: 'క్లయింట్స్',
    navContact: 'సంప్రదించండి',
    heroTitle: 'ప్రభుత్వ ఉత్కృష్టత కోసం ప్రీమియం ఆఫీస్ సప్లైలు',
    heroSubtitle: 'నాణ్యతతో ప్రాంప్ట్ డెలివరీ | విశ్వసనీయ జిఇఎం పార్టనర్',
    heroCta: 'మా రేంజ్ ఎక్స్‌ప్లోర్ చేయండి',
    aboutTitle: 'Dailyver.in గురించి',
    aboutText: 'Dailyver.in భారతదేశమంతా ప్రభుత్వ కార్యాలయాలకు అధిక నాణ్యత ఆఫీస్ సప్లైలు మరియు సామగ్రి సరఫరా చేసే ప్రముఖ సరఫరాదారు. జిఇఎం పోర్టల్ ప్రొక్యూర్‌మెంట్‌లో 7+ సంవత్సరాల నైపుణ్యంతో, మేము BHEL, BEL, ISRO, ఇండియన్ ఆర్మీ, CISF, GST డిపార్ట్‌మెంట్ మొదలైన ప్రతిష్టాత్మక సంస్థలకు 10,000+ ఆర్డర్‌లను విజయవంతంగా పూర్తి చేశాం.',
    aboutCta: 'మరిన్ని తెలుసుకోండి',
    productsTitle: 'మా ఉత్పత్తి వర్గాలు',
    productsSubtitle: 'దేశవ్యాప్తంగా పంపిణీ చేయబడిన ఆఫీస్ అవసరాల విస్తృత శ్రేణి',
    addProduct: 'కొత్త ఉత్పత్తి జోడించండి',
    filterAll: 'అన్నీ',
    contactUs: 'వాట్సాప్‌లో సంప్రదించండి',
    gemTitle: 'జిఇఎం పోర్టల్ ప్రొక్యూర్‌మెంట్',
    gemSubtitle: 'ప్రభుత్వ ఇ-మార్కెట్‌ప్లేస్ సొల్యూషన్స్',
    gemText: 'మేము జిఇఎం పోర్టల్ టెండర్లు మరియు ప్రొక్యూర్‌మెంట్‌లో నిపుణులం. మా అంకితమైన టీమ్ కంప్లయన్స్, పోటీ బిడ్డింగ్ మరియు సకాలంలో ఫుల్‌ఫిల్‌మెంట్‌ను నిర్ధారిస్తుంది.',
    gemBenefits: [
      'పారదర్శక మరియు పోటీ బిడ్డింగ్',
      'డైరెక్ట్ ప్రభుత్వ పోర్టల్ ఇంటిగ్రేషన్',
      'ఫాస్ట్ ట్రాక్ అప్రూవల్స్ & డెలివరీ',
      'పూర్తి డాక్యుమెంటేషన్ సపోర్ట్',
      'అన్ని ఆఫీసులకు దేశవ్యాప్త డెలివరీ'
    ],
    gemStepsTitle: 'మాతో జిఇఎం ఎలా పని చేస్తుంది',
    gemSteps: [
      'జిఇఎం నుండి బ్రౌజ్ చేసి ఎంచుకోండి',
      'టెండర్ ఇష్యూ చేయండి / డైరెక్ట్ కొనుగోలు',
      'మేము పోటీగా బిడ్ చేస్తాం',
      'నాణ్యత తనిఖీ & డిస్పాచ్',
      'ఇన్‌స్టాలేషన్ & ఆఫ్టర్-సేల్స్ సపోర్ట్'
    ],
    testimonialsTitle: 'భారతదేశ ప్రముఖ సంస్థలు విశ్వాసం పెట్టినవి',
    testimonialsSubtitle: 'దేశంలోని అత్యంత గౌరవనీయ ప్రభుత్వ సంస్థల సేవ',
    contactTitle: 'సంప్రదించండి',
    contactSubtitle: 'మీ అవసరాలను మాకు చెప్పండి. జిఇఎం‌లో మీ ఆర్డర్ పూర్తి చేయడంలో మేము సహాయం చేస్తాం',
    formName: 'పూర్తి పేరు',
    formEmail: 'ఇమెయిల్ చిరునామా',
    formPhone: 'ఫోన్ నంబర్',
    formOrg: 'సంస్థ పేరు',
    formReq: 'మీ అవసరాలు',
    formSubmit: 'వాట్సాప్ ద్వారా విచారణ పంపండి',
    footerText: '© 2025 Dailyver.in - ప్రభుత్వ కార్యాలయాలకు విశ్వసనీయ జిఇఎం పార్టనర్',
    successMsg: 'విచారణ విజయవంతంగా పంపబడింది! మా టీమ్ త్వరలో సంప్రదిస్తుంది.'
  }
};

const categoryImages: Record<string, string> = {
  'Stationery & Consumables': '/images/stationery.jpg',
  'Printers & Toners': '/images/printers.jpg',
  'Computers & Laptops': '/images/computers.jpg',
  'Air Conditioners': '/images/ac.jpg',
  'Electrical Tools': '/images/electrical.jpg',
  'Cleaning Supplies': '/images/cleaning.jpg'
};

const initialProducts: Product[] = [
  {
    id: 1,
    category: 'Stationery & Consumables',
    name: 'Premium Executive Notebooks',
    description: 'A5 size, 200 pages, premium paper with company logo option',
    image: '/images/stationery.jpg',
    whatsappMsg: 'Hi Dailyver, I am interested in Premium Executive Notebooks. Please share pricing and GEM details.'
  },
  {
    id: 2,
    category: 'Stationery & Consumables',
    name: 'High Quality Ball Pens',
    description: 'Pack of 50 blue & black gel pens, smooth writing, long lasting',
    image: '/images/stationery.jpg',
    whatsappMsg: 'Hi, interested in High Quality Ball Pens. Can you provide quote for bulk order?'
  },
  {
    id: 3,
    category: 'Stationery & Consumables',
    name: 'Professional File Folders',
    description: 'Heavy duty A4 size folders with metal clip, 100 pcs pack',
    image: '/images/stationery.jpg',
    whatsappMsg: 'Hello, please send details for Professional File Folders.'
  },
  {
    id: 4,
    category: 'Printers & Toners',
    name: 'HP LaserJet Pro Printer',
    description: 'Wireless monochrome laser printer with high yield toner support',
    image: '/images/printers.jpg',
    whatsappMsg: 'Interested in HP LaserJet Pro Printer for our department. Please quote.'
  },
  {
    id: 5,
    category: 'Printers & Toners',
    name: 'Compatible Toner Cartridges',
    description: 'Original & compatible toners for all major printer brands, 50+ models',
    image: '/images/printers.jpg',
    whatsappMsg: 'Hi, need Compatible Toner Cartridges for our printers. Details please.'
  },
  {
    id: 6,
    category: 'Computers & Laptops',
    name: 'Dell OptiPlex Desktop PCs',
    description: 'Intel i5/i7, 16GB RAM, 512GB SSD, Windows 11 Pro, 3 year warranty',
    image: '/images/computers.jpg',
    whatsappMsg: 'Please provide quote for Dell OptiPlex Desktop PCs.'
  },
  {
    id: 7,
    category: 'Computers & Laptops',
    name: 'Lenovo ThinkPad Laptops',
    description: '14" Business laptops with i5 processor, 16GB, fingerprint reader',
    image: '/images/computers.jpg',
    whatsappMsg: 'Hi, looking for Lenovo ThinkPad Laptops. Send pricing details.'
  },
  {
    id: 8,
    category: 'Air Conditioners',
    name: '5 Star Split AC Units',
    description: '1.5 Ton inverter split ACs with copper condenser, low power consumption',
    image: '/images/ac.jpg',
    whatsappMsg: 'Interested in 5 Star Split AC Units. Please share specifications.'
  },
  {
    id: 9,
    category: 'Air Conditioners',
    name: 'Heavy Duty Window ACs',
    description: '2 Ton commercial window air conditioners for large halls',
    image: '/images/ac.jpg',
    whatsappMsg: 'Need quote for Heavy Duty Window ACs for office.'
  },
  {
    id: 10,
    category: 'Electrical Tools',
    name: 'Professional Tool Kits',
    description: '42 piece insulated electrical tool set with multimeter',
    image: '/images/electrical.jpg',
    whatsappMsg: 'Hello, interested in Professional Tool Kits.'
  },
  {
    id: 11,
    category: 'Electrical Tools',
    name: 'LED Office Lighting',
    description: '4ft tube lights & panel lights, energy efficient, 100 pcs packs',
    image: '/images/electrical.jpg',
    whatsappMsg: 'Send details about LED Office Lighting please.'
  },
  {
    id: 12,
    category: 'Cleaning Supplies',
    name: 'Industrial Floor Cleaners',
    description: 'Disinfectant floor cleaners, 5L cans, lemon & pine fragrance',
    image: '/images/cleaning.jpg',
    whatsappMsg: 'Hi, need Industrial Floor Cleaners. Provide bulk pricing.'
  },
  {
    id: 13,
    category: 'Cleaning Supplies',
    name: 'Premium Mopping Systems',
    description: 'Professional microfiber mops and buckets for large areas',
    image: '/images/cleaning.jpg',
    whatsappMsg: 'Please quote for Premium Mopping Systems.'
  }
];

const testimonials: Testimonial[] = [
  {
    client: "BHEL",
    quote: "Reliable partner for all our office equipment needs through GEM. Timely deliveries and excellent service.",
    role: "Procurement Head, Bharat Heavy Electricals Limited"
  },
  {
    client: "BEL",
    quote: "Outstanding support and quality products. They have been our preferred vendor for over 5 years.",
    role: "Materials Manager, Bharat Electronics Limited"
  },
  {
    client: "ISRO",
    quote: "Extremely professional and GEM compliant. Helped us procure specialized equipment within tight timelines.",
    role: "Purchase Officer, Indian Space Research Organisation"
  },
  {
    client: "Indian Army",
    quote: "Consistent quality and prompt service across multiple units. Highly recommended for defense establishments.",
    role: "Station Commander, Indian Army"
  },
  {
    client: "CISF",
    quote: "Excellent after-sales support and genuine products. They understand government procurement procedures perfectly.",
    role: "Administrative Officer, Central Industrial Security Force"
  }
];

function App() {
  const [language, setLanguage] = useState<'en' | 'hi' | 'mr' | 'kn' | 'ml' | 'bn' | 'te'>('en');
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const t = translations[language];

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const category = (form.elements.namedItem('category') as HTMLSelectElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;

    if (!name || !category || !description) return;

    const newProduct: Product = {
      id: Date.now(),
      category,
      name,
      description,
      image: categoryImages[category] || '/images/stationery.jpg',
      whatsappMsg: `Hi Dailyver, I am interested in ${name}. Please share pricing and GEM details.`
    };

    setProducts([...products, newProduct]);
    setIsModalOpen(false);
    form.reset();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `New Inquiry from Dailyver.in website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\n\nRequirements:\n${formData.requirements}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918887969406?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        requirements: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 2800);
    }, 650);
  };

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918887969406?text=${encoded}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Dailyver Logo" className="h-9 w-auto" />
            <div>
              <div className="font-semibold text-2xl tracking-tighter">DAILYVER</div>
              <div className="text-[10px] text-zinc-500 -mt-1">EST 2018</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#00a378] transition-colors">{t.navAbout}</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-[#00a378] transition-colors">{t.navProducts}</button>
            <button onClick={() => scrollToSection('gem')} className="hover:text-[#00a378] transition-colors">{t.navGem}</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#00a378] transition-colors">{t.navTestimonials}</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#00a378] transition-colors">{t.navContact}</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-zinc-900 border border-white/20 text-sm px-4 py-1.5 rounded-full appearance-none cursor-pointer focus:outline-none focus:border-[#00a378]"
              >
                <option value="en">EN</option>
                <option value="hi">हि</option>
                <option value="mr">म</option>
                <option value="kn">ಕ</option>
                <option value="ml">മ</option>
                <option value="bn">ব</option>
                <option value="te">తె</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-xs text-zinc-400">🌐</div>
            </div>

            <a href="tel:+918887969406" className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full text-sm transition-all">
              <Phone className="w-4 h-4" /> +91 88879 69406
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:4px_4px]"></div>
        
        <img 
          src="/images/hero.jpg" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
        
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/5 text-sm mb-8 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-[#00a378] animate-pulse" /> 7 YEARS EXCELLENCE IN GEM PROCUREMENT
          </div>
          
          <h1 className="text-7xl md:text-[92px] font-semibold tracking-tighter leading-none mb-8">
            {t.heroTitle}
          </h1>
          
          <p className="max-w-xl mx-auto text-2xl text-zinc-400 mb-14 font-light">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              onClick={() => scrollToSection('products')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="group flex items-center justify-center gap-3 bg-[#00a378] hover:bg-[#00b685] text-black px-12 py-4 rounded-2xl font-medium text-lg transition-all"
            >
              {t.heroCta} <ArrowRight className="group-hover:-rotate-45 transition" />
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 border border-white/30 hover:bg-white/5 px-10 py-4 rounded-2xl text-lg transition-all"
            >
              TALK TO US
            </motion.button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-[3px] text-white/50">
          SCROLL TO BEGIN <div className="h-px w-8 bg-white/30" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-28 border-b border-white/10">
        <div className="grid md:grid-cols-12 gap-x-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[4px] text-xs text-[#00a378] mb-4">EST. 2018</div>
            <h2 className="text-7xl tracking-tighter font-semibold mb-8 leading-none">
              {t.aboutTitle}
            </h2>
            <div className="text-[17px] leading-relaxed text-zinc-400 max-w-[38ch]">
              {t.aboutText}
            </div>
            
            <div className="mt-14 flex flex-wrap gap-8 text-sm">
              <div>
                <div className="font-mono text-5xl text-[#00a378]">7</div>
                <div className="text-xs tracking-widest mt-1.5">YEARS EXPERIENCE</div>
              </div>
              <div>
                <div className="font-mono text-5xl text-[#00a378]">10000</div>
                <div className="text-xs tracking-widest mt-1.5">ORDERS DELIVERED</div>
              </div>
              <div>
                <div className="font-mono text-5xl text-[#00a378]">14</div>
                <div className="text-xs tracking-widest mt-1.5">STATES SERVED</div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 mt-16 md:mt-0 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              <img src="/images/hero.jpg" alt="Team" className="object-cover w-full h-full grayscale-[0.3]" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-[280px]">
              <div className="flex gap-4">
                <div className="text-[#00a378]"><Check className="w-8 h-8" /></div>
                <div className="text-sm leading-snug">Fully GEM Registered<br />Vendor for Central &amp; State<br />Government Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="uppercase text-xs tracking-[4px] text-[#00a378]">WHAT WE SUPPLY</div>
            <h3 className="text-7xl font-semibold tracking-[-2.4px] mt-3">{t.productsTitle}</h3>
            <p className="text-xl text-zinc-400 mt-4 max-w-md">{t.productsSubtitle}</p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="hidden md:flex items-center gap-3 border border-white/20 px-8 py-3.5 rounded-2xl text-sm hover:bg-white/5 transition-all active:bg-white/10"
          >
            <Plus className="w-4 h-4" /> {t.addProduct}
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-7 py-2 text-sm rounded-full border transition-all ${activeCategory === cat 
                ? 'bg-[#00a378] text-black border-[#00a378]' 
                : 'border-white/20 hover:border-white/40'}`}
            >
              {cat === 'All' ? t.filterAll : cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.03 }}
                className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-[#00a378]/50 flex flex-col"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent" />
                  
                  <div className="absolute top-6 right-6 px-4 py-1 bg-black/70 text-xs tracking-widest rounded-full">
                    {product.category.split(' ')[0]}
                  </div>
                </div>

                <div className="p-9 flex flex-col flex-1">
                  <h4 className="text-4xl tracking-tight font-medium mb-4 leading-none">{product.name}</h4>
                  <p className="text-zinc-400 text-[15px] flex-1">{product.description}</p>
                  
                  <button 
                    onClick={() => openWhatsApp(product.whatsappMsg)}
                    className="mt-8 flex w-full items-center justify-center gap-3 py-4 border border-white/70 hover:bg-white hover:text-black transition-all text-sm tracking-widest rounded-2xl"
                  >
                    {t.contactUs} <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center text-sm text-zinc-500 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-white/10" /> ADD MORE ITEMS USING THE BUTTON ABOVE • UPDATES LIVE IN YOUR BROWSER
        </div>
      </section>

      {/* GEM Portal Section */}
      <section id="gem" className="bg-zinc-900 py-28 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline text-xs tracking-[4px] px-6 py-px bg-white/5 rounded">GOVERNMENT E-MARKETPLACE</div>
            <h3 className="mt-6 text-7xl tracking-[-2px] font-semibold">{t.gemTitle}</h3>
            <p className="mt-4 max-w-md mx-auto text-xl text-zinc-400">{t.gemSubtitle}</p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-[17px] leading-relaxed text-balance text-zinc-400">{t.gemText}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-950 p-12 rounded-3xl border border-white/10">
              <div className="text-[#00a378] mb-10">BENEFITS</div>
              <ul className="space-y-9 text-[15px]">
                {t.gemBenefits.map((benefit, i) => (
                  <li key={i} className="flex gap-5">
                    <div className="mt-1.5 w-5 h-px flex-shrink-0 bg-[#00a378]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[#00a378] mb-10">PROCESS</div>
              <div className="space-y-9 pl-2">
                {t.gemSteps.map((step, index) => (
                  <div key={index} className="flex gap-8 text-[15px]">
                    <div className="font-mono text-xs text-zinc-500 mt-1">0{index + 1}</div>
                    <div>{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-5xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[3px] text-[#00a378]">REAL STORIES</div>
          <h3 className="text-6xl tracking-tight mt-4 font-medium">{t.testimonialsTitle}</h3>
          <p className="mt-4 text-xl text-zinc-400">{t.testimonialsSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-white/10 p-12 rounded-3xl group"
            >
              <div className="italic text-xl leading-snug mb-10 tracking-tight">
                “{testimonial.quote}”
              </div>
              
              <div>
                <div className="font-medium text-lg">{testimonial.client}</div>
                <div className="text-xs text-zinc-500 mt-px tracking-widest">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[4px] text-xs mb-4 text-[#00a378]">DIRECT SUPPORT</div>
            <h3 className="text-7xl font-semibold tracking-[-1.6px]">{t.contactTitle}</h3>
            <p className="text-zinc-400 text-xl mt-4">{t.contactSubtitle}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-3">{t.formName}</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none placeholder:text-zinc-700" 
                  placeholder="Ananya Sharma" 
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-3">{t.formEmail}</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none placeholder:text-zinc-700" 
                  placeholder="procurement@isro.gov.in" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-3">{t.formPhone}</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none placeholder:text-zinc-700" 
                  placeholder="+91 98214 55901" 
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-3">{t.formOrg}</label>
                <input 
                  type="text" 
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  required 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none placeholder:text-zinc-700" 
                  placeholder="ISRO Satellite Centre" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest text-zinc-500 mb-3">{t.formReq}</label>
              <textarea 
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                required 
                rows={6} 
                className="w-full bg-zinc-950 border border-white/20 p-7 rounded-3xl resize-y text-lg focus:outline-none placeholder:text-zinc-700" 
                placeholder="We require 80 Dell Optiplex Desktops and 36 sets of premium stationery for our new Hyderabad facility. Delivery by 20th of next month. Please provide options." 
              />
            </div>

            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              whileHover={{ scale: 1.005 }}
              className="w-full py-6 bg-white text-black font-medium text-lg rounded-2xl hover:bg-[#00a378] hover:text-white disabled:opacity-60 flex items-center justify-center gap-3 transition-all"
            >
              {isSubmitting ? "PROCESSING..." : t.formSubmit}
            </motion.button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/10 py-20 text-sm text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo" className="h-7" />
              <span className="font-mono text-xs tracking-[4px]">DAILYVER.IN</span>
            </div>
            
            <div className="max-w-xs">
              {t.footerText}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-16 gap-y-10 text-xs tracking-[1px]">
            <div>
              <div className="text-white mb-3">CONTACT</div>
              <a href="mailto:dailyverin@gmail.com" className="block hover:text-white">dailyverin@gmail.com</a>
              <a href="tel:+918887969406" className="block hover:text-white mt-1">+91 88879 69406</a>
            </div>
            
            <div>
              <div className="text-white mb-3">OPERATIONS</div>
              PAN INDIA DELIVERY<br />
              GEM REGISTERED VENDOR<br />
              GST: 27AADCD1245F1Z1
            </div>
            
            <div>
              <div className="text-white mb-3">QUICK LINKS</div>
              GEM PORTAL<br />
              HOW TO BUY<br />
              VENDOR POLICY
            </div>
          </div>
        </div>
        
        <div className="text-center mt-24 text-[10px] tracking-[1.5px]">DESIGNED FOR EXCELLENCE • BUILT FOR GOVERNMENT</div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        <motion.a 
          href="https://wa.me/918887969406"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className="bg-[#25D366] text-black w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.a>
        
        <motion.a 
          href="tel:+918887969406"
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
        >
          <Phone className="w-8 h-8" />
        </motion.a>
        
        <motion.a 
          href="mailto:dailyverin@gmail.com"
          whileHover={{ scale: 1.1 }}
          className="bg-zinc-900 border border-white/50 w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
        >
          <Mail className="w-8 h-8" />
        </motion.a>
      </div>

      {/* Add Product Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/90" onClick={() => setIsModalOpen(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-zinc-900 w-full max-w-md rounded-3xl border border-white/10 p-10"
            >
              <div className="flex justify-between mb-8">
                <div>
                  <div className="font-medium text-xl tracking-tight">Add New Product</div>
                  <div className="text-xs text-zinc-500">Live update to showcase</div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-white/60 hover:text-white">
                  <X />
                </button>
              </div>

              <form onSubmit={handleAddProduct} className="space-y-7">
                <div>
                  <label className="block uppercase tracking-widest text-xs mb-2 text-zinc-400">PRODUCT NAME</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    className="block w-full border-b bg-transparent border-white/30 pb-4 text-xl placeholder:text-zinc-700 focus:outline-none" 
                    placeholder="Wireless Headsets" 
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-xs mb-2 text-zinc-400">CATEGORY</label>
                  <select 
                    name="category" 
                    required 
                    className="bg-zinc-950 border border-white/20 w-full py-4 px-5 rounded-2xl text-lg focus:outline-none"
                  >
                    {Object.keys(categoryImages).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-xs mb-2 text-zinc-400">DESCRIPTION</label>
                  <textarea 
                    name="description" 
                    required 
                    rows={4} 
                    className="block w-full resize-y bg-zinc-950 border border-white/20 rounded-2xl p-6 focus:outline-none text-lg placeholder:text-zinc-700" 
                    placeholder="Noise cancelling wireless headsets with mic. 35 hour battery life. Ideal for online trainings and meetings."
                  />
                </div>

                <button 
                  type="submit"
                  className="mt-4 w-full py-4 text-base bg-[#00a378] text-black rounded-2xl hover:bg-[#00c68a] transition"
                >
                  ADD TO CATALOG
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            className="fixed bottom-28 right-8 bg-[#00a378] text-black px-9 py-4 rounded-2xl flex items-center gap-4 z-50 shadow-2xl"
          >
            <Check className="w-5 h-5" /> {t.successMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
