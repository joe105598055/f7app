<template>
  <f7-card>
    <f7-card-header>餐點選擇 : {{cardId}}</f7-card-header>
    <f7-link
      color="gray"
      :style="{position: 'absolute', right: '15px', top: '10px'}"
      icon-f7="close"
      @click="deleteCard"
    ></f7-link>
    <f7-row no-gap>
      <el-tree :data="treeData" :props="defaultProps" show-checkbox @check="check" :id="test"></el-tree>
    </f7-row>
    <f7-card-footer>
      <f7-list inline-labels no-hairlines-md>
        <f7-list-input
          label="數量"
          type="text"
          placeholder="輸入數量"
          error-message="請輸入數字"
          required
          validate
          pattern="[0-9]*"
        ></f7-list-input>
      </f7-list>
    </f7-card-footer>
  </f7-card>
</template>
<script>
export default {
  props: ["cardId"],
  data() {
    return {
        test:'hello',
      treeData: [
        {
          label: "麵類",
          children: [
            {
              label: "豬肉炒麵"
            },
            {
              label: "牛肉炒麵"
            },
            {
              label: "羊肉炒麵"
            }
          ]
        },
        {
          label: "麵包類",
          children: [
            {
              label: "菠蘿麵包"
            },
            {
              label: "牛角麵包"
            }
          ]
        },
        {
          label: "飲料類",
          children: [
            {
              label: "可爾必思"
            },
            {
              label: "可樂"
            },
            {
              label: "雪碧"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      checkedMealList: []
    };
  },
  methods: {
    check(data, check) {
      this.checkedMealList = check.checkedNodes
        .map(each => {
          if (!each.children) return each.label;
        })
        .filter(function(el) {
          return el != null;
        });
      console.log(JSON.stringify(this.checkedMealList, null, 2));
    },
    deleteCard() {
      this.$emit("deleteCard", this.cardId);
    }
  },
  mounted() {
    console.log(`[mounted] ${this.$vnode.key}`);
  }
};
</script>
