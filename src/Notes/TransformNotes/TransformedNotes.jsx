import { useState, useEffect } from "react";
import { useGlobalContext } from "../../../context";
import MyNotes from "../MyNotes/MyNotes";
import { v4 as uuid } from "uuid";
import storage from "../../containers/storage/storage";

const TransfomedNotes = () => {
  const { notes, userId } = useGlobalContext();
  const [renderedNotes, setRenderedNotes] = useState(
    storage.get(`home_${userId()}`, [
      {
        id: uuid(),
        title: "Monthly Bills",
        content:
          "The most basic feature of noteli is to allow users to create, read, update and delete their notes. accorded to their preferences making the platform easier to use.",
        color: "#F48C06",
        createdAt: new Date().toLocaleDateString(),
      },
      {
        id: uuid(),
        title: "Card Details",
        content:
          "Card No:20390440403303904. Card Pin:1234. This Note is save and secure you can save any time of information and details here",
        color: "#6610f2",
        createdAt: new Date().toLocaleDateString(),
      },
      {
        id: uuid(),
        title: "Privacy Control",
        content:
          "The ability for a user to make notes private adds a crucial layer of customization and control over the visibility of their content.",
        color: "#f674ad",
        createdAt: new Date().toLocaleDateString(),
      },
      {
        id: uuid(),
        title: "Birthday Celebration",
        content:
          "You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.",
        color: "#20c997",
        createdAt: new Date().toLocaleDateString(),
      },
      {
        id: uuid(),
        title: "NoteLi for Entrepreneurs",
        content:
          "With NoteLi, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can",
        color: "#f0864a",
        createdAt: new Date().toLocaleDateString(),
      },
      {
        id: uuid(),
        title: "Quick Summary",
        content:
          "Need to write a summary note of the subject you just finished? NotePlus lets you do in on-the-go!  https://Dribble.com/Shots/6387620",
        color: "#545AE7",
        createdAt: new Date().toLocaleDateString(),
      },
    ])
  );

  const processContents = (contents) => {
    if (typeof contents === "object") {
      let title = "";
      let content = "";

      if (contents.content && Array.isArray(contents.content)) {
        contents.content.forEach((contentItem) => {
          if (contentItem.type === "heading") {
            title = extractTextFromContent(contentItem.content);
          } else if (contentItem.type === "paragraph") {
            content = extractTextFromContent(contentItem.content);
          } else if (
            contentItem.type === "bulletList" ||
            contentItem.type === "orderedList"
          ) {
            content = extractListItemsText(contentItem.content);
          } else if (contentItem.type === "taskList") {
            content = extractTaskListText(contentItem.content);
          }
        });
      }

      return [title, content];
    }

    return ["", ""];
  };

  const extractTaskListText = (taskList) => {
    return taskList
      .filter((item) => item.type === "taskItem")
      .map((taskItem) => {
        const checked = taskItem.attrs.checked;
        const text = extractTextFromContent(taskItem.content[0].content);
        return checked ? `- [x] ${text}` : `- [ ] ${text}`;
      })
      .join("\n");
  };

  const extractTextFromContent = (content) => {
    if (content && Array.isArray(content)) {
      return content
        .filter((item) => item.type === "text")
        .map((textItem) => textItem.text)
        .join(" ");
    }

    return "";
  };
  useEffect(() => {
    const lastNoteItem = notes[notes.length - 1];
    if (lastNoteItem) {
      const extractedNote = {};

      for (let key in lastNoteItem) {
        if (key === "contents") {
          console.log(lastNoteItem[key]);
          console.log(processContents(lastNoteItem[key]));
          extractedNote.title = processContents(lastNoteItem[key])[0];
          extractedNote.content = processContents(lastNoteItem[key])[1];
        } else {
          extractedNote[key] = lastNoteItem[key];
        }
        console.log(extractedNote);
      }
      if (!renderedNotes.some((note) => note.id === extractedNote.id)) {
        setRenderedNotes((prevNotes) => [...prevNotes, extractedNote]);
      }
    }
  }, [notes]);

  useEffect(() => {
    storage.set(`home_${userId()}`, renderedNotes);
  }, [renderedNotes]);

  return (
    <>
      {renderedNotes.map((note) => {
        return (
          <MyNotes
            key={note.id}
            createdAt={note.createdAt}
            id={note.id}
            tittle={note.title}
            content={note.content}
            color={note.color}
          />
        );
      })}
    </>
  );
};

export default TransfomedNotes;
