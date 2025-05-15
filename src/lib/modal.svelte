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


    const sucessOpen = writable(false)
    const failOpen = writable(false)




    function convertToDate(date:string, time:string){
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

<button onclick={buttonClick}  class="btn border-2 rounded p-1.5 text-red-900 font-bold text-xl">Add Reservation</button>



<dialog id="Modele" class="modal p-10 m-20 w-300 h-150 flex flex-col {hidden} rounded-2xl" >
    <div class="modal-box flex justify-between flex-row mb-8">
        <h3 class="font-bold black text-3xl">
            Make a reservation
        </h3>
        <button aria-label="close-button" class="btn p-2 rounded-full cursor-pointer hover:bg-gray-200" onclick={() => alert('the button is a lie')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-testid="svg-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
        </button>
    </div>
    <div class="modal-action">
        <form method="dialog" class="flex flex-col" onsubmit={makeReservation}>
            <div class='pb-3'>
                <label for="name" class="text-lg">Your Name:</label>
                <input bind:value={name} type="text" id="name" class="ml-5" placeholder="Zero Two">
            </div>
            <div class='pb-3'>
                <label for="date" class=" text-lg">Enter date:</label>
                <input bind:value={date} type="text" id="date" placeholder="MM-DD" class="ml-5">
            </div>
            <div class='pb-3'>
                <label for="starting" class="text-lg">Enter starting time:</label>
                <input bind:value={startingTime} type="text" id="starting" placeholder="hr:m" class="ml-5">
            </div>
            <div class='pb-3'>   
                <label for="date" class="text-lg">Enter ending time:</label>
                <input bind:value={endingTime} type="text" id="ending" placeholder="hr:m" class="ml-5">
            </div>
            <button type="submit" class="btn btn-primary border-2 rounded-full p-2 mt-5 hover:border-green-800 hover:text-green-800 cursor-pointer">Submit</button>
        </form>
    </div>
</dialog>

{#if !error }
    <SucessModal {sucessOpen}/>
{:else if error} 
    <FailModal {failOpen}/>
{/if}