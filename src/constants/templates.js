import { useGlobalContext } from "../../context";

export const templates = [
  {
    id: 6,
    title: "Monthly Bills",
    content:
      "The most basic feature of noteli is to allow users to create, read, update and delete their notes. accorded to their preferences making the platform easier to use.",
    color: "#F48C06",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Card Details",
    content:
      "Card No:20390440403303904. Card Pin:1234. This Note is save and secure you can save any time of information and details here",
    color: "#6610f2",
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Privacy Control",
    content:
      "The ability for a user to make notes private adds a crucial layer of customization and control over the visibility of their content.",
    color: "#f674ad",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Birthday Celebration",
    content:
      "You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.",
    color: "#20c997",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "NoteLi for Entrepreneurs",
    content:
      "With NoteLi, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can",
    color: "#f0864a",
    createdAt: new Date(),
  },
  {
    id: 1,
    title: "Quick Summary",
    content:
      "Need to write a summary note of the subject you just finished? NotePlus lets you do in on-the-go!  https://Dribble.com/Shots/6387620",
    color: "#545AE7",
    createdAt: new Date(),
  },
];

const transfomedNotes = () => {
  const { notes } = useGlobalContext();

  // Function to format the note data
  function formatNoteData(note) {
    // Check if the contents array is not empty
    if (
      note.contents &&
      Array.isArray(note.contents.content) &&
      note.contents.content.length > 0
    ) {
      // Extract the title, content, color, and createdAt properties
      const contentText = note.contents.content
        .filter((item) => item.type === "paragraph")
        .map((item) => item.content[0].text)
        .join(" ");

      return {
        id: Math.floor(Math.random() * 100000), // Replace with your ID generation logic
        title: note.contents.content[0].content[0].text,
        content: contentText,
        color: note.noteColor,
        createdAt: note.createdAt,
      };
    } else {
      return null; // Return null if the contents array is empty
    }
  }

  // Format the note data and check if it's not null
  const formattedNote = formatNoteData(notes);

  if (formattedNote) {
    // Add the formatted note to the templates array
    templates.push(formattedNote);
  } else {
    console.log("Skipping note because contents array is empty.");
  }

  // Now, templates array contains the newly formatted note (if not skipped)
  console.log(templates);
};

export default transfomedNotes;
