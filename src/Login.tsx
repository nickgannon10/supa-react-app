import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import Dialog from "./Dialog";
import { supaClient } from "./supa-client";

export const setReturnPath = () => {
    localStorage.setItem("returnPath", window.location.pathname);
};

export default function Login() {
    const [showModal, setShowModal] = useState(false);
    const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");
    const { session } = useContext(UserContext);

    useEffect(() => {
        if (session?.user) {
            setShowModal(false);
        }
    }, [session, setShowModal]);


    return (
        <>
            <div className="flex items-center">
                <button
                    className="text-xl font-semibold text-gray-400 hover:text-blue-600 hover:underline"
                    onClick={() => {
                        setAuthMode("sign_in");
                        setShowModal(true);
                        setReturnPath();
                    }}
                >
                    login
                </button>{" "}
                <span className="mx-1 text-xl font-semibold text-gray-100">or</span>{" "}
                <button
                    className="text-xl font-semibold text-gray-400 hover:text-blue-600 hover:underline"
                    onClick={() => {
                        setAuthMode("sign_up");
                        setShowModal(true);
                        setReturnPath();
                    }}
                >
                    sign up
                </button>
            </div>
            <Dialog
                open={showModal}
                dialogStateChange={(open) => setShowModal(open)}
                contents={
                    <>
                        <Auth
                            supabaseClient={supaClient}
                            appearance={{
                                theme: ThemeSupa,
                                className: {
                                    container: "login-form-container",
                                    label: "login-form-label",
                                    button: "login-form-button",
                                    input: "login-form-input",
                                },
                            }}
                            view={authMode}
                        />
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </>
                }
            />
        </>
    );
}
