const Search = () => {
  return (
    <div className="relative">
      <input 
        type="text" 
        className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:border-customBlue" 
        style={{ maxHeight: "36px", width: "187px" }} 
        placeholder="Search..." 
      />
      <img 
        src="/assets/svg/Navbar/Search.svg" 
        alt="Search" 
        className="absolute right-2 top-2.5 h-5 w-5 text-gray-500" 
      />
    </div>
  );
}

export default Search;
