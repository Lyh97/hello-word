<template>
  <div>
    <!-- <h1>{{this.routerParam.p}}</h1> -->
    <h1>{{ msg }}</h1>
    <h2>{{ id }} : {{ name }}</h2>
    <div>
      <label>FULL NAME: </label>{{fullName}}<br/>
      <label>INSERT FULL NAME: </label><input v-model="fullName" />
    </div><br/>

    <el-select v-model="lastName" placeholder="Last Name">
      <el-option
        v-for="lastItem in lastNameList"
        :key="lastItem.value"
        :label="lastItem.label"
        :value="lastItem.value">
      </el-option>
    </el-select>

    <el-select v-model="firstName" placeholder="First Name">
      <el-option
        v-for="firstItem in firstNameList"
        :key="firstItem.value"
        :label="firstItem.label"
        :value="firstItem.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    id: String,
    name: String
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      firstNameList: [],
      lastNameList: [],
      // routerParam: this.$router.params
    }
  },
  created() {
    this.init();
  },
  computed: {
    fullName: {
      get: function() {
        return this.lastName + " " + this.firstName;
      },
      set: function(newValue) {
        var names = newValue.split('')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
        return this.lastName + this.firstName
      }
    }
  },
  methods: {
    init() {
      this.firstNameList= [
        {
          value: '一',
          label: '一'
        }, {
          value: '二',
          label: '二'
        }, {
          value: '三',
          label: '三'
        }, {
          value: '四',
          label: '四'
        }, {
          value: '五',
          label: '五'
        }
      ],
      this.lastNameList= [
        {
          value: '赵',
          label: '赵'
        }, {
          value: '钱',
          label: '钱'
        }, {
          value: '孙',
          label: '孙'
        }, {
          value: '李',
          label: '李'
        }, {
          value: '周',
          label: '周'
        }
      ]
    }
  }
}
</script>