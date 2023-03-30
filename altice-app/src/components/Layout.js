const Layout = ({ menu, sidebar, language, children }) => {

    return (
        <>
            <nav className="border-gray-200 px-1 py-2 rounded top-0 left-0 w-full bg-gray-900 ">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    {menu}
                    {language}
                </div>
            </nav>

            <div className=" sidebar fixed top-20 bottom-0 lg:left-0 p-2 w-[350px] overflow-y-auto text-center bg-gray-900">
                {sidebar}
            </div>

            <main className="text-center ">
                {children}
            </main>
        </>
    )
}

export default Layout;
