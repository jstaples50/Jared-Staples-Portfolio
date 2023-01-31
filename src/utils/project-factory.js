const fs = require("fs");

const createProjectObject = async (name, img, url) => {
  const projectObject = {
    name: name,
    img: img,
    url: url,
  };

  fs.appendFile(
    "./src/utils/data.JSON",
    JSON.stringify(projectObject),
    (err) => {
      if (err) throw err;
      console.log("Data appended to file");
    }
  );

  //   console.log(JSON.stringify(projectObject));
};

createProjectObject(
  "Test 2",
  "./assets/task-management.png",
  "https://project-management-2022-but.herokuapp.com/"
);
