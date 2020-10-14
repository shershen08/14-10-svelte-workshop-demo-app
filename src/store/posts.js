import { writable } from 'svelte/store';

// const localStorageKey = 'my-app';

// const getJSON = () => {
//     let data = []
//     try {
//       data = JSON.parse(localStorage.getItem(localStorageKey));
//     } catch {
//       //
//     }
//     return data
// }
const posts = writable([])
export default posts;


export const clearList = () => {
    posts.set([]);
}

export const setList = (allPosts) => {
    posts.set(allPosts);
}

export const addItem = (text) => {
    posts.update(oldPosts => {
        oldPosts.push({
            body: text,
            id: oldPosts.length + 1
        })
        return oldPosts
    })
}