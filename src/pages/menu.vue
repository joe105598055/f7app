<template>
  <f7-page name="menu">
    <f7-navbar title="菜單"></f7-navbar>
    <f7-subnavbar>
      <f7-button
        v-if="!editMode"
        tab-link="#mealPage"
        color="gray"
        outline
        style="margin:10px;"
        tab-link-active
      >單點</f7-button>
      <f7-button v-if="!editMode" tab-link="#setPage" color="gray" outline style="margin:10px">套餐</f7-button>
      <f7-button v-if="editMode" :text="finishText" @click="finishEdit" color="red"></f7-button>
    </f7-subnavbar>

    <f7-fab v-if="!editMode" position="right-bottom" slot="fixed" color="blue">
      <f7-icon ios="f7:edit" md="material:edit"></f7-icon>
      <f7-icon ios="f7:close" md="material:close"></f7-icon>
      <f7-fab-buttons position="left">
        <f7-fab-button fab-close @click="createMenu">新增</f7-fab-button>
        <f7-fab-button fab-close @click="sortMenu">排序</f7-fab-button>
        <f7-fab-button fab-close @click="deleteMenu">刪除</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
    <f7-tabs>
      <f7-tab id="mealPage" tab-active @tab:show="mealTab">
        <f7-list>
          <f7-list-item id="selectMealContent">
            <div class="item-input-wrap input-dropdown-wrap">
              <select
                placeholder="Please choose..."
                v-model="mealOption"
                @change="changeMealOption"
                style="font-size:18px;"
              >
                <option value="全部餐點">全部餐點</option>
                <option value="飲品">飲品</option>
                <option value="甜點">甜點</option>
                <option value="主餐">主餐</option>
              </select>
            </div>
          </f7-list-item>
        </f7-list>

        <f7-list
          media-list
          :sortable="mealSortable"
          :sortable-enabled="mealSortable"
          @sortable:sort="onSortMeal"
        >
          <f7-list-item
            class="item-link meal"
            v-for="i in 8"
            :key="i"
            :id="12345678"
            @click="routeSingleMeal"
            :checkbox="mealDeletable"
            :title="'蜂蜜檸檬' + i"
            after
            subtitle="飲品"
          >
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
              width="63"
            >
            <div class="item-text" style="text-align:center;font-size:20px;top:-26px;">
              <b>$120</b>
            </div>
            <div class="item-text" style="float:right;top:-57px;">
              <div>
                <el-switch
                  v-model="value2"
                  active-color="#13ce66"
                  inactive-color="#a6aab2"
                  style="display:block"
                ></el-switch>
                <div id="remain" style="display:block;padding:2px;">庫存50</div>
              </div>
            </div>
          </f7-list-item>
        </f7-list>
      </f7-tab>
      <!-- start -->
      <f7-tab id="setPage" @tab:show="setTab">
        <f7-list>
          <f7-list-item id="selectSetContent">
            <div class="item-input-wrap input-dropdown-wrap">
              <select
                placeholder="Please choose..."
                v-model="setOption"
                @change="changeSetOption"
                style="font-size:18px;"
              >
                <option value="全部餐點">全部餐點</option>
                <option value="飲品">飲品</option>
                <option value="甜點">甜點</option>
                <option value="主餐">主餐</option>
              </select>
            </div>
          </f7-list-item>
        </f7-list>
        <f7-list
          media-list
          :sortable="setSortable"
          :sortable-enabled="setSortable"
          @sortable:sort="onSortSet"
        >
          <f7-list-item
            class="item-link set"
            v-for="i in 5"
            :id="123"
            :checkbox="setDeletable"
            :key="i"
            :title="'套餐' + i"
            after
            subtitle="Michael Jackson"
          >
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
              width="63"
            >
          </f7-list-item>
        </f7-list>
      </f7-tab>
      <!-- end -->
    </f7-tabs>
  </f7-page>
</template>
<script>
// pointer-events: none;opacity:0.3;

