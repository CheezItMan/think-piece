import React, { Component } from 'react';

import { firestore, auth }  from '../firebase';

import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities/utilities';
import Authentication from './Authentication';

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);

      this.setState({ posts });
    });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });

  
    // const snapshot = await firestore.collection('posts').get();

    // const posts = snapshot.docs.map(collectIdsAndDocs);

      
    // this.setState({posts});
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  handleCreate = async post => {
    // docRef is the place I put it in the database
    
  };

  handleRemove = async id => {
    await firestore.doc(`posts/${id}`).delete();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={this.state.user} />
        <Posts user={this.state.user} posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
