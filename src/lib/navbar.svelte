<nav class="w-full bg-blue-800 text-white xl:text-3xl font-bold">
  <div class="xl:h-16 align-middle navbar-display xl:pt-3 flex flex-row">
    <div class=" text-left xl:pl-5 w-[60%]">Name</div>
    <div class="w-[33vw] h-16 align-middle">
      <button type="button" class="xl:text-lg xl:mt-2 float-right">
        <Fa icon={faPhone} class="float-right" />
        Phone No.
      </button>
    </div>
  </div>
  <div class="service-list bg-sky-600 flex px-16">
    {#each services as service}
      <button type="button"
        on:focus={() => { ser= service;}}
        class="text-base flex-1 xl:mx-5 xl:my-2.5 text-black bg-white rounded-md">
        {service}
      </button>
    {/each}
  </div>
  <div>
    {#if ser}
      <Login service={ser} on:blur={() => {ser= null;}} />
    {/if}
  </div>
</nav>

<script>
  import Fa from 'svelte-fa'
  import Login from '$lib/login.svelte'
  import { faPhone } from '@fortawesome/free-solid-svg-icons'

  /**
   * @type { string? }
   */
  let ser= null;
  let services= ["SEO", "PPC", "Reputation Management","Social media","Web Development","Marketing Automation","Industried","About DMA"];
</script>