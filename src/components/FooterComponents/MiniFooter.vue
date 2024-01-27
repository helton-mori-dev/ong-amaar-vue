<template>
  <v-footer height="60" class="mini-footer">
    <label for="">{{ ano }} - ONG Amaar</label>
  </v-footer>
</template>

<script>
export default {
  name: "MiniFooter",
  data() {
    return {
      ano: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.mini-footer {
  width: 100%;
}

.mini-footer label {
  text-align: center;
  width: 100%;
  font-weight: 800;
  color: #503683;
}
</style>
