import { useRouter } from 'next/navigation';

const Language = () => {
    //get local for the active language
    //get push func to set the new language on the app
    const { locale, push } = useRouter()

    return (<div>
        <label htmlFor="lang">Language: </label>
        <select name="lang" id="lang" value={locale} onChange={(e) => {
            //setting the pathname to the (e.target.value)
            push(`/${e.target.value}/`, `/${e.target.value}/`, { locale: false })
        }}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
        </select>

    </div >)
}

export default Language;