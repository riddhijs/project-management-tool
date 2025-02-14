import { usePathname } from "next/navigation"
import { useAppDispatch, useAppSelector } from "../Redux"
import Link from "next/link"
import { IconButton, SvgIcon } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import { SvgIconComponent } from "@mui/icons-material/";
import { setIsSidebarCollapsed } from "../store/globalSlice";


type SideBarItemComponentType = {
    href: string,
    icon: SvgIconComponent,
    label: string,
    // isCollabed :boolean
}
const SideBarItemComponent = ({ href, icon, label }: SideBarItemComponentType) => {

    const pathName = usePathname();
    const isActive = pathName === href;
    const screenWidth = window.innerWidth;
    return (<Link href={href} className={`w-full`}>
        <div className={`relative flrx cursor-pointer items-center gap-3 transition-colors hover:bg-gray-50  ${isActive ? 'bg-gray-100 text-white dark:bg-gray-600' : ''}`}>
            {isActive && (
                <div className="absolute left-0 top-0 w-[5px] bg-blue-200" ></div>
            )}
            <SvgIcon component={icon} className='h-6 w-6 text-gray-800 dark:text-gray-50' />
            <span className={`font-medium pl-2 mt-2 text-gray-800 dark:text-gray-50`}>
                {label}
            </span>
        </div>
    </Link>)
}

const Sidebar = () => {
    const isSideBarCollpsed = useAppSelector(state => state.global.isSidebarCollapsed);
    const dispatch = useAppDispatch();

    const sidebarClass = `fixed flex flex-col justify-beetween shadow-xl h-full z-40 ${isSideBarCollpsed ? 'w-0 hidden' : 'w-64'}`

    return (
        <div className={sidebarClass}>
            <div className="p-3">
                <span className={`font-medium pl-2 mt-2 text-gray-800 dark:text-gray-50`}>
                    company name
                </span>
                {!isSideBarCollpsed &&
                    <IconButton className={`text-gray-900 dark:text-gray-50`} onClick={() => { dispatch(setIsSidebarCollapsed(true)) }}>
                        <SvgIcon className={`text-gray-900 dark:text-gray-50`} component={CloseIcon} />
                    </IconButton>
                }
            </div>
            <nav className="z-10 w-full">
                <SideBarItemComponent href={`/`} label="home" icon={HomeIcon}></SideBarItemComponent>
            </nav>
        </div>)
    }
export default Sidebar