const contents = document.querySelectorAll('.content');
const content = [];
for(let i = 0; i < contents.length; i++) {
    content.push(contents[i]);
}

const content_imgs = document.querySelectorAll('.content_img');
const content_img = [];
for(let i = 0; i < content_imgs.length; i++) {
    content_img.push(content_imgs[i]);
}

const content_ps = document.querySelectorAll('.content_first');
const content_p = [];
for(let i = 0; i < content_ps.length; i++) {
    content_p.push(content_ps[i]);
}

// RESOFT NEWS content에 mouseover & mouseout 기능
const content_function = function() {
    for(let i = 0; i < 4; i++) {
        content[i].addEventListener('mouseover', (e) => {
            e.preventDefault();
            content_img[i].style.transform = 'scale(1.3)';
            content_img[i].style.transitionDuration = '0.5s';
            content_p[i].style.color = '#0064CD';
        });
        
        content[i].addEventListener('mouseout', (e) => {
            e.preventDefault;
            content_img[i].style.transform = 'scale(1.0)';
            content_p[i].style.color = '#1E1E1E';
        });
    }
}

content_function();