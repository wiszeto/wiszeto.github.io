// Acc2024.jsx
import React from 'react'

// Media & CSS
import '../css/Acc2024.css'
import FileStructureImage from '../media/Overarching_Design.png'
import SDCSNodeSequenceImage from '../media/SDCS_node_sequence.png'
import HorizonWaypointsImage from '../media/horizon_waypoints.png'
import PathPlanningVideo from '../media/Pathplanning.mp4'
import SmallBikeModelImage from '../media/small_bike_model.png'
import BikeModelImage from '../media/bike_model.png'
import CurveSlowDownVideo from '../media/curve_slow_down.mp4'
import CurveOvershootVideo from '../media/curve_overshoot.mp4'
import FastestMLTunedVideo from '../media/Fastest_ml_tuned.mp4'

const Acc2024 = () => {
  return (
    <div className="acc2024-page container mx-auto px-4 py-8 bg-transparent text-base-content">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        ACC 2024 - Model Predictive Control on a Self-Driving Car
      </h1>

      {/*
        ==================================
        Introduction
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-10 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Introduction
        </h2>
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
              <strong>Model Predictive Control (MPC)</strong>, <strong>Path Planning</strong>,
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
            <img
              src={FileStructureImage}
              alt="Overarching Design Diagram"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/*
        ==================================
        Path Planning and Pure Pursuit
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Path Planning and Pure Pursuit
        </h2>
        <p>
          Path planning determines the vehicle's route around the track. In this project, we used
          a roadmap-based approach, with predefined nodes marking key positions. These nodes are
          strung together to form a continuous sequence of waypoints that the vehicle should follow.
        </p>

        {/* Node Sequence and Waypoint Generation */}
        <h3 className="text-xl font-semibold mt-4 mb-2 text-accent">
          Node Sequence and Waypoint Generation
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p>
              We specify a <em>node sequence</em> that defines the order in which the vehicle passes
              through the track. For example, this is how a 1 lap sequence would look like:
              <code>[10, 2, 4, 14, 20, 22, 10]</code>. The path planning module then converts these
              nodes into an array of <strong>waypoints</strong>, each including:
            </p>
            <ul className="list-disc ml-4">
              <li><strong>X Position &amp; Y Position:</strong> Coordinates in the simulation or real-world map.</li>
              <li><strong>Reference Heading (ψ<sub>ref</sub>):</strong> Desired vehicle orientation.</li>
              <li><strong>Curvature:</strong> Indicates how sharp the upcoming turn is.</li>
              <li><strong>Distance to Next Curvature Change:</strong> Helps anticipate speed adjustments.</li>
              <li><strong>Lane Boundaries:</strong> For ensuring the vehicle stays within a safe corridor.</li>
            </ul>

          </div>
          <div>
            <img
              src={SDCSNodeSequenceImage}
              alt="Node Sequence Diagram"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Preprocessing and Data Structure */}
        <h3 className="text-xl font-semibold mt-8 mb-2 text-accent">
          Preprocessing and Data Structure
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p>
              Each waypoint is <em>precomputed</em> to reduce computation time during real-time
              control. When the vehicle's current position (<code>x</code>, <code>y</code>) is
              estimated by Localization, the path planner quickly identifies the nearest waypoint
              and returns a sequence of future waypoints matching the MPC's horizon length.
            </p>
            <p>
              For instance:
            </p>
            <div className="mockup-code my-3">
              <pre>
                <code>
{`# Get the reference trajectory for the MPC
x_estimated, y_estimated = 1.0, -1.0  # Example current position
ref_trajectory = planner.get_reference_trajectory(
  x_estimated, 
  y_estimated, 
  skip=3
)`}
                </code>
              </pre>
            </div>
            <p>
              This function pinpoints the closest waypoint based on the given position and returns enough points to cover the
              MPC's prediction window. Note: the length of the window is set in a config discussed later.
            </p>
          </div>
          <div>
            <img
              src={HorizonWaypointsImage}
              alt="Horizon Waypoints Diagram"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Integration with MPC */}
        <h3 className="text-xl font-semibold mt-8 mb-2 text-accent">
          Integration with MPC
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p>
              By providing the MPC with these horizon-based waypoints, the controller can decide
              optimal speed and steering commands. Key metrics like <strong>curvature</strong> and
              <strong> distance to next curve</strong> help predict where to slow down or accelerate,
              resulting in smoother, safer driving(discussed later).
            </p>
            <p>
              Notice where the yellow and purple lines meet will be the car's current position. The purple is what MPC predicts is the best path.
            </p>
          </div>
          <div>
            <video controls className="rounded-lg">
              <source src={PathPlanningVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 
          <h3 className="text-xl font-semibold mt-8 mb-2 text-secondary">
            Pure Pursuit Algorithm
          </h3>
          ...
        */}
      </div>

      {/*
        ==================================
        Model Predictive Control (MPC)
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Model Predictive Control (MPC)
        </h2>
        <p>
          <strong>Model Predictive Control</strong> predicts future states based on a given model and reference.
          It then calculates a optimal control input to best match the reference trajectory over a horizon.
          For autonomous
          vehicles, this means more precise handling of curves, speed limits, and sudden changes in
          the environment.
        </p>

        {/* Bicycle Model */}
        <h3 className="text-xl font-semibold mt-4 mb-2 text-accent">
          Bicycle Model
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p>
              We use the <em>single-track bicycle model</em> to capture the core dynamics of the car,
              such as lateral (side-to-side) and longitudinal (forward) movements. Key variables
              include:
            </p>
            <ul className="list-disc ml-4">
              <li><code>x, y</code> for the vehicle’s 2D position</li>
              <li><code>ψ</code> for heading (orientation)</li>
              <li><code>v</code> for velocity</li>
              <li><code>δ</code> for steering angle</li>
            </ul>
            <p>
              Below is a simplified code fragment for defining these variables and how they are used:
            </p>
            <div className="mockup-code my-3">
              <pre>
                <code>
{`# Define state and input variables
x = model.set_variable(var_type='_x', var_name='x')
y = model.set_variable(var_type='_x', var_name='y')
psi = model.set_variable(var_type='_x', var_name='psi')
v = model.set_variable(var_type='_u', var_name='v')
delta = model.set_variable(var_type='_u', var_name='delta')

# Vehicle parameters
L = 0.256  # Wheelbase length

# Define system dynamics
model.set_rhs('psi', (v * delta) / L)
model.set_rhs('x', v * cos(psi))
model.set_rhs('y', v * sin(psi))

model.setup()`}
                </code>
              </pre>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={SmallBikeModelImage}
                alt="Simplified Bicycle Model"
                className="rounded-lg"
              />
              <img
                src={BikeModelImage}
                alt="Bicycle Model Diagram"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

