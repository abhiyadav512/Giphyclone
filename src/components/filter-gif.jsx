import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { Gifstate } from "../context/gif-context"

const filters = [
    {
        title: "GIFs",
        value: "gifs",
        background:
            "bg-purple-500 ",
    },
    {
        title: "Stickers",
        value: "stickers",
        background:
            "bg-teal-500 ",
    },
    {
        title: "Text",
        value: "text",
        background:
            "bg-blue-500 ",
    },
]
const FilterGif = ({ alignLeft = false, showRanding = false }) => {
    const { filter, setFilter } = Gifstate();
    return (
        <div className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"} ${showRanding ? "justify-between flex-col sm:flex-row sm:items-center" : ""}`}>
            {
                showRanding && (
                    <span className="flex gap-3">
                        {
                            showRanding && (
                                <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
                            )
                        }
                        <span className="font-semibold text-gray-400">Trending</span>
                    </span>
                )
            }

            <div className="flex min-w-80 rounded-full bg-gray-800">
                {
                    filters.map((f) => {
                        return (
                            <span
                                className={`${filter === f.value ? f.background : ""
                                    }font-semibold px-2  py-1 w-1/3 text-center rounded-full cursor-pointer`}
                                key={f.title}
                                onClick={() => setFilter(f.value)}
                            >
                                {f.title}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilterGif