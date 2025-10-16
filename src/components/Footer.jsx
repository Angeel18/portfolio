import SocialButton from "./SocialButton";
function Footer () {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 min-h-20 h-auto">
            <div className="flex flex-col justify-center items-center p-4 text-sm gap-3">
                <SocialButton url="https://github.com/Angeel18" icon="Github"/>
                <div className="text-center">
                <p>© 2025 Ángel Rodríguez</p>
                <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;