<script setup>
import { random } from './helpers'
import { reactive } from 'vue'

const props = defineProps(['numOps']);
const ops = [];

for (let i=0; i<props.numOps; i++) {
    let operand1 = random(10,50);
    let operand2 = random(10,50);
    let result = operand1 + operand2;
    let answer = 0;
    ops[i] = { operand1, operand2, result, answer };
}

const state = reactive({
    ops,
    showCorrection: false,
    numCorrect: 0
})

function check() {
    state.showCorrection = true;
    state.numCorrect = state.ops.filter(op => op.result == op.answer).length
}

</script>


<template>
    <h3>Edu</h3>
 
    <div class="m-2" v-for="(op,index) in state.ops">
        <span>{{ op.operand1 }}</span> + <span>{{ op.operand2 }}</span> = 
        <input type="number" style="width:80px" v-model.number="state.ops[index].answer" />
        <span
            v-if="state.showCorrection" 
            class="ms-2" 
            :class="{ 
                correct: state.ops[index].result == state.ops[index].answer,
                error: state.ops[index].result != state.ops[index].answer
            }"
        >
            {{ state.ops[index].result }}
        </span>
    </div>
    <button @click="check" class="btn btn-sm btn-primary m-2">Corriger</button>
    <div class="m-3" v-if="state.showCorrection">
        {{ state.numCorrect }} / {{ props.numOps}}
    </div>

</template>

<style scoped>
.correct { color: green }
.error { color: red }
</style>

<!--
A utiliser de cette façon dans le template parent: 
  <Edugame :numOps="5" />
-->