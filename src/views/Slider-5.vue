<template>
  <div class="c-form row">
    <div class="col-6 c-form__column">
      <div class="c-form__group">
        <label for="name"></label>
        <input
          class="input"
          placeholder="Lieu"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div class="c-form__group">
        <label for="name"></label>
        <input
          class="input"
          placeholder="Lieu"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div class="c-form__group">
        <label for="name"></label>
        <input
          class="input"
          placeholder="Lieu"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div class="row">
        <div class="c-form__group c-form__group--radio">
          <input class="radio" type="radio" name="name" id="test" required />
          <label for="test">Nucléaire <span></span></label>
        </div>
        <div class="c-form__group c-form__group--radio">
          <input class="radio" type="radio" name="name" id="test" required />
          <label for="test">Nucléaire <span></span></label>
        </div>
        <div class="c-form__group c-form__group--radio">
          <input class="radio" type="radio" name="name" id="test" required />
          <label for="test">Nucléaire <span></span></label>
        </div>
      </div>
      <button class="c-form__btn">Envoyer</button>
    </div>
    <div class="col-6 c-form__column">
      <div class="c-form__group">
        <h3 class="c-form__title text--xl">
          Envis de connaître ta consommation de déchet ?
        </h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      select1Normal: "",
      select1: 2,
      options1: [
        { text: "IT", value: 0 },
        { text: "Blade Runner", value: 2 },
        { text: "Thor Ragnarok", value: 3 },
      ],
    };
  },
};
</script>
       