<template>
  <f7-page name="settings">
    <f7-navbar title="Settings"></f7-navbar>

    <f7-block-title>
      <f7-button
        color="gray"
        outline
        style="float:right;width:30%;border-radius: 0px;"
        @click="logout"
      >登出</f7-button>
    </f7-block-title>
    <!-- <div class="grid">
      <a href="#">優惠卷</a>
      <div>商家設定</div>
      <div>活動</div>
      <div>口味</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
    </div>-->
    <f7-block>
      <f7-row no-gap>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">活動</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill @click="routeFlavor" class="more">口味</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill @click="routeCoupon" class="more">優惠卷</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">語系</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">帳號</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">點數</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">餐廳</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">通知</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">發票</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">支付</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <f7-button color="gray" fill class="more">叫修</f7-button>
        </f7-col>
        <f7-col width="33" tablet-width="20">
          <!-- <f7-button color="gray" fill class="more">叫修</f7-button> -->
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    routeFlavor() {
      this.$f7router.navigate("/flavor");
    },
    routeCoupon() {
      this.$f7router.navigate("/coupon");
    },
    logout() {
      let login = this.$f7.loginScreen.get("#my-login-screen");
      login.open();
      // this.$f7router.navigate('/',{
      //   pushState: true,
      //   reloadAll: true,
      //   ignoreCache: true
      // })
    }
  },
  mounted() {}
};
</script>
<style>
.more {
  float: left;
  width: 100%;
  border: solid 0.5px;
  border-radius: 0px;
  height: 90px;
  line-height: 90px;

  height: calc(width * 1);
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(6rem, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr)); */
  grid-auto-rows: 1fr;
}

.grid::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.grid > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  text-align: center;
  padding-top: 40%;
}

/* Just to make the grid visible */

.grid > * {
  background: rgba(145, 119, 119, 0.1);
  border: 1px white solid;
  text-align: center;
  padding-top: 40%;
  /* border-radius:100%; */
  background-color: rgb(161, 211, 219);
  font-size: 16px;
  margin: 1px;
}
</style>
