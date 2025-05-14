<script lang="ts">
    import type { PageData } from './$types';
    import Timetab from '$lib/timetab.svelte';
    import Modal from '$lib/modal.svelte';
    let { data }: { data: PageData } = $props();
    
    const reservations = data.dataArray
    console.log(reservations)
</script>

<div>
    <Modal sport="gym" />   
    <Timetab {reservations}/>
</div>

