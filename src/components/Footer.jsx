import "./Assets/Styles/Footer.css"

const Footer = () =>{
    return (
        <div className="container-footer">
            <div className="footer-logo footer-item">
                <picture className="logo-picture">
                    <img
                        src="https://lh3.googleusercontent.com/pw/AP1GczPgUom7AVzKNKy_ZlfFR9HYZFGafkO2BoHAzy4xfB9rpzJBgqC0PAi8DpLct2myq0eI0T0jBnSBumpj8zpHkQwMIFx83OFPF17bGlfosKEWDoo_xEThvN89yfhmKuoFQslDIzouSwre7qSGpWh6zKLFH8ry2Cdz6T9nJnGKlJJuWZvBOnDdzNQM2768B6PS6Zuqfdqv_TV7pGik7Jske9FK3MzNcwR5SObeFYBCwlTjRRFSRKmsNqC1L01CMtanufki5AZ6qdeyS2pMm4Nilk8CYRIwJtxP1QiIqAbTHSotUCs3gMWfq6fgf2HgeXzsK2CxnYMhRDhqoEjXtuedMBpC1fApEneftSercjflj9FZ9eygjgC8xltE4_Hjk6W8wx9o7HoWxv2d14eIaTRJ-hVFvz4bq1ECAOmufBDmyfwfNlvmFVeO9SSKo0Mdy4d06LX5dkS36ZxY38RKK7lzpQuIc16-B0T9xso0W5KCZfAJ9xpWaMAoUhXmXXtGW37TlN8w8MXW9_OzFLoP6lBZ0IrthKBI93EIotO-sK-lUITUseLFyKp2_Niopw1BK6ZJeJgrGml4Ar4CEibheStNX7jDTOi3kQrrVMs5xw7yTg8djyis3xWFzmeiu06KsfnGmTF2flil2lojjuW3nvXzp-vYWydhhzf5XWVPz7RM2yEyjR0qxNWmMRS_oaGM8ueZxFamkT2Ximc4STZfZcaDSJumFBY7zk3mqUU66Zs-SA03aaGJ1aC9nxI176DWo49kZzOPk5bV6Ju-mm41ajEGet25_LRbkjjMhM1OSHQTm1tUDemJsZrOQhCp4njFyP4cxPvZpO9xtLXU9Ia4ns49zGuUtrXMRx0O_8YZolKkscxAorxltijLE2nUhdp0cLtLKSViDfOFglbY0faS-dwduBlpbSvROzWpyugAQLX4fXXLa1f-4L5SC-XKXAc=w799-h936-s-no-gm?authuser=1&pageId=109921788338197989023"
                        alt="AnonymousPC"
                        width="100%"/>
                </picture>
                <div className="footer-correo">
                    <i id="logo-mail" class="fa-regular fa-envelope"></i>
                    <p id="support-mail">Support@anonymouspc.com</p>
                </div>
            </div>
            <div className="sep-bar"></div>
            <div className="footer-redes footer-items">
                <div className="footer-social">
					<a href="https://www.facebook.com/people/Anonymous-PC/100063737155824/" target="_blank" rel="noopener noreferrer">
						<i id="facebook" class="fa-brands fa-facebook"></i>
					</a>
				</div>
				<div className="footer-social">
					<a href="https://www.instagram.com/anypcstore?igsh=YmExbjFramp3eWM3" target="_blank" rel="noopener noreferrer">
						<i id="instagram" class="fa-brands fa-instagram"></i>
					</a>
				</div>
				<div className="footer-social">
					<a href="https://wa.me/message/2JTWMYLMV4B6I1" target="_blank" rel="noopener noreferrer">
						<i id="wsp" class="fa-brands fa-square-whatsapp"></i>
					</a>
				</div>
            </div>
            <div className="sep-bar"></div>
            <div className="firma-dev footer-items">
                <p>developed by:</p>
                <h2><strong>Henry GC</strong></h2>
                <section>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </section>
            </div>
            <div className="sep-bar"></div>
            <div className="footer-form footer-items">
                <form>
                    <i id="send" class="fa-solid fa-paper-plane"></i>
					<input id="footer-input" type="email" placeholder="e-mail"/>
					<button>Enviar</button>
                </form>
            </div>
        </div>
    )
}
export default Footer