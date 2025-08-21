document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("header nav ul a");

  // عملکرد اسکرول روان و بستن منو پس از کلیک
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });

        // بستن منو در موبایل پس از کلیک (اگر منو وجود دارد)
        const navList = document.querySelector("header nav ul");
        if (navList && navList.classList.contains("active")) {
          navList.classList.remove("active");
        }
      }
    });
  });
  // دریافت دکمه
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // نمایش یا مخفی کردن دکمه بر اساس موقعیت اسکرول
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }

  // اسکرول نرم (smooth) به بالای صفحه
  scrollToTopBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // کلاس fade-in به تمامی بخش‌ها و تصاویر اضافه شد
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));

  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 300) {
  //       // نمایش دکمه بعد از 300 پیکسل اسکرول
  //       scrollToTopBtn.classList.add("show");
  //     } else {
  //       scrollToTopBtn.classList.remove("show");
  //     }
  //   });

  //   // اسکرول به بالا با کلیک روی دکمه
  //   scrollToTopBtn.addEventListener("click", () => {
  //     window.scrollTo({
  //       top: 0, // مقدار را از 100 به 0 تغییر دادم
  //       behavior: "smooth", // اسکرول به صورت روان
  //     });
  //   });
});

//  document.addEventListener('DOMContentLoaded', () => {
//             const galleryContainer = document.querySelector('.gallery-horizontal-scroll');

//             // در اینجا لیست مسیر عکس‌های خود را قرار دهید.
//             // توجه: مرورگر به دنبال این فایل‌ها در پوشه "images" در همان مسیر فایل index.html می‌گردد.
//             const images = [
//                 'images/',
//                 'images/0P3A9059 copy (2).webp',
//                 'images/img3.jpg',
//                 'images/img4.jpg',
//                 'images/img5.jpg',
//                 'images/img6.jpg'
//             ];

//             // با استفاده از حلقه forEach، برای هر عکس یک المان جدید ایجاد می‌شود.
//             images.forEach(imageUrl => {
//                 const galleryItem = document.createElement('div');
//                 galleryItem.classList.add('gallery-item-horizontal', 'fade-in');

//                 const img = document.createElement('img');
//                 img.src = imageUrl;
//                 img.alt = 'عکس گالری';

//                 galleryItem.appendChild(img);
//                 galleryContainer.appendChild(galleryItem);
//             });
            
//             // کد مدیریت افکت محو شدن هنگام اسکرول
//             const observer = new IntersectionObserver(entries => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('visible');
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             }, {
//                 threshold: 0.1
//             });
//             const fadeElements = document.querySelectorAll('.fade-in');
//             fadeElements.forEach(el => observer.observe(el));
//         });
    // انتخاب دکمه و محتوای مخفی
        const readMoreBtn = document.getElementById('read-more-btn');
        const moreInfoContent = document.getElementById('more-info-content');
        
        // اضافه کردن یک شنونده رویداد (event listener) به دکمه
        readMoreBtn.addEventListener('click', () => {
            // با هر بار کلیک، کلاس 'show' را به المان اضافه یا از آن حذف می‌کند
            moreInfoContent.classList.toggle('show');
            
            // تغییر متن دکمه بر اساس وضعیت نمایش
            if (moreInfoContent.classList.contains('show')) {
                readMoreBtn.textContent = '^';
            } else {
                readMoreBtn.textContent = ' more stats';
            }
        });