import "./Assets/Styles/Footer.css"
import Logo from "../components/Assets/Image/Logo.png"

const Footer = () =>{
    return (
        <div className="container-footer">
            <div className="footer-logo footer-item">
                <picture className="logo-picture">
                    <img
                        src={Logo}
                        alt="AnonymousPC"
                        width="100%"/>
                </picture>
                <div className="footer-correo">
                    <i id="logo-mail" className="fa-regular fa-envelope"></i>
                    <p id="support-mail">Soporte@anonymouspc.com</p>
                </div>
            </div>
            <div className="sep-bar"></div>
            <div className="footer-redes footer-items">
                <div className="footer-social">
					<a href="https://www.facebook.com/people/Anonymous-PC/100063737155824/" target="_blank" rel="noopener noreferrer">
						<i id="facebook" className="fa-brands fa-facebook"></i>
					</a>
				</div>
				<div className="footer-social">
					<a href="https://www.instagram.com/anypcstore?igsh=YmExbjFramp3eWM3" target="_blank" rel="noopener noreferrer">
						<i id="instagram" className="fa-brands fa-instagram"></i>
					</a>
				</div>
				<div className="footer-social">
					<a href="https://wa.me/message/2JTWMYLMV4B6I1" target="_blank" rel="noopener noreferrer">
						<i id="wsp" className="fa-brands fa-square-whatsapp"></i>
					</a>
				</div>
            </div>
            <div className="sep-bar"></div>
            <div className="firma-dev footer-items">
                <p>developed by:</p>
                <h2><strong>Henry GC</strong></h2>
                <section>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </section>
            </div>
            <div className="sep-bar"></div>
            <div className="footer-form footer-items">
                <form>
                    <i id="send" className="fa-solid fa-paper-plane"></i>
					<input id="footer-input" type="email" placeholder="e-mail"/>
					<button>Enviar</button>
                </form>
            </div>
        </div>
    )
}
export default Footer