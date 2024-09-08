import { StyledMenu, StyledWrapperMenu, StyledMenuItem } from "./Menu.style"
import { MdOutlineNoteAdd } from "react-icons/md"
import { LuUser2 } from "react-icons/lu"
import { AiOutlineHome } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <AiOutlineHome size="1.5rem" color="#38aede" />
                    <Link to="/">Home</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <MdOutlineNoteAdd size="1.5rem" color="#38aede" />
                    <Link to="/new-list">Nova Lista</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <LuUser2 size="1.5rem" color="#38aede" />
                    <Link to="/profile">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
}