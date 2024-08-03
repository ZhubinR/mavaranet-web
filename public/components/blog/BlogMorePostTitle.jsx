import Image from "next/image"
const BlogMorePostTitle = () => {
    return (
        <div className='blogSingle_morePost'>
            <Image
                src={`/images/portfolio/logocards.png`}
                width={32}
                height={42}
                alt="more posts icon"
            />
            <p>بیشتر بخوانید</p>
            <span>با ماورانت به علم خود بیافزایید</span>
        </div>
    )
}

export default BlogMorePostTitle