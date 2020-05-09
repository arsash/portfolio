const paralax = document.querySelector('.paralax');
const layers = paralax.children;


function moveLayersDependsOnScroll(wScroll){
    Array.from(layers).forEach(layer => {

        const devider = layer.dataset.speed;
        const strafe = wScroll * devider / 10;

        layer.style.transform = `translateY(-${strafe})%`;


    })
}

window.addEventListener('scroll', (e) => {
    wScroll = window.pageYOffset;

    moveLayersDependsOnScroll(wScroll);
})
// var parallaxInstance = new Parallax(scene, {
//     limitX: 0,
//     limitY: 10000
// });