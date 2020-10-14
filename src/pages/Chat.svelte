<script>
    import { onMount } from 'svelte';
    import {loadPosts} from '../services/posts';
    import posts, {clearList, addItem} from '../store/posts';

	import MessagesList from '../components/MessagesList.svelte'
	import MessagesForm from '../components/MessagesForm.svelte'

    
    function sendMessage({detail}){
		console.log('sendMessage', detail.text)
    }
    
    onMount(() => {
        loadPosts();
    })

    $: if(posts.length = 0 ) {
        //isLoading
    }
    
    // reactive on posts list
    posts.subscribe(posts => {
        console.log('posts', posts)
    })

</script>

<button on:click={() => clearList()}> clearList </button>
<button on:click={() => addItem('foo')}> addItem </button>

<MessagesList messages={$posts}/>
<MessagesForm on:send={sendMessage}/>