import { NextPage } from 'next';

interface IBlogProps {}

const Blog: NextPage<IBlogProps> = () => {

}

function Blog ({posts}) {
    return (
        <>
            <ul>
                {posts.map((post)=>(
                    <li>{post.title}</li>
                ))}
            </ul>
        </>
    )
}
export default Blog;