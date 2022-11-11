const circleBig = document.querySelector('.circle--big');
const circleMini = document.querySelector('.circle--mini');
const imgBenj = document.querySelector('#img-benj');


document.getElementById('wrapper').addEventListener('mousemove', (e) => {
    const a = (e.clientX - window.innerWidth) / window.innerHeight * 0.5;
   
    circleBig.style.transform = `translateX(calc(${a} * 4vh))`;
    circleMini.style.transform = `translateX(calc(${-a} * 6vh))`;
    imgBenj.style.transform = `translateX(calc(${-a} * 7vh))`;
});
