

const Header = () => {
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold">Chef's Table</a>
  </div>
    <div className=" container mx-auto flex justify-center items-center">
    <div className="lg:block md:block hidden">
              
              <div className="space-x-10 font-semibold ml-40">
                  <a href="#adopt" className="text-green-800">Home</a>
                  <a href="#about" className="text-green-800">About</a>
                  <a href="#contact" className="text-green-800">Receipes</a>
                  <a href="#contact" className="text-green-800">contact</a>
                </div>
          </div>
    </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.icons8.com/?size=48&id=z-JBA_KtSkxG&format=png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;