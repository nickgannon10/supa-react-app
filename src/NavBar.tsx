import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./App";
import Login from "./Login";
import UserMenu from "./UserMenu";

export default function NavBar() {
    const { session } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");

    return (
        <>
            <nav className="p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/">
                        <img
                            className="h-10 w-auto"
                            src="https://supaship.io/supaship_logo_with_text.svg"
                            alt="logo"
                        />
                    </Link>

                    <div className="flex items-center">
                        <Link
                            to="/1"
                            className="mr-4 text-xl font-semibold text-gray-400 hover:text-blue-600 hover:underline"
                        >
                            Message Board
                        </Link>
                        {session?.user ? (
                            <UserMenu />
                        ) : (
                            <Login
                            />
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

