import styles from './App.module.css';
import Header from './components/Header';
import CountContainer from './components/CountContainer';
import DarkMode from './components/shared/DarkMode';

const App: React.FC = () => {
  return (
    <div className={styles.main_app}>
      <DarkMode />
      <Header />
      <CountContainer />
    </div>
  );
};

export default App;
