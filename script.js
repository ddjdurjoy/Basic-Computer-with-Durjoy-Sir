const content = {
    bn: {
        "header-title": "Basic Computer with Durjoy Sir",
        "header-subtitle": "ডুরজয় দাস জয় দ্বারা পরিচালিত - NSDA প্রত্যয়িত IT Support Specialist",
        "instructor-name": "ডুরজয় দাস জয়",
        "instructor-description": "আমি ডুরজয় দাস জয়, NSDA থেকে IT Support Specialist হিসেবে প্রত্যয়িত। আমি বেসিক কম্পিউটার স্কিলস শেখাতে ভালোবাসি এবং আমার ছাত্রদের সফল হতে সহায়তা করি।",
        "youtube-link": "YouTube",
        "linkedin-link": "LinkedIn",
        "facebook-link": "Facebook",
        "about-course-title": "কোর্স সম্পর্কে",
        "about-course-content": "আপনাকে স্বাগতম <strong>Basic Computer with Durjoy Sir</strong>, যা শুরু থেকে কম্পিউটার ব্যবহার শেখার জন্য ডিজাইন করা হয়েছে। এই কোর্সে আপনি কম্পিউটার হার্ডওয়্যার, সফটওয়্যার, ফাইল ম্যানেজমেন্ট, ইন্টারনেট ব্যবহার এবং ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্টের মতো প্রোডাক্টিভিটি টুলস শিখবেন।",
        "features-title": "আপনি কী শিখবেন?",
        "features-list": [
            "<i class='fas fa-laptop-code'></i> কম্পিউটার এবং অপারেটিং সিস্টেমের পরিচয়",
            "<i class='fas fa-folder-open'></i> ফাইল ম্যানেজমেন্ট এবং সংগঠন",
            "<i class='fas fa-globe'></i> ইন্টারনেট ব্যবহার এবং ইমেল যোগাযোগ",
            "<i class='fas fa-file-word'></i> ওয়ার্ড প্রসেসিং (Microsoft Word, Google Docs)",
            "<i class='fas fa-chart-bar'></i> স্প্রেডশিট (Excel, Google Sheets)",
            "<i class='fas fa-desktop'></i> প্রেজেন্টেশন টুলস (PowerPoint, Google Slides)",
            "<i class='fas fa-tools'></i> কম্পিউটারের সাধারণ সমস্যা সমাধান"
        ],
        "pricing-title": "কোর্স ফি",
        "pricing-content": "<strong>৫০০ টাকা</strong> (এককালীন পেমেন্ট)",
        "enroll-button": "এখনই ভর্তি হোন",
        "footer-content": "&copy; ২০২৩ ডুরজয় দাস জয়. সর্বস্বত্ব সংরক্ষিত।"
    },
    en: {
        "header-title": "Basic Computer with Durjoy Sir",
        "header-subtitle": "Conducted by Durjoy Das Joy - NSDA Certified IT Support Specialist",
        "instructor-name": "Durjoy Das Joy",
        "instructor-description": "I am Durjoy Das Joy, certified as an IT Support Specialist by NSDA. I love teaching basic computer skills and helping my students succeed.",
        "youtube-link": "YouTube",
        "linkedin-link": "LinkedIn",
        "facebook-link": "Facebook",
        "about-course-title": "About the Course",
        "about-course-content": "Welcome to <strong>Basic Computer with Durjoy Sir</strong>, designed for beginners who want to learn essential computing skills. This course covers everything from computer hardware and software basics to file management, internet usage, and productivity tools like Word, Excel, and PowerPoint.",
        "features-title": "What You'll Learn",
        "features-list": [
            "<i class='fas fa-laptop-code'></i> Introduction to Computers and Operating Systems",
            "<i class='fas fa-folder-open'></i> File Management and Organization",
            "<i class='fas fa-globe'></i> Internet Basics and Email Communication",
            "<i class='fas fa-file-word'></i> Word Processing (Microsoft Word, Google Docs)",
            "<i class='fas fa-chart-bar'></i> Spreadsheets (Excel, Google Sheets)",
            "<i class='fas fa-desktop'></i> Presentation Tools (PowerPoint, Google Slides)",
            "<i class='fas fa-tools'></i> Troubleshooting Common Computer Issues"
        ],
        "pricing-title": "Course Fee",
        "pricing-content": "<strong>BDT 500</strong> (One-Time Payment)",
        "enroll-button": "Enroll Now",
        "footer-content": "&copy; 2023 Durjoy Das Joy. All rights reserved."
    }
};

let currentLang = "bn";

function toggleLanguage() {
    currentLang = currentLang === "bn" ? "en" : "bn";
    updateContent();
    document.querySelector(".language-toggle").innerText = currentLang === "bn" ? "Switch to English" : "বাংলা ভাষায় স্যুইচ করুন";
}

function updateContent() {
    document.getElementById("header-title").innerHTML = content[currentLang]["header-title"];
    document.getElementById("header-subtitle").innerHTML = content[currentLang]["header-subtitle"];
    document.getElementById("instructor-name").innerHTML = content[currentLang]["instructor-name"];
    document.getElementById("instructor-description").innerHTML = content[currentLang]["instructor-description"];
    document.getElementById("youtube-link").innerHTML = content[currentLang]["youtube-link"];
    document.getElementById("linkedin-link").innerHTML = content[currentLang]["linkedin-link"];
    document.getElementById("facebook-link").innerHTML = content[currentLang]["facebook-link"];
    document.getElementById("about-course-title").innerHTML = content[currentLang]["about-course-title"];
    document.getElementById("about-course-content").innerHTML = content[currentLang]["about-course-content"];
    document.getElementById("features-title").innerHTML = content[currentLang]["features-title"];
    document.getElementById("features-list").innerHTML = content[currentLang]["features-list"].map(item => `<li>${item}</li>`).join("");
    document.getElementById("pricing-title").innerHTML = content[currentLang]["pricing-title"];
    document.getElementById("pricing-content").innerHTML = content[currentLang]["pricing-content"];
    document.getElementById("enroll-button").innerHTML = content[currentLang]["enroll-button"];
    document.getElementById("footer-content").innerHTML = content[currentLang]["footer-content"];
}

function purchaseCourse() {
    alert(currentLang === "bn" ? "ভর্তির জন্য ধন্যবাদ! আমাদের সাথে যোগাযোগ করুন: durjoy@example.com" : "Thank you for your interest! Please contact us at durjoy@example.com to complete your enrollment.");
}

// Initialize content in Bangla by default
updateContent();