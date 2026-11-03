const books = [
  { title: "The Pragmatic Programmer", author: "Hunt and Thomas", tags: ["software"] },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", tags: ["software", "data"] },
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", tags: ["fiction"] },
  { title: "Thinking in Systems", author: "Donella Meadows", tags: ["systems"] },
];

const list = document.querySelector("#books");

for (const book of books) {
  const item = document.createElement("li");
  item.textContent = `${book.title} by ${book.author} (${book.tags.join(", ")})`;
  list.append(item);
}
