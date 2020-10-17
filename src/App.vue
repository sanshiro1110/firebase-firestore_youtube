<template>
  <div id="app">
    <h1>Hello World</h1>
    <button @click="handleClickFetchButton">取得</button>
    <button @click="handleClickAddButton">追加</button>
    <button @click="handleClickUpdateButton">更新</button>
    <button @click="handleClickDeleteButton">削除</button>
  </div>
</template>

<script>
import * as firebase from 'firebase';

export default {
  name: 'App',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    // handleClickFetchButton() {
    //   const db = firebase.firestore();
    //   var docRef = db.collection('users').doc('LZgzLVjr21mVio19FXbJ');
    //   docRef.get().then(function(doc) {
    //     console.log("Document data:", doc.data());
    //   });

    //   console.log('Fetch clicked');
    // },
    // async handleClickFetchButton() {
    //   const db = firebase.firestore();
    //   var docRef = await db.collection('users').doc('LZgzLVjr21mVio19FXbJ').get();
    //   console.log(docRef.data());

    //   console.log('Fetch clicked');
    // },

    handleClickFetchButton() {
      const db = firebase.firestore();
      db
      .collection('users')
      .where('age', '>=', 22)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
        });
      });
    },
    handleClickAddButton() {
      const db = firebase.firestore();
      // db
      // .collection('users')
      // .doc('1')
      // .set({
      //   name: 'Dummy',
      //   age: 100,
      // },
      // {
      //   merge: true
      // });
      db.collection('users').add({
        name: '田中',
        age: 100,
      }).then(function(ref) {
        console.log('Added document width ID: ', ref.id);
      });
    },
    handleClickUpdateButton() {
      const db = firebase.firestore();
      db.collection('users').doc('BVpL16UxKuB0g4WmT0rh').update({
        name: '新しいユーザー名',
        age: 20,
      });
    },
    handleClickDeleteButton() {
      const db = firebase.firestore();
      db.collection('users').doc('BVpL16UxKuB0g4WmT0rh').delete().then(function() {
        console.log('Document successfully deleted!');
      }).catch(function(error) {
        console.log('Error removing document', error);
      });
    },
  }
}
</script>
