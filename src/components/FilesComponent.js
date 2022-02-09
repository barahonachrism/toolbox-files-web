import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstPageFilesAction } from "../redux/filesDucks.js";

export const Files = (props) => {
  const dispatch = useDispatch();
  const files = useSelector((store) => store.files);
  const [fileName, setFileName] = useState();

  const searchFiles = (e) => {
    if (fileName.length > 0) {
      dispatch(firstPageFilesAction(fileName));
    }
    else{
        dispatch(firstPageFilesAction()); 
    }
  };

  const searchFilesEnter = (e) => {
      
    if (e.key === "Enter") {
        e.preventDefault();
      if (fileName.length > 0) {
        dispatch(firstPageFilesAction(fileName));
      }
      else{
        dispatch(firstPageFilesAction());  
      }
    }
  };

  const changeFileName = (e) => setFileName(e.target.value);

  React.useEffect(() => dispatch(firstPageFilesAction()), [dispatch]);

  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#ff6565" }}
      >
        <div class="container-fluid">
          <span class="navbar-brand text-light">File Repository</span>
          <form class="d-flex">
            <input
              value={fileName}
              class="form-control me-2"
              type="search"
              placeholder="Enter file name"
              aria-label="Search"
              onChange={(e) => changeFileName(e)}
              onKeyDown={(e) => searchFilesEnter(e)}
            ></input>
            <button
              class="btn btn-outline-light"
              type="button"
              onClick={(e) => searchFiles(e)}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div class="mt-5">
        <div class="container">
          <div class="row">
            <div class="col">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">File name</th>
                    <th scope="col">Text</th>
                    <th scope="col">Number</th>
                    <th scope="col">Hex</th>
                  </tr>
                </thead>
                <tbody>
                  {files.results.map((file) => {
                    return file.lines.map((line) => {
                      return (
                        <tr>
                          <td>{file.fileName}</td>
                          <td>{line.text}</td>
                          <td>{line.number}</td>
                          <td>{line.hex}</td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
