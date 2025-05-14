<script lang="ts">
    export let failOpen;

    let closed: boolean;

    failOpen.subscribe((value:boolean) => {
        closed = value
    })



</script>

{#if closed}
<div class="fixed inset-0 backdrop-blur x-auto flex background-white min-h-full items-end flex-col justify-center p-4 sm:my-2 sm:min-h-[calc(100%-3.5rem)] sm:items-center sm:p-0 z-1">
    <div class="flex flex-col text-red-600 ">
        <h1 class="text-xl font-bold">Failed</h1>
        <span class="text-lg">Incorrect/blank date formatting. Do it again retard</span>
    </div>
    <button onclick={() => failOpen.set(false)} class="btn btn-primary border border-2 p-2 m-2 rounded-full">close</button>
</div>
{/if}