<script lang="ts">
   import { app, db } from "$lib/firebase"
    import { doc, writeBatch } from "firebase/firestore";
    
    let test = '';


    async function testing(){
        const batch = writeBatch(db);

        batch.set(doc(db, "news", test), {fucking: "works"})

        await batch.commit()


        test = ''

    }
</script>

<div>
    <form on:submit|preventDefault={testing}>
        <input type="text"
        bind:value={test} 
        >
        <input type="submit">
    </form>
</div>