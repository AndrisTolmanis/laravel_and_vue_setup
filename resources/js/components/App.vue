<template>
  <div id="app">
    <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
  </div>
</template>

<script>
import SampleRequest from '@/api/sample-request';

const sampleRequest = new SampleRequest();

export default {
  name: 'App',
  created(){
    this.getData();
  },

  methods: {
    async getData(){
      const data = await sampleRequest.doRequest();
      console.log('Data:', data);
    },
  },
};
</script>
<style lang="scss" scoped>
#app{
    width: 100vw;
    height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	.a{
		background: red;
	}
	.b{
		background: green;
	}
	.c{
		background: blue;
	}

    .a, .b, .c{
        height: 100vh;
    }
}
</style>
