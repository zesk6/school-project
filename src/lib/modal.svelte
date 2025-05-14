<script lang="ts">
    import { db } from "$lib/firebase";
    import { doc, writeBatch } from "firebase/firestore";
    import FailModal from "./failModal.svelte";
    import SucessModal from "./sucessModal.svelte";
    import { writable } from "svelte/store";
    
    let props = $props()

    let hidden = $state('opacity-0')

    let name = $state('')
    let date = $state('');
    let startingTime = $state('')    
    let endingTime = $state('')    
    let id = $state('')

    let error = $state(false)
    let entered = $state(false)


    const sucessOpen = writable(false)
    const failOpen = writable(false)




    function convertToDate(date:string, time:string){
        console.log('it works until here')
        date = `2025-${date} ${time}:00`        
        
        function isDateValid(dt: string) {
            return !isNaN(new Date(dt))

        }       
        let actualDate: Date;
        if (isDateValid(date)){
            actualDate = new Date(date)
            console.log(actualDate)
            return date
        }else{
            return false
        }
    }
    async function makeReservation(){

        hidden = 'opacity-0'
        id = crypto.randomUUID()

        let timeframeEnd;
        let timeframeStart;

        timeframeStart = convertToDate(date, startingTime)
        timeframeEnd = convertToDate(date, endingTime)
        
        error = (!timeframeStart || !timeframeEnd) ? true : false;
        console.log(error)

                 
        if (!error){
            const batch = writeBatch(db)
            batch.set(doc(db, props.sport, id), {
                title: name,
                start: timeframeStart,
                end: timeframeEnd,
                id: id,
                editable: false,
            })
            sucessOpen.set(true)
            await batch.commit()

        }else {
            failOpen.set(true)
        }
        id = ''
        name = ''
        date = '';
        startingTime = ''   
        endingTime = ''
    }

    function buttonClick(){
        document.getElementById("Modele").showModal();
        hidden = '';
    }
</script>

<button onclick={buttonClick}  class="btn">Add Reservation</button>


<dialog id="Modele" class="modal p-10 m-20 object-center object-none w-300 h-150 flex flex-col {hidden}" >
    <div class="modal-box ">
        <h3 class="font-extrabold black text-xl">
            add your thing here
        </h3>
        <button class="btn">
            x
        </button>
    </div>
    <div class="modal-action">
        <form method="dialog" class="flex flex-col p-5 m-5" onsubmit={makeReservation}>
            <div class='p-3'>
                <label for="name" class="font-bold text-lg">Your Name:</label>
                <input bind:value={name} type="text" id="name" class="ml-5" placeholder="Zero Two">
            </div>
            <div class='p-3'>
                <label for="date" class="font-bold text-lg">Enter date:</label>
                <input bind:value={date} type="text" id="date" placeholder="MM-DD" class="ml-5">
            </div>
            <div class='p-3'>
                <label for="starting" class="font-bold text-lg">Enter starting time:</label>
                <input bind:value={startingTime} type="text" id="starting" placeholder="hr:m" class="ml-5">
            </div>
            <div class='p-3'>   
                <label for="date" class="font-bold text-lg">Enter ending time:</label>
                <input bind:value={endingTime} type="text" id="ending" placeholder="hr:m" class="ml-5">
            </div>

            <button type="submit" class="btn btn-primary border">Submit</button>
        </form>
    </div>
</dialog>

{#if !error }
    <SucessModal {sucessOpen}/>
{:else if error} 
    <FailModal {failOpen}/>
{/if}