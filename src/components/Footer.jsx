import "./Assets/Styles/Footer.css"

const Footer = () =>{
    return (
        <div className="container-footer">
            <div className="footer-logo footer-item">
                <picture className="logo-picture">
                    <img
                        src="https://lh3.googleusercontent.com/pw/AP1GczMVhzDQdrRRVop4_XPA3QaGxXt5gyDnV7Elfmen6nzt564oCkv34XXzEQeVC_Xo4Vy8LK1iMs5VV5jaOT4W5BHZhd1Yt_wfHPfyQkkaiAp46kYR03vbUliiZ6_1XE-TiVTyicnCUj8iwKXedJzRwNkPExxEKdKMMQ8leXy880vs6QiTxpOZIo7jmqLuJrf_xUI7poz3FUEqhikTtj_mCz57pB5QjkJwr1HjtTFAOY4agblP0yu6_u3tyubCx5oQ7Wi_1aLZD0o9zdDwewON7Z1eJR0cAVOTMKEethWW9FG4wbK4ayALFpTR23kavn6kJek2quIFonEGMje6SfelsUw3t-J2dxp3Q-HsyXisp2h0OKYueYFNFsZ7kIC0ah5nE_ijHIs9VpAh6GGl3OHFtv4yUbRb-crAJyM9Z7iSwI_emOZjj6LdeR93ud_uEDSsdOkEnfaja1tlNNp4hizdU-q80Xpws6M7PmClxVC66MKaE__Qs_LLoWq7xsgSSWceAtQmvLHTkg01xEceIBid-6y8YK_Zx0B-le12Czz4F3BHIFGYqwImSaHEGwdsrzim3u0CfBTuxLjFbOfyvGjyCXA8E-TB_QqA__9W0uVAVB0l5kwQRNyxTn42dtUp3M2z8Vh7LoYxEHbphwKxC9JITS_AVhoccxk_gblGiQegESsmICrnRoJ5nNOu5nmXOUdPmfPMhHqa4HbIJy5WVhnaKDeZZ_YL7KLv7TxxfZQNpfOUIrgCIWStM0jxC151W4rKcl_Fj4MRB6dNE9o4P5wvggAJPg2QPWdGfAOli6e1q3CmDtXSYX4ogwcBKBsGEuv9DVWpusFkvi4BEZHffUlLE0ZM3_EqVLdhO239mW3ZE8wNHaJGmcTEgyY84dOVAqJiT0l0f_lMxLBVm2c3AYUCdKct7AKHQnMpYvJjZZdobwVxURKfIHxatai9Luc=w799-h936-s-no-gm?authuser=1&pageId=109921788338197989023"
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