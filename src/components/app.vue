<template>
  <f7-app :params="f7params">
    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar></f7-statusbar>

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar id="my-toolbar" tabbar labels bottom>
        <f7-link
          tab-link="#view-home"
          tab-link-active
          icon-ios="f7:home"
          icon-md="material:home"
          text="營運"
        ></f7-link>
        <f7-link tab-link="#view-menu" icon-ios="f7:document_text" icon-md="material:document_text" text="菜單"></f7-link>
        <f7-link tab-link="#view-order" icon-ios="f7:list" icon-md="material:view_list" text="訂單"></f7-link>
        <f7-link tab-link="#view-report" icon-ios="f7:bars_chart" icon-md="material:bars_chart" text="報表"></f7-link>
        <f7-link
          tab-link="#view-settings"
          icon-ios="f7:menu"
          icon-md="material:menu"
          text="設定"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Catalog View -->
      <f7-view id="view-menu" name="menu" tab url="/menu/"></f7-view>

      <f7-view id="view-order" name="order" tab url="/order/"></f7-view>

      <f7-view id="view-report" name="report" tab url="/report/"></f7-view>

      <!-- Settings View -->
      <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>
    </f7-views>
    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
    <f7-login-screen id="my-login-screen" class="login-screen modal-in">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>
            <img src="../../logo.png" width="200" height="300">
          </f7-login-screen-title>
          <f7-block style="width:70%;">
            <f7-list inline-labels no-hairlines-md>
              <f7-list-input
                label="帳號 :"
                type="text"
                name="username"
                placeholder
                :value="username"
                @input="username = $event.target.value"
              ></f7-list-input>
              <f7-list-input
                label="密碼 :"
                type="password"
                name="password"
                placeholder
                :value="password"
                @input="password = $event.target.value"
              ></f7-list-input>
            </f7-list>
          </f7-block>
          <f7-list>
            <f7-list-button title="登入" @click="login"></f7-list-button>
            <!-- <f7-block-footer>
              Some text about login information
              <br>Click "Sign In" to close Login Screen
            </f7-block-footer>-->
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
import routes from "../js/routes.js";
import $$ from "dom7";

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: "My App", // App name
        theme: "auto", // Automatic theme detection
        // App root data
        data: function() {
          return {
            user: {
              firstName: "John",
              lastName: "Doe"
            },
            // Demo products for Catalog section
            products: [
              {
                id: "1",
                title: "Apple iPhone 8",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."
              },
              {
                id: "2",
                title: "Apple iPhone 8 Plus",
                description:
                  "Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"
              },
              {
                id: "3",
                title: "Apple iPhone X",
                description:
                  "Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."
              }
            ]
          };
        },
        // App routes
        routes: routes
      },
      // Login screen data
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let login = this.$f7.loginScreen.get("#my-login-screen");
      login.close();
      $("[data-tab='#view-home']")[0].click(); // default page
    },
    hide() {
      console.log(`hide `);
    }
  },
  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
    });
    // this.$f7.toolbar.hide("#my-toolbar");
    let login = this.$f7.loginScreen.get("#my-login-screen");
    login.close();
  }
};
</script>
<style>
.login-screen-title {
  margin-top: 100px !important;
}
.login-screen.modal-in,
.login-screen.modal-out {
  transition-duration: 200ms;
}
</style>
