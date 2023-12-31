import { useRouter } from "next/router";

function Header() {
  const router = useRouter(); 

  return (
   
<nav class="bg-white border-gray-200 dark:bg-white dark:border-gray-700" >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a  class="flex items-center cursor-pointer" onClick={() => router.push("/")} >
        <img src="https://carlsche.co.ke/wp-content/uploads/2023/08/cropped-mylogo.png" class="h-16 mr-3" alt="Flowbite Logo" />
        
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg
     md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 
      md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-red-700">
        <li>
          <a  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-500
           md:p-0 md:dark:text-red-500 md:dark:bg-transparent cursor-pointer" onClick={() => router.push("/")} aria-current="page">Home</a>
        </li>
       
        <li>
          <a   onClick={() => router.push("/project")} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:dark
          md:p-0 dark:text-black cursor-pointer md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500
           md:p-0 dark:text-black
           md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer" onClick={() => router.push("/about")}>About</a>
        </li>
        <li>
          <a  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-black
          md:dark:hover:text-red-500 sdark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header

