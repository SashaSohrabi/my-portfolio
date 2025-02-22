<template>
  <main>
    <div class="container text-center">
      <h1 class="animate__animated animate__fadeInDown">
        Home Page 🎉 <font-awesome-icon icon="home" />
      </h1>
      <p class="lead animate__animated animate__fadeInUp">
        Welcome to my Vue 3 portfolio with Bootstrap, Font Awesome, and Animate.css!
      </p>

      <button class="btn btn-success btn-lg animate__animated animate__pulse animate__infinite">
        <font-awesome-icon icon="rocket" /> Explore Now
      </button>

      <div class="alert alert-primary mt-4 animate__animated animate__fadeIn">
        <font-awesome-icon icon="check-circle" /> Bootstrap & Font Awesome are working perfectly!
      </div>
    </div>
  </main>
</template>

<script setup>
// No additional logic required
</script>

<style lang="scss">
$primary-color: #42b983;

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    color: $primary-color;
    font-size: 2.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  button {
    margin-top: 20px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
