import { Link } from "react-router-dom";
import {  FaTwitter, FaInstagram} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#283618] to-[#606c38] text-white font-sans  border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="hover:bg-sunset-orange rounded-3xl">
                            <div className="text-lg sm:text-3xl text-[#fefae0]  ">
                                Gym T1
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-4 sm:grid-cols-3 sm:text-lg text-sm text-[#fefae0] ">
                        <div>
                            <h2 className="mb-4 font-semibold font-serif uppercase">
                                Resources
                            </h2>
                            <ul className="font-medium font-sans ">
                                <li className="mb-3">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/About" className="hover:underline">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold font-serif text-[#fefae0]  uppercase">
                                Follow us
                            </h2>
                            <ul className="font-medium font-sans ">
                                <li className="mb-3">
                                    <a
                                        href="https://www.instagram.com/vijay_g_bhagat/"
                                        className="hover:underline flex"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaInstagram className="text-2xl"/><div className="pl-2" >Instagram</div>
                                    </a>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline flex">
                                    <FaTwitter className="text-2xl" /> <div className="pl-2" >Twitter</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold font-serif text-[#fefae0]  uppercase">
                                Legal
                            </h2>
                            <ul className="font-medium font-sans ">
                                <li className="mb-3">
                                    <Link to="/privacy-policy" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-conditions" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
