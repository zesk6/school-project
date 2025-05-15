<script lang="ts">
	import Reservation from "$lib/reservation.svelte";
	import tennis from '$lib/images/images.jpg'
	import soccer from '$lib/images/soxxoe.jpg'
	import gym from '$lib/images/d.jpg'
	const sportsNames = [
		{sportName: 'tennis', image: tennis, description: 'the tennis court in the middle of the school grounds'},
		{sportName: 'soccer', image: soccer, description: 'the soccer (football) field with a net over it'},
		{sportName: 'gym', image: gym, description: 'the entire gym'}
	]


</script>

<svelte:head>
	<title>WLSA sport reservations</title>
</svelte:head>

<section class="flex flex-col">
	<h1 class="text-2xl font-extrabold m-5">Reserve a sports facility</h1>
	<div>
		<ul class="flex flex-col justify-start">
			{#each sportsNames as {sportName, image, description} }
				<Reservation {sportName} {image} {description}/> 
			{/each}
		</ul>
	</div>
</section>
