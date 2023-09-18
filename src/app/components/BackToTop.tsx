export default function BackToTop () {
  
  let control_element; 
  
  document.addEventListener("DOMContentLoaded", () => {
    control_element = document.getElementById("back-to-top");
    
    if (!control_element) return;

    visibility();
    control_element.addEventListener("click", () => {
      window.scroll(0,0);
    });
  });
  
  
  window.addEventListener("scroll", visibility, {passive:true});
  window.addEventListener("resize", visibility, {passive:true});
  
  function visibility() {
    if (!control_element) return;
    control_element.classList.toggle("show", window.scrollY >= 100);
  }

  return (
    <div id="back-to-top" title="Top of page" className="fas fa-chevron-up"></div>
  );
}