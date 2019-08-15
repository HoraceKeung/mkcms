<template>
	<section class="container">
		<div class="flex flex-wrap -mx-2 my-4">
			<div v-for="p in pages" :key="p" class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4 flex">
				<n-link :to="`/cms/web/${p}`" class="w-full">
					<mk-button :text="p.replace(/([A-Z]+)/g, ' $1')" icon="arrow"/>
				</n-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	layout: 'form',
	data: () => ({
		pages: [
			'akademy'
		]
	})
}
</script>
