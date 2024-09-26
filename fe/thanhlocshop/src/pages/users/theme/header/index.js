import { memo } from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li>
                                <AiOutlineMail />
                                nguyenthanhloc@gmail.com
                            </li>
                            <li>
                                Miễn phí ship hàng
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <BsFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <BsInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <BsLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <BsGlobeAmericas />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(Header);