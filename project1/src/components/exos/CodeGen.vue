<script setup>
import { ref } from 'vue'
import { random, replaceAt } from './helpers'

const props = defineProps(['withLetters']);

// ----- STATE -------
let code = ref('');
let input = ref('');
// ------------------


function generateCode() {

    let min = 10 ** (input.value - 1);
    let max = (10 ** input.value) - 1;
    let randValue = random(min, max);
    console.log({ min, max, randValue });
    
    if (props.withLetters === true) {

        // sous-ensemble de lettres de l'alphabet
        const letters = ['a', 'h', 'n', 'p', 'x'];

        // nombre de lettres à injecter
        const numLetters = parseInt(input.value / 2);

        // conversion du code numérique en string
        let codeText = randValue.toString();

        for (let i=0; i<numLetters; i++) {
            let randIndex = random(0, input.value);

            // récupère une lettre aléatoire parmi l'ensemble
            let randLetter = letters[random(0, letters.length - 1)];

            codeText = replaceAt(randIndex, codeText, randLetter);

        }

        code.value = codeText; // state update

    } else {

        code.value = randValue; // state update
    }

    


}

function onKeyUp(e) {
    //console.log(e.target.value)
    input.value = e.target.value; // data update
}
</script>

<template>
    <h2>CodeGen</h2>

    <input placeholder="longueur" type="text" v-bind:value="input" @keyup="onKeyUp" />
    <br />
    <button 
        @click="generateCode"
        v-bind:disabled="input < 4 || input > 20"
    >
        Générer le code</button>
    <p>{{ code }}</p>
</template>