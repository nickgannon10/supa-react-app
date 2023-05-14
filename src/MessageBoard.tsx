import { Link, Outlet } from "react-router-dom";
import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "./App";

export default function MessageBoard() {
    const userProfile = useContext(UserContext);
    return (
        <div className="message-board-container h-screen">
            <Link to="/1">
                <h2 className="text-4xl font-bold mb-4">Message Board</h2>
            </Link>
            {userProfile.session ? (
                <></>
            ) : (
                <div className="flex flex-col justify-center items-center h-full">
                    <h2
                        className="text-xl font-medium mb-4"
                        data-e2e="message-board-login"
                    >
                        Please login or sign up to post a message.
                    </h2>
                    <Login />
                </div>
            )}
            <Outlet />
        </div>
    );
}
