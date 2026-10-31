// 1 global Function FAQ for accordion click interaction
function togglefaq(button) {
   button.classList.toggle("active");
   var panel = button.nextElementSibling;
   if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
       panel.style.maxHeight = "0px";
   } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
   }
   
}
// 2 Live FAQ Search Filter Function 
function filterfaqs() {
let inputField = document.getElementById("faqSearch");
if (!inputField) return;

let input = inputField.value.toLowerCase();
let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
let text = accordions[i].textContent.toLowerCase();
let panel = accordions[i].nextElementSibling;

if (text.includes(input)) {
   accordions[i].style.display ="";
 } else {
   accordions[i].style.display ="none";
   if (panel) {
      panel.style.maxHeight =null; // Hide panel if button filtered out
    }
  }
 }
}
document.addEventListener("DOMContentLoaded", function() {

// handles Enquiry Form
handleForm("enquiryForm", "fullname", "email", "subject", "message","terms", "formFeedback","Thank You! For Your Enquiry has succesfully been submitted");

// Handles Contact Form
handleForm("contactForm", "contactname", "contactemail", "contactsubject","contactmessage","contactterms", "contactFeedback", "Thank you! Your message has been sent succesful");
});
function handleForm(formId, nameId, emailId, subjectId, messageId, termsId, feedbackId, successText) {
   const form = document.getElementById(formId);
   if (!form) return; 

   form.addEventListener("submit", function(e) {
    e.preventDefault();
   
    const name = document.getElementById(nameId)?.value.trim() || "";
    const email = document.getElementById(emailId)?.value.trim() || "";
    const sub  = document.getElementById(subjectId)?.value || "";
    const msg = document.getElementById(messageId)?.value.trim() || "";
    const terms = document.getElementById(termsId)?.checked || false;
    const fb = document.getElementById(feedbackId);

   
if (name === "" || email === "" || sub === "" || msg === "" || !terms){
    if (fb) {
            fb.style.color = "#f94dff";
            fb.textContent = "Error fill in all required Fields before submitting";
        }
    } else {
       if (fb) {
           fb.style.color = "#00e5ff";
           fb.textContent = successText;
       }
       alert("Success! we will get back to you shortly");
       form.reset();
       setTimeout(() => {
        fb.textContent = "";
       }, 3000);
     }
    });
}
// Product Buy Notification
document.addEventListener("DOMContentLoaded", function() {
    
// Listen for clicks
document.addEventListener("click", function(event) {
if (event.target && event.target.tagName === "BUTTON" && event.target.textContent.includes("Buy Now")) {

    const productText = event.target.textContent;

    alert("success! Thank you for your Purchase: " + productText.replace("Buy Now ", ""));
// Show on Page notification
const feedback = document.getElementById("productFeedback");
if (feedback) {
    feedback.style.color = "#00e5ff";
    feedback.textContent = "Order placed successfully for:"+ productText.replace("Buy Now ", "");
    }
}
});
});
// 4 Back to Top Button Function
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
let topButton = document.getElementById("backToTopBtn");
if (topButton) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
       topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }  
} 
}
function scrollToTop() {
   window.scrollTo({
     top: 0,
     behaviour: 'smooth'
   });
}
// Gallery lightbox feature
document.addEventListener("DOMContentLoaded", function() {
   const modal = document.getElementById("lightboxModal");
   const modalImg = document.getElementById("lightboxImage");
   const closeBtn = document.getElementById("lightboxClose");

   if (modal && modalImg)  {
       document.querySelectorAll(".product-card img, .hero-image img, .about-image-card img").forEach(img => {
          img.style.cursor = "pointer";
          img.addEventListener("click", function() {
              modal.style.display = "flex";
              modalImg.src = this.src;
          });
       });
// Close Lightbox when clicking away
if (closeBtn) {
    closeBtn.addEventListener("click", function() {
       modal.style.display = "none";
    });
}
// Close lightbox with x button
if (closeBtn && modal) {
    closeBtn.addEventListener("click", function() {
       modal.style.display = "none";
    });
}
// Close lightbox when clicking outside the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    });
   }
// Close lightbox with escape button
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal) {
        modal.style.display = "none";
    }
  });
   });
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase().trim();
   
    // Items individaully
    const items = document.querySelectorAll(".product-card .price, .product-card .buy-btn");

    items.forEach(item => {
    const text = item.textContent.toLowerCase();

    
     if (text.includes(filter)) {
         item.style.display = "";
     } else {
       item.style.display = "none";
     }
    });
});
}
















































































