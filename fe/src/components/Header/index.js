import { Container, InputSearchContainer } from './styles';

import logoContacts from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logoContacts} alt="MyContacts" width="201" />

      <InputSearchContainer clear>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
    </Container>
  );
}
