
import { useRouter } from 'next/router'

const Page = (props) => {
    const router = useRouter()
    const { parent } = router.query;
    return (
        <h1 className='text-xl font-extrabold dark:text-white p-5'>
            Welcome to "{parent}"
        </h1>
    )
}

export default Page;
