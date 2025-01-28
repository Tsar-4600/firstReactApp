import './style.css';

function Header({links}){
    return(
            <div className="header-wrapper">
                <header className="header">
                    {
                        links.map((links) => {
                            return   <a key={links.href} href={links.href} className="link">{links.title}</a>
                        })
                    }
                </header>
            </div>
    );
}
export default Header;