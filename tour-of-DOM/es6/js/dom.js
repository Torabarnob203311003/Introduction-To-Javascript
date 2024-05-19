document.getElementById('btn').addEventListener('click',function(){

  const frnd = document.getElementsByClassName('friends')
for(const friend of frnd){

    friend.style.backgroundColor = 'lightblue';
}

});

 document.getElementById('btn-center').addEventListener('click',function(){
    const thrid = document.getElementById('third-friend')
    thrid.style.textAlign ='center';
//  console.log(thrid) 

 });

 document.getElementById('btn-add').addEventListener('click',function(){

   const frndcontainer = document.getElementById('friends')
 const friend = document.createElement('div');
 friend.classList.add('friends');
 friend.innerHTML = `<h3>hi i am new friend </h3>
 <p> what is your name</p> `
  frndcontainer.appendChild(friend)


 })