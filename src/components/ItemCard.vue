<template>
  <div class="card-wrapper">
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 1000%; max-height: 33%"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            {{ item.title }}
            <b-card-text>
              {{ item.description }}
            </b-card-text>
            <b-card-text> {{ item.price }} ₪ </b-card-text>
            <b-card-text>
              <b-row class="my-1 amount-label-col">
                <b-col sm="3">
                  <label
                    class="amount-label"
                    :for="`numberOfProducts-` + sorce + `-` + item.id"
                    >Amount:
                  </label>
                </b-col>
                <b-col class="amount-input-col" sm="3">
                  <b-form-input
                    class="amount-input"
                    :id="`numberOfProducts-` + sorce + `-` + item.id"
                    type="number"
                    :placeholder="item.amount.toString()"
                    :value="item.amount"
                    @input="setNewAmount(item)"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-card-text>
            <b-button href="#" @click="clickFunction(item)" variant="primary">{{
              btnTitle
            }}</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object, required: true, default: () => {} },
    btnTitle: { type: String, required: true, default: () => {} },
    clickFunction: { type: Function, required: true, default: () => {} },
    state: { type: Object, required: false, default: () => {} },
    sorce: { type: String, required: true, default: () => {} },
  },
  methods: {
    setNewAmount(item) {
      this.$store.commit("whenFocusLeaves", item);
    },
  },
};
</script>
<style>
.card-wrapper {
  margin-bottom: 3rem;
}
.amount-label-col .amount-label {
  padding-top: 0.5rem;
}
.amount-input-col .amount-input {
  width: 5rem;
  margin-left: 1rem;
}
</style>
