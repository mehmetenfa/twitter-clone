import Search from "~/layouts/main/rightbar/search/index.jsx";
import Premium from "~/components/premium/index.jsx";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
        </aside>
    )
}

