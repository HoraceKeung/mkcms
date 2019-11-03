import MediaForm from '~/components/MediaForm'

export default {
	components: {MediaForm},
	data: () => ({
		dataModel: {
			title: null,
			description: null,
			order: null,
			publishDate: null,
			videoIds: []
		}
	})
}
