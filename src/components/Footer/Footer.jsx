import './footer.css';
import { SiMinutemailer, SiGithub, SiLinkedin } from "react-icons/si";


export default function Footer() {
    return (
        <footer>

            


            

            <div className="social-icons">
                <a href="mailto:freff88@gmail.com">
                    <SiMinutemailer />
                    freiff88@gmail.com
                </a>

                <a href="https://github.com/jj96fr">
                    <SiGithub />
                    GitHub
                </a>

                

                <a href="https://www.linkedin.com/in/federico-reiff-64542828a/">
                    <SiLinkedin />
                    LinkedIn
                </a>

            </div>
        </footer>
    )
}