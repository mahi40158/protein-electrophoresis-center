(function () {
  const translations = {
    "Home": "خانه",
    "Services": "خدمات",
    "Gallery": "گالری",
    "Troubleshooting": "عیب‌یابی",
    "Upload": "آپلود",
    "Educational": "آموزشی",
    "Academy": "آکادمی",
    "Products": "محصولات",
    "Contact": "تماس با ما",
    "Protein Electrophoresis Center": "مرکز الکتروفورز پروتئین",
    "Professional SDS-PAGE Support": "پشتیبانی تخصصی SDS-PAGE",
    "Professional SDS-PAGE and protein electrophoresis services.": "ارائه خدمات تخصصی SDS-PAGE و الکتروفورز پروتئین.",
    "Professional solutions for Protein Electrophoresis, SDS-PAGE, Gradient Gel, Tris-Tricine Gel, Protein Separation, Gel Troubleshooting and Laboratory Support.": "راهکارهای تخصصی برای الکتروفورز پروتئین، SDS-PAGE، ژل گرادیان، ژل Tris-Tricine، جداسازی پروتئین، عیب‌یابی ژل و پشتیبانی آزمایشگاهی.",
    "Upload Your Gel": "آپلود ژل شما",
    "Our Services": "خدمات ما",
    "Welcome to Protein Electrophoresis Center": "به مرکز الکتروفورز پروتئین خوش آمدید",
    "We provide professional consultation for SDS-PAGE, protein separation, gel optimization, gradient gels, Tris-Tricine electrophoresis, sample preparation, and troubleshooting.": "ما مشاوره تخصصی در زمینه SDS-PAGE، جداسازی پروتئین، بهینه‌سازی ژل، ژل‌های گرادیان، الکتروفورز Tris-Tricine، آماده‌سازی نمونه و عیب‌یابی ارائه می‌کنیم.",
    "Coomassie Staining": "رنگ‌آمیزی کوماسی",
    "High-quality protein visualization using Coomassie Brilliant Blue staining.": "نمایش باکیفیت پروتئین با استفاده از رنگ‌آمیزی Coomassie Brilliant Blue.",
    "Silver Staining": "رنگ‌آمیزی نقره‌ای",
    "Highly sensitive protein detection for low-abundance samples.": "تشخیص بسیار حساس پروتئین در نمونه‌های با غلظت پایین.",
    "SDS-PAGE Support": "پشتیبانی SDS-PAGE",
    "Professional troubleshooting and optimization for electrophoresis experiments.": "عیب‌یابی و بهینه‌سازی تخصصی آزمایش‌های الکتروفورز.",
    "Protein Electrophoresis Experts": "متخصصان الکتروفورز پروتئین",
    "We provide consultation in SDS-PAGE, sample preparation, protein separation, gel optimization, Coomassie staining, Silver staining, and electrophoresis troubleshooting.": "ما در زمینه SDS-PAGE، آماده‌سازی نمونه، جداسازی پروتئین، بهینه‌سازی ژل، رنگ‌آمیزی کوماسی، رنگ‌آمیزی نقره‌ای و عیب‌یابی الکتروفورز مشاوره ارائه می‌کنیم.",
    "About Our Laboratory": "درباره آزمایشگاه ما",
    "We provide high-quality protein electrophoresis services using modern Bio-Rad equipment.": "ما خدمات باکیفیت الکتروفورز پروتئین را با استفاده از تجهیزات مدرن Bio-Rad ارائه می‌کنیم.",
    "Specialized in SDS-PAGE, Native PAGE, Coomassie staining, Silver staining and troubleshooting.": "متخصص در SDS-PAGE، Native PAGE، رنگ‌آمیزی کوماسی، رنگ‌آمیزی نقره‌ای و عیب‌یابی.",
    "Contact Us": "تماس با ما",
    "Why Choose Our Laboratory": "چرا آزمایشگاه ما؟",
    "Professional Experience": "تجربه حرفه‌ای",
    "Years of experience in protein electrophoresis and laboratory consultation.": "سال‌ها تجربه در الکتروفورز پروتئین و مشاوره آزمایشگاهی.",
    "Fast Results": "نتایج سریع",
    "Rapid analysis with high accuracy and reliable documentation.": "آنالیز سریع با دقت بالا و مستندسازی قابل اعتماد.",
    "Modern Equipment": "تجهیزات مدرن",
    "Using Bio-Rad electrophoresis systems and optimized protocols.": "استفاده از سیستم‌های الکتروفورز Bio-Rad و پروتکل‌های بهینه‌شده.",
    "Email: tavana437@gmail.com": "ایمیل: tavana437@gmail.com",
    "Phone: +98 9174170658": "تلفن: ‎+98 9174170658",
    "📞 Call Us": "📞 تماس با ما",
    "📧 Email": "📧 ایمیل",
    "💬 WhatsApp": "💬 واتساپ",
    "Send Message": "ارسال پیام",
    "Select Gel Image": "انتخاب تصویر ژل",
    "Sample Information": "اطلاعات نمونه",
    "Submit Analysis Request": "ارسال درخواست آنالیز",
    "SDS-PAGE  Protein Analysis": "آنالیز پروتئین با SDS-PAGE",
    "© 2026 Protein Electrophoresis Center. All Rights Reserved.": "© 2026 مرکز الکتروفورز پروتئین. تمامی حقوق محفوظ است.",
    "Description": "توضیحات",
    "Specifications": "مشخصات",
    "Application": "کاربرد",
    "Storage": "شرایط نگهداری",
    "Product": "محصول",
    "Back to Home": "بازگشت به خانه",
    "🛒 Quick Order": "🛒 سفارش سریع",
    "Protein Electrophoresis Academy": "آکادمی الکتروفورز پروتئین",
    "Specialized Training in Protein Electrophoresis": "آموزش تخصصی الکتروفورز پروتئین",
    "Advance Your Expertise in Protein Electrophoresis with Specialized Training, Hands-on Laboratory Skills, and Expert-Led Educational Programs.": "دانش و مهارت خود را در الکتروفورز پروتئین با آموزش تخصصی، مهارت‌های عملی آزمایشگاهی و برنامه‌های آموزشی زیر نظر متخصصان ارتقا دهید.",
    "Explore Courses": "مشاهده دوره‌ها",
    "Professional Training": "آموزش حرفه‌ای",
    "Academy Image Coming Soon": "تصویر آکادمی به‌زودی اضافه می‌شود",
    "🎓 Professional Courses": "🎓 دوره‌های حرفه‌ای",
    "Comprehensive training programs designed for researchers, laboratory professionals, and graduate students.": "برنامه‌های آموزشی جامع برای پژوهشگران، متخصصان آزمایشگاه و دانشجویان تحصیلات تکمیلی.",
    "Video Preview": "پیش‌نمایش ویدئو",
    "SDS-PAGE Fundamentals": "مبانی SDS-PAGE",
    "Introduction to protein electrophoresis principles.": "آشنایی با اصول الکتروفورز پروتئین.",
    "Protein Sample Preparation": "آماده‌سازی نمونه پروتئین",
    "Essential steps for preparing protein samples.": "مراحل ضروری آماده‌سازی نمونه‌های پروتئینی.",
    "Gel Electrophoresis Basics": "مبانی الکتروفورز ژل",
    "Learn the fundamentals of running protein gels.": "یادگیری اصول اجرای ژل‌های پروتئینی.",
    "🎥 Free Tutorials": "🎥 آموزش‌های رایگان",
    "Coming Soon": "به‌زودی",
    "Advanced SDS-PAGE Course": "دوره پیشرفته SDS-PAGE",
    "Complete Protein Electrophoresis Course": "دوره جامع الکتروفورز پروتئین",
    "A comprehensive course covering protein electrophoresis techniques, gel analysis and laboratory practices.": "دوره‌ای جامع شامل تکنیک‌های الکتروفورز پروتئین، آنالیز ژل و روش‌های آزمایشگاهی.",
    "Learn More →": "اطلاعات بیشتر ←",
    "Advanced concepts, optimization strategies and professional electrophoresis skills.": "مفاهیم پیشرفته، راهکارهای بهینه‌سازی و مهارت‌های حرفه‌ای الکتروفورز.",
    "Protein Gel Analysis": "آنالیز ژل پروتئین",
    "Learn accurate protein band interpretation and quantitative gel analysis.": "یادگیری تفسیر دقیق باندهای پروتئینی و آنالیز کمی ژل.",
    "📩 Contact for Training": "📩 تماس برای آموزش",
    "Need personalized training or customized laboratory education?": "به آموزش شخصی‌سازی‌شده یا آموزش آزمایشگاهی اختصاصی نیاز دارید؟",
    "Contact us for specialized protein electrophoresis training programs.": "برای دریافت برنامه‌های تخصصی آموزش الکتروفورز پروتئین با ما تماس بگیرید."
  };

  const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([en, fa]) => [fa, en]));
  const normalize = s => (s || '').replace(/\s+/g, ' ').trim();
  const isProductDropdown = el => !!el.closest('.dropdown-menu');

  function translate(lang) {
    const fa = lang === 'fa';
    document.documentElement.lang = fa ? 'fa' : 'en';
    document.documentElement.dir = fa ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl-site', fa);

    document.querySelectorAll('[data-lang-label]').forEach(el => {
      el.textContent = fa ? 'English' : 'فارسی';
    });

    document.querySelectorAll('[data-i18n-en]').forEach(el => {
      el.textContent = fa ? el.dataset.i18nFa : el.dataset.i18nEn;
    });

    document.querySelectorAll('body *').forEach(el => {
      if (el.children.length || isProductDropdown(el)) return;
      const key = normalize(el.textContent);
      if (!key) return;
      if (fa && translations[key]) el.textContent = translations[key];
      else if (!fa && reverseTranslations[key]) el.textContent = reverseTranslations[key];
    });

    localStorage.setItem('siteLanguage', lang);
  }

  function addSwitcher() {
    if (document.querySelector('.language-switcher')) return;
    const box = document.createElement('div');
    box.className = 'language-switcher';
    box.innerHTML = '<button type="button" class="language-btn" data-lang="fa">فارسی</button><span>|</span><button type="button" class="language-btn" data-lang="en">English</button>';
    const nav = document.querySelector('.navbar .container');
    if (nav) nav.appendChild(box);
    else document.body.insertBefore(box, document.body.firstChild);
    box.addEventListener('click', e => {
      const btn = e.target.closest('[data-lang]');
      if (btn) translate(btn.dataset.lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    addSwitcher();
    translate(localStorage.getItem('siteLanguage') || 'fa');
  });
})();
