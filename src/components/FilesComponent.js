import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  firstPageFilesAction
} from "../redux/filesDucks.js";

export const Files = (props) => {
  const dispatch = useDispatch();
  const files = useSelector((store) => store.files);
  
  React.useEffect(
    () => dispatch(firstPageFilesAction()),
    [dispatch]
  );

  return (
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
  );
};
