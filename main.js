var abouts=[
    "Mr.Narendra Awasthi. he is Dealer of Indian Oil Corporation Ltd. and he is my Grandfather",
    "Mrs.Meera Aawasthi. She is a House Wife and she is my Grandmother",
    "Mr.Vineet Awasthi.He is C.A (Charted Accountant) and my father.",
    "Mrs.Rupal Awasthi. She is a House Wife and my mother",
    "This is me! Aarav Awasthi and I am a Coder",
    "She is my sister Agrima Awasthi she loves to play Cricket"
    ];
    var images=[
    "grandfather.jpeg",
    "grandmother.jpeg",
    "father.jpeg",
    "mother.jpeg",
    "aarav.jpeg",
    "aana.jpeg"
];
    var i=0;
    function nextslide(){
    document.getElementById("about").innerHTML=abouts[i];
    document.getElementById("album").src=images[i];
    i++;
    }
    