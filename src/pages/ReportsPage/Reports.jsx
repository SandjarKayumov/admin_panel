import React from "react";
import "./Reports.scss";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";

const Reports = () => {
  return (
    <div>
      <h2 className="page__title">Report for payment</h2>
      <div className="report__items">
        <div className="report__item">
          {" "}
          <form>
            {/* <label>Дата изготовления от</label> */}
            <input type="date" name="calendar" className="report__input" />

            {/* <label>Дата изготовления по</label> */}
            <input type="date" name="calendar" className="report__input" />
            <div>
              {/* <button className="export__btn"></button> */}
              <Button variant="contained" color="success">
                <DownloadIcon fontSize="small" />
                Export
              </Button>
            </div>
          </form>
        </div>
        <div className="report__item">
          <select className="report-select">
            <option value="0">Select Region:</option>
            <option value="1">Region 1</option>
            <option value="2">Region 2</option>
            <option value="3">Region 3</option>
            <option value="4">Region 4</option>
            <option value="5">Region 5</option>
            <option value="6">Region 6</option>
            <option value="7">Region 7</option>
            <option value="8">Region 8</option>
            <option value="9">Region 9</option>
            <option value="10">Region 10</option>
            <option value="11">Region 11</option>
            <option value="12">Region 12</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Reports;
