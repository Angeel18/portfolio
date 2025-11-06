function SocialButton(props) {
    const URL = props.url;
    const icon = "/media/icons/"+props.icon+".webp";
    return (
        <div className="flex items-center justify-center bg-white/5 p-1 rounded-xl">
            <a href={URL} target="_blank">
            <img src={icon} alt="" className="w-5"/>
            </a>
        </div>
    )
}
export default SocialButton;