<script>
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let text = ''

     function send() {
		dispatch('send', {
            text
        });
        text = ''
	}
</script>

<div>
    <textarea bind:value={text} placeholder="Enter your message..." ></textarea>
    <button on:click={send}>send</button>
</div>