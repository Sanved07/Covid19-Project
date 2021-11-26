import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./stateWise.css";

const StateWise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <Container fluid>
        <div className="container-fluid mt-5">
          <div className="main-heading">
            <h1 className="mb-5 text-center">India Covid-19 Dashboard Live</h1>
          </div>
          <div className="table-responsive">
            <Table className="table table-hover ">
              <thead className="table-dark">
                <tr>
                  <th>States</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {data.map((curElem, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{curElem.state}</td>
                      <td>{curElem.confirmed}</td>
                      <td>{curElem.recovered}</td>
                      <td>{curElem.deaths}</td>
                      <td>{curElem.active}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
        <h5 className="text-center">Created by Sanved Hambarde</h5>
      </Container>
    </>
  );
};

export default StateWise;
