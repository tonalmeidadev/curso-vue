<script>
export default {
  name: "ScoreboardComponent",
  props: ['winCount', 'loseCount']
}
</script>

<template>
  <div class="scoreboard">
    <span class="scoreboard__names">Ton Almeida</span>
    <div class="scoreboard__score">
      <span>{{ this.winCount }}</span>
      X
      <span>{{ this.loseCount }}</span>
    </div>
    <span class="scoreboard__names">Computer</span>
  </div>
</template>

<style lang="scss">
$border: #52525b;

.scoreboard {
  gap: 0.5rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-bottom: 2rem;

  &__names {
    display: flex;
    align-items: center;

    &:first-child {
      justify-content: flex-end;
    }

    &:last-child {
      justify-content: flex-start;
    }
  }

  &__score {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 2.5rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $border;
      border-radius: 0.25rem;
    }
  }
}
</style>
