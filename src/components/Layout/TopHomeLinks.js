import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './TopHomeLinks.styl';

const TopHomePanel = props => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles['list__item']}>
          <a className={styles['list__link']} href="#">
            <i className="fa fa-inbox" aria-hidden="true">
            </i>
            Aktualności
            <div className={styles['list__info']}>
              3
            </div>
          </a>
        </li>
        <li className={styles['list__item']}>
          <a className={styles['list__link']} href="#">
            <i className="fa fa-question-circle" aria-hidden="true">
            </i>
            O serwisie
          </a>
        </li>
        <li className={styles['list__item']}>
          <a className={styles['list__link']} href="#">
            <i className="fa fa-facebook-square" aria-hidden="true">
            </i>
            Facebook
          </a>
        </li>
        <li className={styles['list__item']}>
          <a className={styles['list__link']} href="#">
            <i className="fa fa-commenting" aria-hidden="true">
            </i>
            Zgłoś uwagi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default withStyles(styles)(TopHomePanel);