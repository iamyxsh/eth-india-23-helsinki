import Link from "next/link";

type Props = {
    likes: number,
    dislikes: number,
    data: string,
    name: string,
    link?: string
}
export const PostCard = ({name, data, dislikes, likes, link}: Props) => {
    return (
        <Link href={`/proposals/${link}`}>
            <div className="w-[25rem] bg-secondaryBg rounded-xl overflow-hidden shadow-md my-4">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-primary">{name}</div>
                    <p className="text-gray-700 text-base text-white">{data}</p>
                </div>
                <div className="px-6 py-4 flex justify-end gap-5 items-center">
                    <span className="text-gray-500">{likes} 🔥</span>
                    <span className="text-gray-500">{dislikes} 🤮</span>
                </div>
            </div>
        </Link>
    )
}