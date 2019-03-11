<template>
  <f7-page name="singleMeal">
    <f7-navbar back-link="Back"></f7-navbar>
    <f7-block>
      <img
        class="elevation-demo elevation-6 elevation-hover-24 elevation-pressed-12 elevation-transition"
        width="350"
        style="margin-left: auto; margin-right: auto; display: block;"
        src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
      >
    </f7-block>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        :value="name"
        :disabled="editMode"
        @input="name = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="E-mail"
        type="email"
        :value="'qwert321@gamil.com'"
        :disabled="editMode"
        placeholder="E-mail"
      ></f7-list-input>

      <f7-list-input label="URL" type="url" placeholder="URL"></f7-list-input>

      <f7-list-input label="Password" type="password" placeholder="Password"></f7-list-input>

      <f7-list-input label="Phone" type="tel" placeholder="Phone"></f7-list-input>

      <f7-list-input label="Gender" type="select" :disabled="editMode">
        <option>Male</option>
        <option>Female</option>
      </f7-list-input>

      <f7-list-input
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></f7-list-input>

      <f7-list-item title="Toggle" :disabled="editMode">
        <f7-toggle slot="after"></f7-toggle>
      </f7-list-item>

      <f7-list-input label="Range" :input="false" :disabled="editMode">
        <f7-range slot="input" :value="50" :min="0" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input type="textarea" label="Textarea" placeholder="Bio"></f7-list-input>
      <f7-list-input type="textarea" label="Resizable" placeholder="Bio" resizable></f7-list-input>
    </f7-list>
    <f7-block>
      <f7-row tag="p">
        <f7-button
          class="col"
          large
          fill
          raised
          :color="editMode?'blue':'green'"
          @click="editMode=!editMode"
          :text="editMode?'edit':'save'"
        ></f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
// style="margin-left: auto;display: block; margin-right: auto;width: 40%;"

export default {
  data() {
    return {
      editMode: true,
      name:'Tom'
    };
  },
  methods: {}
};
</script>