{/* Objective Function */}
<h3 className="text-xl font-semibold mt-8 mb-2 text-accent">
  Objective Function
</h3>
<p>
  Our MPC formulation balances several factors to minimize tracking error and ensure
  comfortable driving. Key terms:
</p>
<ul className="list-disc ml-4">
  <li><strong>Tracking Error:</strong> Stay close to the reference trajectory.</li>
  <li><strong>Control Effort:</strong> Avoid rapid, large steering or speed changes.</li>
  <li><strong>Curvature Penalty:</strong> Slow down on sharp curves for safety.</li>
  <li><strong>Lane Keeping:</strong> Remain centered within lane boundaries.</li>
  <li><strong>Damping Factor:</strong> Penalize large changes in steering input based on recent steering history.</li>
  <li><strong>Distance Term:</strong> Adjust speed or behavior based on distance to upcoming obstacles or waypoints.</li>
</ul>
<p>Below is a snippet showing these updated costs in action:</p>
<div className="mockup-code my-3">
  <pre>
    <code>
{`# Calculate orientation error
psi_diff = fmod((psi - psi_ref) + np.pi, 2*np.pi) - np.pi

# Curvature-based weight
curvature_weight = curvature_weight_base + curvature_factor * curvature

# New damping term (penalize sudden steering changes)
if self.previous_deltas:
    average_last_deltas = sum(self.previous_deltas) / len(self.previous_deltas)
else:
    average_last_deltas = 0  # no damping if there's no history

damping_term = damping_factor * (self.model.u['delta'] - average_last_deltas)**2

# New distance term
distance_term = distance_penalty_factor * (
    1 + curvature_factor * np.exp(-self.model.tvp['distance'])
)

# Penalize lateral distance from lane center
lane_penalty = lane_penalty_factor * (
    (x - lane_center_x)**2 + (y - lane_center_y)**2
)

# Stage cost
lterm = (
    Q_psi_base * psi_diff**2 +
    Q_x_base * (x - x_ref)**2 +
    Q_y_base * (y - y_ref)**2 +
    damping_term +
    curvature_term +
    lane_penalty +
    distance_term
)

# Terminal cost
mterm = (
    Q_x_base * (x - x_ref)**2 +
    Q_y_base * (y - y_ref)**2
)

mpc.set_objective(mterm=mterm, lterm=lterm)
mpc.set_rterm(v=R_v, delta=R_delta_base)`}
    </code>
  </pre>
