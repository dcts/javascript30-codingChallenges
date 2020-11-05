// key takeaway messages tryout

const htmlToPrint = `<h1>Hello World</h1>
<p>print code and ghightlight without rendering the HTML element</p>`;

function escapeHTML(htmlStr) {
  return htmlStr.split("<").join("&lt;").split(">").join("&gt;");
}

// all code snippets
const allSnippets = [
  { filepath: "helloWorld.html", domId: "snippet1"},
  { filepath: "loadFilecontentAsString.js", domId: "snippet2"},
  // {filepath: "", domId: "snippet2"},
  // {filepath: "", domId: "snippet4"},
  // {filepath: "", domId: "snippet5"},
  // {filepath: "", domId: "snippet6"},
]

allSnippets.forEach(snippet => {
  injectSnippet(snippet.filepath, snippet.domId);
})

function injectSnippet(filePath, domId) {
  // distinguis production and localhost environment
  const rootDev = "http://localhost:8000";
  const rootProd = "https://github.com/dcts/javascript30-codingChallenges";
  const root = location.href.includes("localhost") ? rootDev : rootProd;

  fetch(`${root}/days/04/highlightJS/codeSnippets/${filePath}`)
    .then(response => response.text())
    .then(text => {
      console.log("text");
      console.log(text);
      // escape if HTML
      if (/.html$/.test(filePath)) {
        text = escapeHTML(text);
      }
      // inject content of snippet file
      const snippetEl = document.getElementById(domId);
      snippetEl.innerHTML = text;
      // retrigger highlighting
      hljs.highlightBlock(snippetEl);
    })
}

