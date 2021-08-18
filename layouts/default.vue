<template>
  <div id="app-store-front" class="container relative mx-auto min-h-screen">
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Welcome',
          to: '/'
        },
        {
          title: 'Blogs',
          to: {
            name: 'blogs'
          }
        }
      ],

    };
  },

  created(){

      console.log( 'created...' );
  }
};
</script>
