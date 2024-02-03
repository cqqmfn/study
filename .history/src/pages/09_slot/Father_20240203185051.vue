<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot="params">
          <ol>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ol>
        </template>
      </Game>
      <!-- <Game>
        <ol>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ol>
      </Game>
      <Game>
        <h3>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </h3>
      </Game> -->
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue'
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>