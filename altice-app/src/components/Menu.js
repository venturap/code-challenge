import Link from "next/link";

const Menu = ({ navigation }) => {
    return (
        <div className="w-full md:block md:w-auto">
            <ul className="flex mt-1 p-4">
                {navigation && navigation.map(item => <li key={item.id}>
                    <Link className="hover:bg-blue-600 p-4 rounded-lg" href={`/${item.uiRouterKey}`} aria-current="page">{item.title}</Link>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Menu;