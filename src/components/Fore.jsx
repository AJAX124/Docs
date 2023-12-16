import React, { useRef } from 'react'
import Card from './Card'

function Fore (){
  const ref = useRef(null)
   
  const data = [
    {
      desc:"This is the background hacker Who is Displayed",
      filesize:".4mb",
      close:false,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
    },
    {
      desc:"This is the background hacker Who is Displayed",
      filesize:".4mb",
      close:false,
      tag:{isOpen:false, tagTitle:"Download Now", tagColor:"green"}
    },
    {
      desc:"This is the background hacker Who is Displayed",
      filesize:".4mb",
      close:false,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
    },
    {
      desc:"This is the background hacker Who is Displayed",
      filesize:".4mb",
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
    },
  ];


  return (
    <div ref={ref} className=' fixed w-full z-[3] top-0 left-0 h-full flex gap-10 py-4'> 
     {data.map((item, index)=>(
      <Card data={item} reference={ref} />
     ))}
    </div>
  )
}

export default Fore