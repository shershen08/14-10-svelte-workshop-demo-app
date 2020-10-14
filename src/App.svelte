<script>
	import Router from 'svelte-spa-router';

	import Header from './AppHeader.svelte'
	import Users from './pages/Users.svelte';
	import Login from './pages/Login.svelte';
	import Chat from './pages/Chat.svelte';

	export let appName;

	const routes = {
		 '/': Login,
		 '/users': Users,
		 '/chat': Chat,
		//  '/product/:id': 
		//  '*': Login
	}
</script>

<main>
	<Header name={appName}/>
	<Router {routes}/>
</main>

<style>
	
</style>