import $$ from "dom7";
export default {
  data: function() {
    return {
      mealSortable: false,
      setSortable: false,
      mealDeletable: false,
      setDeletable: false,
      editMode: false,
      currentTab: "meal",
      finishText: "完成",
      value2: false,
      mealOption: "全部餐點",
      setOption: "全部餐點"
    };
  },
  methods: {
    createMenu() {
      setTimeout(() => {
        if (
          document.getElementById("mealPage").classList.contains("tab-active")
        ) {
          this.$f7router.navigate("/mealTable", {
            // pushState: true,
            // reloadAll: true,
            // ignoreCache: true
          });
        } else {
          this.$f7router.navigate("/createSet");
        }
      }, 100);
    },
    routeSingleMeal() {
      // Todo context to pass data
      // console.log(this.mealDeletable);
      // if (this.mealDeletable === false) {
      //   this.$f7router.navigate("/meal", {
      //     context: { name: "beef", price: "120" }
      //   });
      // }
    },
    sortMenu() {
      this.editMode = true;
      this.finishText = "完成排序";
      if (
        document.getElementById("mealPage").classList.contains("tab-active")
      ) {
        this.mealSortable = true;
        // this.disableTab("setPage");
      } else {
        this.setSortable = true;
        // this.disableTab("mealPage");
      }
    },
    deleteMenu() {
      this.editMode = true;
      this.finishText = "完成刪除";
      if (
        document.getElementById("mealPage").classList.contains("tab-active")
      ) {
        this.mealDeletable = true;
        // this.disableTab("setPage");
      } else {
        this.setDeletable = true;
        // this.disableTab("mealPage");
      }
    },
    finishEdit() {
      this.editMode = false;
      this.mealSortable = false;
      this.mealDeletable = false;
      this.setSortable = false;
      this.setDeletable = false;
      // $(`a[data-tab="#setPage"]`).css({ "pointer-events": "", opacity: "" });
      // $(`a[data-tab="#mealPage"]`).css({ "pointer-events": "", opacity: "" });
    },
    mealTab() {
      this.currentTab = "meal";
    },
    setTab() {
      this.currentTab = "set";
    },
    chooseDeleteMeal() {
      // this.mealDeletable? $$('.meal').addClass('item-link') : $$('.meal').removeClass('item-link')
      this.mealDeletable = !this.mealDeletable;
    },
    chooseDeleteSet() {
      this.setDeletable = !this.setDeletable;
    },
    onSortMeal(e) {
      // Sort data
      console.log(e.target);
      console.log(e.detail);
    },
    onSortSet(e) {
      console.log(e.target);
      console.log(e.detail);
    },
    disableTab(tabID) {
      $(`a[data-tab="#${tabID}"]`).css({
        "pointer-events": "none",
        opacity: "0.3"
      });
    },
    changeMealOption() {
      console.log(`To do changeMealOption`);
    },
    changeSetOption() {
      console.log(`To do changeSetOption`);
    }
  },
  mounted() {
    let self = this;
    this.$f7ready(f7 => {
      // Call F7 APIs here
    });
    $(".meal").on("click", function(e) {
      if (e.target === $(this).find(".el-switch__core")[0]) {
        //prevent route by click swtich
        return false;
      }
      if (self.mealDeletable === false) {
        self.$f7router.navigate("/meal", {
          context: { name: "beef", price: "120" }
        });
      }
    });
  }
};
</script>
<style>
#view-menu .subnavbar-inner {
  width: auto;
  margin: auto;
}
#view-menu a[data-tab="#mealPage"].button {
  width: 150px;
  border-radius: 0px;
}
#view-menu a[data-tab="#setPage"].button {
  width: 150px;
  border-radius: 0px;
}
#view-menu .item-title,
.item-subtitle {
  top: 8px;
}
.item-text {
  display: block !important;
}
#view-menu .media-list .item-link .item-title-row:before,
li.media-item .item-link .item-title-row:before {
  display: none;
}

#view-menu .list .item-inner {
  padding-bottom: 0px;
  height: 80px;
}

#view-menu .list .item-text {
  color: black;
}
#selectType {
  font-size: 20px;
}
#view-menu .list.media-list {
  margin-top: 0px;
  margin-bottom: 100px;
}
#view-menu #selectMealContent .item-inner {
  height: 20px !important;
}
#view-menu #selectSetContent .item-inner {
  height: 20px !important;
}

#mealPage .list:nth-child(1) {
  margin: 0px !important;
}

#setPage .list:nth-child(1) {
  margin: 0px !important;
}
.subnavbar {
  background-color: white;
}
</style>
