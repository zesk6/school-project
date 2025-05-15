<script lang="ts"> 
    export let sucessOpen;

    let closed: boolean;

    sucessOpen.subscribe((value: boolean ) => {
        closed = value
    })

    


</script>



{#if closed}
<div class="fixed inset-0 backdrop-blur x-auto flex background-white min-h-full items-end flex-col justify-center p-4 sm:my-2 sm:min-h-[calc(100%-3.5rem)] sm:items-center sm:p-0 z-1000">
    <div class="flex flex-col text-green-600 ">
        <h1 class="text-xl font-bold">Sucess!</h1>
        <span class="text-lg">Reload to see changes</span>
    </div>
    <button onclick={() => sucessOpen.set(false)} class="btn btn-primary border-2 rounded-xl pt-1 pb-1 pl-2 pr-2 m-2 text-gray-800 border-gray-800 cursor-pointer">close</button>
</div>
{/if}
