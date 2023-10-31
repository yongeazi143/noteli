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
    let title = "";
    let content = [];

    if (contents && Array.isArray(contents.content)) {
      for (const item of contents.content) {
        if (item.type === "heading" && Array.isArray(item.content)) {
          title = item.content
            .filter((subItem) => subItem.type === "text")
            .map((subItem) => subItem.text)
            .join(" ");
        } else if (item.type === "paragraph" && Array.isArray(item.content)) {
          content.push(
            item.content
              .filter((subItem) => subItem.type === "text")
              .map((subItem) => subItem.text)
              .join(" ")
          );
        } else if (
          (item.type === "bulletList" || item.type === "orderedList") &&
          Array.isArray(item.content)
        ) {
          const listItems = item.content.map((listItem) =>
            listItem.content
              .map((subItem) =>
                subItem.content
                  .filter((subSubItem) => subSubItem.type === "text")
                  .map((subSubItem) => subSubItem.text)
                  .join(" ")
              )
              .join("\n")
          );
          content = content.concat(listItems);
        } else if (item.type === "taskList" && Array.isArray(item.content)) {
          const taskItems = item.content.map((taskItem) => {
            const checked = taskItem.attrs.checked;
            const text = taskItem.content[0].content
              .filter((subItem) => subItem.type === "text")
              .map((subItem) => subItem.text)
              .join(" ");
            content.push(checked ? `- [x] ${text}` : `- [ ] ${text}`);
          });
        } else if (item.type === "codeBlock" && Array.isArray(item.content)) {
          const text = item.content
            .filter((subItem) => subItem.type === "text")
            .map((subItem) => subItem.text)
            .join(" ");
          content.push(text);
        } else if (item.type === "images" && Array.isArray(item.content)) {
          const text = item.content
            .filter((subItem) => subItem.type === "text")
            .map((subItem) => subItem.text)
            .join(" ");
          content.push(`<img src=${text} alt="images"/>`);
        }
      }
    }

    return [title.trim(), content];
  };

  //   const processContents = (contents) => {
  //     let title = "";
  //     let content = "";
  //     console.log(contents);
  //     if (
  //       contents &&
  //       Array.isArray(contents.content) &&
  //       contents.content.length > 0
  //     ) {
  //       contents.content.forEach((item) => {
  //         if (
  //           item.type === "heading" &&
  //           item.content &&
  //           item.content.length > 0
  //         ) {
  //           title = item.content[0].text || "";
  //           //  content = item.content[0].text || "";
  //         } else if (
  //           item.type === "paragraph" &&
  //           item.content &&
  //           item.content.length > 0
  //         ) {
  //           content = item.content[0].text || "";
  //           //  title = item.content[0].text || "";
  //         } else if (
  //           (item.type === "bulletList" || item.type === "orderedList") &&
  //           item.content &&
  //           item.content.length > 0
  //         ) {
  //           const listItems = item.content.map(
  //             (listItem) => listItem.content[0].text
  //           );
  //           content += listItems.join("\n");
  //           //  title += listItems.join("\n");
  //         } else if (
  //           item.type === "taskList" &&
  //           item.content &&
  //           item.content.length > 0
  //         ) {
  //           const taskItems = item.content.map((taskItem) => {
  //             const checked = taskItem.attrs.checked;
  //             const text = taskItem.content[0].content[0].text;
  //             return checked ? `- [x] ${text}` : ` - [ ] ${text}`;
  //           });
  //           //  title += taskItems.join("\n");
  //           content += taskItems.join("\n");
  //         }
  //       });
  //     }

  //     return [title.trim(), content.trim()];
  //   };

  //  const extractTaskListText = (taskList) => {
  //    return taskList
  //      .filter((item) => item.type === "taskItem")
  //      .map((taskItem) => {
  //        const checked = taskItem.attrs.checked;
  //        const text = extractTextFromContent(taskItem.content[0].content);
  //        return checked ? `- [x] ${text}` : `- [ ] ${text}`;
  //      })
  //      .join("\n");
  //  };

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
    const notesToAdd = notes.map((note) => {
      const extractedNote = {};
      for (let key in note) {
        if (key === "contents") {
          const [title, content] = processContents(note[key]);
          extractedNote.title = title;
          extractedNote.content = content;
        } else {
          extractedNote[key] = note[key];
        }
      }
      return extractedNote;
    });

    const updatedRenderedNotes = [...renderedNotes, ...notesToAdd];
    const uniqueRenderedNotes = updatedRenderedNotes.filter(
      (note, index, self) => index === self.findIndex((n) => n.id === note.id)
    );
    setRenderedNotes(uniqueRenderedNotes);
  }, [notes]);

  useEffect(() => {
    storage.set(`home_${userId()}`, renderedNotes);
  }, [renderedNotes]);

  return (
    <>
      {renderedNotes.reverse().map((note) => {
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
