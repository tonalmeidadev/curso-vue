<script>
import Scoreboard from './components/Scoreboard.vue';
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    Scoreboard,
    Button
  },

  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswers: undefined,
      chosenAnswer: undefined,
      answerSubmitted: false,
      winCount: 0,
      loseCount: 0
    }
  },
  computed: {
    answers() {
      var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      answers.splice(Math.round(Math.random() * answers.length), 0, this.correctAnswers);
      return answers
    }
  },
  methods: {
    submitAnswer() {
      if (!this.chosenAnswer) {
        alert("Pick one of the options")
      } else {
        this.answerSubmitted = true;

        if (this.chosenAnswer == this.correctAnswers) {
          this.winCount++
        } else {
          this.loseCount++
        }
      }
    },
    getQuestion() {
      this.answerSubmitted = false;
      this.chosenAnswer = undefined;
      this.question = undefined;

      this.axios
        .get('https://opentdb.com/api.php?amount=1&category=18')
        .then((response) => {
          this.question = response.data.results[0].question;
          this.incorrectAnswers = response.data.results[0].incorrect_answers;
          this.correctAnswers = response.data.results[0].correct_answer;
        })
    }
  },
  created() {
    this.getQuestion()
  }
}
</script>

<template>
  <main class="answer">
    <h1 class="answer__title">Quizz💡</h1>

    <Scoreboard :winCount="this.winCount" :loseCount="this.loseCount" />

    <template v-if="this.question">
      <h2 class="answer__question" v-html="'🔸 ' + this.question" />

      <div class="answer__alternatives">
        <template v-for="answer in this.answers" :key="answer">
          <label class="answer__input">
            <input :disabled="this.answerSubmitted" type="radio" name="options" :value="answer"
              v-model="this.chosenAnswer">
            <span v-html="answer" />
          </label>
        </template>
      </div>

      <Button className="send" text="Send" v-if="!this.answerSubmitted" @click="submitAnswer()" />
    </template>


    <section v-if="this.answerSubmitted">
      <h4 v-if="this.chosenAnswer == this.correctAnswers"
        v-html="`✅ Congratulations, the answer ${this.correctAnswers} is correct.`" class="answer__message" />
      <h4 v-else v-html="`❌ I'm sorry, yout picked the wrong answer. The correct is ${this.correctAnswers}.`"
        class="answer__message" />

      <Button className="next" text="Next question" @click="this.getQuestion()" />
    </section>
  </main>
</template>

<style lang="scss">
.answer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30rem;
  margin: 0 auto;

  &__title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  &__question {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  &__alternatives {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  &__input {
    gap: 0.5rem;
    display: flex;

    input {
      width: 1rem;
    }
  }

  &__message {
    margin-top: 2rem;
  }
}
</style>
