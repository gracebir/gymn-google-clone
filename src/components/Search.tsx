import google from '../assets/google-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

function Search() {
  return (
    <div className="w-full flex items-center h-[70vh]">
      <div className="max-w-2xl mx-auto flex-1 flex flex-col items-center gap-6 px-4 md:px-0">
        <div>
          <img src={google} alt="" />
        </div>
        <div className="border border-gray-300 hover:shadow-search-shadow focus:shadow-search-shadow w-full flex gap-2 items-center py-3 px-6 rounded-full">
          <AiOutlineSearch className="text-[#70757a]" size={20}/>
          <input className="outline-none w-full bg-white" type="text" name="" />
          <div className="flex gap-3">
            <svg className="h-6 w-6 cursor-pointer" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
            <svg className="h-6 w-6 cursor-pointer" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc05" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg>
          </div>
        </div>
        <div className='flex gap-2 text-gray-500'>
          <button className="px-3 py-2 rounded-md hover:bg-gray-100 hover:shadow-btn-search">Google Search</button>
          <button className="px-3 py-2 rounded-md hover:bg-gray-100 hover:shadow-btn-search">I'm Feeling Lucky</button>
        </div>
        <div className="flex flex-row text-sm gap-2">
          <p className="text-[#4D5156]">Google offered in:</p>
          <a className="text-[#1a0dab] hover:underline" href="#">French</a>
          <a className="text-[#1a0dab] hover:underline" href="#">Swahili</a>
          <a className="text-[#1a0dab] hover:underline" href="#">Kinyamranda</a>
        </div>
      </div>
    </div>
  )
}

export default Search
