import './header.css';

const Header = ({ title }) => {
    return (
        <div className="components__header">
            <h1>{title}</h1>
            <p>App for stock control, where you can view all products in stock and perform actions with them, such as creating, updating or deleting a product.</p>
        </div>
    );
}

export default Header;