import React from 'react'
// If you want to reuse the same CSS or images, import them here just like in Acc2024.
// import '../css/Acc2024.css'
// import FileStructureImage from '../media/Overarching_Design.png'

function Ultrasonic() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Ultrasonic Sensor Design</h1>

      {/* 
        ==================================
        Introduction
        (Copied from Acc2024.jsx)
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-10 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p>
              During my research internship, I worked with a team of 5 to
              developed a working self driving robotic car using model predictive control. This page documents our entry into the 2024 American Control
              Conference (ACC) self-driving car competition, focusing mainly on the design choices I made for each part of the whole autonomous system.
            </p>
            <p>
              Our approach placed emphasis on <strong>Model Predictive Control (MPC)</strong>, a
              more advanced technique over the widely used PID &amp; Stanley controllers. By
              predicting future states and designing custom control actions, MPC provided a strategic
              edge for dealing with vehicle dynamics and constraints.
            </p>
            <p>
              Out of 40 competing universities, only the top 10 advanced to Toronto for the in-person
              final, and our team, which was the only team of all undergrads, was proud to be among them.
              The following sections detail the control system design and methods that enabled us
              to achieve robust and efficient autonomous driving.
            </p>
          </div>
          <div>
            {/* 
              If you want the embedded video, keep this <iframe>.
              Otherwise, you can remove the entire <div> below.
            */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BQPkFdHZwe4?si=RPXmRJ31rnOoXLXZ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ==================================
        Overarching Design
        (Copied from Acc2024.jsx)
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Overarching Design
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p>
              Our self-driving system is built around four main modules:
              <strong> Model Predictive Control (MPC)</strong>, <strong>Path Planning</strong>,
              <strong> Localization</strong>, and <strong>Perception</strong>. Each module can
              operate independently, giving us modularity and flexibility when deploying or updating
              features.
            </p>
            <p>
              The <strong>Main Loop</strong> continually receives GPS data to update the vehicle's
              position. If there is no GPS data, a Extended Kalman Filter will predict GPS coordinates until new GPS data is updated.
              Once a new GPS coordinate is obtained, it goes to the <strong>Path Planning</strong>
              module, which generates waypoints for the vehicle to follow. These waypoints detail
              positions on the track as well as reference speeds and angles for each segment.
            </p>
            <p>
              The <strong>MPC</strong> module uses these waypoints, along with sensor information
              from the <strong>Perception</strong> module (e.g., stop sign or traffic light), to
              optimize steering and throttle commands in real time. Finally, all sensor data
              (including position, heading, IMU readings, and detection events) is logged for
              post-run analysis and improvements.
            </p>
            <p>
              This design ensures the vehicle can adapt to dynamic conditions and maintain a smooth,
              controlled drive around the track.
            </p>
          </div>
          <div>
            {/* If you want the overarching design image to display, import it at the top 
                (e.g., import FileStructureImage from '../media/Overarching_Design.png') 
                and use it here:
            
            <img
              src={FileStructureImage}
              alt="Overarching Design Diagram"
              className="rounded-lg"
            />

            Otherwise, remove or replace this <div>.
            */}
            <div className="rounded-lg bg-base-300 flex items-center justify-center h-64">
              <p className="text-center">Overarching Design Diagram Placeholder</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Ultrasonic
