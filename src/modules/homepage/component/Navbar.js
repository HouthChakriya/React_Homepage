import {Link} from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbLetterI } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
const NavbarPage = () => {

    return(
        <>
            <div className="up-navbar">
                <div className="below-navbar">
                    <div className="logo-img">
                        {/*<img src="../../assets/img/logoBBU1.png"/>*/}
                    </div>
                    <Link className="a" to="/">BBU Results</Link>
                    <Link className="a" to="/">For Enrollment</Link>
                </div>
            </div>

            {/*Menu navbar section*/}
            <div className="menu-section">
                    <div className="menu-navbar ">
                        <Link className="a-menu" to="/">ABOUT BBU <span> <RiArrowDropDownLine /> </span><TbLetterI /></Link>
                        <Link className="a-menu" to="/">ACADEMICS <span> <RiArrowDropDownLine/> </span> <TbLetterI /></Link>
                        <Link className="a-menu" to="/">ADMISSIONS <span> <RiArrowDropDownLine/> </span><TbLetterI /></Link>
                        <Link className="a-menu" to="/">STUDENT SERVICE <span> <RiArrowDropDownLine/> </span></Link>
                        <div className="right-menu-navbar">
                                <i className="bi bi-check-circle-fill"><FaSearch/><span>SEARCH</span> </i>
                                <i><IoMenu/><span>MENU</span></i>
                        </div>
                    </div>

            </div>

        </>
    );
}
export default NavbarPage;