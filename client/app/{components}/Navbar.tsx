import SearchIcon from '@mui/icons-material/Search';
import { IconButton, SvgIcon } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppDispatch, useAppSelector } from '../Redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '../store/globalSlice';
import MenuIcon from '@mui/icons-material/Menu'; const NavBar = () => {
    const isDarkMode = useAppSelector(state => state.global.isDarkMode)
    const isSideBarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed)
    console.log(isSideBarCollapsed)
    const dispatch = useAppDispatch()
    const setDark = (mode: boolean) => dispatch(setIsDarkMode(mode))
    const handleModeChange = () => {
        setDark(!isDarkMode)

    }
    return (
        <div className={`flex items-center justify-between bg-white px-4 py-3 dark:bg-black`}>
            <div className={`flex items-center gap-4`}>
                {isSideBarCollapsed &&
                    <IconButton onClick={() => { dispatch(setIsSidebarCollapsed(false)) }}>

                        <SvgIcon sx={{ color: isDarkMode ? 'white' : 'gray' }} component={MenuIcon} />
                    </IconButton>
                }
                <div className={"relative"}>
                    <SvgIcon className={"absolute left-1 top-1.5"} component={SearchIcon} fontSize='small' inheritViewBox />
                    <input className='w-full rounded border-none p-1 pl-8 placeholder-gray-300 dark:text-white' type='search' placeholder='Search...' />
                </div>
            </div>
            <div className='flex items-center'>
                <Link href="/settings">
                    <SvgIcon sx={{ color: isDarkMode ? 'white' : 'gray' }} component={SettingsIcon} /></Link>
                <div className={`ml-2 mr-5  hidden min-h-[2rem] bg-gray-200 w-5 md:inline-block`}></div>
                <div>
                    <IconButton onClick={handleModeChange}>
                        <SvgIcon sx={{ color: isDarkMode ? 'white' : 'gray' }} component={isDarkMode ? LightModeIcon : DarkModeIcon} />
                    </IconButton>
                </div>
            </div>
        </div>)
}
export default NavBar