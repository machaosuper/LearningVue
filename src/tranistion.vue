<template>
	<div>
		<button v-on:click="show = !show">show/hide text</button>
		<transition name="fade">
		<p v-if="show">hellow world</p>
		</transition/>
	</div>
</template>
<script>
	export default {
		name:'demo',
		// data:function() {
		// 	return {
		// 		show: true
		// 	}
		// }
		data() {
			return {
				show: true
			}
		}

	}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active{
		transition:opacity 0.5s;
	}
	.fade-enter, .fade-leave-active{
		opacity: 0;
	}
</style>