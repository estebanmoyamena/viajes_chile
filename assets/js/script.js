/*tooltip*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/*smooth scroll*/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

window.onscroll = () => scrollNavbar();

const scrollNavbar = () =>{
    
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        console.log('scroll 1')
        document.getElementById("navbar").style.backgroundColor ="#00000060";
    }else{
        document.getElementById("navbar").style.backgroundColor ="transparent";
        console.log('scroll2')
    }
}


