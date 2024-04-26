
const Navbar = () => {
  return (
    <div>
      <div className="flex h-79 items-center space-x-1 bg-background p-1  rounded-none font-semibold px-2 lg:px-4 mt-5 mb-3">
        <button className="flex cursor-default select-none items-center rounded-sm px-3 py-1 outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-bold text-3xl">
          Portfolio
        </button>
        <button
          type="button"
          role="menuitem"
          id="radix-:R4quulfau6laH1:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          className="m-2 flex cursor-default select-none items-center rounded-sm px-3 py-1 text-lg font-semibold outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
          tabIndex={0}
          data-orientation="horizontal"
          data-radix-collection-item
        >
          Discover
        </button>
        
        <button
          type="button"
          role="menuitem"
          id="radix-:R8quulfau6laH1:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          className="m-2 flex cursor-default select-none items-center rounded-sm px-3 py-1 text-lg font-semibold outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
          tabIndex={-1}
          data-orientation="horizontal"
          data-radix-collection-item
        >
          My Projects
        </button>
        <button
          type="button"
          role="menuitem"
          id="radix-:Raquulfau6laH1:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-lg font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground md:block"
          tabIndex={-1}
          data-orientation="horizontal"
          data-radix-collection-item
        >
          My Skills
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
