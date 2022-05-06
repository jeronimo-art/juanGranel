import firebase from "firebase/compat/app";

function FileUpload() {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    let uploadTask = firebase.storage().ref("videos/" + file.name);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, [
      () => {
        uploadTask.put(file);
      },
    ]);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <br />
    </div>
  );
}

export default FileUpload;