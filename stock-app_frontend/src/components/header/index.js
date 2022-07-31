import './header.css';

const Header = ({ title }) => {
    const date = new Date();
    const dateNow = date.getFullYear();

    return (
        <div className="components__header">
            <h1>{title}</h1>
            <p>Product listing, where you can view all products in stock and perform actions with them.</p>
        </div>
    );
}

export default Header;