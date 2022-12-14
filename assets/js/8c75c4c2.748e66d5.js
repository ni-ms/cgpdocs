"use strict";(self.webpackChunkassignment_docs=self.webpackChunkassignment_docs||[]).push([[127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,sidebar_label:"Our Implementations"},o="Our Implementations",s={unversionedId:"our",id:"our",title:"Our Implementations",description:"APIs and Libraries used :",source:"@site/docs/our.md",sourceDirName:".",slug:"/our",permalink:"/cgpdocs/docs/our",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Our Implementations"},sidebar:"tutorialSidebar",previous:{title:"Historical Implementations",permalink:"/cgpdocs/docs/hist"},next:{title:"Code",permalink:"/cgpdocs/docs/dive"}},l={},h=[{value:"Patch representation",id:"patch-representation",level:3},{value:"Choosing the shooting patch",id:"choosing-the-shooting-patch",level:3},{value:"Form factor",id:"form-factor",level:3},{value:"Energy distribution and accumulation",id:"energy-distribution-and-accumulation",level:3}],c={toc:h};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"our-implementations"},"Our Implementations"),(0,i.kt)("p",null,"APIs and Libraries used :\nGLFW: handles window and context creation for OpenGL\nGLEW: OpenGL Extension Wrangler, provides easy access to OpenGL extensions\nGLM: A mathematics library that allows code to be written in C++ that can easily interoperate with GLSL\nstb_image.h: header-only library that handles image loading\nOpen Asset Import Library (Assimp): object loader that can handle many different object file formats\nwxWidgets: library is that it closely mimics the look of the windows of the host OS and helps in the creation of a coherent UI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Frontend ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"wxWidgets library was used to implement a simple UI that allows the user to choose the file to be rendered, change the render resolution and change the light map resolution.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Renderer "))),(0,i.kt)("h3",{id:"patch-representation"},"Patch representation"),(0,i.kt)("p",null,"The older radiosity papers suggested subdividing big surfaces into smaller patches. In practice this meant that a surface that only contained a few triangles had more vertices added to it so that we could create more, smaller triangles. In this case a patch would be a triangle. Since in traditional radiosity the amount and color of light is constant over a patch more patches lead to a better quality image."),(0,i.kt)("p",null,"This method couples the lighting representation and the underlying geometry tightly and we\u2019d have to render more triangles if we want a more refined lighting. It also raises the issue of how to subdivide the original triangles."),(0,i.kt)("p",null,'To circumnavigate around these issues, patches are represented with textures. Each texel (texture pixel) is going to act as a patch, so getting a more detailed image can be achieved by simply changing the texture resolution. These textures are the aforementioned "lightmaps" and are used to store the radiosity values that map to a given point in the scene.'),(0,i.kt)("h3",{id:"choosing-the-shooting-patch"},"Choosing the shooting patch"),(0,i.kt)("p",null,'The best way of choosing the shooting patch is selecting the patch that has the most energy that has not been shot yet (called the "radiance" or "radiant energy" of the patch). This patch contributes the most to the scene and thus if the patch with the highest radiance is always chosen, the scene is going to converge the quickest to the final solution.'),(0,i.kt)("p",null,"The shooting patch is chosen by looking at the average radiance of a mesh by creating a mipmap pyramid of its radiance texture then taking the top level of it. The top level mipmap is going to have a resolution of 1x1 and is going to contain the average RGB value of the whole texture. These mipmaps can then be sorted and used accordingly."),(0,i.kt)("h3",{id:"form-factor"},"Form factor"),(0,i.kt)("p",null,"The geometric term of the form factor calculation relies on the distance and relative orientation of two elements (the shooter and the receiver) and also their size. A modified version of the geometric term calculation found in GPUGI was used."),(0,i.kt)("p",null,"The visibility term determines if the shooting patch can see a specific receiver or if it is occluded. As a simple implementation, ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility = 1")," if it is not occluded and ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility = 0")," if it is. This is determined using shadow mapping."),(0,i.kt)("p",null,'Laying the flat side of a hemisphere on a surface is going to allow us to look at what any given point can "see". Since radiosity deals with perfect lambertian diffuse surfaces, the surface is going to distribute energy evenly over the hemisphere. The hemisphere itself is similar to a camera with a 180\xb0 field of view. We approximate a hemisphere with a hemicube, a cube cut in half, with 1 full face and 4 half-faces.'),(0,i.kt)("h3",{id:"energy-distribution-and-accumulation"},"Energy distribution and accumulation"),(0,i.kt)("p",null,"Two lightmaps are maintained for every mesh, one for the radiant/outgoing energy and one for the incoming radiant energy/irradiance from the other patches. This is so that we can determine what to show when we render the scene and what to transmit to other patches. When the radiosity process starts the lightmaps of every non-lamp mesh are going to be completely dark RGB(0, 0, 0) whereas lamps are going to be completely white RGB(1, 1, 1)."),(0,i.kt)("p",null,"We can then simply add the RGB values of the incoming energy to the stored irradiance of every patch to get the new irradiance values after a shooter has shot its energy. Similarly we can get the new radiance value of every patch by multiplying the irradiance values just received by the underlying diffuse texture values. This value is then added to the stored radiance and the shooter's radiance is set to 0."),(0,i.kt)("p",null,"This step is then repeated for all the surfaces in the scene on the fly in the previously sorted order."))}d.isMDXComponent=!0}}]);