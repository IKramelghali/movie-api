import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header class=" bg-red-700 w-full text-red-50  p-3 shadow  font-bold">
      <div class="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 class=" text-2xl sm:text-4xl  italic font-playfair">Movies</h1>
        <input class="peer hidden" type="checkbox" id="navbar-open" />
        <label class="absolute text-white right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512">
            <path fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
          </svg>
        </label>
        <nav aria-label="Header Navigation" class="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
          <ul class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 ">
            <li><Link to="/" className="hover:text-zinc-950">Home</Link></li>
            <li><Link to="/about" className="hover:text-zinc-950">About</Link></li>
            <li><Link to="/contact" className="hover:text-zinc-950">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>


  );
}
