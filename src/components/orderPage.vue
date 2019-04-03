<template>
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
                      <div class="number"><b>30</b></div>
                    </div>
                    <div class="item-cell" style="font-size:15px;margin:0px;width:250%;text-align:center;">
                      珍珠奶茶X1,蜂蜜檸檬Ｘ1
                      <div class="date" style="font-size:13px;">2019/03/20</div>
                    </div>
                    <div class="item-cell price" style="text-align:end;">
                      <div style=""><b>$120</b></div>
                      <div style="padding-top:10px;font-size:13px;">已付款</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </f7-tab>
</template>
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
#view-report #orderOutline ul {
  border-radius: 0px;
  border: solid 1px;
  border-color: rgb(185, 175, 175) !important;
}

#view-report #orderDetail ul {
  border-radius: 0px;
  border: solid 1px;
  border-color: rgb(185, 175, 175) !important;
}
</style>
