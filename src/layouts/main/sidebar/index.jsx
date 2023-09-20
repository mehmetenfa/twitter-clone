import Logo from "./logo";
import Menu from "./menu";

export default function Siderbar() {
    return (
        <aside className="w-[275px] min-h-screen">
            <Logo />
            <Menu />
        </aside>
    )
}