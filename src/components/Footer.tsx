import { footeritems } from "../data"

function Footer() {
  return (
    <footer className="bg-[#f2f2f2] absolute bottom-0 left-0 right-0 text-[#70757a] text-[.9rem]">
      <div className="px-4 py-3 md:px-8">
        <span>Rwanda</span>
      </div>
      <hr />
      <div className="flex flex-col items-center md:justify-between md:flex-row px-4 md:px-8">
        <div className="flex flex-row py-4 gap-3">
          {footeritems.slice(0, 4).map((item, i)=> (
            <a className="text-gray-600 hover:underline" href="#" key={i}>{item}</a>
          ))}
        </div>
        <div className="flex flex-row py-4 gap-3">
          {footeritems.slice(4, footeritems.length).map((item, i)=> (
            <a className="text-gray-600 hover:underline" href="#" key={i}>{item}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
