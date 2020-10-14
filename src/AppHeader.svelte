<script>
    import Nav from './Nav.svelte';
    export let name;
</script>

<header>
    <h1>{name}</h1>
    <Nav/>
</header>

<style>
    header {
        width:100%;
        background-color: #fc0;
    }
</style>