function SocialButton(props) {
    const URL = props.url;
    const icon = "/media/icons/"+props.icon+".webp";
    return (
        <div className="flex items-center justify-center bg-white/10 p-1 rounded-xl hover:scale-110 transition-all duration-300">
            <a href={URL} target="_blank">
            <img src={icon} alt={props.icon} className="w-5"/>
            </a>
        </div>
    )
}
export default SocialButton;