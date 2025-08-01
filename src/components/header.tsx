import HeaderButton from "./header-button.tsx";

export default function Header() {
  return (
    <div className="flex justify-center">
      <nav className="flex justify-between p-15 pt-10 pb-0 w-1/2">
        <h1 className="text-main text-xl">UrbanRest.</h1>
        <div>
          <HeaderButton>Home</HeaderButton>
          <HeaderButton>About Us</HeaderButton>
          <HeaderButton>Cottages</HeaderButton>
          <HeaderButton>Pages +</HeaderButton>
        </div>
        <button className="text-xl bg-main text-white p-2 px-5 rounded-lg">
          Contact Us
        </button>
      </nav>
    </div>
  )
}
