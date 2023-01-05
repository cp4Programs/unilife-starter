import React from 'react'
import '../styles/studentlife.css'

function StudentLifeSection({ studentLifeData }) {

  return (
    <div className="student-life-card">
      <div className="student-life-container">
        <div className="student-lifestyle">
          <h2>Being a student in {studentLifeData[0]?.name}</h2>
          <br></br>
          <br></br>
          <p >{studentLifeData[0]?.student_life}</p>
          <br></br>
          <br></br>
          <p>{studentLifeData[0]?.universities}</p>
        </div>
        <div className="student-life-img">
          <img src={studentLifeData[0]?.image_url} />
        </div>

      </div>
    </div>
  )
}

export default StudentLifeSection