import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headers_container}>
      <h1 className={styles.header_text}>Let&apos;s Count It App</h1>
      <h2 className={styles.subheader_text}>
        Do you know what is the difference between an income for a bank deposit
        and an investment fund?
      </h2>
      <p className={styles.text}>
        In my past business of finance, I havee noticed that many people can not
        accurately calculate or compare the return on a term deposit and a
        mutual fund, where we have the same parameters, namely the amount, the
        rate of return and the duration.
      </p>
      <p className={styles.text}>
        Therefore, I combined my previous experience in the financial industry
        along with my acquired skills in programming and decided to create this
        simple application/tool for you. If you want to quickly count the
        difference in profit, you will do it with this tool, try it and count
        it!
      </p>
    </div>
  );
};

export default Header;
