
function escapeHTML(htmlStr) {
  return htmlStr.split("<").join("&lt;").split(">").join("&gt;");
}

// all code snippets
const allSnippets = [
  { filepath: "console-table.js", domId: "snippet1"},
  { filepath: "array-magic-tricks.js", domId: "snippet2"},
  { filepath: "load-filecontent-as-string.js", domId: "snippet3"},
  { filepath: "scrape-from-client-only.js", domId: "snippet4"},
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

