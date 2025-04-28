function load(rows) {

    const container = document.getElementById("content");

    rows.forEach(([subheading, term, info, image, sources]) => {
        const section = document.createElement("section");

        const subheading_element = document.createElement("h1");
        subheading_element.innerHTML = subheading;
        subheading_element.className = "subheading";

        const term_element = document.createElement("h2");
        term_element.innerHTML = term;
        term_element.className = "subsubheading";

        const info_element = document.createElement("p");
        info_element.innerHTML = info;
        info_element.className = "text";

        const image_element = document.createElement("img");
        image_element.src = image;
        image_element.className = "image";

        const source_element = document.createElement("p");
        source_element.innerHTML = sources;
        source_element.className = "sources";

        const hr = document.createElement("hr")

        section.appendChild(subheading_element);
        section.appendChild(term_element);
        section.appendChild(info_element);
        section.appendChild(image_element);
        section.appendChild(source_element);
        section.appendChild(hr);
        container.appendChild(section);
    });
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}