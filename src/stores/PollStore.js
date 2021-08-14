import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: "Javascript or PHP",
        answerA: "Javascript",
        answerB: "PHP",
        votesA: 14,
        votesB: 10,
    },
]);


export default PollStore;