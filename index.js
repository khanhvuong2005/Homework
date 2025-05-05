document.addEventListener("DOMContentLoaded",function(){
    // Get the menu toggle button
    const menuToggle = document.getElementById("menu_toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const barsIcon = document.getElementById("bars_icon");
    const closeIcon = document.getElementById("close_icon");
    // Add event for menuToggle
    console.log(menuToggle);
        menuToggle.addEventListener("click", function(){
            mobileNav.classList.toggle("active");
            if(mobileNav.classList.contains("active")){
                barsIcon.style.display = "none";
                closeIcon.style.display = " block";
            }
            else{
                barsIcon.style.display = "block";
                closeIcon.style.display = "none";
            }
        })


})