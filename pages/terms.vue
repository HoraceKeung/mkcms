<template>
	<section class="container">
		<div class="flex">
			<n-link to="/" class="my-auto mr-4">
				<div class="h-10 w-10 rounded-full flex cursor-pointer bg-gold mk-box">
					<arrow class="m-auto" style="transform: rotate(180deg);"/>
				</div>
			</n-link>
			<h1 class="font-mk text-3xl sm:text-4xl md:text-6xl">Terms and conditions</h1>
		</div>
		<p>These terms and conditions ("Terms", "Agreement") are an agreement between Mobile Application Developer ("Mobile Application Developer", "us", "we" or "our") and you ("User", "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the MK Kompanion mobile application and any of its products or services (collectively, "Mobile Application" or "Services").</p>
		<h2>Age requirement</h2>
		<p>You must be at least 13 years of age to use this Mobile Application. By using this Mobile Application and by agreeing to this Agreement you warrant and represent that you are at least 13 years of age.</p>
		<h2>Adult content</h2>
		<p>Please be aware that there may be certain adult or mature content available in the Mobile Application. Where there is mature or adult content, individuals who are less than 18 years of age or are not permitted to access such content under the laws of any applicable jurisdiction may not access such content. If we learn that anyone under the age of 18 seeks to conduct a transaction through the Services, we will require verified parental consent, in accordance with the Children's Online Privacy Protection Act of 1998 ("COPPA"). Certain areas of the Mobile Application may not be available to children under 18 under any circumstances.</p>
		<h2>Backups</h2>
		<p>We are not responsible for Content residing in the Mobile Application. In no event shall we be held liable for any loss of any Content. It is your sole responsibility to maintain appropriate backup of your Content. Notwithstanding the foregoing, on some occasions and in certain circumstances, with absolutely no obligation, we may be able to restore some or all of your data that has been deleted as of a certain date and time when we may have backed up data for our own purposes. We make no guarantee that the data you need will be available.</p>
		<h2>Links to other mobile applications</h2>
		<p>Although this Mobile Application may link to other mobile applications, we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked mobile application, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their mobile applications. We do not assume any responsibility or liability for the actions, products, services, and content of any other third-parties. You should carefully review the legal statements and other conditions of use of any mobile application which you access through a link from this Mobile Application. Your linking to any other off-site mobile applications is at your own risk.</p>
		<h2>Intellectual property rights</h2>
		<p>This Agreement does not transfer to you any intellectual property owned by Mobile Application Developer or third-parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with Mobile Application Developer. All trademarks, service marks, graphics and logos used in connection with our Mobile Application or Services, are trademarks or registered trademarks of Mobile Application Developer or Mobile Application Developer licensors. Other trademarks, service marks, graphics and logos used in connection with our Mobile Application or Services may be the trademarks of other third-parties. Your use of our Mobile Application and Services grants you no right or license to reproduce or otherwise use any Mobile Application Developer or third-party trademarks.</p>
		<h2>Changes and amendments</h2>
		<p>We reserve the right to modify this Agreement or its policies relating to the Mobile Application or Services at any time, effective upon posting of an updated version of this Agreement in the Mobile Application. When we do, we will revise the updated date at the bottom of this page. Continued use of the Mobile Application after any such changes shall constitute your consent to such changes. Policy was created with <a style="color: inherit;" title="Generate terms and conditions" href="https://www.websitepolicies.com/blog/sample-terms-conditions-template" target="_blank" rel="noopener">WebsitePolicies</a>.</p>
		<h2>Acceptance of these terms</h2>
		<p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using the Mobile Application or its Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Mobile Application and its Services.</p>
		<h2>Contacting us</h2>
		<p>If you have any questions about this Agreement, please <a href="mailto:mkkompanion@gmail.com">contact us</a>.</p>
		<p>This document was last updated on June 11, 2019</p>
	</section>
</template>

<script>
import Arrow from '~/components/svg/Arrow'
export default {
	layout: 'landing',
	components: {Arrow}
}
</script>

<style scoped>
p {
	@apply mb-6
}
h2 {
	@apply text-3xl font-bold mb-2
}
a {
	@apply text-blue
}
a:hover {
	@apply underline
}
</style>
