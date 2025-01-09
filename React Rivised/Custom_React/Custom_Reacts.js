  
  let mainContainer=document.querySelector("#root");

  console.log(mainContainer);
  
      function react_setter(mainContainer,reactElement){
         
        let domElement=document.createElement(reactElement.type);
        domElement.innerHTML=reactElement.children;

        // domElement.setAttribute('href', reactElement.props.href);

        // domElement.setAttribute('children',reactElement.props.children);
        // mainContainer.appendChild(domElement);

        for (const prop in reactElement.props) {
             if (prop==="children")  continue
                
             domElement.setAttribute(prop,reactElement.props[prop])
        }
        mainContainer.appendChild(domElement);

      }
  const reactElement={
     type:'a',
     props:{
        href:'https://google.com',
        target:'blank_'
     },
     children:'click to visit on google'
  }

  react_setter(mainContainer,reactElement);