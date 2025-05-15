<script lang="ts">
    export let sportName: string;
    export let image: any;
    export let description: string;
</script>


<li class=" h-50 card pt-5 pb-8 border-b border-black">
    <a href={`/reserve/${sportName}`} class="no-underline">
        <div class="card-body flex flex-row   ">
            <figure class="w-45 h-45">
                <img src={image} alt="no one cares">
            </figure>
            <div class="flex flex-col justify-between ml-5 w-100">
                <div class="flex flex-col">
                    <h2>{sportName}</h2>
                    <span class="text-gray-700">{description}</span>
                </div>
                <button class="btn btn-primary no-underline mb-10 p-2 border rounded cursor-pointer">    
                    Make a reservation
                </button>
            </div>
        </div>
    </a>
</li>
<style>
    a{
        text-decoration: none;
    }
    h2{
        font-size: 1.5rem;
        line-height: normal;
        font-weight: bold;
        color: rgb(70, 70, 70);
    }
</style>