</div>
<p>
  By tuning these parameters (e.g., <code>damping_factor</code>, <code>distance_penalty_factor</code>),
  we can achieve a balance between performance, safety, and comfort. Demonstration videos below show
  how specific penalties—like curvature—impact the vehicle's behavior on sharp turns.
</p>

        <div className="video-section">
          <div className="video-content">
            <video controls className="rounded-lg">
              <source src={CurveSlowDownVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">
              Vehicle slowing down on curves due to curvature penalty
            </p>
          </div>
          <div className="video-content">
            <video controls className="rounded-lg">
              <source src={CurveOvershootVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">
              Overshooting the curve without curvature penalty
            </p>
          </div>
        </div>

        {/* Constraints */}
        <h3 className="text-xl font-semibold mt-8 mb-2 text-accent">
          Constraints
        </h3>
        <p>
          Constraints keep the vehicle's states and inputs within safe limits. They include:
        </p>
        <ul className="list-disc ml-4">
          <li><strong>State Constraints:</strong> Ensure <code>x</code>, <code>y</code>, and <code>ψ</code> remain valid.</li>
          <li><strong>Control Constraints:</strong> Cap <code>v</code> and <code>δ</code> to realistic physical limits.</li>
        </ul>
        <div className="mockup-code my-3">
          <pre>
            <code>
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
            </code>
          </pre>
        </div>

        {/* Time-Varying Parameters */}
        <h3 className="text-xl font-semibold mt-8 mb-2 text-accent">
          Time-Varying Parameters
        </h3>
        <p>
          <strong>Time-varying parameters (TVPs)</strong> allow the controller to adapt each timestep.
          Updated at runtime, TVPs link real-time reference waypoints and environment conditions to
          the MPC’s cost function and constraints:
        </p>
        <div className="mockup-code my-3">
          <pre>
            <code>
{`def tvp_fun(t_now):
    for k in range(horizon):
        tvp_template['_tvp', k, 'x_ref'] = reference_traj[k][0]
        tvp_template['_tvp', k, 'y_ref'] = reference_traj[k][1]
        tvp_template['_tvp', k, 'psi_ref'] = reference_traj[k][2]
        tvp_template['_tvp', k, 'curvature'] = reference_traj[k][3]
        # ... other parameters ...
    return tvp_template`}
            </code>
          </pre>
        </div>
        <p>
          This ensures the MPC is always using the latest trajectory and environment insights.
        </p>
      </div>

      {/*
        ==================================
        Hyperparameter Tuning
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Hyperparameter Tuning
        </h2>
        <p>
          Fine-tuning our MPC’s many parameters can be tedious by hand. We used
          <strong>Optuna</strong>, an automated hyperparameter optimization framework, to streamline
          this process. This helped us avoid human bias and systematically explore different
          parameter combinations.
        </p>

        {/* Optimization Strategy */}
        <h3 className="text-xl font-semibold mt-4 mb-2 text-accent">
          Optimization Strategy
        </h3>
        <p>
          We tackled optimization in stages, starting with crucial parameters like
          <code>Q_x_base</code>, <code>Q_y_base</code>, and <code>Q_psi_base</code>, and then
          expanding to others. By limiting the search space and focusing on subsets of parameters,
          we avoided many local minima.
        </p>

        {/* Configuration File */}
        <h3 className="text-xl font-semibold mt-4 mb-2 text-accent">
          Configuration File
        </h3>
        <p>
          A <code>config.json</code> file consolidated our default settings. Below is an example of
          how these parameters were organized:
        </p>
        <div className="mockup-code my-3">
          <pre>
            <code>
{`{
  "main_params": {
    "reference_traj_len": 21,
    "QCar_Frequency": 500,
    "ref_traj_skip": 3,
    "new_lookahead": 20
  },
  "mpc_init": {
    "max_velocity": 0.15,
    "min_velocity": 0.09,
    "max_steer_pi/x": 6,
    "time_step": 0.052,
    "true_horizon": 54
  },
  "objective_function_params": {
    "Q_x_base": 0.45,
    "Q_y_base": 0.45,
    "Q_psi_base": 0.5,
    "R_v": 1.0,
    "R_delta_base": 0.005,
    "curvature_weight_base": 1,
    "curvature_factor": 10.36,
    "damping_factor": 4.9,
    "distance_penalty_factor": 0.09,
    "lane_penalty_factor": 0.01
  },
  "trial_folder": "study_results\\..."
}`}
            </code>
          </pre>
        </div>
        <p>
          This arrangement made it straightforward to load and tweak parameters during automated
          trials.
        </p>

        {/* Results */}
        <h3 className="text-xl font-semibold mt-4 mb-2 text-accent">
          Results
        </h3>
        <p>
          After several tuning iterations, we achieved smoother trajectory tracking, reduced
          overshoot, and better handling of curves. Below is a video demonstrating the improved
          performance post-tuning:
        </p>
        <div className="mt-4">
          <video controls className="rounded-lg">
            <source src={FastestMLTunedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm mt-2">
            Performance after hyperparameter tuning
          </p>
        </div>
      </div>

      {/*
        ==================================
        Competition Day
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Competition Day
        </h2>
        <p>
          For the in-person competition, we combined <strong>Extended Kalman Filter (EKF)</strong>
          sensor fusion with <strong>2D SLAM</strong>. The EKF filtered out high-frequency noise from
          the GPS and IMU, while SLAM built and updated a local map in real-time. Together, these
          approaches provided a steady data pipeline to the MPC, allowing for timely and accurate
          control decisions.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-accent">
          Extended Kalman Filter
        </h3>
        <p>
          The EKF is well-suited for scenarios where sensor noise can lead to erratic positions. By
          considering both the vehicle's motion model and incoming sensor measurements, the EKF
          yields near-optimal estimates of location and heading.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-accent">
          2D SLAM
        </h3>
        <p>
          Simultaneous Localization and Mapping was an extra layer of resilience. Even if GPS signals
          dropped or were inaccurate, SLAM’s local map helped the car detect surrounding features
          (like walls, cones, or track lines) and maintain correct positioning.
        </p>
        <p>https://www.youtube.com/watch?v=o0-3zftgWnk

          arabic</p>
        <p>https://www.youtube.com/watch?v=-tONgLDEYWs

          armenia</p>
        <p>https://www.youtube.com/watch?v=zTrfNIsmELQ

          seoul</p>
        <p>https://www.youtube.com/watch?v=vJaUwUCT1uM

          india IIT</p>
        <p>https://www.youtube.com/watch?v=bPNnDlAGEbQ

          bejing</p>
        <p>https://www.youtube.com/watch?v=WCiZdiXEYGc

          university uncarnate word</p>
      </div>

      {/*
        ==================================
        Reflection
        ==================================
      */}
      <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Reflection
        </h2>
        <p>
          Throughout this journey, I gained hands-on expertise in applying control theory, robotics,
          and sensor fusion to a tangible problem. Achieving a top-ten finish among primarily
          graduate-level teams was a testament to our robust design, persistent testing, and
          effective use of advanced control methods like MPC. This foundation sets the stage for
          future enhancements and underscores the real-world impact of methodical, well-structured
          autonomous driving research.
        </p>
      </div>
    </div>
  )
}

export default Acc2024
