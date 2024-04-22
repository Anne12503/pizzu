import React from 'react'

function Header() {
  return (
    <div>
    
      <navbar className="flex justify-evenly">
         <div>Logo</div>
         <div>
            <ul className='flex'>
               <li className='mx-3'>Our menu</li>
               <li className='mx-3'>Domino's Store</li>
               <li className='mx-3'>Gift Card</li>
               <li className='mx-3'>Contact</li>
            </ul>
         </div>
         <div ><a href="#" className='bg-red-500 px-10 py-3 text-center text-[#ffffff] font-bold rounded-lg'>Download</a></div>

      </navbar>


    </div>
  )
}

export default Header