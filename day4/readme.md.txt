why do you need any frameworks like react or vue.js
--> for static(whose content is not changing when you open the website) we donnt need but for dynamic(change in dom) it becomes so complex hence we use it.it help easier dom manipulation.

react is an easier way to write html css and js with new syntax that underhood gets converted to html/css/js.

--> just worry about react syntax not how does it work.
-->created by facebook.



there are mainly three things in react:
components
states and re rendering.

states: 
object that represents current situation of app. it is dynamic and like in react app it is value of the counter.
like in linkedin ma there is top bar we can represent it by


{
  topbar:{ 
    home :0,
  mynetwork : 99+,
  jobs:0,
  messaging : 0,
notifications: 10

  }
}

and this are used to manipulate the dom manipulation


components: 
resuable, html snippet used to show how dom is rendered  given the states.
it uses components and renders in the website to make website dynamic.it is defined by user.


re rendering: 
changing the value of states by dom manipulation and rendering everything again to cope up the changes.it is done by react.

so without doing react lets implement state components in js.
here in .htmlfile ma maile state ra components garako xu . 

underhood react works like this only.
here buttoncomponentrerender is done by react library and we only wrtie onbuttonpress in react /
and buttoncomponents.


in react we define the equivalent state by
;
syntax: array destructuring

function App(){
const [count, setCount]= React.useState(0)
}


yo ma count ko value 0 wala hunxa and setCount ko vallue 1 wala hunxa
synxtax

lets now run react but it wouldnot be uploaded in github.

jsx--> javascript xml
