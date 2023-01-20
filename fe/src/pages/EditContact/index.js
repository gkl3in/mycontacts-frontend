import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="editar Gabriel Klein"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
