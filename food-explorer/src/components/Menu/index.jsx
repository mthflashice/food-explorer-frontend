import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { Search } from '../Search';
import { ButtonText } from '../ButtonText';

export function Menu({ isAdmin, $ismenuOpen, setIsMenuOpen, setSearch, isDisabled }) {
    const { signOut } = useAuth();
    const navigate = useNavigate();
  
    function handleNew() {
      navigate("/new");
    }

    function handleFavorites() {
        navigate('/favorites');
      }
  
    function handleSignOut() {
      navigate('/');
      signOut();
    }
    return(
        <Container $ismenuOpen={$ismenuOpen}>
            <Header isAdmin={isAdmin} $ismenuOpen={$ismenuOpen} setIsMenuOpen={setIsMenuOpen}/>

            <main>
                <Search isDisabled={isDisabled} setSearch={setSearch} />

                {isAdmin ? (
                <ButtonText onClick={handleNew}>
                    Novo Prato
                    </ButtonText>
                    ) : null}

                    <ButtonText onClick={handleFavorites}>
                        Meus favoritos 
                    </ButtonText>
                    

                    <ButtonText onClick={handleSignOut}>
                        Sair
                    </ButtonText>
            </main>
        </Container> 
    );
}