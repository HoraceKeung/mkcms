<template>
	<section>
		<div class="fixed top-0 w-full z-20">
			<div class="flex p-4" style="background-color: rgba(0,0,0,.7);">
				<div class="mr-auto"><img class="logo" src="/icon.png" alt="logo"></div>
				<mk-button text="CMS" icon="arrow" class="max-w-40 my-auto" @click="goToCms"/>
			</div>
			<div class="arrowbar bottom"></div>
		</div>
		<div class="mt-20">
			<img class="w-full" src="~/assets/img/hero.png" alt="hero">
			<div class="arrowbar-gold">
				<img class="arrowbar-center" src="/img/arrowbar-center.svg" alt="arrowbar-center">
			</div>
			<div class="bg-white">
				<div class="container text-center flex flex-col lg:flex-row py-10">
					<div class="m-auto lg:ml-0"><img class="w-32 rounded-lg" src="~/assets/img/appIcon.png" alt="logo"></div>
					<p class="my-auto uppercase text-gold text-5xl lg:text-6xl font-mk whitespace-no-wrap">Explore Now</p>
					<div class="flex lg:ml-auto">
						<div class="my-auto ml-auto relative" style="height: 55px;">
							<div class="absolute h-full w-full flex rounded-lg" style="background-color: rgba(0,0,0,0.8);">
								<p class="m-auto font-bold text-xl">KOMING SOON</p>
							</div>
							<img class="h-full" src="~/assets/img/apple-store-badge.svg" alt="apple-store">
						</div>
						<!-- <a target="_blank" href="https://www.apple.com/uk/ios/app-store/" class="my-auto ml-auto">
							<img style="height: 55px;" src="~/assets/img/apple-store-badge.svg" alt="apple-store">
						</a> -->
						<a target="_blank" href="https://play.google.com/store/apps/details?id=com.alexparpas.kompanion.mk" class="my-auto mr-auto">
							<img class="h-20" src="~/assets/img/google-play-badge.png" alt="google-play">
						</a>
					</div>
				</div>
			</div>
			<div class="arrowbar-gold bottom"></div>
			<div class="container py-6">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="x in ['learn', 'follow', 'keep-in-touch', 'watch']" :key="`slide-${x}`">
							<img class="w-full" :src="`/img/app/${x}.png`" :alt="x">
						</div>
					</div>
					<div class="swiper-pagination"></div>
					<div class="swiper-button-prev" style=""></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
			<div class="arrowbar-gold bottom"></div>
			<div class="bg-black py-6"><div class="container text-center">
				<n-link to="/privacy" class="footer-link">Privacy policy</n-link>
				<n-link to="/terms" class="footer-link">Terms and conditions</n-link>
				<n-link to="/licence" class="footer-link">Licence agreement</n-link>
			</div></div>
		</div>
	</section>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
export default {
	layout: 'landing',
	mounted () {
		this.swiper = new Swiper('.swiper-container', {
			effect: 'cube',
			grabCursor: true,
			cubeEffect: {
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},
			pagination: {el: '.swiper-pagination'},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	},
	methods: {
		goToCms () {
			this.$router.push(this.$store.state.user ? '/cms' : '/sign-in')
		}
	},
	data: () => ({
		swiper: null
	})
}
</script>

<style scoped>
.arrowbar {
	background-color: #595b5b;
	height: 1px;
	@apply relative
}
.arrowbar-gold {
	@apply bg-gold h-1 relative
}
.arrowbar.bottom, .arrowbar-gold.bottom {
	transform: scaleY(-1);
}
.arrowbar:before, .arrowbar-gold:before {
	@apply left-0
}
.arrowbar:after, .arrowbar-gold:after {
	transform: scaleX(-1);
	@apply right-0
}
.arrowbar:before, .arrowbar:after {
	background-image: url(/img/arrowbar-tip.svg);
	bottom: 0px;
}
.arrowbar-gold:before, .arrowbar-gold:after {
	background-image: url(/img/arrowbar-tip-gold.svg);
	bottom: 3px;
}
.arrowbar:before, .arrowbar:after, .arrowbar-gold:before, .arrowbar-gold:after {
	content: "";
	width: 41px;
    height: 9px;
    background-position: 0 0;
	@apply block absolute bg-no-repeat bg-transparent
}
.arrowbar-center {
	width: 123px;
    height: 14px;
    position: absolute;
    bottom: 3px;
	left: 50%;
	transform: translateX(-50%);
}
.swiper-container {
	width: 330px;
	height: 660px;
}
.footer-link {
	@apply text-xs uppercase opacity-50 text-blue mx-2
}
.footer-link:hover {
	@apply opacity-100
}
</style>
