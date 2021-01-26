export const FixHeader = () => {
    document.addEventListener("DOMContentLoaded", function(){
        window.scroll(()=> window.scrollTop > 0 ? document.querySelector().classList.add("fix-header"): document.querySelector().classList.remove("fix-header"));
    });

}
    