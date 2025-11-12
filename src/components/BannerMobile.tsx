interface Props {
    href: string
}

export default function BannerMobile({ href }: Props) {
    return (
        <div>
            <video 
                className="w-full aspect-Default" 
                src={href} 
                autoPlay 
                loop 
                muted 
                playsInline 
                controlsList="nodownload"
            >
                Banner Mobile não disponível
            </video>
        </div>
    )
}
