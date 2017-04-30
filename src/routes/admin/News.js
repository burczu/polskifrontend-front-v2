import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './News.styl';
import { connect } from 'react-redux';
import history from '../../core/history';
import mapStateToProps from '../../core/redux/mapStateToProps';
import mapDispatchToProps from '../../core/redux/mapDispatchToProps';
import AddNews from './parts/AddNews';
import NewsList from './parts/NewsList';
import Message from '../../components/Indicators/Message';
import Confirm from '../../components/Modals/Confirm';

class News extends React.Component {
  componentDidMount() {
    const { actions: { getAdminNewsList }, adminNewsState: { newsListLoading } } = this.props;
    if (newsListLoading) {
      getAdminNewsList();
    }
  }

  componentDidUpdate() {
    const { adminState: { tokenExpired } } = this.props;

    if (tokenExpired) {
      // redirect to login
      history.push('/login');
    }
  }

  onTitleChange(event) {
    event.preventDefault();

    const { actions: { newNewsTitleChanged } } = this.props;
    newNewsTitleChanged(event.currentTarget.value);
  }

  onMessageChange(event) {
    event.preventDefault();

    const { actions: { newNewsMessageChanged } } = this.props;
    newNewsMessageChanged(event.currentTarget.value);
  }

  onFormSubmit(event) {
    event.preventDefault();

    const {
      actions: {
        addAdminNews
      },
      adminNewsState: {
        newTitle,
        newTitleValid,
        newMessage,
        newMessageValid
      } } = this.props;

    if (newTitleValid && newMessageValid) {
      addAdminNews({ title: newTitle, message: newMessage });
    }
  }

  onDeleteClick(id, event) {
    event.preventDefault();

    const { actions: { deleteAdminNewsRequest } } = this.props;
    deleteAdminNewsRequest(id);
  }

  onEditClick(id, event) {
    event.preventDefault();
    console.log(id);
  }

  onDeleteCancelClick(event) {
    event.preventDefault();

    const { actions: { deleteAdminNewsCancel } } = this.props;
    deleteAdminNewsCancel();
  }

  onDeleteConfirmClick(event) {
    event.preventDefault();

    const { actions: { deleteAdminNews }, adminNewsState: { deleteNewsId } } = this.props;
    deleteAdminNews(deleteNewsId);
  }

  render () {
    const {
      adminNewsState: {
        newsList,
        newsListLoading,
        newTitle,
        newTitleValid,
        newTitleDirty,
        newMessage,
        newMessageValid,
        newMessageDirty,
        addNewsLoading,
        addNewsError,
        deleteNewsRequested,
        deleteNewsError
      }
    } = this.props;
    const shouldCleanUp = newTitle === '' && newMessage === '';
    let errorMessage = '';
    if (addNewsError) {
      errorMessage = 'Dodanie aktualności nie udane';
    } else if (deleteNewsError) {
      errorMessage = 'Nie udało się usunąć aktualności';
    }

    return (
      <div className={styles.container}>
        <AddNews onTitleChange={this.onTitleChange.bind(this)}
                 onMessageChange={this.onMessageChange.bind(this)}
                 onFormSubmit={this.onFormSubmit.bind(this)}
                 titleValid={newTitleValid}
                 titleDirty={newTitleDirty}
                 messageValid={newMessageValid}
                 messageDirty={newMessageDirty}
                 shouldCleanUp={shouldCleanUp}
                 isLoading={addNewsLoading}
        />
        <NewsList newsList={newsList || []}
                  newsListLoading={newsListLoading}
                  onDeleteClick={this.onDeleteClick.bind(this)}
                  onEditClick={this.onEditClick.bind(this)}
        />
        <Confirm question="Czy jesteś pewien, że chcesz usunąć aktualność?" isVisible={deleteNewsRequested} onCancelClick={this.onDeleteCancelClick.bind(this)} onConfirmClick={this.onDeleteConfirmClick.bind(this)} />
        <Message type="alert" message={errorMessage} isVisible={addNewsError || deleteNewsError} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(News));