const bar = document.getElementById("bar")
const menu = document.getElementById("menu")

if(bar){
    bar.addEventListener("click", ()=>{
        menu.classList.toggle("active");
    })
}

/* extra */



// Contact Form
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('input[type="submit"]');

    submitBtn.value = "Sending...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    submitBtn.style.cursor = "not-allowed";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      const popup = document.createElement("div");

      popup.innerHTML = data.success
        ? "✅ Message sent successfully!"
        : "❌ Failed to send message!";

      popup.style.position = "fixed";
      popup.style.top = "20px";
      popup.style.right = "20px";
      popup.style.padding = "14px 22px";
      popup.style.borderRadius = "10px";
      popup.style.fontSize = "16px";
      popup.style.fontFamily = "Poppins, sans-serif";
      popup.style.fontWeight = "500";
      popup.style.color = "#fff";
      popup.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
      popup.style.zIndex = "9999";

      popup.style.background = data.success
        ? "#28a745"
        : "#dc3545";

      /* Animation */
      popup.style.opacity = "0";
      popup.style.transform = "translateY(-30px)";
      popup.style.transition = "all .35s ease";

      document.body.appendChild(popup);

      setTimeout(() => {
        popup.style.opacity = "1";
        popup.style.transform = "translateY(0)";
      }, 50);

      setTimeout(() => {
        popup.style.opacity = "0";
        popup.style.transform = "translateY(-30px)";

        setTimeout(() => {
          popup.remove();
        }, 350);

      }, 3000);

      if (data.success) {
        form.reset();
      }

    } catch (error) {
      alert("Something went wrong!");
    }

    submitBtn.value = "Submit";
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
    submitBtn.style.cursor = "pointer";
  });
}

// ===== Page Preloader =====

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1200);
});

/* const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if(document.body.classList.contains("dark")){
            icon.className = "bx bx-sun";
        }else{
            icon.className = "bx bx-moon";
        }

    });

} */