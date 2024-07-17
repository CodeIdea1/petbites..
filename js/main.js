


window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    // start aboutus section animation
    let footer = document.querySelector('.footer');
    let footerTop = footer.offsetTop;
    let footerHeight = footer.offsetHeight;
    if (windowScrollTop > (footerTop + footerHeight - windowHeight -100)) {
        let dogHand = document.querySelectorAll('.hand')
        dogHand.forEach((e)=> {
            e.classList.add('translate')
        })
    }

    let products = document.querySelector('.products');
    let productsTop = products.offsetTop;
    let productsHeight = products.offsetHeight;
    if (windowScrollTop > (productsTop + productsHeight - windowHeight -300)) {
        let dogHand = document.querySelectorAll('.box')
        dogHand.forEach((e)=> {
            e.classList.add('translate')
        })
    }
    if (windowScrollTop > (productsTop + productsHeight - windowHeight -1000)) {
        let dogHand = document.querySelectorAll('.box')
        dogHand.forEach((e)=> {
            e.classList.add('translate2')
        })
    }

    let about = document.querySelector('.about-us');
    let aboutTop = about.offsetTop;
    let aboutHeight = about.offsetHeight;
    if (windowScrollTop > (aboutTop + aboutHeight - windowHeight -100)) {
        about.classList.add('translate')
        let model = document.querySelector('.model-img')
        model.classList.add('translate')
    }
    if (windowScrollTop > (aboutTop + aboutHeight - windowHeight -400)) {
        about.classList.add('translate')
        let model = document.querySelector('.model-img')
        model.classList.add('translate2')
    }

}


window.addEventListener('scroll', function() {
    let  header = document.querySelector('.header');
    if (window.scrollY > 4) {
        header.classList.add('translate');
    }
    else {
        header.classList.remove('translate');
    }
})






document.addEventListener('DOMContentLoaded', function() {
    const counterGroups = document.querySelectorAll('.count');

    counterGroups.forEach(group => {
        const numberElement = group.querySelector('.num');
        const incrementButton = group.querySelector('.plus');
        const decrementButton = group.querySelector('.minus');

        let number = 1;

        incrementButton.addEventListener('click', function() {
            number++;
            numberElement.textContent = number;
        });

        decrementButton.addEventListener('click', function() {
            if (number > 1) {
                number--;
                numberElement.textContent = number;
            }
        });
    });
});


setTimeout(function() {
    document.getElementById('loading-page').style.display = 'none';
    document.getElementById('all-content').style.display = 'block';
}, 3000); // 5000 milliseconds = 5 seconds


let menuIcon = document.querySelector('.menu-icon');
let x = document.querySelector('.x');
menuIcon.onclick = function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}
x.onclick = function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}
allA = document.querySelectorAll('.mobile-menu a');
allA.forEach((e)=> {
    e.onclick = function() {
        document.querySelector('.mobile-menu').classList.toggle('active');
    }
})
