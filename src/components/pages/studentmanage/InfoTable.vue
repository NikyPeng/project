<template>
  <a-table
    :columns="columns"
    :rowKey="record => record.login.uuid"
    :dataSource="data"
    :pagination="pagination"
    @change="handleTableChange"
  >
    <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
  </a-table>
</template>
<script lang="ts">
import Vue from 'vue'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '手机号',
    dataIndex: 'phone'
  },
  {
    title: '身份证号',
    dataIndex: 'cardNo',
  },
  {
    title: '职业',
    dataIndex: 'profession',
  },
  {
    title: '学校名称',
    dataIndex: 'school',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '归属机构',
    dataIndex: 'orgName',
  },
  {
    title: '比赛科目',
    dataIndex: 'subject',
  },
  {
    title: '报名费用',
    dataIndex: 'cost',
  },
  {
    title: '是否支付',
    dataIndex: 'isPay',
  }
];
export default Vue.extend({
  name: 'InfoTable',
  props: {
    data: Object,
    type: String   //1-未报名，2-已报名，3-订单列表
  },
  computed: {
    columns () {
      let cols = [].concat(columns);
      if(this.type === '3'){
        cols.pop();
      }
      return cols
    }
  },
  data() {
    return {
      pagination: {
        size: '10',
        total: 100
      }
    }
  },
  methods: {
    handleTableChange(e) {
      let {current, pageSize} = e || {};
      this.$emit("turnPage",{
        type: this.type,
        page: current,
        pageSize
      });
    }
  }
})
</script>