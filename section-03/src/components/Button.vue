<script>
export default {
  name: "ButtonComponent",
  props: ['className', 'text']
}
</script>

<template>
  <button type="button" class="button" :class="this.className">{{ this.text }}</button>
</template>

<style lang="scss">
$text: #fafafa;
$blue: #3b82f6;
$blueHover: #2563eb;
$green: #22c55e;
$greenHover: #16a34a;

.button {
  border: 0;
  color: $text;
  width: 10rem;
  cursor: pointer;
  margin-top: 2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: 200ms;

  &.send {
    background-color: $green;

    &:hover {
      background-color: $greenHover;
    }
  }

  &.next {
    background-color: $blue;

    &:hover {
      background-color: $blueHover;
    }
  }
}
</style>
