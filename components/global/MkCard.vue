<template>
	<div class="mk-box cursor-pointer flex flex-col bg-coal-800" @click="$emit('click')">
		<placeholder v-if="isPreviewErr" class="mx-auto mt-4"/>
		<div v-else><img :src="image" alt="preview" @error="isPreviewErr=true"></div>
		<div class="p-4 border-t border-coal-600">
			<slot/>
		</div>
	</div>
</template>

<script>
import Placeholder from '~/components/svg/Placeholder'
export default {
	props: {
		image: {type: String}
	},
	components: {Placeholder},
	data: () => ({
		isPreviewErr: false
	})
}
</script>
