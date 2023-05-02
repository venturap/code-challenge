import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const MenuSecundary = (props: {navigation: any[], uiRouterKey: number}) => {
  
    const getSideMenu = () => {
        let nav = [];
        let obj;
        if (props.navigation && props.uiRouterKey) {
            obj = props.navigation.find(item => item.uiRouterKey === props.uiRouterKey)
            if (obj) {
                nav = obj.items;
            }
        }
        return nav;
    }

    return (
        <div data-testid="menuSecundary" className="sidebar fixed lg:left-0 p-2 w-[350px] overflow-y-auto text-center bg-gray-900">
            {getSideMenu().map((item: { id: Key | null | undefined; uiRouterKey: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) =>
                <div className="p-2.5 mt-3 flex items-center" key={item.id} >
                    <Link data-testid={item.id + ''} className="hover:bg-blue-600 p-4 rounded-lg" href='#'>
                        <span>{item.title}</span>
                    </Link>
                </div>
            )}
        </div >
        );
}
  
export default MenuSecundary;