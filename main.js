// Make menu disappear when scrolling down & appear scroll up
var scrollPos = 0;
window.addEventListener('scroll', function(){
    if (document.body.getBoundingClientRect().top > scrollPos) {
        document.querySelector("nav").classList.remove("hide");
        document.querySelector("nav").classList.add("appear");
    } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("nav").classList.remove("appear");
        document.querySelector("nav").classList.add("hide");
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});
