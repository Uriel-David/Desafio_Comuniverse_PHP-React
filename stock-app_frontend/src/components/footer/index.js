import './footer.css';

const Footer = () => {
    const date = new Date();

    return (
        <div className="components__footer fixed-bottom">
            Copyright &copy; { date.getFullYear() }
        </div>
    );
}

export default Footer;