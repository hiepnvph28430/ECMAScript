// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = /*html*/`
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// import { sum, a } from "./pages/home";
// console.log(sum(20, 10));
// console.log(a)
import { render, router } from "./lib";
import AboutPage from "./pages/about";
import Contact from "./pages/contact";
import HomePage from "./pages/home";
import PostDetail from "./pages/postdetail";
import Post from "./pages/posts";
import Project from "./pages/project";
import ProjectDetailPost from "./pages/project-detail";
// sắp xếp a-z : alt + shift + o
const app = document.querySelector('#app');
//router(đường dẫn, function)

router.on("/", () => render(HomePage, app));
router.on("/home", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));

router.on("/posts", () => render(Post, app));
router.on("/contact", () => render(Contact, app));
router.on("/projects", () => render(Project, app));
router.on("/project/:id", (params) => render(ProjectDetailPost(params.data.id), app));

router.notFound(() => console.log("Not found page"));

router.resolve();
