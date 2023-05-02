import { useState } from 'react';
import MenuPrimary from './MenuPrimary';
import MenuSecundary from './MenuSecundary';
import enData from '../languages/en.json';
import ptData from '../languages/pt.json';
import esData from '../languages/es.json';


const Page = ({children}) => {

    const [langPage] = useState({ en: enData, pt: ptData, es: esData });
    const [uiRouterKey, setUiRouterKey] = useState<number>(0);
    const [lang, setLang] = useState<string | undefined>('en');
  
    return (
        <>
            <MenuPrimary navigation={langPage[lang as keyof typeof langPage].pageProps.navigation} setUiRouterKey={setUiRouterKey} lang={lang} setLang={setLang} />
            <MenuSecundary navigation={langPage[lang as keyof typeof langPage].pageProps.navigation} uiRouterKey={uiRouterKey} />

            <main className="text-center ">
                {children}
            </main>
        </>
        );
}

export default Page;