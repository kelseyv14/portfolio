import React from 'react';
import ReactDOM from 'react-dom';
import Work from './Work';
import LoadPics from './LoadPics';
import LoadHeader from './LoadHeader';

let urls = [
           '/img/one.jpg',
            '/img/two.jpg', 
            '/img/three.jpg', 
            '/img/four.jpg' ,
            '/img/five.jpg' ,
            '/img/six.jpg' ,
            '/img/seven.jpg', 
            '/img/eight.jpg' ,
            '/img/nine.jpg' ,
            '/img/ten.jpg' ,
            '/img/eleven.jpg', 
            '/img/twelve.png' ,
            '/img/thirteen.jpg', 
            '/img/fourteen.png', 
            '/img/fifteen.jpg', 
            '/img/sixteen.jpg' ,
            '/img/seventeen.jpg', 
            '/img/eighteen.jpg' ,
            '/img/nineteen.jpg' ,
            '/img/twenty.jpg' ,
            '/img/twenty1.jpg' ,
            '/img/twenty2.png' ,
            '/img/twenty3.jpg' ,
            '/img/twenty4.jpg' ,
            '/img/twenty5.jpg' ,
            '/img/twenty6.jpg' ,
            '/img/twenty7.jpg' ,
            '/img/twenty8.png' ,
            '/img/twenty9.jpeg' ,           
            '/img/thirty.jpeg' ,
            '/img/thirty1.jpg' ,
            '/img/thirty2.jpg' ,
            '/img/thirty3.png' ,
            '/img/thirty4.jpg' ,
            '/img/thirty5.jpg' ,
            '/img/thirty6.jpg' ,
            '/img/thirty7.jpg' ,
            '/img/thirty8.jpg' ,
            '/img/thirty9.jpg' ,
            '/img/forty.jpg' ,
            '/img/forty1.jpg' ,
            '/img/forty2.png' ,
            '/img/forty3.jpg' ,
            '/img/forty4.jpg' ,
            '/img/forty5.jpg' ,
            '/img/forty6.jpeg' ,
            '/img/forty7.jpg' ,
            '/img/forty8.jpg' ,
            '/img/forty9.jpg' ,
            '/img/fifty.jpg' ,
            '/img/fifty1.jpg' ,
            '/img/fifty2.jpg' ,
            '/img/fifty3.jpg' ,
            '/img/fifty4.jpg' ,
             '/img/fifty5.jpg' ,
            '/img/fifty6.jpg' 
];



ReactDOM.render(
  <Work />,
  document.getElementById('root')
);

ReactDOM.render(
  <LoadHeader/>,
  document.getElementById('header')
)

ReactDOM.render(
  <LoadPics imageUrls={urls}/>,
  document.getElementById('mount')
);


