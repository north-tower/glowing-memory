import React from 'react'

function Query() {
  return (
    <div className='max-w-md mx-auto'>
        <p className='p-2'>
        Have Further Query <br />
Feel free to ask any query related to events
        </p>
       
<form>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block
     w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
     placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-6">
  
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
</div>
  
  
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
      focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required /> 
    </div>
    <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" 
    class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default Query