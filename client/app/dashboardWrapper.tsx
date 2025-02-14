'use client'
import NavBar from "@/app/{components}/Navbar";
import Sidebar from "./{components}/Sidebar";
import React, { ReactNode, useEffect } from "react";
import StoreProvider, { useAppSelector } from "./Redux";
const DashbordLayout = ({ children }: { children: React.ReactNode }) => {
    const isSideBarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    console.log(isSideBarCollapsed)
    const isDarkMode = useAppSelector(state => state.global.isDarkMode);
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])
    return (
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
            {!isSideBarCollapsed &&
                <Sidebar />
            }
            <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 ${isSideBarCollapsed? '': "md:pl-64"}`}>
                <NavBar />
                {children}
            </main>
        </div>)
}
const DashboardWrapper = ({ children }: { children: ReactNode }) => {
    return (<StoreProvider>
        <DashbordLayout>{children}</DashbordLayout>
    </StoreProvider>)
}
export default DashboardWrapper;
