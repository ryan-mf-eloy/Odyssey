import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="px-28 mt-20 min-h-72 flex flex-row items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center flex-1">
        <Logo />
        <small className="text-zinc-600 pt-2">&#169; 2024</small>
      </div>
      
      <div className="flex w-full flex-col items-end justify-center">
        <ul className="text-zinc-600">
          <h6 className="text-primary mb-2">Resources</h6>
          <li className="cursor-pointer hover:text-zinc-400 transition-[2000ms]">Pricing</li>
          <li className="cursor-pointer hover:text-zinc-400 transition-[2000ms]">Customers</li>
          <li className="cursor-pointer hover:text-zinc-400 transition-[2000ms]">Integrations</li>
        </ul>
      </div>

      <div className="flex w-full flex-col items-end justify-center">
        <ul className="text-zinc-600">
          <h6 className="text-primary mb-2">Company</h6>
          <li className="cursor-pointer hover:text-zinc-400 transition-[2000ms]">Careers</li>
          <li className="cursor-pointer hover:text-zinc-400 transition-[2000ms]">About</li>
          <li className="cursor-pointer hover:text-zinc-400 transition-[2000ms]">Terms & Conditions</li>
          <li className="cursor-pointer hover:text-zinc-400 transition-[2000ms]">Privacy Policies</li>
        </ul>
      </div>
    </footer>
  )
}