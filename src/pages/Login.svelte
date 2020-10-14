<script>

    let userName = ''
    let password = ''

    function authenticate(){
		console.log('axios post call')
	}
</script>


<form>
    <label>user name:</label><input/>
    <label>password:</label><input/>
</form>
<button on:click={authenticate}>login</button>