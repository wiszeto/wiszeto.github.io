// Acc2024.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

import Section from '../components/Section';
import '../css/Acc2024.css';
import FileStructureImage from '../images/Overarching_Design.png';
import SDCSNodeSequenceImage from '../images/SDCS_node_sequence.png';
import HorizonWaypointsImage from '../images/horizon_waypoints.png';
import PathPlanningVideo from '../images/Pathplanning.mp4';

import SmallBikeModelImage from '../images/small_bike_model.png';
import BikeModelImage from '../images/bike_model.png';
import CurveSlowDownVideo from '../images/curve_slow_down.mp4';
import CurveOvershootVideo from '../images/curve_overshoot.mp4';
import FastestMLTunedVideo from '../images/Fastest_ml_tuned.mp4';

const Acc2024 = () => {
  return (
    <div className="acc2024-page">
      <h1>ACC 2024 - Model Predictive Control on a Self-Driving Car</h1>

      <Section title="Introduction">
        <div className="introduction-content">
          <div className="text-content">
            <p>
              During my research internship, I had the opportunity to explore the complex world of autonomous vehicles and control systems. My team and I participated in the 2024 American Control Conference (ACC) self-driving car competition, which featured two rounds: a simulation round and an in-person round.
            </p>
            <p>
              Teams that passed the simulation round were invited to Toronto to compete in person. As the only Electrical Engineer on the team, I developed the majority of the control system while also integrating localization and path planning, opting to implement Model Predictive Control (MPC). Most teams relied on simpler PID controllers, which are easier to implement but often struggle with handling the complex dynamics and constraints of autonomous vehicles. We chose MPC to anticipate future states and optimize control actions accordingly. This approach set us apart by demonstrating advanced control strategies that significantly enhanced our vehicle's performance.
            </p>
            <p>
              Out of 40 competing universities, only the top 10 were invited to the final competition in Toronto, and we were the only all-undergraduate team to qualify. This page breaks down how I designed the control system and the design choices I made to optimize performance and ensure robust autonomous operation.
            </p>
          </div>
          <div className="image-content">
            <div className="video-container">
              <iframe
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
      </Section>

      <Section title="Overarching Design">
        <div className="introduction-content">
          <div className="text-content">
            <p>
              Our autonomous vehicle system leverages advanced components like Model Predictive Control (MPC), Path Planning, and Localization to deliver a reliable and robust self-driving experience. Designed with modularity in mind, each core function—MPC, Path Planning, Perception, and Localization—operates as an independent module, allowing for flexibility, scalability, and easier system management.
            </p>
            <p>
              The process begins within the Main Loop, where the system continuously polls the GPS for position updates. Once a new GPS update is received, it is passed to the Path Planning module. Using this updated position, the Path Planning module identifies the closest waypoints on the track and calculates a reference trajectory. This trajectory includes essential information for each waypoint, guiding the vehicle along its intended path.
            </p>
            <p>
              The Model Predictive Control (MPC) module then takes this reference trajectory and combines it with data from the Perception module, which processes inputs from traffic sign and light detection. The MPC computes the optimal control commands, generating a precise throttle and steering value to guide the vehicle toward the next waypoint safely and efficiently.
            </p>
            <p>
              Once the control commands are generated, they are transmitted to the vehicle to update its throttle and steering in real time. In parallel, the system logs comprehensive data from various sensors, including position (x, y coordinates, heading angle), steering angle, timestamps, stop sign and traffic light detections, and IMU readings. This data provides valuable insights for future analysis and system refinement.
            </p>
            <p>
              After logging, the system returns to the main loop, repeating this process to dynamically adjust the vehicle’s path based on real-time GPS updates, environmental factors, and optimized control calculations.
            </p>
            <p>
              This modular and cyclic design enables our autonomous vehicle to adapt responsively to its environment while maintaining a smooth, controlled driving experience.
            </p>
          </div>
          <div className="image-content">
            <img
              src={FileStructureImage}
              alt="Overarching Design Diagram"
              className="file-structure-image"
            />
          </div>
        </div>
      </Section>

{/* Updated Path Planning and Pure Pursuit Section */}
<Section title="Path Planning and Pure Pursuit">
        <p>
          Path planning is a critical component of our autonomous vehicle system, responsible for generating a feasible and safe trajectory for the vehicle to follow. We utilized a roadmap-based approach provided by the SDCS Road Map, which includes predefined nodes representing key positions on the track.
        </p>

        <h3>Node Sequence and Waypoint Generation</h3>
        <div className="subsection-content">
          <div className="text-content">
            <p>
              Depending on the desired path, we defined a node sequence that represents the order in which the vehicle should pass through these nodes. For the competition, completing one lap around the track required a node sequence of <code>[10, 2, 4, 14, 20, 22]</code>. The path planning module generates an array of waypoints based on this node sequence.
            </p>
            <SyntaxHighlighter language="python" style={okaidia} customStyle={{ backgroundColor: '#000000' }}>
              {`# Initialize the path planner with the node sequence
roadmap = SDCSRoadMap(leftHandTraffic=False)
node_sequence = [10, 2, 4, 14, 20, 22, 10]
planner = PathPlanning(roadmap=roadmap, x=0, y=0, horizon=50, node_sequence=node_sequence)`}
            </SyntaxHighlighter>
            <p>
              Each waypoint in the generated path includes essential information:
            </p>
            <ul>
              <li>
                <strong>X Position:</strong> The x-coordinate of the waypoint.
              </li>
              <li>
                <strong>Y Position:</strong> The y-coordinate of the waypoint.
              </li>
              <li>
                <strong>Reference Heading Angle (ψ<sub>ref</sub>):</strong> The ideal orientation at that point.
              </li>
              <li>
                <strong>Curvature:</strong> The curvature of the path at that waypoint.
              </li>
              <li>
                <strong>Distance to Next Curvature Change:</strong> How far until the next significant change in curvature.
              </li>
              <li>
                <strong>Left and Right Lane Boundaries:</strong> The x and y positions of the lane edges, used for lane-keeping.
              </li>
            </ul>
          </div>
          <div className="image-content">
            <img
              src={SDCSNodeSequenceImage}
              alt="Node Sequence Diagram"
              className="subsection-image"
            />
          </div>
        </div>

        <h3>Preprocessing and Data Structure</h3>
        <div className="subsection-content">
          <div className="text-content">
            <p>
              This information is precalculated to optimize performance. When the MPC requires the next steps, it provides the path planning module with the current estimated position (<code>x</code>, <code>y</code>). The path planner then finds the nearest waypoint and returns a sequence of waypoints equal to the horizon length required by the MPC.
            </p>
            <p>
              Here's how the path planner retrieves the reference trajectory:
            </p>
            <SyntaxHighlighter language="python" style={okaidia} customStyle={{ backgroundColor: '#000000' }}>
              {`# Get the reference trajectory for the MPC
x_estimated, y_estimated = 1.0, -1.0  # Example current position
ref_trajectory = planner.get_reference_trajectory(x_estimated, y_estimated, skip=3)`}
            </SyntaxHighlighter>
            <p>
              The <code>get_reference_trajectory</code> method finds the closest waypoint to the current position and returns a sequence of waypoints, which includes all the necessary information for the MPC.
            </p>
          </div>
          <div className="image-content">
            <img
              src={HorizonWaypointsImage}
              alt="Horizon Waypoints Diagram"
              className="subsection-image"
            />
          </div>
        </div>

        <h3>Integration with MPC</h3>
        <div className="subsection-content">
          <div className="text-content">
            <p>
              By providing the MPC with a sequence of waypoints that include all necessary attributes, the controller can make informed decisions about steering and speed. The curvature and distance to the next curvature change are particularly important for adjusting speed and ensuring smooth navigation through turns, as explained in the objective function section.
            </p>
            <p>
              The path planning module's ability to quickly retrieve the relevant waypoints based on the current position is crucial for real-time operation, allowing the MPC to update its predictions and control inputs at each time step.
            </p>
          </div>
          <div className="image-content">
            <video controls className="subsection-video">
              <source src={PathPlanningVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <h3>Pure Pursuit Algorithm</h3>
        <p>
          Initially, we implemented the Pure Pursuit algorithm as a simple control strategy to validate the path planning process. In Pure Pursuit, the vehicle computes the required steering angle to reach a lookahead point on the path. While less sophisticated than MPC, it served as a useful baseline and helped in testing the path planning module before integrating the full MPC framework.
        </p>
      </Section>


      {/* Updated Model Predictive Control (MPC) Section */}
      <Section title="Model Predictive Control (MPC)">
        <p>
          Model Predictive Control (MPC) is an advanced control strategy that uses a dynamic model of the system to predict future behavior and optimize control inputs over a finite time horizon. In our project, we implemented MPC to handle the complex dynamics of the self-driving car and to anticipate future states for optimal control actions.
        </p>

        <h3>Bicycle Model</h3>
        <div className="subsection-content">
          <div className="text-content">
            <p>
              We modeled the vehicle dynamics using the bicycle model, which simplifies the car to a two-wheel system to capture essential lateral and longitudinal dynamics. This model considers key state variables such as position (<code>x</code>, <code>y</code>), orientation (<code>ψ</code>), and control inputs like velocity (<code>v</code>) and steering angle (<code>δ</code>).
            </p>
            <p>
              Here's a snippet of how we set up the model variables in our <code>MPC.py</code> script:
            </p>
            <SyntaxHighlighter language="python" style={okaidia} customStyle={{ backgroundColor: '#000000' }}>
              {`# Define state and input variables
x = model.set_variable(var_type='_x', var_name='x')
y = model.set_variable(var_type='_x', var_name='y')
psi = model.set_variable(var_type='_x', var_name='psi')
v = model.set_variable(var_type='_u', var_name='v')
delta = model.set_variable(var_type='_u', var_name='delta')

# Vehicle parameters
L = 0.256  # Wheelbase length

# Define the system dynamics
model.set_rhs('psi', (v * delta) / L)
model.set_rhs('x', v * cos(psi))
model.set_rhs('y', v * sin(psi))

model.setup()`}
            </SyntaxHighlighter>
          </div>
          <div className="image-content">
            <div className="image-grid">
              <img src={SmallBikeModelImage} alt="Simplified Bicycle Model" className="subsection-image" />
              <img src={BikeModelImage} alt="Bicycle Model Diagram" className="subsection-image" />
            </div>
          </div>
        </div>

        <h3>Objective Function</h3>
        <p>
          The objective function in our MPC formulation was designed to minimize tracking errors while considering control effort, vehicle dynamics, and safety constraints. It included several components:
        </p>
        <ul>
          <li>
            <strong>Tracking Error:</strong> Penalizes deviations from the reference trajectory in position and orientation.
          </li>
          <li>
            <strong>Control Effort:</strong> Penalizes excessive use of control inputs to promote smooth driving.
          </li>
          <li>
            <strong>Curvature Penalty:</strong> Adjusts the vehicle's speed based on the path's curvature to enhance safety during turns.
          </li>
          <li>
            <strong>Lane Keeping:</strong> Encourages the vehicle to stay centered within the lane by penalizing lateral deviations.
          </li>
          <li>
            <strong>Damping Factor:</strong> Reduces rapid changes in steering input for stability and comfort.
          </li>
        </ul>
        <p>
          The objective function was implemented as follows:
        </p>
        <SyntaxHighlighter language="python" style={okaidia} customStyle={{ backgroundColor: '#000000' }}>
          {`# Calculate difference in orientation
psi_diff = fmod((psi - psi_ref) + np.pi, 2 * np.pi) - np.pi

# Curvature weight adjustment
curvature_weight = curvature_weight_base + curvature_factor * curvature

# Damping term for steering input changes
damping_term = damping_factor * ((1 - average_last_deltas) * delta) ** 2

# Lane keeping penalty
lane_penalty = lane_penalty_factor * ((x - lane_center_x) ** 2 + (y - lane_center_y) ** 2)

# Define the stage cost
lterm = (
    Q_psi_base * psi_diff ** 2
    + Q_x_base * (x - x_ref) ** 2
    + Q_y_base * (y - y_ref) ** 2
    + damping_term
    + distance_term
    + curvature_term
    + lane_penalty
)

# Define the terminal cost
mterm = (
    Q_x_base * (x - x_ref) ** 2
    + Q_y_base * (y - y_ref) ** 2
)

# Set the objective function
mpc.set_objective(mterm=mterm, lterm=lterm)
mpc.set_rterm(v=R_v, delta=R_delta_base)`}
        </SyntaxHighlighter>
        <p>
          Here's a detailed explanation of each term in the objective function:
        </p>

        {/* ... Existing explanations ... */}

        <div className="video-section">
          <div className="video-content">
            <video controls className="subsection-video">
              <source src={CurveSlowDownVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">Figure: Vehicle slowing down on curves due to curvature penalty</p>
          </div>
          <div className="video-content">
            <video controls className="subsection-video">
              <source src={CurveOvershootVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">Figure: Overshooting the curve without curvature penalty</p>
          </div>
        </div>

        <h3>Constraints</h3>
        <p>
          In addition to the objective function, we defined a set of constraints to ensure the vehicle operates within safe and feasible limits. These constraints include:
        </p>
        <ul>
          <li>
            <strong>State Constraints:</strong> Bounds on position (<code>x</code>, <code>y</code>), and orientation (<code>ψ</code>) to keep the vehicle within the operational area.
          </li>
          <li>
            <strong>Control Constraints:</strong> Limits on velocity (<code>v</code>) and steering angle (<code>δ</code>) to prevent unsafe speeds and steering commands.
          </li>
        </ul>
        <p>
          The constraints were implemented as follows:
        </p>
        <SyntaxHighlighter language="python" style={okaidia} customStyle={{ backgroundColor: '#000000' }}>
          {`mpc.bounds['lower', '_x', 'x'] = -5
mpc.bounds['upper', '_x', 'x'] = 5
mpc.bounds['lower', '_x', 'y'] = -5
mpc.bounds['upper', '_x', 'y'] = 7
mpc.bounds['lower', '_x', 'psi'] = -3 * np.pi
mpc.bounds['upper', '_x', 'psi'] = 3 * np.pi
mpc.bounds['lower', '_u', 'v'] = min_velocity
mpc.bounds['upper', '_u', 'v'] = max_velocity
mpc.bounds['lower', '_u', 'delta'] = -max_steering_angle
mpc.bounds['upper', '_u', 'delta'] = max_steering_angle`}
        </SyntaxHighlighter>

        <h3>Time-Varying Parameters</h3>
        <p>
          The MPC controller utilizes time-varying parameters (TVPs) to incorporate dynamic elements of the reference trajectory and the environment. These parameters include reference positions, orientations, curvature, and lane boundaries for each step in the prediction horizon. By updating TVPs at each time step, the controller adapts to changes in the path and adjusts control inputs accordingly.
        </p>
        <p>
          The time-varying parameters were defined using the following function:
        </p>
        <SyntaxHighlighter language="python" style={okaidia} customStyle={{ backgroundColor: '#000000' }}>
          {`def tvp_fun(t_now):
    for k in range(horizon):
        tvp_template['_tvp', k, 'x_ref'] = reference_traj[k][0]
        tvp_template['_tvp', k, 'y_ref'] = reference_traj[k][1]
        tvp_template['_tvp', k, 'psi_ref'] = reference_traj[k][2]
        tvp_template['_tvp', k, 'curvature'] = reference_traj[k][3]
        tvp_template['_tvp', k, 'distance'] = reference_traj[k][4]
        # ... other parameters ...
    return tvp_template`}
        </SyntaxHighlighter>

        <h3>Constraints and Time-Varying Parameters</h3>
        <p>
          By integrating constraints and time-varying parameters, the MPC ensures that the vehicle not only follows the reference trajectory but also respects physical limitations and adapts to dynamic changes in the environment. This results in a more robust and reliable control strategy, capable of handling various driving scenarios.
        </p>
      </Section>

      {/* ... existing Hyperparameter Tuning section ... */}

     {/* Updated Hyperparameter Tuning Section */}
     <Section title="Hyperparameter Tuning">
        <p>
          To enhance the performance of our Model Predictive Control (MPC) system, we embarked on an extensive hyperparameter tuning process. Recognizing that manually adjusting parameters is time-consuming and prone to human bias, we leveraged computational optimization to automate this process. Computers can evaluate a vast number of parameter combinations much more efficiently than a human, allowing us to explore the hyperparameter space thoroughly.
        </p>

        <h3>Optimization Strategy</h3>
        <p>
          Our strategy involved using Optuna, an automatic hyperparameter optimization framework, to search for the optimal set of parameters that would minimize the position error and improve the vehicle's overall control performance. By automating the tuning process, we aimed to overcome the limitations of manual tuning and achieve better results in a shorter time frame.
        </p>
        <p>
          One challenge we faced during optimization was the presence of local minima in the hyperparameter space. To address this, we initially reduced the number of parameters we were tuning simultaneously. By focusing on a smaller subset of parameters, we could more effectively navigate the hyperparameter space and identify the most influential parameters. Once we noticed improvements with these parameters, we proceeded to tune additional parameters incrementally. This step-by-step approach allowed us to avoid getting trapped in local minima and ensured a more global search for the optimal solution.
        </p>

        <h3>Configuration File</h3>
        <p>
          The parameters used in the MPC and the optimization process were defined in a configuration file, <code>config.json</code>. Below is the content of this file, which includes various parameters for the main loop, MPC initialization, objective function weights, and more:
        </p>
        <SyntaxHighlighter language="json" style={okaidia} customStyle={{ backgroundColor: '#000000' }}>
{`{
    "main_params": {
        "reference_traj_len": 21,
        "QCar_Frequency": 500,
        "ref_traj_skip": 3,
        "new_lookahead": 20,
    },
    "mpc_init": {
        "max_velocity": 0.15,
        "min_velocity": 0.09,
        "max_steer_pi/x": 6,
        "time_step": 0.052,
        "true_horizon": 54
    },
    "objective_function_params": {
        "delta_q_len": 2,
        "Q_x_base": 0.45,
        "Q_y_base": 0.45,
        "Q_psi_base": 0.5,
        "R_v": 1.0,
        "R_delta_base": 0.005,
        "Q_v_ref_base": 0,
        "damping_factor": 4.9,
        "curvature_weight_base": 1,
        "curvature_factor": 10.36,
        "distance_penalty_factor": 0.09,
        "acceleration_penalty_factor": 0.0,
        "lane_penalty_factor": 0.01
    },
    "trial_folder": "study_results\\study_study_20240602192651\\trial_0"
}`}
        </SyntaxHighlighter>
        <p>
          This configuration file served as the foundation for our optimization process. It allowed us to systematically adjust parameters like <code>Q_x_base</code>, <code>Q_y_base</code>, <code>Q_psi_base</code>, <code>time_step</code>, <code>damping_factor</code>, and <code>curvature_factor</code>, which are critical for the MPC's performance.
        </p>

        <h3>Results</h3>
        <p>
          By automating the hyperparameter tuning process and strategically reducing the number of parameters tuned at each stage, we achieved a significant improvement in the MPC's performance. The optimized parameters enhanced the controller's ability to anticipate and react to the vehicle's dynamics and the path's curvature. This resulted in a noticeable decrease in tracking errors and smoother vehicle control.
        </p>
        <p>
          The iterative approach of focusing on a few parameters at a time allowed us to understand the impact of each parameter better and avoid the pitfalls of local minima. Ultimately, this led to a more robust and efficient autonomous driving system.
        </p>
        <div className="video-content">
          <video controls className="subsection-video">
            <source src={FastestMLTunedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-caption">Figure: Performance after hyperparameter tuning</p>
        </div>
      </Section>

      {/* <Section title="Localization">
        <p>
          Accurate localization is paramount for autonomous driving. We implemented a sensor fusion approach using an Extended Kalman Filter (EKF) to combine data from the GPS and the Inertial Measurement Unit (IMU). The EKF filtered out noise and provided real-time estimates of the vehicle's position and orientation.
        </p>
        <h3>Kalman Filter</h3>
        <p>
          The Kalman Filter is an optimal estimator that combines predictions from a dynamic model with noisy measurements to produce a statistically optimal estimate of the system's state. In our case, the EKF used the vehicle's motion model and sensor inputs to continuously update the estimated position and heading, which was critical for the MPC to make accurate predictions.
        </p>
        <h3>2D SLAM</h3>
        <p>
          We also integrated 2D Simultaneous Localization and Mapping (SLAM) to build a map of the environment while keeping track of the vehicle's position within it. SLAM was particularly useful in scenarios where GPS data was unreliable or when navigating dynamic environments with obstacles. It allowed the vehicle to update its understanding of the surroundings in real-time, enhancing the robustness of the localization process.
        </p>
      </Section> */}

      <Section title="Simulation to Testing">
        <p>
          Moving from simulation to real-world testing brought many unexpected challenges. While simulations gave us control, real-world testing added unpredictability, requiring adjustments to make our system work effectively.
        </p>
        
        <h3>Step 1: Basic I/O Testing and Hardware Integration</h3>
        <p>
          We started by testing each hardware part individually to ensure it responded correctly. This included motors, lidar, lights, and brakes to make sure each component worked on its own. Fixing these basic issues first helped us avoid bigger problems later when integrating everything.
        </p>
        
        <h3>Step 2: Straight-Line Testing and Sensor Data Verification</h3>
        <p>
          Next, we tested if the vehicle could drive straight while collecting data from sensors like GPS and lidar. We compared this real-world data to simulation results to check accuracy. This step showed that certain data, like GPS, was less reliable outdoors, so we added filters to smooth out noisy readings.
        </p>
        
        <h3>Step 3: Full Autonomous System Testing and Initial Challenges</h3>
        <p>
          Running the full autonomous code revealed big issues, mainly with localization. The car often thought it was in the wrong place on the map, causing it to misbehave. This showed that we needed to improve our localization approach for real-world use.
        </p>
        
        <h3>Iterative Solutions to Improve Localization</h3>
        <p>
          To fix localization, we tried adding extra filters and processing steps to smooth out errors. We tested different filters, such as Kalman and particle filters, to make the car’s position more stable. This process was slow but gradually made localization more reliable.
        </p>
        
        <h3>Final Adjustments and Achieving Stability</h3>
        <p>
          After many tweaks, we achieved stable localization that let the car stay on track accurately. We tuned each filter and combined data from multiple sensors like GPS, IMU, and lidar for better accuracy. These final adjustments were essential to prepare the car for safe real-world driving.
        </p>
      </Section>

      <Section title="Competition Day">
        <p>
          Accurate localization is paramount for autonomous driving. We implemented a sensor fusion approach using an Extended Kalman Filter (EKF) to combine data from the GPS and the Inertial Measurement Unit (IMU). The EKF filtered out noise and provided real-time estimates of the vehicle's position and orientation.
        </p>
        <h3>Kalman Filter</h3>
        <p>
          The Kalman Filter is an optimal estimator that combines predictions from a dynamic model with noisy measurements to produce a statistically optimal estimate of the system's state. In our case, the EKF used the vehicle's motion model and sensor inputs to continuously update the estimated position and heading, which was critical for the MPC to make accurate predictions.
        </p>
        <h3>2D SLAM</h3>
        <p>
          We also integrated 2D Simultaneous Localization and Mapping (SLAM) to build a map of the environment while keeping track of the vehicle's position within it. SLAM was particularly useful in scenarios where GPS data was unreliable or when navigating dynamic environments with obstacles. It allowed the vehicle to update its understanding of the surroundings in real-time, enhancing the robustness of the localization process.
        </p>
      </Section>

      <Section title="Reflection">
        <p>
          This project was a profound learning experience. Implementing MPC and integrating various components like path planning, localization, and control under dynamic conditions challenged me to apply and expand my knowledge in control theory and robotics. Securing a top rank in the ACC competition not only validated our hard work but also showcased the practical impact of optimized autonomous driving techniques.
        </p>
      </Section>
    </div>
  );
};

export default Acc2024;
