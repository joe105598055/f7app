<template>
  <f7-page name="report">
    <f7-navbar title="報表"></f7-navbar>
    <f7-subnavbar>
      <f7-button tab-link="#orderPage" color="gray" outline style="margin:10px;" tab-link-active>訂單</f7-button>
      <f7-button tab-link="#salePage" color="gray" outline style="margin:10px">餐點銷售數量</f7-button>
      <f7-button tab-link="#payPage" color="gray" outline style="margin:10px">支付明細</f7-button>
    </f7-subnavbar>
    <f7-tabs>
      <f7-tab id="orderPage" tab-active>
        <f7-list media-list inset id="orderOutline">
          <f7-list-item title="今日營業額" subtitle="15,000"></f7-list-item>
          <f7-list-item title="今日訂單筆數" subtitle="1000"></f7-list-item>
          <f7-list-item title="現金收入" subtitle="12,500"></f7-list-item>
          <f7-list-item title="信用卡與其他支付收入" subtitle="5,400"></f7-list-item>
        </f7-list>
        <div class="list inset" id="orderDetail">
          <ul>
            <li v-for="i in 8" :key="i">
              <div class="item-content">
                <div class="item-inner item-cell">
                  <div class="item-row">
                    <div class="item-cell test">
                      <div class="numberTag" style="font-size:13px;">編號</div>
                      <div class="number">
                        <b>30</b>
                      </div>
                    </div>
                    <div
                      class="item-cell"
                      style="font-size:15px;margin:0px;width:250%;text-align:center;"
                    >
                      珍珠奶茶X1,蜂蜜檸檬Ｘ1
                      <div class="date" style="font-size:13px;">2019/03/20</div>
                    </div>
                    <div class="item-cell price" style="text-align:end;">
                      <div style>
                        <b>$120</b>
                      </div>
                      <div style="padding-top:10px;font-size:13px;">已付款</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </f7-tab>
      <!-- <order-page>
      </order-page>-->
      <f7-tab id="salePage">
        <div class="list inset" id="saleMeal">
          <ul>
            <li>
              <div class="item-inner item-cell">
                <div class="item-row">
                  <div class="item-cell" style="padding-left: 18px;">單點</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-inner item-cell" style="font-size:13px;min-height:0px;">
                <div class="item-row">
                  <div class="item-cell" style="padding-left: 18px;">排名</div>
                  <div class="item-cell" style="width:180%">餐點</div>
                  <div class="item-cell">點餐數量</div>
                </div>
              </div>
            </li>
            <li v-for="i in 10" :key="i">
              <div class="item-inner item-cell content" style="min-height:10px;">
                <div class="item-row" style="font-size:11px;">
                  <div class="item-cell" style="padding-left: 18px;">{{i}}</div>
                  <div class="item-cell" style="width:180%">蜂蜜檸檬</div>
                  <div class="item-cell">50</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list inset" id="saleMeal">
          <ul>
            <li>
              <div class="item-inner item-cell">
                <div class="item-row">
                  <div class="item-cell" style="padding-left: 18px;">套餐</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-inner item-cell" style="font-size:13px;min-height:0px;">
                <div class="item-row">
                  <div class="item-cell" style="padding-left: 18px;">排名</div>
                  <div class="item-cell" style="width:180%">餐點</div>
                  <div class="item-cell">點餐數量</div>
                </div>
              </div>
            </li>
            <li v-for="i in 10" :key="i">
              <div class="item-inner item-cell content" style="min-height:10px;">
                <div class="item-row" style="font-size:11px;">
                  <div class="item-cell" style="padding-left: 18px;">{{i}}</div>
                  <div class="item-cell" style="width:180%">蜂蜜檸檬</div>
                  <div class="item-cell">50</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </f7-tab>
      <f7-tab id="payPage">
        <div class="list inset" id="payDetail">
          <ul>
            <li>
              <div class="item-inner item-cell">
                <div class="item-row">
                  <div class="item-cell" style="padding-left: 18px;">支付明細</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-inner item-cell" style="font-size:13px;min-height:0px;">
                <div class="item-row">
                  <div class="item-cell" style="padding-left: 18px;">排名</div>
                  <div class="item-cell" style="width:180%">資付方式</div>
                  <div class="item-cell">總金額</div>
                </div>
              </div>
            </li>
            <li v-for="(item,index) in payList" :key="index">
              <div class="item-inner item-cell content" style="min-height:10px;">
                <div class="item-row" style="font-size:11px;">
                  <div class="item-cell" style="padding-left: 18px;">{{index+1}}</div>
                  <div class="item-cell" style="width:180%">{{item.type}}</div>
                  <div class="item-cell">{{item.amount}}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
import orderPage from "../components/orderPage.vue";
export default {
  components: {
    orderPage: orderPage
  },
  data() {
    return {
      payList: [
        {
          type: "信用卡",
          amount: 1000
        },
        {
          type: "悠遊卡",
          amount: 1000
        },
        {
          type: "街口支付",
          amount: 1000
        },
        {
          type: "現金",
          amount: 1000
        },
        {
          type: "Line pay",
          amount: 1000
        },
        {
          type: "Apple pay",
          amount: 1000
        }
      ]
    };
  }
};
</script>
<style>
#view-report a[data-tab="#orderPage"].button {
  width: 30%;
  border-radius: 0px;
}
#view-report a[data-tab="#salePage"].button {
  width: 40%;
  border-radius: 0px;
}
#view-report a[data-tab="#payPage"].button {
  width: 30%;
  border-radius: 0px;
}
#view-report .item-title {
  font-weight: normal;
}
#view-report .item-subtitle {
  font-size: 30px;
  padding-left: 30%;
  font-weight: normal;
  padding-bottom: 15px;
}
#view-report #orderOutline .item-inner:after {
  width: 95% !important;
}
#view-report #orderOutline ul,
#view-report #orderDetail ul,
#view-report #saleMeal ul,
#view-report #payDetail ul {
  border-radius: 0px;
  border: solid 1px;
  border-color: rgb(185, 175, 175) !important;
}

/* #view-report #orderDetail ul {
  border-radius: 0px;
  border: solid 1px;
  border-color: rgb(185, 175, 175) !important;
} */
/* 餐點銷售數量 */
.list .item-inner.content:after {
  content: none;
}
</style>
