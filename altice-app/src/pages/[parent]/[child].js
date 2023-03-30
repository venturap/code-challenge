import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { parent, child } = router.query;
    return (

        <div className='mt-3'>
            <h1 className='p-2'>
                This page is "{child}" of "{parent}"
            </h1>
        </div>
    )
}

export default Post;
