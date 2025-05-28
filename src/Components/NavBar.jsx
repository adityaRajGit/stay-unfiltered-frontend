import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="flex items-center justify-between px-6 py-4 text-sm font-normal text-black">
    <div class="flex items-center space-x-1 font-semibold text-lg">
    <span>
     Stay
    </span>
    <span class="font-light">
     Unfiltered
    </span>
   </div>
   <ul class="hidden md:flex items-center space-x-6">
   <li class="cursor-pointer flex items-center space-x-1">
     <span>Care</span>
    </li>

    <li class="cursor-pointer">
      <Link to='/Community'>Community</Link>
    </li>

    <li class="cursor-pointer flex items-center space-x-1">
      <Link to='/Counsellor'>Therapy</Link>
    </li>

    <li class="cursor-pointer">
     Business
    </li>

    <li class="cursor-pointer">
      <Link to='/About'>About</Link>
    </li>
    <li class="cursor-pointer flex items-center space-x-1">
     <span>
      Login
     </span>
    </li>
    <li>
      <Link to='/Profile'>Avatar</Link>
    </li>
    </ul>
  </nav>
  )
}

export default NavBar;


 
   
//    <ul class="hidden md:flex items-center space-x-6">
//     <li class="cursor-pointer flex items-center space-x-1">
//      <span>
//       Mental Health
//      </span>
//       <i class="fas fa-chevron-down text-xs">
//      </i> 
//     </li>
//     <li class="cursor-pointer">
//      Sexual Health
//     </li>
//     <li class="cursor-pointer flex items-center space-x-1">
//      <span>
//       Women's Health
//      </span>
//       <i class="fas fa-chevron-down text-xs">
//      </i> 
//     </li>
//     <li class="cursor-pointer">
//      For Business
//     </li>
//     <li class="cursor-pointer">
//      Rocket Labs
//     </li>
//     <li class="cursor-pointer">
//      Content Hub
//     </li>
//     <li class="cursor-pointer flex items-center space-x-1">
//      <span>
//       About
//      </span>
//      <i class="fas fa-chevron-down text-xs">
//      </i> 
//     </li>
//     <li class="cursor-pointer">
//      Cancel Stigma™
//     </li>
//    </ul>
//   </nav> 