window.addEventListener('scroll',()=>{
    let content = document.querySelector('.rows');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /.5;
        if(contentPosition < screenPosition){
        content.classList.add('active');
   }else{
       content.classList.remove('active');
   }
});
