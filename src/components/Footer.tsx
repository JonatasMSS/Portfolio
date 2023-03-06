
import Linkedin from '../assets/linksquare.svg';
import EmailLogo from '../assets/email.png';
export function Footer() {
    return (
        <div className="w-full flex justify-start items-center px-2 bg-black py-3 m-0">
            {/* Icons */}

            <div className="flex flex-col">
                <a href='https://www.linkedin.com/in/jonatasmss/' className="flex items-center">
                    <img src={Linkedin} alt="Linkedin logo" className="w-8" />
                    <span className="font-archivo text-white"> Linkedin</span>
                </a>
                <div className="flex items-center">
                    <img src={EmailLogo} alt="Email" className="w-8" />
                    <span className="font-archivo text-white">jonatas.miguelss@gmail.com</span>
                </div>
            </div>
        </div>
    )
}