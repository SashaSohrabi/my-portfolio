<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="contact-form__group">
      <input
        id="email"
        type="email"
        v-model="form.email"
        @blur="v$.email.$touch()"
        :class="{ 'contact-form__input--error': v$.email.$error }"
        class="contact-form__input"
        :placeholder="props.emailAddress.placeholder"
      />
      <label for="email" class="contact-form__label">{{ props.emailAddress.label }}</label>
      <span v-if="v$.email.$error" class="contact-form__error">
        {{ props.emailAddress.error }}
      </span>
    </div>

    <div class="contact-form__group">
      <textarea
        id="textarea"
        v-model="form.message"
        @blur="v$.message.$touch()"
        :class="{ 'contact-form__input--error': v$.message.$error }"
        class="contact-form__input contact-form__textarea"
        :placeholder="props.message.placeholder"
        maxlength="500"
      ></textarea>
      <label for="textarea" class="contact-form__label">{{ props.message.label }}</label>
      <span v-if="v$.message.$error" class="contact-form__error">
        <span v-if="v$.message.required.$invalid">
          {{ props.message.error.required }}
        </span>
        <span v-else-if="v$.message.minLength.$invalid">
          {{ props.message.error.minLength }}
        </span>
      </span>
    </div>

    <BaseButton
      type="submit"
      variant="secondary"
      class="contact-form__button"
      :disabled="isSubmitting"
    >
      {{ props.submitButton.text }}
      <LoaderIcon v-if="isSubmitting" :size="2.4" />
    </BaseButton>
  </form>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { ref, reactive, computed, useTemplateRef, nextTick } from 'vue';
import { useToast } from 'vue-toastification';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase/firebaseInit';
import BaseButton from '@/components/BaseButton.vue';
import LoaderIcon from '@/components/LoaderIcon.vue';

const props = defineProps({
  emailAddress: {
    label: String,
    placeholder: String,
    error: String,
  },
  message: {
    label: String,
    placeholder: String,
    error: {
      required: String,
      minLength: String,
    },
  },
  submitButton: {
    text: String,
  },
});

const toast = useToast();

// Form state
const form = reactive({
  email: '',
  message: '',
});

// Validation rules
const rules = computed(() => ({
  email: {
    required,
    email,
  },
  message: {
    required,
    minLength: minLength(20),
  },
}));

const v$ = useVuelidate(rules, form);
const formRef = useTemplateRef('form');
const isSubmitting = ref(false);

const submitForm = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    isSubmitting.value = true;

    try {
      await addDoc(collection(db, 'contactMessages'), {
        email: form.email,
        message: form.message,
        timestamp: serverTimestamp(),
      });

      toast.success('Message sent successfully!');

      nextTick(() => {
        if (formRef.value) {
          formRef.value.blur();
        }
      });

      form.email = '';
      form.message = '';

      v$.value.$reset();
    } catch (error) {
      console.error('Submission failed:', error);
      toast.error('Failed to send message. Try again later.');
    } finally {
      isSubmitting.value = false;
    }
  }
};
</script>

<style scoped lang="scss">
.contact-form {
  padding: 2rem;
  background-color: $concrete;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  text-align: center;

  &__group {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__input {
    font-family: inherit;
    color: inherit;
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba($white, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 100%;
    display: block;
    @include transition;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($black, 0.1);
      border-bottom: 3px solid $picton-blue;
    }

    &::-webkit-input-placeholder {
      color: rgba($mine-shaft, 0.7);
    }

    &--error,
    &--error:focus {
      border-bottom: 3px solid $sunset-orange;
    }
  }

  &__textarea {
    width: 100%;
    resize: none;
    min-height: 30vh;
  }

  &__label,
  &__error {
    font-size: 1.5rem;
    font-weight: 600;
    display: block;
    @include transition;
  }

  &__label {
    text-align: initial;
    opacity: 0.8;
    margin-left: 2rem;
    margin-top: 0.7rem;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  &__button {
    min-width: 20rem;
  }

  &__error {
    text-align: center;
    color: $sunset-orange;

    @include respond-to('small') {
      position: absolute;
      bottom: 0;
      right: 2rem;
      text-align: right;
    }
  }
}
</style>
