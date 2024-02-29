<template>
  <div v-editable="blok">
    <StoryblokHeading
      class="font-jakarta mb-3"
      v-for="heading of form.headings"
      :heading="heading"
    />
    <!-- contact form is here -->
    <form @submit.prevent="submitForm">
      <input
        v-model="nameRef"
        type="text"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.name"
        required
      />
      <input
        v-model="phoneRef"
        type="number"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.phone"
        required
      />
      <input
        v-model="emailRef"
        type="email"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.email"
        required
      />
      <input
        v-model="postalRef"
        type="number"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.postalCode"
        required
      />
      <!-- Measurement inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.Measurement"
        :heading="heading"
      />
      <select
        v-model="metersRef"
        required
        id="measurement"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option value="" selected>{{ form.meters }}</option>
        <option value="US">option</option>
      </select>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <input
          v-model="lengthRef"
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.length"
          required
        />
        <input
          v-model="widthRef"
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.width"
          required
        />
        <input
          v-model="depthRef"
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.depth"
          required
        />
        <input
          v-model="amountRef"
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.amount"
          required
        />
      </div>
      <!--  concrete for inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.concreteFor"
        :heading="heading"
      />
      <select
        v-model="gardenRef"
        required
        id="concrete"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option selected value="">Garden Wall</option>
        <option value="US">option</option>
      </select>

      <!-- require inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.require"
        :heading="heading"
      />
      <select
        v-model="pumpRef"
        required
        id="require"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option selected value="">Yes, pump required</option>
        <option value="US">option</option>
      </select>
      <p class="font-jakarta mt-2 text-xs font-medium opacity-70 max-w-[370px]">
        {{ form.text }}
      </p>

      <!--  about us inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.about"
        :heading="heading"
      />
      <select
        v-model="googleRef"
        required
        id="about"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option selected value="">Google Search</option>
        <option value="US">option</option>
      </select>
      <!-- submit btn -->
      <button
        v-for="button of form.actions"
        :button="button"
        type="submit"
        class="max-w-[130px] px-8 rounded-sm py-2 text-lg font-jakarta mt-6 block cursor-pointer transition-all duration-500 capitalize bg-primary text-white"
      >{{ button.label }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { sendEmail } from "@/composables/email";

defineProps({ form: Object });
const nameRef = ref("");
const phoneRef = ref("");
const emailRef = ref("");
const postalRef = ref("");
const metersRef = ref("");
const lengthRef = ref("");
const widthRef = ref("");
const depthRef = ref("");
const amountRef = ref("");
const gardenRef = ref("");
const pumpRef = ref("");
const googleRef = ref("");

const submitForm = async () => {
  const config = useRuntimeConfig();
  const name = nameRef.value;
  const phone = phoneRef.value;
  const email = emailRef.value;
  const postal = postalRef.value;
  const meters = metersRef.value;
  const length = lengthRef.value;
  const width = widthRef.value;
  const depth = depthRef.value;
  const amount = amountRef.value;
  const garden = gardenRef.value;
  const pump = pumpRef.value;
  const google = googleRef.value;
  // Validate that required fields are not null
  if (name && phone && email && postal && meters && length && width && depth && amount && garden && pump && google) {
    const htmlContent = `
      <p>Name : ${name}</p>
      <p>Phone : ${phone}</p>
      <p>Email : ${email}</p>
      <p>ZIP / Postal Code : ${postal}</p>
      <p>Meters : ${meters}</p>
      <p>Length : ${length}</p>
      <p>Width : ${width}</p>
      <p>Depth : ${depth}</p>
      <p>Amount Of Concrete : ${amount}</p>
      <p>What are you using the concrete for? : ${garden}</p>
      <p>Do you require a pump? : ${pump}</p>
      <p>How did you hear about us? : ${google}</p>
    `;

    const body = {
      htmlContent: htmlContent,
      from: config.public.FROM_EMAIL,
      to: config.public.TO_EMAIL,
      replyTo: config.public.REPLY_TO_EMAIL,
      subject: config.public.SUBJECT,
    };

    sendEmail(body);

    // Show success message to the user
    alert("Your details have been sent to us. Someone will be in touch.");
    nameRef.value = "";
    phoneRef.value = "";
    emailRef.value = "";
    postalRef.value = "";
    metersRef.value = "";
    lengthRef.value = "";
    widthRef.value = "";
    depthRef.value = "";
    amountRef.value = "";
    gardenRef.value = "";
    pumpRef.value = "";
    googleRef.value = "";
  }
};
</script>
