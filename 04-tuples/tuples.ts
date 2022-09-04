let randomThings: [string, number[], { name: string }, number];
randomThings = ["superhero", [2], { name: "harry" }, 9];
randomThings[0].charAt(0);

// this doesn't give an error so use spread operator to add elements instead
// randomThings = [...randomThings, 3] /* ERROR */
randomThings[1].push(3);
