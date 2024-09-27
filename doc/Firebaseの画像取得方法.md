# Firebaseに帆zンした画像を取得する方法
1. ファイルアップロード時、ファイルのパスをFirestoreに保存
2. 画像取得時、Firestoreのファイルパスを取得
```ts
var db = firebase.firestore();
db.collection("members").doc(strUserID).set({
  group: dojoName,
  docid: role,
  point: 0,
  timestamp: firebase.firestore.Timestamp.fromDate(new Date())
})
.then(function(){
  document.location.reload(); // 新しいレコードの登録が成功したらリロードする
})
.catch(function(error){console.log("Error at MemberDocAdd:", error)});
```
3. 以下のコードで画像参照を取得
```ts
const gsReference = ref(
firestorage, // const firestorage = getStorage(firebase);
"gs://test-books-94742.appspot.com/azuki.png" // ファイルパス
);
```

4. 以下のコードで画像参照から画像URLを取得(レスポンスにURLが返るので、useStateで管理する)
```ts
getDownloadURL(gsReference)
  .then((url) => {
    setImage(url);
  })
  .catch((err) => console.log(err));
```
5. 取得したURLをimgタグに入れる
```ts
<img src={image} alt="" />
```

# Firebaseに画像をほぞんする方法
1. a