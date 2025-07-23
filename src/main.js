import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter, setupFile } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button type="button" data-request="Get200">获取数据Get200</button>
      <button type="button" data-request="Post200">获取数据Post200</button>
      <button type="button" data-request="Get200PNG">获取数据Get200PNG</button>
      <div id="data"></div>
      <img id="image" />
    </div>
<div>
  <div>
    <label for="file">选择要上传的文件</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button id="submit">提交</button>
  </div>
</div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector(".card"));
setupFile(document.querySelector("#submit"));