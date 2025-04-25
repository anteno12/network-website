function load(rows) {

    const container = document.getElementById("content");

    rows.forEach(([header, term, info, image, sources]) => {
        const section = document.createElement("section");

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

        section.appendChild(term_element);
        section.appendChild(info_element);
        section.appendChild(image_element);
        section.appendChild(source_element);
        section.appendChild(hr);
        container.appendChild(section);
    });
}