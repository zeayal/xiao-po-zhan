import { getPostList } from "@/utils"
import Image from 'next/image';

function PostCardItem({ title, avatar, desc, photo, author, createTime }) {
    console.log('photo', photo)
    return (
        <div className="flex flex-col w-full my-4 cursor-pointer  hover:scale-105 transition ease-in-out delay-150 shadow-xl">
            <div className="relative w-full h-52 rounded-t-lg overflow-hidden ">
                <Image alt="photo" src={photo} fill />
            </div>

            <h2 className="text-xl mt-3 px-2 py-2">{title}</h2>
            <p className="text-[#333] px-2">{desc}</p>
            <div className="flex justify-between items-center text-[#666] text-sm px-4 py-4">
                <div className="flex">
                    <Image alt="avatar" src={avatar} width={20} height={20} className="rounded-full h-[20px]" />
                    <span className="ml-1">{author}</span>
                </div>
                <span className="ml-1">{createTime}</span>
            </div>
        </div>
    )
}


type PostListProps = {
    posts: any[]
}

export default function PostList({ posts }: PostListProps) {
    return (
        <div className="w-full px-10 mt-10">
            <div className="text-xl font-bold">
                最近发布
            </div>
            <div className="grid grid-cols-4 gap-x-8">
                {posts.map(post => {
                    const { id, title, avatar, desc, photo, createTime, author } = post;
                    return <PostCardItem key={id} title={title} avatar={avatar} desc={desc} photo={photo} createTime={createTime} author={author} />
                })}
            </div>

            <div className="flex justify-center items-center">
                <button className="px-10 py-2 border-2 bg-[#000] text-white rounded-xl font-bold">加载更多...</button>
            </div>
        </div>
    )
}




