<template>
	<section class="container">
		<div class="flex py-4">
			<div><img class="h-16 w-16" src="/icon.png" alt="logo"></div>
			<mk-button text="CMS" icon="arrow" class="ml-auto my-auto" @click="goToCms"/>
		</div>
		<div class="text-center">
			<h1 class="font-bold text-3xl">MORTAL KOMBAT KOMPANION</h1>
		</div>
		<div class="flex h-20">
			<a target="_blank" href="https://www.apple.com/uk/ios/app-store/" class="my-auto ml-auto">
				<img style="height: 55px;" src="~/assets/img/apple-store-badge.svg" alt="apple-store">
			</a>
			<a target="_blank" href="https://play.google.com/" class="my-auto mr-auto">
				<img class="h-20" src="~/assets/img/google-play-badge.png" alt="google-play">
			</a>
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
