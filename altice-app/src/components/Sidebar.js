import Link from "next/link";
import { useRouter } from 'next/router'

const Sidebar = ({ navigation }) => {
    const router = useRouter()
    const { parent } = router.query;

    //get uiRouterKey from the parent query
    //find the object with the same uiRouterKey as the parent
    //return the "items" array into to generate html
    const getSideMenu = () => {
        let nav = []
        let obj
        if (navigation && parent) {
            obj = navigation.find(item => item.uiRouterKey === parent)
            if (obj) {
                nav = obj.items
            }
        }
        return nav
    }
    return (
        <div>
            {getSideMenu().map(item =>
                <div className="p-2.5 mt-3 flex items-center" key={item.id} >
                    <Link href={`/${parent}/${item.uiRouterKey}`}>
                        <span className="font-bold hover:bg-blue-600 p-4 rounded-md duration-300 p-2.5 items-center">{item.title}</span>
                    </Link>
                </div>
            )}
        </div >
    )
}

export default Sidebar;