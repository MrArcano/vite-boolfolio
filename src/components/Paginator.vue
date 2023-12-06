<script>
export default {
  name: "Paginator",
  props: {
    paginator: Object,
  },
  created() {},
  data() {
    return {};
  },
  methods: {
    changeUrl(newUrl) {
      // console.log(newUrl);
      if (newUrl) {
        console.log(newUrl);
        this.$emit("changePage", newUrl);
      }
    },
  },
};
</script>

<template>
  <div class="text-center">
    <div class="btn-group" role="group">
      <button
        v-for="link in paginator.links"
        :key="link.label"
        v-html="link.label"
        type="button"
        class="btn btn-info fw-bold"
        @click="changeUrl(link.url)"
        :disabled="link.active || !link.url"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
