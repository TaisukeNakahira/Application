# Firebaseに帆zンした画像を取得する方法
1. ファイルアップロード時、ファイルのパスをFirestoreに保存
2. 画像取得時、Firestoreのファイルパスを取得し、以下のコードで画像参照を取得
	```ts
  const gsReference = ref(
	  firestorage, // const firestorage = getStorage(firebase);
	  "gs://test-books-94742.appspot.com/azuki.png" // ファイルパス
	);
  ```
3. 以下のコードで画像参照から画像URLを取得(レスポンスにURLが返るので、useStateで管理する)
	```ts
  getDownloadURL(gsReference)
	  .then((url) => {
	    setImage(url);
	  })
	  .catch((err) => console.log(err));
  ```
4. 取得したURLをimgタグに入れる
  ```ts
  <img src={image} alt="" />
  ```

# Firebaseに画像をほぞんする方法
1. 