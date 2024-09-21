import Image from "next/image";
import Logo from '/public/logo.svg';
import { GridContainer } from "./grid";
import Link from "next/link";

const arrayMenu = [
    'Sobre',
    'Menu',
    'Reservas',
    'Contato'
]

export default function Header() {
    const activedStyled = 'text-opacity-100 rounded-full'
    return (
        <>
            <header className="absolute top-0 left-0 w-full z-10">
                <GridContainer>
                    <nav className="flex justify-between">
                        <figure className="w-30">
                            <Image
                                className="h-30"
                                src={Logo}
                                alt="Logo Braners"
                            />
                        </figure>
                        <ul className="flex gap-5 my-auto">
                            <li>
                                {
                                    arrayMenu.map((item, index) => (
                                        <Link key={index} href="#" 
                                            className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all 
                                            ${index === 0 ? activedStyled : ''}`}
                                        >
                                                {item}
                                        </Link>
                                    ))
                                }
                            </li>
                        </ul>
                    </nav>
                </GridContainer>
            </header>
        </>
    )
};
