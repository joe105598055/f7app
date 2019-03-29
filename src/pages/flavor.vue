<template>
  <f7-page name="flavor" id="flavor">
    <f7-navbar title="口味設定" back-link=""></f7-navbar>
    <f7-button
      fill
      color="gray"
      class="createButton"
      @click="createFlavor"
      data-toggle="modal"
      data-target="#myModal"
    >新增口味</f7-button>
    <f7-block>
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
      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog" style="margin-top:130px">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <!-- <f7-button class="close" data-dismiss="modal" style="float:right">&times;</f7-button> -->
              <h4 class="modal-title">新增口味</h4>
            </div>
            <f7-list no-hairlines>
              <f7-list-input label="口味" type="text" placeholder="輸入口味"></f7-list-input>
              <f7-list-input label="選項" type="text" placeholder="輸入選項"></f7-list-input>
              <f7-list-input label="價格" type="number" placeholder="輸入價格"></f7-list-input>
            </f7-list>
            <div class="modal-footer">
              <f7-button fill color="red" style="float:right" data-dismiss="modal">取消</f7-button>
              <f7-button fill color="blue" style="float:right;margin-right:5px;">新增</f7-button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editModal" role="dialog" style="margin-top:130px">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">編輯口味</h4>
            </div>
            <f7-list no-hairlines>
              <f7-list-input label="口味" type="text" :value="editFlavor" placeholder="輸入口味"></f7-list-input>
              <f7-list-input label="選項" type="text" :value="editOption" placeholder="輸入選項"></f7-list-input>
              <f7-list-input label="價格" type="text" :value="editPrice" placeholder="輸入價格"></f7-list-input>
            </f7-list>
            <div class="modal-footer">
              <f7-button fill color="red" style="float:right" data-dismiss="modal">取消</f7-button>
              <f7-button fill color="blue" style="float:right;margin-right:5px;">儲存</f7-button> 
            </div>
          </div>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
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
      tableConfig: [],
      editOption: "",
      editFlavor: "",
      editPrice: ""
    };
  },
  methods: {
    createFlavor() {
      console.log(`createFlavor`);
    },
    handleEdit(index, row) {
      console.log(`[edit] ${index}, ${JSON.stringify(row)}`);
      this.editOption = row.option;
      this.editFlavor = row.flavor;
      this.editPrice = row.price;
      console.log(this.editPrice)
      $("#editModal").modal({backdrop: 'static', keyboard: false});
      
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
.createButton {
  float: right;
  margin: 20px;
  z-index: 2;
}
button[data-dismiss="modal"] {
  width: 30%;
}
#flavor .createButton:focus,a.createButton:active{
  color: white;
}
#flavor .modal-footer a:focus,a:active{
  color: white;
}
/*  */
</style>
