import React from "react";
import { Container } from "react-bootstrap";

const About = () => (
  <Container>
    <h1>About Me</h1>

    <section>
      <h2>NIRMAL KUMAR DAS</h2>
      <h3 class="detail">AT: E/64, Sector-07, Rourkela.</h3>
      <h3 class="detail">Father's Name: Sanjay Kumar Das</h3>
      <h3 class="detail">Mother's Name: Shanti Lata Das</h3>
      <h3 class="detail">E-Mail: dnirmalkumar278@gmail.com</h3>
      <h3 class="detail">Mobile No: 9178673912</h3>
      <h3 class="detail">Dist: Sundargarh</h3>
      <h3 class="detail">PIN: 769002</h3>
      <h3 class="detail">State: Odisha</h3>
      <h4>
        <u>A LITTLEBIT ABOUT ME:</u>
      </h4>
      <p>
        I am a very observant boy. I see the world like a brotherhood
        relationship prespective. My strength is my parentes and my friends. My
        weakness is one who can asume my next move. Love to watch Anime. When i
        get upset I lisin to the Music. For me Music is the best medicine to
        calm the mind and give a sweet touch to the mood.
      </p>

      <div class="container mt-5">
        <h4 id="col">Academic Qualification</h4>
        <table class="table table-bordered table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Sl.No.</th>
              <th>Course</th>
              <th>University/Board</th>
              <th>Institution Name</th>
              <th>Year of Passing</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>10</td>
              <td>BSE</td>
              <td>Madhu Sudhan Sikshya Nivas</td>
              <td>2014</td>
              <td>76.66%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>+2</td>
              <td>CHSE</td>
              <td>Ispat Vidya Mandir</td>
              <td>2016</td>
              <td>54.66%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>+3</td>
              <td>Sambalpur University</td>
              <td>Ispat Autonomous College</td>
              <td>2019</td>
              <td>72.10%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>MCA</td>
              <td>North Odisha University</td>
              <td>MPC Autonomous College</td>
              <td>2023</td>
              <td>72.10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>
        <u>My Hobies:</u>
      </h4>
      <ol>
        <li>Singing</li>
        <li>Star Gazing.</li>
        <li>Watching Anime</li>
        <li>Listin Music</li>
        <li>Enjoy time in the Nature</li>
      </ol>
    </section>
  </Container>
);

export default About;
