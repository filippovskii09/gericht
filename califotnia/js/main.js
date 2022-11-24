// let offset = 0 ; // смещение от левого края

// const rightSwitch= document.querySelector('.right__switch');

// document.querySelector('.right__img')addEventListener('click', fonction( ){
// 	offset = offset + 438.27;
// 	rightSwitch.style.left = -offset + 'px';
// });
{
	"dependencies": {
		"parcel-bundler": "^1.6.1",
		"swiper": "latest"
	},
	"name": "Swiper - Effect cards",
	"tags": [
		"swiper"
	]
}

var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
});