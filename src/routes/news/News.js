import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './News.styl';
import { connect } from 'react-redux';
import mapPublicStateToProps from '../../core/redux/mapPublicStateToProps';
import mapPublicDispatchToProps from '../../core/redux/mapPublicDispatchToProps';
import NewsList from './parts/NewsList';
import HeaderSettings from '../../components/Layout/HeaderSettings';

class News extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    context: PropTypes.object.isRequired,
    newsState: PropTypes.object.isRequired
  };

  componentWillUnmount() {
    const { actions: { newsDataLoadedReset } } = this.props;
    newsDataLoadedReset();
  }

  onScrolledBottom() {
    const {
      actions: { newsPageGet },
      newsState: { newsListNextPage, newsListLoading }
    } = this.props;
    if (newsListLoading === false && newsListNextPage > 1) {
      newsPageGet(newsListNextPage);
    }
  }

  render() {
    const {
      newsState: {
        newsList,
        newsListNextPage,
        newsListLoading
      }, context } = this.props;
    const title = 'Aktualności | Polski Front-End';
    const description = 'Aktualności dotyczące serwisu Polski Front-End - dowiedz się, co nowego!';

    return (
      <div className={styles.container}>
        <HeaderSettings currentPath={context.path} description={description} title={title} />
        <NewsList isLoadingMore={newsListLoading}
                  newsList={newsList}
                  nextPage={newsListNextPage}
                  onScrolledBottom={this.onScrolledBottom.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapPublicStateToProps, mapPublicDispatchToProps)(withStyles(styles)(News));
