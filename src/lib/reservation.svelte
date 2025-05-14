<script lang="ts">
    export let sportName: string;
    export let image: any;
    export let description: string;
</script>


<a href={`/reserve/${sportName}`} class="card  ">
    <div class="card-body   ">
        <figure>
            <img src={image} alt="no one cares">
        </figure>
        <h2 class="card-title">{sportName}</h2>
        <div>
            <span>{description}</span>
       </div>
       <div class="card-action">
            <button class="btn btn-primary">    
                Make a reservation
            </button>
       </div>
    </div>
</a>