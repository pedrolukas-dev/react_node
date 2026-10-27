import './style.css';

function Footer(){
    return(
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} my App. All rights reserved.</p>
               <p>Senai Dendenzeiro</p>
        </footer>
    )
}
export default Footer