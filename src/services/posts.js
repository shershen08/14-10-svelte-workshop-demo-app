
import {setList} from '../store/posts';

export const loadPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
    const messages = await res.json();
    console.log(messages)
    setList(messages)
}