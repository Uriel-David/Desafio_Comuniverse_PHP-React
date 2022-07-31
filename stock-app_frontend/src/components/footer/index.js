import './footer.css';

const Footer = () => {
    const date = new Date();
    const dateNow = date.getFullYear();

    return (
        <div className="components__footer">
            Copyright &copy; { dateNow }
        </div>
    );
}

export default Footer;