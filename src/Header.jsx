import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-between items-center h-[10vh] w-full bg-slate-500 px-16 text-white">
            <h1 className="text-2xl">Welcome to the Travel Destination App!</h1>
            <div className="w-1/4 flex justify-evenly">
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        console.log(isActive)
                        return isActive ? "underline" : ""
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="addDestination"
                    className={({ isActive }) => {
                        console.log(isActive)
                        return isActive ? "underline" : ""
                    }}
                >
                    Add Destination
                </NavLink>
            </div>
        </div>
    )
}

export default Header
