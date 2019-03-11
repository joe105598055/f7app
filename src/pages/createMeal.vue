<template>
  <f7-page name="createMeal">
    <f7-navbar title="新增單點" back-link="Back"></f7-navbar>

    <f7-block-title>Title</f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input label="Name" type="text" placeholder="Your name"></f7-list-input>

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

      <f7-list-input label="Range" :input="false">
        <f7-range slot="input" :value="50" :min="0" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input type="textarea" label="Textarea" placeholder="Bio"></f7-list-input>
      <f7-list-input type="textarea" label="Resizable" placeholder="Bio" resizable></f7-list-input>
    </f7-list>
    <f7-block>
      <f7-button @click="createMeal" class="col" large fill raised color="green">新增餐點</f7-button>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  methods: {
    createMeal() {
      console.log(`createMeal`);
      this.$f7.dialog.alert("","新增單點成功");
      this.$f7router.back();
    }
  }
};
</script>
