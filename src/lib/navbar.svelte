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
    {#each Object.keys(services) as service}
      <button type="button"
        on:focus={() => { ser= service;}}
        class="text-base flex-1 xl:mx-5 xl:my-2.5 text-black bg-white rounded-md">
        {service}
      </button>
    {/each}
  </div>
  {#if ser}
    <div>
      <Login service={services[ser]} on:blur={() => {ser= "";}} />
    </div>
  {/if}
</nav>

<script>
  import Fa from 'svelte-fa'
  import Login from '$lib/login.svelte'
  import { faPhone } from '@fortawesome/free-solid-svg-icons'

  /**
   * @type { string }
   */
  let ser= "";
  /**
   * @type { Object<string, Array<string>> }
   */
  let services= {
    "SEO": ["Free SEO Analysis", "SEO Services", "Content Marketing Services", "Local SEO", "Ecommerce SEO", "Link Building Services", "Specialized SEO Services"],
    "PPC": ["Free PPC Analysis", "PPC Management Services", "Remarketing", "Mobile PPC", "Specialized PPC Services"],
    "Reputation Management": ["Free Reputation Management Analysis", "Reputation Management Services", "Review Management Services", "Specialized Reputation Management Services"],
    "Social media": ["Free Social Media Analysis", "Social Media Optimization Services", "Specialized Social Services"],
    "Web Development": ["Free Website Analysis", "Web Design Services", "Web Development Services", "Mobile Development Services", "Website Maintenance Services", "Specialized Development Services"],
    "Marketing Automation": ["Free Marketing Automation Analysis", "Marketing Automation Services", "Specialized Marketing Automation Services"],
    "Industries": ["Luxury Communities", "Franchise", "E-Commerce", "Crypto", "Assisted Living", "Other Industries"]
  };
</script>