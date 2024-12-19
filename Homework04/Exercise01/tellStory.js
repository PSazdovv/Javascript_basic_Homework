function tellStory(argument) {
  let name = argument[0];
  let mood = argument[1];
  let activity = argument[2];

  let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end`;
  return story;
}
let storyArgument = ["Pavle", "happy", "coding"];
console.log(tellStory(storyArgument));
//alert(tellStory(storyArgument))
