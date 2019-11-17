<template>
	<div class="flex flex-wrap -mx-1">
		<div v-for="t in tags" :key="t.text" class="px-1 mb-2">
			<button type="button" :class="'p-2 border rounded whitespace-no-wrap '+(t.active?'bg-gold':'bg-coal-800')" @click="onClick(t.text)">{{t.text}}</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {type: Array, required: true},
		value: {required: false}
	},
	computed: {
		tags () {
			return this.options.map(o => {
				return {
					text: o,
					active: this.value && this.value.includes(o)
				}
			})
		}
	},
	methods: {
		onClick (text) {
			let clone = this.value ? JSON.parse(JSON.stringify(this.value)) : []
			const index = clone.findIndex(x => x === text)
			if (index > -1) {
				clone.splice(index, 1)
			} else {
				clone.push(text)
			}
			this.$emit('input', clone)
		}
	}
}
</script>
