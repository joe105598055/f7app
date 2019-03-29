<template>
  <f7-page name="mealTable" id="mealTable">
    <f7-navbar title="新增單點" back-link=""></f7-navbar>
    <f7-block>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th class>商品編號 SKU</th>
            <th class>SKU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>商品標籤</td>
            <td contenteditable="true">季節限定</td>
          </tr>
          <tr>
            <td>季節限定</td>
            <td contenteditable="true">珍珠奶茶</td>
          </tr>
          <tr>
            <td>品項名</td>
            <td contenteditable="true">珍珠奶茶</td>
          </tr>
          <tr>
            <td>類別</td>
            <td contenteditable="true">飲品</td>
          </tr>
          <tr>
            <td>價格</td>
            <td contenteditable="true">$50</td>
          </tr>
          <tr>
            <td>特價價格</td>
            <td contenteditable="true">$40</td>
          </tr>
          <tr>
            <td>卡路里</td>
            <td contenteditable="true">100卡</td>
          </tr>
          <tr>
            <td>供應狀態</td>
            <td contenteditable="true">供應中</td>
          </tr>
          <tr>
            <td>限量</td>
            <td contenteditable="true">限量</td>
          </tr>
          <tr>
            <td>每訂單購買限制</td>
            <td contenteditable="true">32</td>
          </tr>
          <tr>
            <td>每日更新庫存</td>
            <td contenteditable="true">30</td>
          </tr>
          <tr>
            <td>剩餘庫存</td>
            <td contenteditable="true">20</td>
          </tr>
          <tr>
            <td>口味選項</td>
            <td contenteditable="true">正常冰,少冰,去冰</td>
          </tr>
          <tr>
            <td>說明</td>
            <td contenteditable="true">珍珠奶茶</td>
          </tr>
        </tbody>
      </table>
    </f7-block>
  </f7-page>
</template>
<style>
#mealTable tr td:first-child {
  font-weight: bold;
}
#mealTable tr th:nth-child(2) {
  font-weight: normal;
}
</style>
