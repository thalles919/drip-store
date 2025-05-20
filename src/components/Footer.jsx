import './Footer.css';
import logoFooter from '../assets/logo-footer.svg';

const Footer = () => {
    return (
        <footer id="footer">
            {/* NOVO WRAPPER */}
            <div className="footer-main">
                <div className="footer-top">
                    <img src={logoFooter} alt="Logo Drip Store" className="footer-logo" />
                    <p className="footer-description">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Donec luctus lorem <br /> ipsum, at ultricies sapien.
                    </p>
                    <div className="social-icons">
                        <i className="pi pi-facebook" />
                        <i className="pi pi-instagram" />
                        <i className="pi pi-twitter" />
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Informações</h4>
                        <ul>
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus pedidos</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4>Categorias</h4>
                        <ul>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contato</h4>
                        <p>
                            Av. Santos Dumont, 1510 - 1° <br />
                            andar - Aldeota, Fortaleza - <br />
                            CE, 60150-161 <br /><br />
                            (85) 3051-3411
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>@ 2022 Digital College</p>
            </div>
        </footer>
    );
};

export default Footer;
