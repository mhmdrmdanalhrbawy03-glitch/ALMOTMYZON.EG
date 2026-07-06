/* ===================================
   منصة تانية بكالوريا
      تصميم وتطوير: محمد رمضان الحرباوي
      =================================== */

      document.addEventListener("DOMContentLoaded", function () {

          // ظهور العناصر عند فتح الصفحة
              const cards = document.querySelectorAll(".card");

                  cards.forEach((card, index) => {
                          card.style.opacity = "0";
                                  card.style.transform = "translateY(40px)";

                                          setTimeout(() => {
                                                      card.style.transition = "0.7s";
                                                                  card.style.opacity = "1";
                                                                              card.style.transform = "translateY(0)";
                                                                                      }, index * 200);
                                                                                          });

                                                                                              // تأثير زر ابدأ التعلم
                                                                                                  const btn = document.querySelector(".btn");

                                                                                                      if (btn) {
                                                                                                              btn.addEventListener("mouseenter", function () {
                                                                                                                          btn.style.boxShadow = "0 0 20px gold";
                                                                                                                                  });

                                                                                                                                          btn.addEventListener("mouseleave", function () {
                                                                                                                                                      btn.style.boxShadow = "none";
                                                                                                                                                              });
                                                                                                                                                                  }

                                                                                                                                                                  });

                                                                                                                                                                  // رسالة ترحيب عند دخول الموقع
                                                                                                                                                                  setTimeout(function () {

                                                                                                                                                                      alert("🎓 أهلاً وسهلاً بك في منصة تانية بكالوريا\nنتمنى لك رحلة تعليمية ممتعة.");

                                                                                                                                                                      }, 800);
