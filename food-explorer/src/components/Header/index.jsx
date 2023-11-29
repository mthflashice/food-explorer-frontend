import {FiSearch, FiLogOut, FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'

import {Container, Brand, Menu, Logout} from './styles'
 
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {Search} from '../../components/Search'
import  brand  from '../../assets/brand.svg';
import  brandAdmin  from '../../assets/brand-admin.svg'
import brandMobile from '../../assets/brand-mobile.svg'

export function Header({isAdmin, isMenuOpen, setIsMenuOpen}){
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const logo = isAdmin ? (isDesktop ? brandAdmin : brandMobile) : brand;

    return(
        <Container>
            {!isDesktop && (
                <Menu>
                    {!setIsMenuOpen?
                        <FiMenu className='fi-menu-icon' onClick={()=>
                        setIsMenuOpen(true)}/>:
                        <>
                        <MdClose size={'1.8rem'} onClick={() => setIsMenuOpen(false)} />
                        <span>Menu</span>
                        </>
                        }
                </Menu>
                )}
                {(isDesktop || isMenuOpen)&&(
                    <>
                      <Brand>
                      <img src={logo} alt='Logo'/>
                     </Brand>

                     {isDesktop && <Search/>}

                     {isAdmin?
                        (isDesktop &&<Button title='Novo Prato'/>):
                        <Button title ={isDesktop? 'Pedidos':undefined} isCustomer orderCount={0}/>
                        }

                        {isDesktop&&
                        <Logout>
                            <FiLogOut size={'3.2rem'}/>
                            </Logout>}

                    </>
                )}
                 </Container>
    );
}     


