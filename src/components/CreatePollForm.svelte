<script>
    import PollStore from "../stores/PollStore";
    import { createEventDispatcher } from "svelte";
    import Button from "../shared/Button.svelte";

    let dispatch = createEventDispatcher();
    let fields = { question: "", answerA: "", answerB: "" };
    let errors = { question: "", answerA: "", answerB: "" };
    let isValid = false;
    const submitHandler = () => {
        isValid = true;
        // validate question field
        if (fields.question.trim().length < 5) {
            isValid = false;
            errors.question = "Question must be at least 5 characters long";
        } else {
            errors.question = ""; // reset
        }

        // validate answer A field
        if (fields.answerA.trim().length < 1) {
            isValid = false;
            errors.answerA = "Answer A cannot be empty";
        } else {
            errors.answerA = ""; // reset
        }

        // validate answer B field
        if (fields.answerB.trim().length < 1) {
            isValid = false;
            errors.answerB = "Answer B cannot be empty";
        } else {
            errors.answerB = ""; // reset
        }

        // add new poll
        if (isValid) {
            const poll = {
                ...fields,
                votesA: 0,
                votesB: 0,
                id: Math.floor(Math.random() * 200),
            };
            // save poll to store
            PollStore.update((currentPolls) => {
                return [poll, ...currentPolls];
            });
            dispatch("add");
        }
    };
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question} />
        <small class="error">{errors.question}</small>
    </div>
    <div class="form-field">
        <label for="answer-a">Poll Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA} />
        <small class="error">{errors.answerA}</small>
    </div>
    <div class="form-field">
        <label for="answer-b">Poll Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB} />
        <small class="error">{errors.answerB}</small>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
        text-align: left;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
    .error {
        font-weight: bold;
        font-size: 12px;
        color: #dfbac1;
        text-align: left;
    }
</style>
