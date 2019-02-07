var config = {
    apiKey: "AIzaSyBKKyDJOQ7H0EhV37SIxedQFViy2umECdA",
    authDomain: "tonyguy-cf069.firebaseapp.com",
    databaseURL: "https://tonyguy-cf069.firebaseio.com",
    projectId: "tonyguy-cf069",
    storageBucket: "tonyguy-cf069.appspot.com",
    messagingSenderId: "770261759588"
};
firebase.initializeApp(config);

function getDb(){
    var db = firebase.firestore();
    db.collection("price")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var docs = document.getElementsByClassName(doc.id);
                for(var i =0; i < docs.length; i++){
                    docs[i].value = doc.data().price;
                    docs[i].innerHTML = doc.data().price;
                }
            });
        })
        .catch(function(error) {
            alert("Error getting documents");
        });
}

getDb();