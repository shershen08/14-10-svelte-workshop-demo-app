<script>
	import { onMount } from 'svelte';

	import Header from './AppHeader.svelte'
	import MessagesForm from './MessagesForm.svelte'
	import MessagesList from './MessagesList.svelte'

	export let name;
	let userName = 'Mike';
	let userLastName = 'Smith'
	let isLoading = true;
	let messages = []

	$: fullUserName = userName + userLastName;

	function handleClick() {
		userName = 'Alex';
	}

	function authenticate(){
		console.log('axios post call')
	}
	
	function sendMessage(e){
		console.log('sendMessage', e)
	}

	setTimeout(() => {
		isLoading = false
	},2500)

	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
		messages = await res.json();
	})

</script>

<main>
	<Header name={name} on:login={authenticate}/>

	<MessagesList messages={messages}/>
	<MessagesForm on:send={sendMessage}/>

	<!-- {#if !isLoading}
		<section>
			some data
		</section>
	{/if}
	{#if isLoading}
		<p>isLoading...</p>
	{/if} -->

	<h1>Hello {name}!</h1>
	<p>{userName}</p>
	--
	<p>fullUserName: {fullUserName}</p>
	<button on:click={handleClick}>toggle name</button>
	<button on:click={() => userName = 'Jane'}>toggle 2</button>
</main>

<style>
	
</style>