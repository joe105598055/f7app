<template>
  <f7-page name="flavor">
    <f7-navbar title="口味設定" back-link="Back"></f7-navbar>
    <f7-block-title style="float:right">
      <f7-button fill color="gray">新增口味</f7-button>
    </f7-block-title>
    <f7-block class style="clear:both">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="flavor" label="口味" width="100"></el-table-column>
        <el-table-column prop="option" label="選項"></el-table-column>
        <el-table-column prop="price" label="價格"></el-table-column>
        <el-table-column label="操作" width="100">
          <!-- <f7-button color="blue" outline style="float:left">編輯</f7-button>
          <f7-button color="red" @click="deleteFlavor" outline style="float:left;margin-left:10px">刪除</f7-button>-->
          <template slot-scope="scope">
            <f7-button
              icon-f7="edit"
              style="float:left"
              color="gray"
              icon-size="16px"
              @click="handleEdit(scope.$index, scope.row)"
            ></f7-button>
            <f7-button
              icon-f7="trash_fill"
              type="danger"
              color="gray"
              icon-size="16px"
              @click="handleDelete(scope.$index, scope.row)"
              style="float:left"
            ></f7-button>
          </template>
        </el-table-column>
      </el-table>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          flavor: "水果量",
          option: "正常",
          price: "+0",
          amount2: "3.2"
        },
        {
          flavor: "水果量",
          option: "兩倍",
          price: "+10",
          amount2: "4.43"
        },
        {
          flavor: "飲料冰塊量",
          option: "去冰",
          price: "+20"
        },
        {
          flavor: "飲料冰塊量",
          option: "少冰",
          price: "+20"
        },
        {
          flavor: "飲料冰塊量",
          option: "半冰",
          price: "+40"
        },
        {
          flavor: "飲料冰塊量",
          option: "全冰",
          price: "+50"
        },
        {
          flavor: "甜度",
          option: "無糖",
          price: "+10"
        },
        {
          flavor: "甜度",
          option: "全糖",
          price: "621",
          price: "+20"
        },
        {
          flavor: "甜度",
          option: "全糖",
          price: "621",
          price: "+30"
        }
      ],
      tableConfig: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(`[edit] ${index}, ${JSON.stringify(row)}`);
    },
    handleDelete(index, row) {
      console.log(`[delete] ${index}, ${JSON.stringify(row)}`);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (
          this.tableConfig
            .map(e => {
              return e.index;
            })
            .indexOf(rowIndex) !== -1
        ) {
          let combine;
          this.tableConfig.forEach(e => {
            if (e.index === rowIndex) {
              combine = e.combine;
            }
          });
          return {
            rowspan: combine,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  },
  beforeMount() {
    let temp = 0;
    let self = this;
    this.tableData.forEach((item, index) => {
      if (index > 0 && item.flavor != self.tableData[index - 1].flavor) {
        if (self.tableConfig.length != 0) {
          self.tableConfig.push({ index: temp, combine: index - temp });
        } else {
          self.tableConfig.push({ index: 0, combine: index - temp });
        }
        temp = index;
      }
      if (index == self.tableData.length - 1) {
        self.tableConfig.push({ index: temp, combine: index - temp + 1 });
      }
    });
  }
};
</script>
<style>
div > a:hover {
  background-color: inherit;
}
.hover-row {
  background-color: inherit;
}
</style>
