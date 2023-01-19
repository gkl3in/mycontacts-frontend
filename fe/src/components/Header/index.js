import { Container } from './styles';

import logoContacts from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logoContacts} alt="MyContacts" width="201" />
    </Container>
  );
}
