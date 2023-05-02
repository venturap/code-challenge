import Link from "next/link";
import { Select, Option } from "@material-tailwind/react";

const MenuPrimary = (props: {navigation: any[], setUiRouterKey: (uiRouterKey: number) => any, lang: string | undefined, setLang: (lang: string | undefined) => any}) => {
  
    return (
        <nav className="border-gray-200 px-1 py-2 rounded top-0 left-0 w-full bg-gray-900 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="w-full md:block md:w-auto">
                    <ul data-testid="menuPrimary" className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {props.navigation && props.navigation.map(item => <li key={item.id}>
                            <Link data-testid={item.id} className="hover:bg-blue-600 p-4 rounded-lg" href='#' aria-current="page" onClick={() => props.setUiRouterKey(item.uiRouterKey)}>
                                {item.title}
                            </Link>
                        </li>
                        )}
                    </ul>
                </div>
                    
                <div className="w-20">
                    <label htmlFor="lang">Language: </label>
                    <Select id="lang" data-testid="select" value={props.lang}
                        onChange={(element) => {
                            const value = element;
                            props.setLang(value)
                    }}>
                        <Option data-testid="select-option-en" value='en'className="flex items-center gap-2">English</Option>
                        <Option data-testid="select-option-pt" value='pt'className="flex items-center gap-2">Portuguese</Option>
                        <Option data-testid="select-option-es" value='es'className="flex items-center gap-2">Spanish</Option>
                    </Select>
                </div>            
            </div>
        </nav>
        );
}
  
export default MenuPrimary;