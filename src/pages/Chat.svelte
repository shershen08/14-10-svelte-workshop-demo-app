<script>
	import { onMount } from 'svelte';
	import MessagesList from '../components/MessagesList.svelte'
	import MessagesForm from '../components/MessagesForm.svelte'

    let messages = []
    
    function sendMessage({detail}){
		console.log('sendMessage', detail.text)
    }
    
    onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
		messages = await res.json();
	})



</script>
<MessagesList messages={messages}/>
<MessagesForm on:send={sendMessage}/>