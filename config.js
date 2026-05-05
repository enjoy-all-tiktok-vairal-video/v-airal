// ENJOY ALL - AD CONFIGURATION PANEL
const AD_CONFIG = {
    // এখানে সংখ্যা বসান (০ দিলে ওই অ্যাডটি আর আসবে না)
    adsgramCount: 2,    // Adsgram ভিডিও অ্যাড কয়টি আসবে
    monetagCount: 2,    // Monetag SDK অ্যাড কয়টি আসবে
    directLinkCount: 0, // Direct Link (Pop-up) কয়টি আসবে

    // আপনার আইডি এবং লিঙ্কসমূহ
    adsgramIds: ["29356"], // Adsgram Block ID
    monetagZones: ['10480960', '10679278', '10679295'], // Monetag Zone IDs
    myDirectLink: "https://omg10.com/4/10547767", // আপনার ডাইরেক্ট লিঙ্ক
    
    botUrl: "https://t.me/enjoy420_bot/Enjoy_all"
};

// মোট কয়টি অ্যাড হবে তা অটোমেটিক হিসাব হবে
AD_CONFIG.requiredAdCount = AD_CONFIG.adsgramCount + AD_CONFIG.monetagCount + AD_CONFIG.directLinkCount;
