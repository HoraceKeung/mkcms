<template>
	<section>
		<form v-if="body">
			<div class="form-group">
				<label for="title-input">Title</label>
				<input id="title-input" class="form-control" v-model="body.title">
			</div>
			<div class="form-group">
				<label for="description-input">Description</label>
				<input id="description-input" class="form-control" v-model="body.description">
			</div>
			<div class="form-group">
				<label for="order-input">Order</label>
				<input id="order-input" type="number" class="form-control" v-model.number="body.order">
			</div>
			<div class="mb-3 flex">
				<p class="my-auto mr-2">Video IDs</p>
				<div class="mk-box h-10 w-10 flex cursor-pointer" @click="addVideo">
					<p class="m-auto text-2xl">+</p>
				</div>
			</div>
			<draggable v-model="body.videoIds" class="draggable-row" v-bind="dragOptions" @start="drag=true"  @end="drag=false">
				<transition-group tag="div" :name="!drag ? 'flip-list' : null">
					<div v-for="(v,index) in body.videoIds" :key="index" class="col">
						<div class="w-full">
							<div class="flex mb-2">
								<input class="form-control w-full mr-2" :value="v" @input="updateVideoId(index, $event.target.value)">
								<div class="mk-box w-12 flex cursor-pointer" @click="removeVideo(index)"><p class="m-auto text-xl">X</p></div>
							</div>
							<a :href="`https://www.youtube.com/watch?v=${v}`" target="_blank"><img class="w-full" :src="`https://img.youtube.com/vi/${v}/hqdefault.jpg`" alt="thumbnail"></a>
						</div>
					</div>
				</transition-group>
			</draggable>
			<button class="btn btn-gold" type="submit" @click.prevent="save">Save</button>
		</form>
		<modal-action-confirm msg="Sure want to delete this item?" @confirm="del"/>
	</section>
</template>

<script>
import Vue from 'vue'
import draggable from 'vuedraggable'
import formMixin from '~/assets/js/formMixin'
export default {
	mixins: [formMixin],
	components: {draggable},
	methods: {
		updateVideoId (index, val) {
			Vue.set(this.body.videoIds, index, val)
		},
		addVideo () {
			this.body.videoIds.push('')
		},
		removeVideo (index) {
			this.body.videoIds.splice(index, 1)
		}
	},
	data: () => ({
		dataModel: {
			title: null,
			description: null,
			order: null,
			videoIds: []
		},
		drag: false,
		dragOptions: {
			animation: 200,
			group: "videoIds"
		}
	})
}
</script>
