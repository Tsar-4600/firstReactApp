import './style.css'
function Main({title}){
    return(
        <div className = "main-wrapper">
            <main className="main">
                <h1>{title}</h1>
            </main>
        </div>
    );
}
export default Main;