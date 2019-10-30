var imagesToLoad = document.querySelectorAll("img[data-src]");

var imgOptions = {
    threshold:1,
    rootMargin: "0px 0px 50px 0px"
};

var loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};


if('IntersectionObserver' in window) {
    var imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

/*const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const src = img.getAttribute('data-src');
    if(!src){
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold:1,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((enteries, imgObserver) => {
    enteries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions);

images.forEach(img => {
    imgObserver.observe(image);
});*/