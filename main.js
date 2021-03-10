var abouts=[
    "Mr.Narendra Awasthi. He is MSc in Botony. At present he is Minister in Vaypar Mandal U.P. In the age of 74 he is still working as a farmer and my Grangfather ",
    "Mrs.Meera Aawasthi. She is a House Wife and she is my Grandmother",
    "Mr.Vineet Awasthi.He is C.A (Chartered Accountant) and my Father.",
    "Mrs.Rupal Awasthi. She is a House Wife and my Mother",
    "This is me! Aarav Awasthi and I am a Coder",
    "She is my loving Sister Agrima Awasthi and she loves to play Cricket"
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
    document.getElementById("about").innerHTML = abouts[i];
    document.getElementById("album").src = images[i];
    i++;
    }
    