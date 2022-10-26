/*function MainContent() {
    return (
        <h1>React Practice</h1>
    )
}
*/
function Header() {
    return (
        <header>
            <nav className = "nav">
                <img src="\B LOGO.png" className = "image" />
                <ul className = "nav-items">
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )

}

function Footer() {
    return (
        <footer className = "footer">
            <small>© 2022 Mays development. All rights reserved.</small>
        </footer>
    )
}

function Body() {
    return(
        <div>
            <h1 className = "header">Fun facts about React</h1>
                <ul className = "main-list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
        </div>
    )
}

function MyPage() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />

        </div>
       
    )
}

ReactDOM.render(
    <MyPage />, 
    document.getElementById("root")
)

