<template functional>
  <!-- prettier-ignore -->
  <nuxt-link
    :to="props.to"
    class="inline-block mt-5 py-2 px-5 w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white leading-6 font-semibold border border-transparent rounded-xl transition-colors duration-200"
  >
    <slot>{{ props.to }}</slot>
  </nuxt-link>
</template>
