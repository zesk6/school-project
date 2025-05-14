<script lang="ts">
	import Reservation from "$lib/reservation.svelte";
	import tennis from '$lib/images/images.jpg'
	import soccer from '$lib/images/soxxoe.jpg'
	import gym from '$lib/images/d.jpg'
	const sportsNames = [
		{sportName: 'tennis', image: tennis, description: 'the tennis court that takes up half of the school grounds'},
		{sportName: 'soccer', image: soccer, description: 'the soccer (football) field with a net over it'},
		{sportName: 'gym', image: gym, description: 'the entire gym'}
	]


</script>

<svelte:head>
	<title>WLSA reservation</title>
</svelte:head>

<section>
	<div>
		<ul>
			{#each sportsNames as {sportName, image, description} }
				<li>
					<Reservation {sportName} {image} {description}/> 
				</li>
				
			{/each}
		</ul>


	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}


</style>
