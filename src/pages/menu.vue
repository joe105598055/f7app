<template>
  <f7-page name="menu">
    <f7-navbar title="菜單"></f7-navbar>
    <f7-subnavbar>
      <f7-segmented raised>
        <f7-button tab-link="#mealPage" tab-link-active>單點</f7-button>
        <f7-button tab-link="#setPage">套餐</f7-button>
      </f7-segmented>
      <f7-subnavbar v-if="editMode">
        <f7-segmented raised>
          <f7-button :text="finishText" @click="finishEdit" color="red"></f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-subnavbar>

    <!-- <f7-button v-if="editMode" fill :text="finishText" @click="finishEdit"></f7-button> -->
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
            :title="'SingleMeal-' + i"
            after="$15"
            subtitle="Beatles"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          >
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
              width="80"
            >
            <div class="item-text">xssss</div>
            
          </f7-list-item>
        </f7-list>
      </f7-tab>
      <f7-tab id="setPage" @tab:show="setTab">
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
            :title="'ComboMeal-' + i"
            after="$16"
            subtitle="Michael Jackson"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          >
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
              width="80"
            >
          </f7-list-item>
        </f7-list>
      </f7-tab>
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
      finishText: "完成"
    };
  },
  methods: {
    createMenu() {
      setTimeout(() => {
        if (
          document.getElementById("mealPage").classList.contains("tab-active")
        ) {
          this.$f7router.navigate("/createMeal");
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
        this.disableTab("setPage");
      } else {
        this.setSortable = true;
        this.disableTab("mealPage");
      }
    },
    deleteMenu() {
      this.editMode = true;
      this.finishText = "完成刪除";
      if (
        document.getElementById("mealPage").classList.contains("tab-active")
      ) {
        this.mealDeletable = true;
        this.disableTab("setPage");
      } else {
        this.setDeletable = true;
        this.disableTab("mealPage");
      }
    },
    finishEdit() {
      this.editMode = false;
      this.mealSortable = false;
      this.mealDeletable = false;
      this.setSortable = false;
      this.setDeletable = false;
      $(`a[data-tab="#setPage"]`).css({ "pointer-events": "", opacity: "" });
      $(`a[data-tab="#mealPage"]`).css({ "pointer-events": "", opacity: "" });
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
    }
  },
  mounted() {
    let self = this;
    this.$f7ready(f7 => {
      // Call F7 APIs here
    });
    $(".meal").on("click", function(e) {
      console.log(e.currentTarget);
      if (self.mealDeletable === false) {
        self.$f7router.navigate("/meal", {
          context: { name: "beef", price: "120" }
        });
      }
    });
  }
};
</script>