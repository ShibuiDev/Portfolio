window.addEventListener('scroll', ()=>{
    let card_1 = document.querySelector('.card_1');
    let card_2 = document.querySelector('.card_2');
    let card_3 = document.querySelector('.card_3');
    let card_4 = document.querySelector('.card_4');
    let project_1 = document.querySelector('.project_1');
    let project_2 = document.querySelector('.project_2');
    let project_3 = document.querySelector('.project_3');
    let img = document.querySelector('.img-container');
    let img2 = document.querySelector('.img-2');
    let service = document.querySelector('.animate');
    let service2 = document.querySelector('.animate-');
    let about_text = document.querySelector('.about-text');
    let pos1 = card_1.getBoundingClientRect().top;
    let pos2 = card_2.getBoundingClientRect().top;
    let pos3 = card_3.getBoundingClientRect().top;
    let pos_1 = card_4.getBoundingClientRect().top;
    let pos4 = project_1.getBoundingClientRect().top;
    let pos5 = project_2.getBoundingClientRect().top;
    let pos6 = project_3.getBoundingClientRect().top;
    let pos8 = img.getBoundingClientRect().top;
    let pos_2 = img2.getBoundingClientRect().top;
    let pos9 = about_text.getBoundingClientRect().top;
    let poss = service.getBoundingClientRect().top;
    let poss2 = service2.getBoundingClientRect().top;
    let screensize = window.innerHeight;

    if(pos1 < screensize){
        card_1.style.animation = 'move 1.8s ease';
    }
    if(pos2 < screensize){
        card_2.style.animation = 'move2 1.8s ease';
    }
    if(pos3 < screensize){
        card_3.style.animation = 'move3 1.8s ease';
    }
    
    if(pos4 < screensize){
        project_1.style.animation = 'move 1.8s ease';
    }
    if(pos5 < screensize){
        project_2.style.animation = 'move4 1.8s ease';
    }
    if(pos6 < screensize){
        project_3.style.animation = 'move3 1.8s ease';
    }
    if(pos8 < screensize){
        img.style.animation = 'move 1.5s ease';
    }
    if(pos9 < screensize){
        about_text.style.animation = 'move2 1.5s ease';
    }
    if(pos_1 < screensize){
        card_4.style.animation = 'move 1.8s ease';
    }
    if(pos_2 < screensize){
        img2.style.animation = 'move3 1.8s ease';
    }
    if(poss < screensize){
        service.style.animation = 'move 1.8s ease';
    }
    if(poss2 < screensize){
        service2.style.animation = 'move3 1.8s ease';
    }
})

window.addEventListener('load', ()=>{
    let content = document.querySelector('.content');
        content.style.animation = 'move 1.6s ease';
})

