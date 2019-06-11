<template>
	<section class="container">
		<div class="flex py-4 md:py-0">
			<n-link to="/" class="my-auto mr-4">
				<div class="h-10 w-10 rounded-full flex cursor-pointer bg-gold mk-box">
					<arrow class="m-auto" style="transform: rotate(180deg);"/>
				</div>
			</n-link>
			<h1 class="font-mk text-3xl sm:text-4xl md:text-6xl">Privacy Policy</h1>
		</div>
		<p>MK Kompanion app is a free third party app. This service is provided by at no cost and is intended for use as is.</p>
		<p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our service.</p>
		<p>If you choose to use our service, then you agree to the collection and use of information in relation to this policy. The personal information that we collect is used for providing and improving the service. We will not use or share your information with anyone except as described in this privacy policy.</p>
		<p>The terms used in this privacy policy have the same meanings as in our terms and conditions, which is accessible at MK Kompanion unless otherwise defined in this privacy policy.</p>
		<p><strong>Information Collection and Use</strong></p>
		<p>For a better experience, while using our service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained on your device and is not collected by us in any way.</p>
		<p>The app does use third party services that may collect information used to identify you.</p>
		<div class="mb-4">
			<p>Link to privacy policy of third party service providers used by the app:</p>
			<ul>
				<li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener">Google Play Services</a></li>
				<li><a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener">Firebase Analytics</a></li>
				<li><a href="https://fabric.io/privacy" target="_blank" rel="noopener">Fabric</a></li>
				<li><a href="http://try.crashlytics.com/terms/privacy-policy.pdf" target="_blank" rel="noopener">Crashlytics</a></li>
			</ul>
		</div>
		<p><strong>Log Data</strong></p>
		<p>We want to inform you that whenever you use our service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (&ldquo;IP&rdquo;) address, device name, operating system version, the configuration of the app when utilizing our service, the time and date of your use of the Service, and other statistics.</p>
		<p><strong>Cookies</strong></p>
		<p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
		<p>This Service does not use these &ldquo;cookies&rdquo; explicitly. However, the app may use third party code and libraries that use &ldquo;cookies&rdquo; to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
		<p><strong>Service Providers</strong></p>
		<p>We may employ third-party companies and individuals due to the following reasons:</p>
		<ul>
			<li>To facilitate our service;</li>
			<li>To provide the service on our behalf;</li>
			<li>To perform service-related services; or</li>
			<li>To assist us in analyzing how our service is used.</li>
		</ul>
		<p>We want to inform users of this service that these third parties have access to your personal information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
		<p><strong>Security</strong></p>
		<p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
		<p><strong>Links to Other Sites</strong></p>
		<p>This service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
		<p><strong>Children&rsquo;s Privacy</strong></p>
		<p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
		<p><strong>Changes to This Privacy Policy</strong></p>
		<p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
		<p><strong>Contact Us</strong></p>
		<p>If you have any questions or suggestions about our privacy policy, do not hesitate to <a href="mailto:mkkompanion@gmail.com">contact us</a>.</p>
		<p>This privacy policy page was created at&nbsp;<a href="https://privacypolicytemplate.net" target="_blank" rel="noopener">privacypolicytemplate.net</a>&nbsp;and modified/generated by&nbsp;<a href="https://app-privacy-policy-generator.firebaseapp.com/" target="_blank" rel="noopener">App Privacy Policy Generator</a>.</p>
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
strong {
	@apply text-3xl font-bold mb-2
}
a {
	@apply text-blue
}
a:hover {
	@apply underline
}
</style>
