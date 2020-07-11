<template>
	<section class="h-screen overflow-y-auto flex flex-col">
		<div class="fixed top-0 w-full z-20">
			<div class="flex p-4" style="background-color: rgba(0,0,0,.7);">
				<div class="mr-auto"><img class="logo" src="/icon.png" alt="logo"></div>
				<mk-button text="CMS" icon="arrow" class="max-w-40 my-auto" @click="goToCms"/>
			</div>
			<div class="arrowbar bottom"></div>
		</div>
		<div class="mt-20 flex-1 bg-white">
			<img class="w-full" src="~/assets/img/hero.png" alt="hero">
			<div class="arrowbar-gold">
				<img class="arrowbar-center" src="/img/arrowbar-center.svg" alt="arrowbar-center">
			</div>
			<div class="flex-1">
				<div class="container text-center flex flex-col lg:flex-row py-10">
					<div class="m-auto lg:ml-0"><img class="w-32 rounded-lg" src="~/assets/img/appIcon.png" alt="logo"></div>
					<p class="my-auto uppercase text-gold text-5xl lg:text-6xl font-mk whitespace-no-wrap">Explore Now</p>
					<div class="flex flex-col sm:flex-row lg:ml-auto">
						<a target="_blank" href="https://apps.apple.com/gb/app/kompanion-for-mk11/id1469504168" class="m-auto sm:mr-0">
							<img style="height: 55px;" src="~/assets/img/apple-store-badge.svg" alt="apple-store">
						</a>
						<a target="_blank" href="https://play.google.com/store/apps/details?id=com.kompanion.mk" class="m-auto sm:ml-0">
							<img class="h-20" src="~/assets/img/google-play-badge.png" alt="google-play">
						</a>
					</div>
				</div>
			</div>
		</div>
		<div>
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
export default {
	layout: 'landing',
	methods: {
		goToCms () {
			this.$router.push(this.$store.state.user ? '/cms' : '/sign-in')
		}
	}
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
.footer-link {
	@apply text-xs uppercase opacity-50 text-blue mx-2
}
.footer-link:hover {
	@apply opacity-100
}
</style>
