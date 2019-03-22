<template>
  <f7-page name="coupon">
    <f7-navbar title="優惠券設定" back-link="Back"></f7-navbar>
    <f7-button fill color="gray" style="margin:20px;float:right" >新增優惠券</f7-button>
    <f7-block class style>
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="name" label="名稱" width="100"></el-table-column>
        <el-table-column prop="describe" label="簡述"></el-table-column>
        <el-table-column prop="deadline" label="截止日期" width="100"></el-table-column>
        <el-table-column prop="status" label="狀態" width="95"></el-table-column>
        <el-table-column label="操作" width="95">
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
          name: "優惠券01",
          describe: "簡述123",
          deadline: "2019/02/23",
          status: "啟用中"
        },
        {
          name: "優惠券02",
          describe: "簡述123",
          deadline: "2019/02/23",
          status: "啟用中"
        },
        {
          name: "優惠券03",
          describe: "簡述123",
          deadline: "2019/02/23",
          status: "停用"
        },
        {
          name: "優惠券04",
          describe: "簡述123",
          deadline: "2019/02/23",
          status: "停用"
        },
        {
          name: "優惠券05",
          describe: "簡述123",
          deadline: "2019/02/23",
          status: "啟用中"
        },
        {
          name: "優惠券06",
          describe: "簡述123",
          deadline: "2019/02/23",
          status: "啟用中"
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
    }
  },
  beforeMount() {
    let temp = 0;
    let self = this;
    this.tableData.forEach((item, index) => {
      if (index > 0 && item.name != self.tableData[index - 1].name) {
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
</style>
