<script>
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    export let name;

    let userName = ''
    let password = ''

    //todo: hide the form

    function login() {
		dispatch('login', {
            // text: 'Hello!'
            // password,
            // userName
		});
	}
</script>

<header>
    <h1>{name}</h1>
        <form>
            <label>user name:</label><input/>
            <label>password:</label><input/>
        </form>
    <button on:click={login}>login</button>
</header>

<style>
    header {
        width:100%;
        background-color: #fc0;
    }
</style>