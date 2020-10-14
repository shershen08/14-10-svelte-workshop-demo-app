<script>
    export let messages;
</script>

<section>
    <ul>
    {#each messages as msg}
        <li>
            <h4>{msg.title}</h4>
            <p>{msg.body}</p>
        </li>
    {/each}
    </ul>
</section>

<style>
    section {
        height: 50vh;
        overflow-x: scroll;
    }
</style>