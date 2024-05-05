


export default function importScript(){
  const scriptUrls = [
    "assets/vendor/purecounter/purecounter_vanilla.js",
    "assets/vendor/aos/aos.js",
    "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "assets/vendor/glightbox/js/glightbox.min.js",
    "assets/vendor/isotope-layout/isotope.pkgd.min.js",
    "assets/vendor/swiper/swiper-bundle.min.js",
    "assets/vendor/typed.js/typed.umd.js",
    "assets/vendor/waypoints/noframework.waypoints.js",
    "assets/vendor/php-email-form/validate.js",
    "assets/js/main.js",]

  function createScript(scriptSrc){
    const scriptEl = document.createElement('script');

    scriptEl.src = scriptSrc;
    scriptEl.async = true;
  
    document.body.appendChild(scriptEl);
  }
 

  scriptUrls.forEach((url)=>createScript(url))
}



