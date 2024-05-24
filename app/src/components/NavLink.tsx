import Link from 'next/link'
export default function NavLink({href, title}:{href:any,title:any}) {
  return (
      <Link
          href={href}
          className='block py-2 pl-3 hover:text-white pr-4 text-[#adb7be] sm:text-xl round'>
          {title}
      </Link>
  )
}
