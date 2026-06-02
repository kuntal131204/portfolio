<template>
  <svg class="logo-svg" viewBox="0 0 100 100">
    <text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" class="logo-text">
      KG
    </text>
  </svg>
</template>

<style scoped lang="scss">
.logo-svg {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 60px;
  font-weight: bold;
  fill: var(--icon-color); /* 🔥 THIS IS THE MAGIC */
}
</style>