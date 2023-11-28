

const Nav = () => {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <div className="text-white font-bold text-lg">Logo</div>

            <div className="space-x-4">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Contact</a>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Nav
