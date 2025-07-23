import request from "./request.js";

export function setupCounter(element) {
  const setCounter = async (e) => {
    const reqeustMethod = `${e.target.dataset.request}`;
    const res = await request[reqeustMethod]({ a: 1 });
    if (typeof res === "string" && res.includes("blob")) {
      document.querySelector("#image").src = res;
    } else {
      document.querySelector("#data").innerHTML = `${JSON.stringify(res)}`;
    }
  };
  element.addEventListener("click", (e) => setCounter(e));
}
export function setupFile(element) {
  element.addEventListener("click", async () => {
    const file = document.querySelector("#file").files;
    const formData = new FormData();
    formData.append("files[]", file);
    request.PostUpload(formData);
  });
}
