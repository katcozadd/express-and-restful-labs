//Express lab
const express = require('express'); 
const app = express();
const path = require('path');

// app.get('/videos', (request, response) => {
//     response.send('here are all your videos');
// });

// app.get('/videos/:id', (request, response) => {
//     response.send('video by ID');
// });

// app.get('/comedian', (request, response) => {
//     response.send('here is all the comedians');
// });

// app.get('/comedian/:id', (request, response) => {
//     response.send('comedian by ID');
// });

// app.get('/comedian/:id/videos', (request, response) => {
//     response.send('Here are all the videos by a specific comedian!');
// });

// app.get('/comedian/:id/videos/:id', (request, response) => {
//     response.send('Here is a specific video from a specific comedian!');
// });

// app.get('/comedians', (request, response) => {
//     response.send({
//         comedians: ["Kevin Hart", "Ellen DeGeneres", "Jim Carrey"]
//     });
// });

// app.get('/image', (request, response) => {
// 	console.log('testing some things out')
// 	response.send('<img src="http://farm4.staticflickr.com/3198/5830274039_cd3ec7c1ed_b.jpg">')
// 	});

// app.get('/image/:id', (request, response) => {
// 	response.send('<img src="http://www.pirx.com/gallery/var/albums/favorites/DSC01003.jpg?m=1306192266">')
// 	});

// app.get('/object', (request, response) => {
// 	response.send({
// 		momCars: ['Toyota Rav4', 'Toyota Highlander', 'Subaru Outback', 'Minivan'],
// 		momNames: ['Jean', 'Karren', 'Marie', 'Susan'],
// 		momFun: ['Knitting', 'Petting cats', 'Feeding kids']
// 	});
// });

// app.get('/html', (request, response) => {
// 	response.sendFile(path.join( __dirName + '/index.html'))
// });



//Restful Lab
// 1.) Make the route that returns comedians by ID functional!
const comedians = [
    {id: 1, name: "Kevin Hart", url: "https://twitter.com/KevinHart4real?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"},
    {id: 2, name: "Ellen DeGeneres", url: "https://www.youtube.com/user/TheEllenShow/videos?app=desktop"},
    {id: 3, name: "Jim Carrey", url: "https://en.wikipedia.org/wiki/Jim_Carrey"}
  ];

  app.get('/comedians/:id', (request, response) => {
  	console.log(request.params.id);
  	let id = request.params.id;
  	let comedian = comedians[id -1];
    response.send(comedian);
});

// 2.) Create an array of objects representing that resource
const moms = [
	{id: 1, name: 'Jean', car: 'Toyota Rav4', doesForFun: 'knit'},
	{id: 2, name: 'Karren', car: 'Toyota Highlander', doesForFun: 'pets cats'},
	{id: 3, name: 'Marie', car: 'Subaru Outback', doesForFun: 'makes dinner for family'},
	{id: 4, name: 'Susan', car: 'Minivan', doesForFun: 'sings song lyrics wrong'}
];
// 3.) Create the route to return the collection of that resource
app.get('/moms', (request, response) => {
	console.log(request.params);
	response.send(moms);
} )

// 4.) Create the route to return one resource from that collection by ID

app.get('/moms/:id', (request, response) => {
	console.log(request.params.id);
	let id = request.params.id;
	let mom = moms[id - 1];
	response.send(mom);
})




app.listen(3000, () => {
    console.log("I am listening");
});
