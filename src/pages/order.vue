<template>
  <f7-page name="order">
    <f7-navbar title="訂單"></f7-navbar>
    <!-- <f7-block-title>Collapsible</f7-block-title> -->
    <div class="block-header">
      <!-- <p>The following table will be collapsed to kind of List View on small screens:</p> -->
    </div>
    <div class="card data-table data-table-collapsible data-table-init">
      <div class="card-header">
        <!-- <div class="data-table-title">全部訂單</div>    -->
        <div class="data-table-actions">
          <!-- <f7-link icon-ios="f7:sort" icon-md="material:sort"></f7-link> -->
          <!-- <f7-link icon-ios="f7:more_vertical_round" icon-md="material:more_vert"></f7-link> -->
          <div class="item-input-wrap input-dropdown-wrap">
            <select placeholder="Please choose..." v-model="currentStatus" @change="selectStatus">
              <option value="全部訂單">全部訂單</option>
              <option value="未付款">未付款</option>
              <option value="已付款">已付款</option>
              <option value="出餐完成">出餐完成</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="label-cell">訂單時間</th>
              <th class="numeric-cell">訂單號碼</th>
              <th class="numeric-cell">餐點</th>
              <th class="numeric-cell">小計</th>
              <th class="numeric-cell">折扣</th>
              <th class="numeric-cell">狀態</th>
              <th class="numeric-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,index) in selectOrderList" :key="index" @click="ss" class="item-link">
              <td class="label-cell" data-collapsible-title="訂單時間">{{order.time}}</td>
              <td class="numeric-cell" data-collapsible-title="訂單號碼">{{order.number}}</td>
              <td class="numeric-cell" data-collapsible-title="餐點">{{order.content}}</td>
              <td class="numeric-cell" data-collapsible-title="小計">{{order.price}}</td>
              <td class="numeric-cell" data-collapsible-title="折扣">{{order.discount}}</td>
              <td class="numeric-cell" data-collapsible-title="狀態">
                <f7-chip v-if="order.status=='已付款'" text="已付款" color="blue"></f7-chip>
                <f7-chip v-if="order.status=='出餐完成'" text="出餐完成" color="green"></f7-chip>
                <f7-chip v-if="order.status=='未付款'" text="未付款" color="red"></f7-chip>
              </td>
              <td class="numeric-cell" data-collapsible-title="操作">
                <f7-row>
                  <f7-col>
                    <f7-button outline>出餐</f7-button>
                  </f7-col>
                  <f7-col>
                    <f7-button outline>退款</f7-button>
                  </f7-col>
                  <f7-col>
                    <f7-button outline>付款</f7-button>
                  </f7-col>
                </f7-row>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "已付款"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "已付款"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "已付款"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "已付款"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "已付款"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "出餐完成"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "已付款"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "出餐完成"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "未付款"
        },
        {
          time: "2019-03-18",
          number: "012312",
          content: "餐點 x 1",
          price: "$240",
          discount: "$10",
          status: "未付款"
        }
      ],
      selectOrderList: [],
      currentStatus: "全部訂單"
    };
  },
  methods: {
    selectStatus() {
      if (this.currentStatus == "全部訂單") {
        this.selectOrderList = this.orderList;
        return;
      }
      this.selectOrderList = this.orderList.filter(each => {
        return each.status == this.currentStatus;
      });
    },
    ss() {
      console.log(`cc`);
    }
  },
  mounted() {
    console.log(`[mounted]`);
    this.selectOrderList = this.orderList;
  }
};
</script>

<style>
:root {
  --f7-chip-font-size: 15px;
}
a,.button{
  display: inline;
}
</style>
