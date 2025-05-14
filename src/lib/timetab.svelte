<script lang="ts">
    import {Calendar, TimeGrid} from '@event-calendar/core'
    let props = $props()    

        

    



    let options = $state(
        {
            view: 'timeGridWeek', 
            events: props.reservations
        }
    )
</script>

<Calendar plugins={[TimeGrid]} {options} />
