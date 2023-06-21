import React from 'react'

function Footer() {
  return (
    <div>
      <div class="container mx-auto px-10 text-gray-600 flex flex-col justify-between w-screen">
        <ul class="flex flex-row gap-5 text-sm px-7 w-screen my-1">
          <li><a href="#" class="inline-block hover:underline">English (UK)</a></li>
          <li><a href="#" class="inline-block hover:underline">Hausa</a></li>
          <li><a href="#" class="inline-block hover:underline">Français (France)</a> </li>
          <li><a href="#" class="inline-block hover:underline">Português(Brasil)</a> </li>
          <li><a href="#" class="inline-block hover:underline">Español</a></li>
          <li><a href="#" class="inline-block hover:underline">العربية</a></li>
        </ul>

        <ul class="flex flex-row gap-5 text-sm px-7 w-screen my-1">
          <li><a href="#" class="inline-block hover:underline">Sign Up</a></li>
          <li><a href="#" class="inline-block hover:underline">Log in</a></li>
          <li><a href="#" class="inline-block hover:underline"> Messenger</a></li>
          <li><a href="#" class="inline-block hover:underline">Facebook Lite</a></li>
          <li><a href="#" class="inline-block hover:underline">Watch</a></li>
          <li><a href="#" class="inline-block hover:underline">Places</a></li>
          <li><a href="#" class="inline-block hover:underline">Meta Pay</a></li>
        </ul>
        <ul class="flex flex-row gap-5 text-sm px-7 w-screen my-1">
          <li><a href="#" class="inline-block hover:underline">Meta Store</a></li>
          <li><a href="#" class="inline-block hover:underline">Meta Quest</a></li>
          <li><a href="#" class="inline-block hover:underline"> Messenger</a></li>
          <li><a href="#" class="inline-block hover:underline">Instagram</a></li>
          <li><a href="#" class="inline-block hover:underline">Fundraisers</a></li>
          <li><a href="#" class="inline-block hover:underline">Services</a></li>
        </ul>
        <p class="text-sm w-screen px-7 my-1">Meta © 2023</p>

      </div>

    </div>
  )
}

export default Footer