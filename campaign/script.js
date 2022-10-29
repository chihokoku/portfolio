'use scrict'


const Burger = document.querySelector('.burger');
const BurgerNav = document.querySelector('.burger-nav');	

	Burger.addEventListener('click', () => {
        Burger.classList.toggle('open-bg');
		BurgerNav.classList.toggle('open');
	});