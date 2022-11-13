<template>
  <div>
      <h2>
          Index
      </h2>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  mounted() {
    $nuxt.$router.push("/dashboard");
  }
}
</script>