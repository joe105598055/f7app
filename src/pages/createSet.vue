<template>
  <f7-page name="createSet">
    <f7-navbar title="新增套餐" back-link="Back"></f7-navbar>

    <f7-block-title>Title</f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input label="套餐名稱" type="text" placeholder="Your name"></f7-list-input>

      <f7-list-input label="E-mail" type="email" placeholder="E-mail"></f7-list-input>

      <f7-list-input label="URL" type="url" placeholder="URL"></f7-list-input>

      <f7-list-input label="Password" type="password" placeholder="Password"></f7-list-input>

      <f7-list-input label="Phone" type="tel" placeholder="Phone"></f7-list-input>

      <f7-list-input label="Gender" type="select">
        <option>Male</option>
        <option>Female</option>
      </f7-list-input>
      <f7-list-input
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></f7-list-input>
      <f7-list-item title="Toggle">
        <f7-toggle slot="after"></f7-toggle>
      </f7-list-item>
      <!-- start -->
      <meal-card v-for="(i) in mealCardList" :key="i" @deleteCard="deleteCard" :cardId="i"></meal-card>
      <!-- end -->
      <f7-block>
        <f7-button
          @click="createMealCard"
          class="col"
          outline
          raised
          color="blue"
          style="border-radius:25px; 
          width: 20%;
    margin-left: 40%"
    icon-f7="add"
        ></f7-button>
      </f7-block>
      <f7-block>
        <f7-button @click="createSet" class="col"  large fill raised color="green">新增套餐</f7-button>
      </f7-block>
    </f7-list>
  </f7-page>  
</template>
<script>
import mealCard from "../components/mealCard.vue";
export default {
  components: {
    mealCard: mealCard
  },
  data() {
    return {
      mealCardCount: 0,
      mealCardList:[],
    };
  },
  methods: {
    createSet() {
      console.log(`createSet`);
      this.$f7router.back();
      this.$f7.dialog.alert("", "新增套餐成功");
    },
    createMealCard() {
      this.mealCardList.push(+this.mealCardCount)
      this.mealCardCount ++;
      // console.log(this.mealCardCount);
    },
    deleteCard(index){
      console.log(`[deleteCard] ${index}`)
      console.log(JSON.stringify(this.mealCardList,null,2))
      if(this.mealCardList.indexOf(index)!==-1){
        this.mealCardList.splice(this.mealCardList.indexOf(index),1)
      }
      // this.mealCardCount.splice(index,1)
    }
  }
};
</script>

<style>
.verticalLine {
  border-left: thick solid #ff0000;
}
.el-checkbox__inner {
  border-radius: 25px;
}
.el-tree-node__content {
  margin: 8px;
}
.el-tree-node__label {
  font-size: 17px;
  padding-left: 5px;
}

.card-footer .list .item-content {
  padding-left: 0px;
  color: black;
}
</style>
