import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex h-79 items-center space-x-1 bg-background p-1  rounded-none font-semibold px-2 lg:px-4 mt-5 mb-3">
        <button className="flex cursor-default select-none items-center rounded-sm px-3 py-1 outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-bold text-3xl">
          <Link href="/" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">
          Portfolio
          </Link>
        </button>
        <button className="m-2 flex cursor-default select-none items-center rounded-sm px-3 py-1 text-lg font-semibold outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
          <Link href="../Introduction">
          Discover
          </Link>
        </button>
        
        <button className="m-2 flex cursor-default select-none items-center rounded-sm px-3 py-1 text-lg font-semibold outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
          <Link href="../Projects">
          My Projects
          </Link>
        </button>

        <button className="m-2 flex cursor-default select-none items-center rounded-sm px-3 py-1 text-lg font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground md:block">
          <Link href="../Skills">
          My Skills
          </Link>
        </button>

        <button className="m-2 flex cursor-default select-none items-center rounded-sm px-3 py-1 text-lg font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground md:block">
          <Link href="../Skills">
          Contact
          </Link>
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
