<template>
    <div class="father">
        <hr>
        <h2> Slot Test </h2>
        <h3>这里是父组件</h3>
        <Child>
            <input v-model="number" />
            <div>{{getName()}}</div>
            <div>{{fullName}}</div>
        </Child>
    </div>
</template>
<script>
import Child from './Child.vue';
export default {
    data() {
      return {
        number: 12,
        firstName: "YuHang",
        lastName: "Liu"
      }
    },
    components: { Child },
    methods: {
      getName() {
        window.console.log("Function");
        return "function : " + this.lastName + this.firstName;
      },
      initData() {
        this.axios({
          method: "get",
          url: "selectAll",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(
          (response) => {
            window.console.log(response);
          })
      }
    },
    computed: {
      fullName() {
        window.console.log("Conputed");
        return "computed : " + this.lastName + this.firstName;
      }
    },
    mounted() {
      this.initData();
    }
}
</script>
