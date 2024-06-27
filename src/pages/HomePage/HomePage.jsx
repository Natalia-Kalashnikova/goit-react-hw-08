import PageTitle from '../../components/PageTitle/PageTitle';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};


const HomePage=()=> {
  return (
    <div style={styles.container}>
      <PageTitle style={styles.title}>Phonebook App</PageTitle>
    </div>
  );
}


export default HomePage;

