//for await of - its allows us to loop through all peomises

const urls = [
       'https://jsonplaceholder.typicode.com/users',
       'https://jsonplaceholder.typicode.com/posts',
       'https://jsonplaceholder.typicode.com/albums'
 ]
// this is the old function we learnt in async-await
 const getData = async function(){
      try{
            const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
                  const response = await fetch(url)
                  return response.json()

            }))
            console.log(users);
            console.log(posts);
            console.log(albums);
      } catch(err) {
            console.log(err);
      }
 }
//  there is for await of loop
 constloopThroughUrls = url => {
      for(url of urls){                  
            console.log(url); // this will priny all the urls now use it in real world scenerio
      }
}

// ---------------------------------------

const getData2 = async function() {
      const arrayOfPromise = urls.map(url => fetch(url));
      for await ( let request of arrayOfPromise){
            const data = await request.json();
            console.log(data);
      }
}