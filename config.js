// ENJOY ALL - AD CONFIGURATION PANEL
const AD_CONFIG = {
    // --- অ্যাডের সংখ্যা নিয়ন্ত্রণ ---
    adsgramCount: 2,    // Adsgram ভিডিও অ্যাড আসবে ৪টি
    monetagCount: 1,    // Monetag SDK অ্যাড আসবে ৫টি
    directLinkCount: 1, // সব অ্যাড শেষ হওয়ার পর ডাইরেক্ট লিঙ্ক আসবে ৩ বার

    // --- আপনার আইডি এবং লিঙ্কসমূহ ---
    // Adsgram Block ID (আপনার স্ক্রিনশট অনুযায়ী)
    adsgramIds: ["29356"], 

    // Monetag Zone IDs (আপনার ইনডেক্স ফাইলে থাকা আইডিগুলো)
    monetagZones: ['10480960', '10679278', '10679295'], 

    // আপনার ডাইরেক্ট লিঙ্ক (Pop-under বা Direct Ads)
    myDirectLink: "https://omg10.com/4/10547767", 
    
    // আপনার টেলিগ্রাম বটের লিঙ্ক
    botUrl: "https://t.me/enjoy420_bot/Enjoy_all"
};

// মোট কয়টি স্টেপ পার করতে হবে তা অটোমেটিক হিসাব হবে
// (৪ + ৫ + ৩ = মোট ১২ বার ইন্টারঅ্যাকশন করতে হবে)
AD_CONFIG.requiredAdCount = AD_CONFIG.adsgramCount + AD_CONFIG.monetagCount + AD_CONFIG.directLinkCount;
