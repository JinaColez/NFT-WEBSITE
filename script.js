let nft = document.querySelectorAll('image');
window.onscroll = () => {
    sections.forEach(anim=> {
        let top = window.scrollY;
        let offset = anim.offsetTop - 150;
        let height = anim.offsetHeight;

        if(top >- offset&&  top < offset + height){
            anim.classList.add('show-animate');
        }
        else{
            anim.classList.remove("show-animate");
        }
    })
}