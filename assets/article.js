function cleanIdValue(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s\-]+/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function setActiveListItem(target) {
  const contentsListItems = document.querySelectorAll('.contents-table li');
  contentsListItems.forEach((listItem) => {
    listItem.classList.remove('active');
  });

  if (target) {
    const activeListItem = document.querySelector(
      `.contents-table li a[href="#${target.id}"]`
    ).parentElement;
    activeListItem.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('.article__body');
  const headings = article.querySelectorAll('h2');
  const contentsBar = document.getElementById('contents-bar');
  const contentsList = contentsBar.querySelector('.contents-table');
  let counter = 1;

  headings.forEach((heading, index) => {
    const cleanedIdValue = cleanIdValue(heading.textContent);
    heading.id = cleanedIdValue;

    // Create the new list item and set its class
    const listItem = document.createElement('li');
    listItem.classList.add('sd-' + heading.tagName.toLowerCase());

    // Create the index element and set its content
    const indexElem = document.createElement('span');
    indexElem.classList.add('item-index');
    indexElem.textContent = heading.tagName === 'H2' ? `${counter}. ` : `- `;

    // Create the text element and set its content
    const textElem = document.createElement('span');
    textElem.classList.add('item-text');
    textElem.textContent = heading.textContent.replace(/[^A-Za-z0-9\s\-\?]+/g, '');

    if (heading.tagName === 'H2') counter += 1;

    // Create the anchor element, append index and text elements to it, then set its href
    const anchor = document.createElement('a');
    anchor.href = '#' + cleanedIdValue;
    anchor.appendChild(indexElem);
    anchor.appendChild(textElem);
    anchor.classList.add('btn')

    // Append the anchor to the list item and the list item to the contentsList
    listItem.appendChild(anchor);
    contentsList.appendChild(listItem);
  });

  // Create a new Intersection Observer instance
  const observer = new IntersectionObserver(
    (entries) => {
      // Loop through all entries that are currently in the viewport
      entries.forEach((entry) => {
        // If the entry is in the viewport, add the active class
        if (entry.isIntersecting) {
          setActiveListItem(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when at least 10% of the heading is visible
    }
  );

  // Observe each heading element
  headings.forEach((heading) => {
    observer.observe(heading);
  });
});
